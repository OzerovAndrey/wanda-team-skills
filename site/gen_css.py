import json,re
PX={'spacing','sizing','borderRadius','borderWidth','fontSizes','number'}
def fixrgba(s):
    def f(m):
        h=m.group(1).lstrip('#'); a=m.group(2)
        return 'rgba(%d,%d,%d,%s)'%(int(h[0:2],16),int(h[2:4],16),int(h[4:6],16),a)
    return re.sub(r'rgba\(\s*(#[0-9a-fA-F]{6})\s*,\s*([\d.]+)\s*\)',f,s)
def shadow(v):
    items=v if isinstance(v,list) else [v]
    out=[]
    for i in items:
        if not isinstance(i,dict): continue
        ins='inset ' if i.get('type')=='innerShadow' else ''
        out.append(f"{ins}{i.get('x',0)}px {i.get('y',0)}px {i.get('blur',0)}px {i.get('spread',0)}px {fixrgba(str(i.get('color')))}")
    return ', '.join(out) or 'none'
def name(p): return '--'+re.sub(r'[^a-zA-Z0-9_-]','-',p.replace('.','-'))
def val(t,v):
    if t=='boxShadow': return shadow(v)
    if t=='typography': return None
    if isinstance(v,(dict,list)): return None
    v=str(v).strip()
    if t in PX and re.fullmatch(r'-?\d+(\.\d+)?',v): return v+'px'
    if t=='color': return fixrgba(v)
    if t=='letterSpacing' and v.endswith('%'): return str(float(v[:-1])/100)+'em'
    if t=='fontFamilies': return f"'{v}'"
    if t in ('other',) and re.fullmatch(r'-?\d+(\.\d+)?',v): return v+'px'
    return v
out=[]
cat=[]
D=json.load(open('dark_resolved.json')); L=json.load(open('light_resolved.json'))
for theme,R,sel in (('dark',D,":root,[data-theme=dark]"),('light',L,"[data-theme=light]")):
    lines=[]
    for p,o in R.items():
        v=val(o['t'],o['v'])
        if v is None or '{' in v: continue
        if theme=='light' and D.get(p,{}).get('v')==o['v']: continue  # only diffs
        lines.append(f"{name(p)}:{v};")
    out.append(sel+"{"+"".join(lines)+"}")
open('tokens.css','w').write("\n".join(out))
# catalog for token explorer
for p,o in D.items():
    dv=val(o['t'],o['v']); lv=val(L[p]['t'],L[p]['v']) if p in L else None
    if dv is None: continue
    cat.append([p,o['t'],dv,lv if lv!=dv else ''])
json.dump(cat,open('catalog.json','w'),separators=(',',':'))
import os;print(os.path.getsize('tokens.css'),os.path.getsize('catalog.json'))
