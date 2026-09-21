import json,re,os
B=os.path.dirname(os.path.abspath(__file__));S=B+'/src'
tokens=open(B+'/tokens.css').read()
base=open(S+'/base.css').read()
cat=json.load(open(B+'/catalog.json'))
mods=['engine.js','c1-actions.js','c2-forms.js','c3-data.js','c4-data2.js','c5-nav.js','c6-feedback.js','c7-gaming.js','c8-cards.js','c9-layout.js']
js='\n'.join(open(S+'/'+m).read() for m in mods)
boot=r'''
const CATALOG=__CAT__;const TOKCOUNT=CATALOG.length.toLocaleString('en');
(function(){const st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);
 let t='dark';try{t=localStorage.getItem('wds-theme')||'dark'}catch(e){}setTheme(t);
 $('#year').textContent=new Date().getFullYear();wire();route();})();
'''.replace('__CAT__',json.dumps(cat,separators=(',',':')))
html=f'''<!doctype html>
<html lang="en" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Wanda Design System — Components</title>
<meta name="description" content="Live, interactive documentation of every Wanda Design System component.">
<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎰</text></svg>">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bungee&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
<style>
{tokens}
{base}
:root,[data-theme=dark],[data-theme=light]{{--fontFamilyMain:'Open Sans',system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;--fontFamilyTitle:'Bungee','Arial Black',Impact,system-ui,sans-serif}}
:root{{box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}}
html{{scroll-padding-top:calc(env(safe-area-inset-top,0px) + 120px)}}
.foot{{padding:24px 40px;color:var(--tt-tertiary);font-size:12px;border-top:1px solid var(--br-secondary)}}
</style>
</head>
<body>
<header class="top">
 <button id="burger" class="w-btn v-text sz-md icon-only is-default" aria-label="Open component index"><svg class="ic" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
 <a class="brand" href="#/"><span class="brand-m">W</span><span><b>Wanda DS</b><br><small>Component library · v2.02</small></span></a>
 <label class="srch"><svg class="ic" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/></svg><input id="q" type="search" placeholder="Search components" aria-label="Search components" autocomplete="off"><kbd>/</kbd></label>
 <div class="theme" role="group" aria-label="Theme"><button data-theme-btn="dark" aria-label="Dark theme" title="Dark"><svg class="ic" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg></button><button data-theme-btn="light" aria-label="Light theme" title="Light"><svg class="ic" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2"/></svg></button></div>
</header>
<nav class="tabs" id="tabs" aria-label="Component groups"></nav>
<div class="shell">
 <aside class="side" aria-label="Components A–Z"><div id="index"></div></aside>
 <div><main id="main" tabindex="-1"></main><div class="foot">Wanda iGaming · Design System documentation · Built from Token Studio tokens (dark + light) · © <span id="year"></span></div></div>
</div>
<div id="toast" role="status" aria-live="polite"></div>
<script>
{js}
{boot}
</script>
</body>
</html>'''
OUT=os.environ.get('OUT',B)
open(os.path.join(OUT,'index.html'),'w').write(html)
print(len(html)//1024,'KB')
