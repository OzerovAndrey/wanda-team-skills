import json, re, os, colorsys
import os
SRC=os.environ.get('TOKENS_SRC','../wanda-design-system/references/tokens/source')
import sys
LIGHT=['light/core','light/map','light/alias','light/styles','light/component/general','light/component/product','light/component/widget','light/component/betting']
STACK=LIGHT+(['dark/core','dark/alias','dark/component/general','dark/component/product','dark/component/widget','dark/component/betting'] if sys.argv[1]=='dark' else [])
def flatten(o,p=''):
    out={}
    if isinstance(o,dict) and 'value' in o and 'type' in o: out[p]=o; return out
    if isinstance(o,dict):
        for k,v in o.items():
            if k.startswith('$'): continue
            out.update(flatten(v,f'{p}.{k}' if p else k))
    return out
M={}
for s in STACK: M.update(flatten(json.load(open(f'{SRC}/{s}.json'))))
REF=re.compile(r'\{([^{}]+)\}')
def hex2rgba(h):
    h=h.strip().lstrip('#')
    if len(h)==3: h=''.join(c*2 for c in h)
    if len(h)==6: h+='ff'
    return [int(h[i:i+2],16)/255 for i in (0,2,4,6)]
def rgba2css(c):
    r,g,b,a=c
    if a>=0.999: return '#%02x%02x%02x'%(round(r*255),round(g*255),round(b*255))
    return 'rgba(%d,%d,%d,%.3g)'%(round(r*255),round(g*255),round(b*255),a)
def parsecolor(s):
    s=s.strip()
    if s.startswith('#'): return hex2rgba(s)
    m=re.match(r'rgba?\(([^)]*)\)',s)
    if m:
        p=[x.strip() for x in m.group(1).split(',')]
        if len(p)==2 and p[0].startswith('#'):  # rgba(#hex, a)
            c=hex2rgba(p[0]); c[3]=float(p[1]); return c
        v=[float(x.rstrip('%')) for x in p]
        return [v[0]/255,v[1]/255,v[2]/255,(v[3] if len(v)>3 else 1)]
    if s=='transparent': return [0,0,0,0]
    return None
def modify(c,mod):
    t=mod.get('type'); amt=float(resolve(str(mod.get('value')))) 
    r,g,b,a=c
    h,l,s=colorsys.rgb_to_hls(r,g,b)
    if t=='darken': l=l-l*amt
    elif t=='lighten': l=l+(1-l)*amt
    elif t=='alpha': a=amt; return [r,g,b,a]
    elif t=='mix':
        o=parsecolor(resolve(mod['color']))
        return [r+(o[0]-r)*amt,g+(o[1]-g)*amt,b+(o[2]-b)*amt,a+(o[3]-a)*amt]
    r,g,b=colorsys.hls_to_rgb(h,l,s); return [r,g,b,a]
cache={}
def resolve(v,depth=0):
    if not isinstance(v,str): return v
    def sub(m):
        return str(tok(m.group(1),depth+1))
    for _ in range(20):
        n=REF.sub(sub,v)
        if n==v: break
        v=n
    # math
    if re.fullmatch(r'[\d\.\s\+\-\*/\(\)px]+',v) and re.search(r'[\+\*/]|\d\s-\s\d',v):
        try: 
            r=eval(v.replace('px',''))
            v=str(int(r)) if float(r).is_integer() else str(round(r,3))
        except: pass
    return v
def tok(path,depth=0):
    if path in cache: return cache[path]
    if path not in M or depth>40: return '{'+path+'}'
    t=M[path]; val=t['value']
    if isinstance(val,str):
        out=resolve(val,depth)
        mod=t.get('$extensions',{}).get('studio.tokens',{}).get('modify')
        if t['type']=='color':
            c=parsecolor(out)
            if c is not None:
                if mod: c=modify(c,mod)
                out=rgba2css(c)
    elif isinstance(val,(dict,list)):
        out=json.loads(json.dumps(val))
        def walk(x):
            if isinstance(x,dict): return {k:walk(y) for k,y in x.items()}
            if isinstance(x,list): return [walk(y) for y in x]
            if isinstance(x,str):
                r=resolve(x,depth)
                c=parsecolor(r) if (r.startswith('#') or r.startswith('rgba')) else None
                return rgba2css(c) if c else r
            return x
        out=walk(out)
    else: out=val
    cache[path]=out; return out
R={p:tok(p) for p in M}
R2={p:{'v':R[p],'t':M[p]['type']} for p in M}
json.dump(R2,open(sys.argv[1]+'_resolved.json','w'),indent=0,ensure_ascii=False)
print(len(R))
