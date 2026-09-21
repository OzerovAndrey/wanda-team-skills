/* ===== i18n: EN (source) / UK dictionary keyed by the English string ===== */
let LANG='en';const UK=__UK__;
function t(s){return LANG=='uk'&&UK[s]||s}
function applyStatic(){
 $$('[data-i18n]').forEach(e=>{e.textContent=t(e.dataset.i18n)});
 $$('[data-i18n-attr]').forEach(e=>e.dataset.i18nAttr.split(',').forEach(p=>{const [a,k]=p.split(':');e.setAttribute(a,t(k))}));
 document.title=t('Wanda Design System — Components');
 const m=$('meta[name=description]');m&&m.setAttribute('content',t('Live, interactive documentation of every Wanda Design System component.'));
 $$('[data-lang-btn]').forEach(b=>{const on=b.dataset.langBtn==LANG;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on)})}
function setLang(l,redraw=true){LANG=l=='uk'?'uk':'en';try{localStorage.setItem('wds-lang',LANG)}catch(e){}
 document.documentElement.lang=LANG;applyStatic();if(redraw){const y=window.scrollY;route(true);window.scrollTo({top:y})}}
function initLang(){let l=null;try{l=localStorage.getItem('wds-lang')}catch(e){}
 if(!l)l=/^uk\b/i.test(navigator.language||'')?'uk':'en';LANG=l;document.documentElement.lang=LANG;applyStatic()}
