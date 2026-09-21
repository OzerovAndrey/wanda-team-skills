/* ===== Wanda DS Docs — engine ===== */
const REG=[],BY={};let CSS='';
function reg(d){d.props=d.props||[];REG.push(d);BY[d.id]=d;return d}
const GROUPS=[
 {id:'foundations',name:'Foundations',desc:'Colors, type, effects, gradients, layout grid and the full token catalog.'},
 {id:'actions',name:'Actions',desc:'Everything a user clicks to make something happen.'},
 {id:'forms',name:'Forms',desc:'Inputs and selection controls for collecting data.'},
 {id:'navigation',name:'Navigation',desc:'Moving between pages, sections and steps.'},
 {id:'data',name:'Data display',desc:'Labels, counters, lists, tables and media.'},
 {id:'feedback',name:'Feedback',desc:'System messages, loading and empty states.'},
 {id:'overlays',name:'Overlays',desc:'Layers that appear on top of the page.'},
 {id:'gaming',name:'Gaming & promo',desc:'Casino mechanics, promo widgets and trust badges.'},
 {id:'cards',name:'Cards',desc:'The Card family — 20 promo and content card types.'},
 {id:'layout',name:'Layout & organisms',desc:'Page-level building blocks assembled from other components.'},
 {id:'service',name:'Service',desc:'Figma service frames. Not shipped to product UI.'}];
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const slug=s=>String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const cls=(...a)=>a.filter(Boolean).join(' ');
const st=p=>'is-'+slug(p.state||'default');
const range=n=>[...Array(n).keys()];
/* ---- icons (24 grid, stroke) ---- */
const IP={
 'chevron-down':'<path d="M6 9l6 6 6-6"/>','chevron-up':'<path d="M6 15l6-6 6 6"/>','chevron-left':'<path d="M15 6l-6 6 6 6"/>','chevron-right':'<path d="M9 6l6 6-6 6"/>',
 close:'<path d="M6 6l12 12M18 6L6 18"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
 search:'<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.01"/>',
 star:'<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8 6.8 19.6l1-5.8-4.3-4.1 5.9-.8z" fill="currentColor"/>',
 bell:'<path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5h4"/>',wallet:'<rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M16 12.5h2.5M3 9h15"/>',
 'arrow-right':'<path d="M5 12h14M13 6l6 6-6 6"/>','arrow-left':'<path d="M19 12H5M11 6l-6 6 6 6"/>',lock:'<rect x="5" y="10.5" width="14" height="9.5" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
 gift:'<rect x="3.5" y="8" width="17" height="4" rx="1"/><path d="M5 12v8h14v-8M12 8v12M12 8S10.5 3.5 8 4.5 9.5 8 12 8zm0 0s1.5-4.5 4-3.5S14.5 8 12 8z"/>',
 user:'<circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c1.3-3.6 4.2-5.3 7.5-5.3s6.2 1.7 7.5 5.3"/>',calendar:'<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
 trophy:'<path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4v1.5A3.5 3.5 0 0 0 7.5 11M17 6h3v1.5a3.5 3.5 0 0 1-3.5 3.5M12 14v3.5M8 20.5h8M9.5 17.5h5"/>',
 play:'<path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',home:'<path d="M4 11l8-6.5 8 6.5V20h-5.5v-5h-5v5H4z"/>',
 settings:'<circle cx="12" cy="12" r="3"/><path d="M12 2.8v2.4M12 18.8v2.4M4.2 7.5l2 1.2M17.8 15.3l2 1.2M4.2 16.5l2-1.2M17.8 8.7l2-1.2"/>',
 filter:'<path d="M4 6h16l-6 7v5l-4 2v-7z"/>',sort:'<path d="M8 4v16M4.5 7.5L8 4l3.5 3.5M16 20V4M12.5 16.5L16 20l3.5-3.5"/>',
 heart:'<path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"/>',fire:'<path d="M12 21c3.9 0 6.5-2.6 6.5-6.2 0-3.9-3.2-6.3-4.5-10.3-2.6 1.7-3.4 4.5-3.2 6.4-1.3-.9-1.9-2.3-2-3.4C7 9.1 5.5 11.4 5.5 14.8 5.5 18.4 8.1 21 12 21z"/>',
 coin:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v9M14.5 9.2c-.5-.8-1.4-1.2-2.5-1.2-1.4 0-2.5.8-2.5 2s1.1 1.7 2.5 2 2.5.8 2.5 2-1.1 2-2.5 2c-1.1 0-2-.4-2.5-1.2"/>',
 dice:'<rect x="4" y="4" width="16" height="16" rx="3.5"/><circle cx="9" cy="9" r="1" fill="currentColor"/><circle cx="15" cy="15" r="1" fill="currentColor"/><circle cx="15" cy="9" r="1" fill="currentColor"/><circle cx="9" cy="15" r="1" fill="currentColor"/>',
 ticket:'<path d="M3.5 8.5V6h17v2.5a2.5 2.5 0 0 0 0 5V16h-17v-2.5a2.5 2.5 0 0 0 0-5zM14 6v10"/>',chat:'<path d="M4.5 5.5h15v10h-8.5L6.5 19v-3.5h-2z"/>',
 send:'<path d="M20.5 3.5L3.5 11l6.5 2.5 2.5 6.5z"/><path d="M10 13.5l4.5-4.5"/>',sparkle:'<path d="M12 3l1.9 5.6L19.5 10.5l-5.6 1.9L12 18l-1.9-5.6L4.5 10.5l5.6-1.9z"/>',
 eye:'<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H8"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
 moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',grid:'<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
 'alert-triangle':'<path d="M12 4l9 16H3z"/><path d="M12 10v4.5M12 17.2v.01"/>','alert-circle':'<circle cx="12" cy="12" r="9"/><path d="M12 7.5v5.5M12 16.2v.01"/>',
 'check-circle':'<circle cx="12" cy="12" r="9"/><path d="M8 12.3l2.8 2.7L16 9.5"/>',bulb:'<path d="M9 17.5h6M10 21h4M8.5 14.5a6 6 0 1 1 7 0c-.6.5-1 1.3-1 2V17.5h-5v-1c0-.7-.4-1.5-1-2z"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',hammer:'<path d="M13.5 5.5l5 5-2.5 2.5-5-5z"/><path d="M11 8L4 15l2.5 2.5 7-7M16 3l5 5"/>',
 smile:'<circle cx="12" cy="12" r="9"/><path d="M8.5 14c.8 1.4 2 2 3.5 2s2.7-.6 3.5-2M9 9.5v.01M15 9.5v.01"/>',more:'<circle cx="5.5" cy="12" r="1.3" fill="currentColor"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/><circle cx="18.5" cy="12" r="1.3" fill="currentColor"/>',
 casino:'<rect x="3.5" y="5" width="17" height="14" rx="3"/><path d="M8 9v6M12 9v6M16 9v6"/>',live:'<circle cx="12" cy="12" r="2.5" fill="currentColor"/><path d="M7.5 7.5a6.5 6.5 0 0 0 0 9M16.5 7.5a6.5 6.5 0 0 1 0 9M4.7 4.7a10.5 10.5 0 0 0 0 14.6M19.3 4.7a10.5 10.5 0 0 1 0 14.6"/>',
 promo:'<path d="M4 13.5V10l12-5.5v15L4 13.5zM16 9.5a3 3 0 0 1 0 5M7 14.5l1.5 5h3l-1.3-4.3"/>',logout:'<path d="M14 4.5H6.5v15H14M10 12h10M17 8.5l3.5 3.5-3.5 3.5"/>',
 doc:'<path d="M6 3.5h8l4 4v13H6z"/><path d="M14 3.5v4h4M9 12.5h6M9 16h6"/>',image:'<rect x="3.5" y="5" width="17" height="14" rx="2.5"/><circle cx="9" cy="10" r="1.8"/><path d="M4 17l5-4.5 3.5 3 3-2.5L20 17"/>',
 crown:'<path d="M4 8l4 4 4-7 4 7 4-4-1.5 10h-13z"/>',flash:'<path d="M13 3L5 13.5h6L10 21l8-10.5h-6z"/>',target:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
 link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3A4 4 0 0 0 13 5.3l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',upload:'<path d="M12 16V4M7 9l5-5 5 5M4.5 15.5V20h15v-4.5"/>',
 react:'<circle cx="12" cy="12" r="9"/><path d="M8.5 14c.8 1.4 2 2 3.5 2s2.7-.6 3.5-2M9 9.5v.01M15 9.5v.01M17 3v4M15 5h4"/>',
 'star-o':'<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8 6.8 19.6l1-5.8-4.3-4.1 5.9-.8z"/>',
 'star-h':'<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8 6.8 19.6l1-5.8-4.3-4.1 5.9-.8z"/><path d="M12 3.5v13.3L6.8 19.6l1-5.8-4.3-4.1 5.9-.8z" fill="currentColor"/>'};
function I(n,s=20,x=''){return `<svg class="ic ${x}" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IP[n]||IP.sparkle}</svg>`}
/* placeholder image (DS "tiled texture") */
const PH=(w,h,x='')=>`<div class="w-ph ${x}" style="${w?`width:${w}${typeof w=='number'?'px':''};`:''}${h?`height:${h}${typeof h=='number'?'px':''};`:''}">${I('image',24)}</div>`;
/* ---- state ---- */
const STATE={};
function defaults(d){const o={};d.props.forEach(p=>o[p.n]=p.d!==undefined?p.d:(p.t=='bool'?false:p.t=='enum'?p.o[0]:''));return o}
function S(id){return STATE[id]||(STATE[id]=defaults(BY[id]))}
let CUR=null;
/* ---- theme ---- */
function setTheme(t){document.documentElement.dataset.theme=t;try{localStorage.setItem('wds-theme',t)}catch(e){};$$('[data-theme-btn]').forEach(b=>b.classList.toggle('on',b.dataset.themeBtn==t));if(CUR&&BY[CUR]&&$('#tok-list'))drawTokens(BY[CUR])}
/* ---- nav ---- */
let GROUP='all',QUERY='';
function inGroup(d){return GROUP=='all'||d.group==GROUP}
function drawTabs(){const t=$('#tabs');t.innerHTML=[{id:'all',name:'All A–Z'},...GROUPS].map(g=>`<button class="tab ${GROUP==g.id?'on':''}" data-group="${g.id}"><span>${g.name}</span><em>${g.id=='all'?REG.length:REG.filter(d=>d.group==g.id).length}</em></button>`).join('')}
function drawIndex(){const q=QUERY.trim().toLowerCase();const list=REG.filter(d=>inGroup(d)&&(!q||(d.name+' '+d.desc+' '+(d.alias||'')).toLowerCase().includes(q))).sort((a,b)=>a.name.localeCompare(b.name));
 let html='',L='';list.forEach(d=>{const l=d.name[0].toUpperCase();if(l!=L){L=l;html+=`<div class="ix-l">${l}</div>`}html+=`<a class="ix-i ${CUR==d.id?'on':''}" href="#/${d.id}">${esc(d.name)}${d.badge?`<i>${d.badge}</i>`:''}</a>`});
 $('#index').innerHTML=html||`<p class="ix-empty">No components match “${esc(QUERY)}”. Try another name.</p>`}
function route(){TICKS.forEach(clearInterval);PTICKS.forEach(clearInterval);TICKS=[];PTICKS=[];const h=location.hash.replace(/^#\/?/,'');const [a,b]=h.split('/');
 if(!a){CUR=null;drawHome()}else if(a=='g'&&b){GROUP=b;CUR=null;drawGroup(b)}else if(BY[a]){CUR=a;GROUP=GROUP=='all'||BY[a].group==GROUP?GROUP:BY[a].group;drawDoc(BY[a])}else{CUR=null;drawHome()}
 drawTabs();drawIndex();window.scrollTo({top:0});$('#main').focus({preventScroll:true});document.body.classList.remove('nav-open')}
/* ---- pages ---- */
function card(d){return `<a class="cc" href="#/${d.id}"><b>${esc(d.name)}</b><span>${esc(d.desc)}</span><small>${GROUPS.find(g=>g.id==d.group).name}${d.figma?` — node ${d.figma}`:''}</small></a>`}
function drawHome(){const byG=GROUPS.map(g=>{const l=REG.filter(d=>d.group==g.id).sort((a,b)=>a.name.localeCompare(b.name));return `<section class="hg"><div class="hg-h"><h2 class="t3"><a href="#/g/${g.id}">${g.name}</a></h2><p>${g.desc}</p></div><div class="cc-grid">${l.map(card).join('')}</div></section>`}).join('');
 $('#main').innerHTML=`<section class="hero"><div class="hero-t"><h1 class="d3">Wanda<br>Design System</h1><p class="lead">Every Wanda component in one place, live. Click, type and toggle — each preview is built from the same tokens as the product. Pick a component on the left or browse by group.</p><div class="hero-meta"><span>${REG.filter(d=>d.group!='foundations'&&d.group!='service').length} components</span><span>${TOKCOUNT} tokens</span><span>Light + Dark themes</span><span>Figma library v2.02</span></div></div><div class="hero-live" id="hero-live"></div></section>${byG}`;
 heroLive()}
function drawGroup(gid){const g=GROUPS.find(x=>x.id==gid);if(!g){drawHome();return}const l=REG.filter(d=>d.group==gid).sort((a,b)=>a.name.localeCompare(b.name));
 $('#main').innerHTML=`<header class="ph"><div class="crumbs"><a href="#/">Overview</a><span>/</span>${g.name}</div><h1 class="t1">${g.name}</h1><p class="lead">${g.desc}</p></header><div class="cc-grid">${l.map(card).join('')}</div>`}
function drawDoc(d){const p=S(d.id);const g=GROUPS.find(x=>x.id==d.group);
 const hasCtl=d.props.some(x=>x.ctl!==false&&x.t!='slot');
 $('#main').innerHTML=`<header class="ph"><div class="crumbs"><a href="#/">Overview</a><span>/</span><a href="#/g/${g.id}">${g.name}</a><span>/</span>${esc(d.name)}</div>
 <div class="ph-row"><h1 class="t1">${esc(d.name)}</h1>${d.figma?`<button class="node" data-copy="${d.figma}" title="Copy Figma node id">${I('copy',14)}Figma ${d.figma}</button>`:''}</div><p class="lead">${d.desc}</p></header>
 ${d.render?`<section class="pg ${hasCtl?'':'no-ctl'}"><div class="stage-wrap"><div class="stage ${d.stage||''}" id="stage"></div><div class="snip"><code id="snip"></code><button class="snip-c" data-copy-snip title="Copy">${I('copy',14)}</button></div></div>${hasCtl?`<aside class="ctl"><div class="ctl-h"><b>Properties</b><button class="reset" id="reset">Reset</button></div><div id="ctl"></div></aside>`:''}</section>`:''}
 ${d.gallery?`<section class="blk"><h2 class="t4">Variants</h2><div class="gal ${d.galCls||''}">${d.gallery()}</div></section>`:''}
 ${d.extra?d.extra():''}
 ${d.props.length?`<section class="blk"><h2 class="t4">Properties</h2><div class="tbl-w"><table class="ptbl"><thead><tr><th>Property</th><th>Values</th><th>Default</th><th>Description</th></tr></thead><tbody>${d.props.map(x=>`<tr><td><code>${x.n}</code></td><td>${x.t=='enum'?x.o.map(o=>`<span class="pv">${esc(o)}</span>`).join(''):x.t=='range'?`<span class="pv">${x.min}–${x.max}</span>`:`<span class="pv">${x.t=='bool'?'boolean':x.t=='slot'?'slot':'string'}</span>`}</td><td>${x.d===undefined||x.d===''?'—':`<code>${esc(String(x.d))}</code>`}</td><td>${x.desc||''}</td></tr>`).join('')}</tbody></table></div></section>`:''}
 ${d.notes?`<section class="blk"><h2 class="t4">Usage notes</h2><ul class="notes">${d.notes.map(n=>`<li>${n}</li>`).join('')}</ul></section>`:''}
 ${d.tokens?`<section class="blk"><div class="blk-h"><h2 class="t4">Tokens</h2><span class="hint">Resolved for the current theme. Click to copy the CSS variable.</span></div><div class="toks" id="tok-list"></div></section>`:''}
 ${d.uses?`<section class="blk"><h2 class="t4">Built with</h2><div class="uses">${d.uses.map(u=>BY[u]?`<a class="chiplink" href="#/${u}">${BY[u].name}</a>`:'').join('')}</div></section>`:''}`;
 if(d.render){drawStage();drawCtl()}if(d.tokens)drawTokens(d);if(d.after)d.after($('#main'));if(typeof liveTimers=='function'){$$('.gal,.blk .stage',$('#main')).forEach(g=>g.querySelector('[data-end]')&&liveTimers(g,true))}
 const r=$('#reset');r&&r.addEventListener('click',()=>{STATE[d.id]=defaults(d);drawStage();drawCtl()})}
function snippet(d,p){const parts=d.props.filter(x=>x.t!='slot'&&x.ctl!==false&&(!x.when||x.when(p))).map(x=>`${x.n}: ${x.t=='text'||x.t=='enum'?JSON.stringify(p[x.n]):p[x.n]}`);return `${d.sig||d.name.replace(/[^A-Za-z]/g,'')}({ ${parts.join(', ')} })`}
let TICKS=[],PTICKS=[];function tick(fn,ms=1000,pg){fn();(pg?PTICKS:TICKS).push(setInterval(fn,ms))}
function drawStage(){TICKS.forEach(clearInterval);TICKS=[];const d=BY[CUR],p=S(CUR),s=$('#stage');if(!s)return;s.innerHTML=d.render(p);d.mount&&d.mount(s,p,set);if(typeof liveTimers=='function'&&s.querySelector('[data-end]'))liveTimers(s);$('#snip').textContent=snippet(d,p)}
function set(patch,o={}){if(!CUR)return;Object.assign(S(CUR),patch);if(!o.silent)drawStage();else $('#snip')&&($('#snip').textContent=snippet(BY[CUR],S(CUR)));drawCtl()}
function drawCtl(){const d=BY[CUR],p=S(CUR),c=$('#ctl');if(!c)return;const act=document.activeElement,keep=act&&act.dataset&&act.dataset.ctlText;
 c.innerHTML=d.props.filter(x=>x.t!='slot'&&x.ctl!==false&&(!x.when||x.when(p))).map(x=>{const id='c-'+x.n;
  if(x.t=='bool')return `<label class="c-row c-bool"><span class="c-n">${x.n}</span><button type="button" role="switch" aria-checked="${!!p[x.n]}" class="w-sw sm ${p[x.n]?'checked':''}" data-ctl-bool="${x.n}"><span class="w-sw-tr"><span class="w-sw-ind"></span></span></button></label>`;
  if(x.t=='enum'){if(x.o.length<=4&&x.o.join('').length<=26)return `<div class="c-row"><span class="c-n">${x.n}</span><div class="c-seg">${x.o.map(o=>`<button type="button" class="${p[x.n]==o?'on':''}" data-ctl-enum="${x.n}" data-v="${esc(o)}">${esc(o)}</button>`).join('')}</div></div>`;
   return `<div class="c-row"><label class="c-n" for="${id}">${x.n}</label><div class="c-sel"><select id="${id}" data-ctl-sel="${x.n}">${x.o.map(o=>`<option ${p[x.n]==o?'selected':''}>${esc(o)}</option>`).join('')}</select>${I('chevron-down',16)}</div></div>`}
  if(x.t=='range')return `<div class="c-row"><label class="c-n" for="${id}">${x.n}<em>${p[x.n]}</em></label><input class="c-rng" id="${id}" type="range" min="${x.min}" max="${x.max}" step="${x.step||1}" value="${p[x.n]}" data-ctl-rng="${x.n}"></div>`;
  return `<div class="c-row"><label class="c-n" for="${id}">${x.n}</label><input class="c-txt" id="${id}" value="${esc(p[x.n])}" data-ctl-text="${x.n}"></div>`}).join('');
 if(keep){const el=c.querySelector(`[data-ctl-text="${keep}"]`);if(el){el.focus();el.setSelectionRange(el.value.length,el.value.length)}}}
function tokVal(name){return getComputedStyle(document.documentElement).getPropertyValue('--'+name.replace(/\./g,'-')).trim()}
function expandTok(pat){if(!pat.includes('*'))return [pat];const re=new RegExp('^'+pat.replace(/\./g,'\\.').replace(/\*/g,'[^.]+(?:\\.[^.]+)*')+'$');return CATALOG.filter(t=>re.test(t[0])).map(t=>t[0])}
function swatch(v){return /^(#|rgba?\(|linear-gradient)/.test(v)?`<i class="sw" style="background:${v}"></i>`:''}
function drawTokens(d){const box=$('#tok-list');if(!box)return;const names=[...new Set(d.tokens.flatMap(expandTok))];
 box.innerHTML=names.map(n=>{const v=tokVal(n);return `<button class="tok" data-copy="var(--${n.replace(/\./g,'-')})" title="${esc(v)}">${swatch(v)}<code>${n}</code><span>${esc(v.length>38?v.slice(0,36)+'…':v)}</span></button>`}).join('')||'<p class="hint">No dedicated tokens.</p>'}
/* ---- copy + toast ---- */
function toast(m){let t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),1600)}
function copy(s){(navigator.clipboard?navigator.clipboard.writeText(s):Promise.reject()).then(()=>toast('Copied: '+s),()=>{const a=document.createElement('textarea');a.value=s;document.body.appendChild(a);a.select();try{document.execCommand('copy');toast('Copied: '+s)}catch(e){}a.remove()})}
/* ---- events ---- */
function wire(){
 document.addEventListener('click',e=>{const t=e.target.closest('[data-group],[data-ctl-bool],[data-ctl-enum],[data-copy],[data-copy-snip],[data-theme-btn],[data-toggle],[data-set],[data-cycle],#burger');if(!t)return;
  if(t.id=='burger'){document.body.classList.toggle('nav-open');return}
  if(t.dataset.group){GROUP=t.dataset.group;QUERY='';$('#q').value='';location.hash=GROUP=='all'?'#/':'#/g/'+GROUP;return}
  if(t.dataset.ctlBool){const n=t.dataset.ctlBool;set({[n]:!S(CUR)[n]});return}
  if(t.dataset.ctlEnum){set({[t.dataset.ctlEnum]:t.dataset.v});return}
  if(t.dataset.copy){copy(t.dataset.copy);return}
  if(t.hasAttribute('data-copy-snip')){copy($('#snip').textContent);return}
  if(t.dataset.themeBtn){setTheme(t.dataset.themeBtn);return}
  const stg=t.closest('#stage,#hero-live');if(!stg)return;
  if(t.closest('.is-disabled,[aria-disabled="true"]'))return;
  const tgt=stg.id=='stage'?set:heroSet;
  if(t.dataset.toggle){const n=t.dataset.toggle;tgt({[n]:!(stg.id=='stage'?S(CUR):HERO)[n]});return}
  if(t.dataset.set){const i=t.dataset.set.indexOf('=');let v=t.dataset.set.slice(i+1);v=v=='true'?true:v=='false'?false:(/^-?\d+$/.test(v)?+v:v);tgt({[t.dataset.set.slice(0,i)]:v});return}
  if(t.dataset.cycle){const [n,...opts]=t.dataset.cycle.split('|');const cur=(stg.id=='stage'?S(CUR):HERO)[n];tgt({[n]:opts[(opts.indexOf(String(cur))+1)%opts.length]});return}});
 document.addEventListener('change',e=>{const t=e.target;if(t.dataset.ctlSel)set({[t.dataset.ctlSel]:t.value})});
 document.addEventListener('input',e=>{const t=e.target;
  if(t.dataset.ctlText){set({[t.dataset.ctlText]:t.value});return}
  if(t.dataset.ctlRng){set({[t.dataset.ctlRng]:+t.value});return}
  if(t.id=='q'){QUERY=t.value;drawIndex();return}
  if(t.dataset.bind&&t.closest('#stage')){const n=t.dataset.bind;S(CUR)[n]=t.value;const f=t.closest('[data-field]');f&&f.classList.toggle('filled',!!t.value);const cnt=f&&f.querySelector('[data-count]');cnt&&(cnt.textContent=t.value.length+'/'+cnt.dataset.count);$('#snip').textContent=snippet(BY[CUR],S(CUR));const ci=$(`[data-ctl-text="${n}"]`);ci&&(ci.value=t.value)}});
 document.addEventListener('keydown',e=>{if(e.key=='/'&&document.activeElement.tagName!='INPUT'&&document.activeElement.tagName!='TEXTAREA'){e.preventDefault();$('#q').focus()}if(e.key=='Escape'&&CUR&&BY[CUR].esc){BY[CUR].esc()}});
 window.addEventListener('hashchange',route)}
/* ---- hero live strip ---- */
let HERO={sw:true,chip:1,seg:'Casino',fav:false,cnt:3,cb:true};
function heroSet(p){Object.assign(HERO,p);heroLive()}
function heroLive(){const h=$('#hero-live');if(!h)return;const H=HERO;
 h.innerHTML=`<div class="hl-row">${BTN({variant:'Primary',size:'md',label:'Deposit',icon:'wallet'})}${BTN({variant:'Accent',size:'md',label:'Sign up'})}${BTN({variant:'Secondary',size:'md',label:'Details'})}</div>
 <div class="hl-row">${SEG(['Casino','Live','Sport'],H.seg,'sm','seg')}${SW({checked:H.sw,label:'Notifications',toggle:'sw'})}</div>
 <div class="hl-row">${['Slots','Table games','Jackpots'].map((l,i)=>CHIP({label:l,checked:H.chip==i,set:'chip='+i,icon:['dice','casino','crown'][i]})).join('')}</div>
 <div class="hl-row">${TAG({variant:'Accent 1',size:'sm',label:'Top'})}${TAG({variant:'Success',size:'sm',label:'New'})}${TAG({variant:'Warning',size:'sm',label:'Popular'})}${TAG({variant:'Alt 1',size:'sm',label:'Jackpot'})}<span class="hl-b" data-cycle="cnt|3|12|99|0">${BTN({variant:'Neutral',size:'md',icon:'bell',iconOnly:true})}${H.cnt?`<span class="hl-bdg">${BADGE_C({variant:'Important',size:'sm',label:String(H.cnt)})}</span>`:''}</span>${CB({checked:H.cb,label:'Remember me',toggle:'cb'})}</div>`}
