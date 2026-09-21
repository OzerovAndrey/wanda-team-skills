/* ===== Actions: Btn, Toggle Button, Link, ActionBar, Promo widget, Store badges ===== */
const BV=['primary','secondary','accent','danger','neutral','text'];
const SZ=['xs','sm','md','lg','xl'];
const BTNFONT={xs:'10px/14px',sm:'12px/16px',md:'14px/20px',lg:'18px/24px',xl:'22px/28px'};
CSS+=`.w-btn{--h:var(--btn-size-md);position:relative;display:inline-flex;align-items:center;justify-content:center;gap:var(--btn-gap-md);height:var(--h);min-width:var(--h);padding:0 var(--btn-paddingH-md);border:0;border-radius:var(--btn-borderRadius-md);font:600 14px/20px var(--fontFamilyMain);white-space:nowrap;cursor:pointer;user-select:none;transition:background .15s,color .15s,box-shadow .15s;text-decoration:none;flex:none}
.w-btn.icon-only{padding:0;width:var(--h)}.w-btn.block{width:100%;flex:1}
${SZ.map(s=>`.w-btn.sz-${s}{--h:var(--btn-size-${s});gap:var(--btn-gap-${s});padding:0 var(--btn-paddingH-${s});border-radius:var(--btn-borderRadius-${s});font-size:${BTNFONT[s].split('/')[0]};line-height:${BTNFONT[s].split('/')[1]}}.w-btn.sz-${s}.icon-only{padding:0}.w-btn.sz-${s} .ic{width:var(--btn-iconSize-${s});height:var(--btn-iconSize-${s})}.w-btn.sz-${s}.is-focus,.w-btn.sz-${s}:focus-visible{outline-offset:1px}`).join('')}
.w-btn.rounded{border-radius:var(--btn-rounded-borderRadius-md)}
${BV.map(v=>`.w-btn.v-${v}{background:var(--btn-${v}-bg-default);color:var(--btn-${v}-color-default);box-shadow:inset 0 0 0 var(--btn-borderWidth-${v}) var(--btn-${v}-br-default)${['primary','secondary','accent','danger'].includes(v)?`,var(--btn-${v}-boxShadow);text-shadow:var(--btn-${v}-textShadow)`:''}}
.w-btn.v-${v}:hover:not(.is-disabled):not(.is-loading),.w-btn.v-${v}.is-hover{background:var(--btn-${v}-bg-hover);color:var(--btn-${v}-color-hover)}
.w-btn.v-${v}:active:not(.is-disabled):not(.is-loading),.w-btn.v-${v}.is-active{background:var(--btn-${v}-bg-active);color:var(--btn-${v}-color-active)}
.w-btn.v-${v}.is-focus,.w-btn.v-${v}:focus-visible{background:var(--btn-${v}-bg-focus);color:var(--btn-${v}-color-focus)}
.w-btn.v-${v}.is-disabled{background:var(--btn-${v}-bg-disabled);color:var(--btn-${v}-color-disabled);cursor:not-allowed;box-shadow:none;text-shadow:none}
.w-btn.v-${v}.is-loading{background:var(--btn-${v}-bg-loading);cursor:progress}`).join('')}
.w-btn.v-link{background:none;padding:0;min-width:0;height:auto;color:var(--btn-link-color-default)}.w-btn.v-link:hover,.w-btn.v-link.is-hover{color:var(--btn-link-color-hover)}.w-btn.v-link.is-active,.w-btn.v-link:active{color:var(--btn-link-color-active)}.w-btn.v-link.is-disabled{color:var(--btn-link-color-disabled);cursor:not-allowed}
.w-btn.is-focus,.w-btn:focus-visible{outline:var(--btn-borderWidth-outline) solid var(--btn-outline-color);outline-offset:1px}
.w-btn.is-loading>:not(.w-spin){visibility:hidden}.w-btn.is-loading .w-spin{position:absolute}
.w-btn .btn-bdg{position:absolute;top:-6px;right:-6px}
/* toggle button */
.w-tb{--h:var(--toggleBtn-size-md);display:inline-grid;place-items:center;width:var(--h);height:var(--h);border:0;border-radius:var(--toggleBtn-borderRadius-md);cursor:pointer;transition:background .15s}
${SZ.map(s=>`.w-tb.sz-${s}{--h:var(--toggleBtn-size-${s});border-radius:var(--toggleBtn-borderRadius-${s})}.w-tb.sz-${s} .ic{width:var(--toggleBtn-iconSize-${s});height:var(--toggleBtn-iconSize-${s})}`).join('')}
${['primary','secondary','text','neutral'].map(v=>`.w-tb.v-${v}{background:var(--toggleBtn-${v}-bg-default);color:var(--toggleBtn-${v}-color-default);box-shadow:${v=='primary'||v=='secondary'?`var(--toggleBtn-${v}-boxShadow)`:`inset 0 0 0 var(--toggleBtn-borderWidth-${v=='text'?'text':'neutral'}) var(--toggleBtn-${v}-br-default)`}}
.w-tb.v-${v}:hover:not(.is-disabled),.w-tb.v-${v}.is-hover{background:var(--toggleBtn-${v}-bg-hover)}.w-tb.v-${v}.is-active,.w-tb.v-${v}:active{background:var(--toggleBtn-${v}-bg-active)}
.w-tb.v-${v}.is-disabled{background:var(--toggleBtn-${v}-bg-disabled);color:var(--toggleBtn-${v}-color-disabled);cursor:not-allowed;box-shadow:none}
.w-tb.v-${v}.checked{color:var(--toggleBtn-${v}-checked-color-default)}`).join('')}
.w-tb.v-text.checked{background:var(--toggleBtn-text-checked-bg-default)}.w-tb.v-text.checked:hover{background:var(--toggleBtn-text-checked-bg-hover)}
.w-tb.v-neutral.checked{background:var(--toggleBtn-neutral-checked-bg-default)}
.w-tb.is-focus,.w-tb:focus-visible{outline:var(--toggleBtn-borderWidth-outline) solid var(--btn-outline-color);outline-offset:1px}
/* link */
.w-link{display:inline-flex;align-items:center;gap:var(--link-gapBetweenIconLeft);color:var(--link-accent-color-default);font-size:14px;line-height:20px;cursor:pointer;border-radius:var(--link-borderRadius-md);text-decoration:none}
.w-link .ic{width:var(--link-iconSize-md);height:var(--link-iconSize-md)}.w-link .ic.r{margin-left:calc(var(--link-gapBetweenIconRight) - var(--link-gapBetweenIconLeft))}
.w-link.sz-sm{font-size:12px;line-height:16px;border-radius:var(--link-borderRadius-sm)}.w-link.sz-sm .ic{width:var(--link-iconSize-sm);height:var(--link-iconSize-sm)}
.w-link.sz-xs{font-size:10px;line-height:14px;border-radius:var(--link-borderRadius-xs)}.w-link.sz-xs .ic{width:var(--link-iconSize-xs);height:var(--link-iconSize-xs)}
.w-link:hover,.w-link.is-hover{color:var(--link-accent-color-hover);text-decoration:underline}.w-link.is-active,.w-link:active{color:var(--link-accent-color-active)}
.w-link.sec{color:var(--link-secondary-color-default)}.w-link.sec:hover,.w-link.sec.is-hover{color:var(--link-secondary-color-hover)}.w-link.sec.is-active{color:var(--link-secondary-color-active)}
.w-link.is-focus,.w-link:focus-visible{outline:var(--link-outlineBorderWidth) solid var(--link-outline);outline-offset:1px}
/* action bar */
.w-ab{display:flex;gap:var(--actionBar-gap);width:100%}
.w-ab.col{flex-direction:column}.w-ab.block .w-btn{flex:1;width:100%}
.w-ab.inline{width:auto}.w-ab.inline.pos-right{justify-content:flex-end;width:100%}.w-ab.inline.pos-center{justify-content:center;width:100%}.w-ab.inline.pos-left{justify-content:flex-start;width:100%}
.w-ab.float{position:sticky;bottom:0;padding:12px;border-radius:var(--borderRadius-lg);background:var(--bg-popup-default);box-shadow:var(--shadowLg)}.w-ab.float .w-btn{flex:1}
/* promo widget */
.w-pw{position:relative;display:inline-flex;flex-direction:column;align-items:center}
.w-pw-b{display:grid;place-items:center;width:var(--promoWidget-size);height:var(--promoWidget-size);border:0;border-radius:var(--promoWidget-borderRadius);cursor:pointer;color:var(--promoWidget-primary-icon-default);background:var(--promoWidget-primary-bg-default);box-shadow:var(--promoWidget-boxShadow-primary)}
.w-pw-b .ic{width:var(--promoWidget-iconSize);height:var(--promoWidget-iconSize)}
.w-pw.v-primary .w-pw-b:hover,.w-pw.v-primary.is-hover .w-pw-b{background:var(--promoWidget-primary-bg-hover)}.w-pw.v-primary.is-active .w-pw-b,.w-pw.v-primary .w-pw-b:active{background:var(--promoWidget-primary-bg-active)}
.w-pw.v-accent .w-pw-b{background:var(--promoWidget-accent-bg-default);box-shadow:var(--promoWidget-boxShadow-accent);color:var(--promoWidget-accent-icon-default)}
.w-pw.v-accent .w-pw-b:hover,.w-pw.v-accent.is-hover .w-pw-b{background:var(--promoWidget-accent-bg-hover)}.w-pw.v-accent.is-active .w-pw-b,.w-pw.v-accent .w-pw-b:active{background:var(--promoWidget-accent-bg-active)}
.w-pw-img{width:var(--promoWidget-imageSize);height:var(--promoWidget-imageSize);border-radius:6px;background:linear-gradient(135deg,var(--tt-accent3),var(--tt-warning));box-shadow:var(--shadowSm)}
.w-pw-t{margin-top:-8px;position:relative;z-index:1;min-width:52px;padding:1px 6px;border-radius:var(--promoWidget-countdown-borderRadius);background:var(--promoWidget-countdown-bg);color:var(--tt-black);font:600 10px/14px var(--fontFamilyMain);text-align:center}
.w-pw .w-bn{position:absolute;top:2px;right:2px}
.w-pw.v-primary .w-pw-b::after,.w-pw.v-accent .w-pw-b::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none}
/* store badges */
.w-app{display:inline-flex;align-items:center;gap:var(--appsBadge-gap);height:var(--appsBadge-size);padding:0 14px 0 var(--appsBadge-paddingL);border:var(--appsBadge-borderWidth) solid var(--appsBadge-br);border-radius:var(--appsBadge-borderRadius);background:var(--appsBadge-bg);color:var(--appsBadge-color);cursor:pointer}
.w-app.collapse{width:var(--appsBadge-size);padding:0;justify-content:center}
.w-app small{display:block;font-size:8px;line-height:10px}.w-app b{display:block;font-size:14px;line-height:16px;font-weight:600;letter-spacing:-.2px}`;
const APPLE='<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.9-3.5.9-.7 0-1.9-.8-3.1-.8-1.6 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3.1.7c1.3 0 2.1-1.1 2.8-2.3.9-1.3 1.3-2.6 1.3-2.6s-2.5-1-2.5-3.8zM14.1 5.9c.6-.8 1.1-1.8 1-2.9-.9 0-2.1.6-2.7 1.4-.6.7-1.1 1.8-1 2.8 1 .1 2.1-.5 2.7-1.3z"/></svg>';
const GPLAY='<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3.2l9.6 8.8L4 20.8c-.3-.2-.5-.6-.5-1V4.2c0-.4.2-.8.5-1z" fill="#00d3ff"/><path d="M16.8 15l-3.2-3 3.2-3 3.3 1.9c.9.5.9 1.8 0 2.3z" fill="#ffc700"/><path d="M13.6 12L4 20.8c.3.2.8.2 1.2 0l11.6-5.8z" fill="#f40084"/><path d="M4 3.2c.4-.2.8-.2 1.2 0l11.6 5.8-3.2 3z" fill="#2bda8d"/></svg>';
/* ---- shared render helpers ---- */
function SPIN(o={}){const s=o.size||'md',v=o.variant||'Neutral';return `<span class="w-spin sz-${s} ${v=='Accent 1'?'acc':''}" role="status" aria-label="Loading"></span>`}
function BTN(o){const v=slug(o.variant||'Primary'),s=o.size||'md',state=slug(o.state||'Default');const only=o.iconOnly||(!o.label&&o.icon);
 const inner=state=='loading'?`${o.icon?I(o.icon,20):''}${o.label?`<span>${esc(o.label)}</span>`:''}${SPIN({size:s=='xs'||s=='sm'?'xs':s=='md'?'sm':'md',variant:v=='secondary'||v=='text'||v=='neutral'?'Accent 1':'Neutral'})}`:`${o.icon?I(o.icon,20):''}${o.label&&!o.iconOnly?`<span>${esc(o.label)}</span>`:''}${o.icon1?I(o.icon1,20,'r'):''}`;
 return `<button type="button" class="${cls('w-btn','v-'+v,'sz-'+s,'is-'+state,only&&'icon-only',o.block&&'block',o.cls)}" ${state=='disabled'?'aria-disabled="true"':''} ${o.attrs||''} ${o.label?'':`aria-label="${esc(o.aria||o.icon||'Button')}"`}>${inner}${o.badge?`<span class="btn-bdg">${BADGE_C({variant:'Important',size:'sm',label:String(o.badge)})}</span>`:''}</button>`}
function AB(o){const btn2=o.btn2!==false;const block=o.type!='Inline'&&o.type!='Float';const p=BTN({variant:'Primary',size:o.size||'md',label:o.confirm||'Confirm',block});const s=btn2?BTN({variant:'Secondary',size:o.size||'md',label:o.cancel||'Cancel',block}):'';
 const rev=o.type=='Inline'&&o.position=='Right';return `<div class="${cls('w-ab',o.direction=='Column'&&'col',block&&'block',o.type=='Inline'&&'inline',o.type=='Float'&&'float','pos-'+slug(o.position||'right'))}">${o.direction=='Column'?p+s:rev?s+p:p+s}</div>`}
/* ---- defs ---- */
const STATES5=['Default','Hover','Active','Focus','Disabled'];
reg({id:'btn',name:'Btn',sig:'Btn',group:'actions',figma:'8:151308',alias:'button cta',
 desc:'The main action control. 7 variants × 5 sizes × 6 states with a bevel surface on the filled variants.',
 props:[{n:'variant',t:'enum',o:['Primary','Secondary','Accent','Danger','Neutral','Text','Link'],d:'Primary',desc:'Visual weight. Accent is for conversion (Sign up, Deposit); Danger only for destructive actions.'},
  {n:'size',t:'enum',o:SZ,d:'md',desc:'Height 24/32/40/48/56px (btn.size.*).'},
  {n:'state',t:'enum',o:['Default','Hover','Active','Focus','Loading','Disabled'],d:'Default',desc:'Forced visual state. In Default the preview reacts to real hover and press.'},
  {n:'label',t:'bool',d:true,desc:'Show the text label. Off = icon-only square button.'},{n:'text',t:'text',d:'Buy tickets',desc:'Label copy. Name the action, never “Submit”.',when:p=>p.label},
  {n:'icon',t:'bool',d:false,desc:'Leading icon.'},{n:'icon1',t:'bool',d:false,desc:'Trailing icon.'},{n:'badge',t:'bool',d:false,desc:'Badge/Counter (Important) over the top-right corner.'}],
 render:p=>BTN({variant:p.variant,size:p.size,state:p.state,label:p.label?p.text:'',icon:p.icon||!p.label?'ticket':null,icon1:p.icon1?'arrow-right':null,badge:p.badge?3:0,attrs:'data-cycle="state|Default|Loading"'}),
 gallery:()=>['Primary','Secondary','Accent','Danger','Neutral','Text','Link'].map(v=>`<div class="gr">${SZ.map(s=>BTN({variant:v,size:s,label:v})).join('')}${BTN({variant:v,size:'md',label:'Disabled',state:'Disabled'})}${BTN({variant:v,size:'md',icon:'heart',iconOnly:true})}</div>`).join(''),galCls:'rows',
 notes:['Click the preview to toggle <b>Loading</b> — the label keeps its width while the spinner shows.','Colors always come from <code>btn.{variant}.bg/color/br.{state}</code>; gradients are start→end vertical (see Gradients).','Secondary is technically a flat gradient (start = end). Do not replace it with a solid background color.','Btn Neutral / Text are used for utility controls (Info, Close, carousel arrows); Accent for the key conversion action on a screen.'],
 tokens:['btn.size.*','btn.paddingH.*','btn.gap.*','btn.borderRadius.*','btn.iconSize.*','btn.primary.bg.*','btn.primary.boxShadow','btn.secondary.bg.*','btn.accent.bg.*','btn.danger.bg.*','btn.neutral.bg.*','btn.text.bg.*','btn.link.color.*','btn.outline.color','btn.borderWidth.outline']});
reg({id:'toggle-button',name:'Toggle Button',sig:'ToggleButton',group:'actions',figma:'8:41428',alias:'favorite icon button',
 desc:'Round icon-only button with checked and unchecked looks. Shares the bevel effect with Btn.',
 props:[{n:'variant',t:'enum',o:['Primary','Secondary','Neutral','Text'],d:'Secondary'},{n:'size',t:'enum',o:SZ,d:'md'},{n:'state',t:'enum',o:STATES5,d:'Default'},{n:'checked',t:'bool',d:false,desc:'Selected look. Click the preview to toggle.'},{n:'iconDefault',t:'enum',o:['heart','star','bell','eye'],d:'heart',desc:'Icon slot.'}],
 render:p=>`<button type="button" aria-pressed="${p.checked}" class="${cls('w-tb','v-'+slug(p.variant),'sz-'+p.size,st(p),p.checked&&'checked')}" data-toggle="checked" aria-label="Toggle ${p.iconDefault}">${p.checked&&(p.iconDefault=='heart'||p.iconDefault=='star')?I(p.iconDefault,20,'fill'):I(p.iconDefault,20)}</button>`,
 gallery:()=>['Primary','Secondary','Neutral','Text'].map(v=>`<div class="gr">${SZ.map(s=>`<button type="button" class="w-tb v-${slug(v)} sz-${s}">${I('heart')}</button>`).join('')}<button type="button" class="w-tb v-${slug(v)} sz-md checked">${I('heart',20,'fill')}</button></div>`).join(''),galCls:'rows',
 notes:['Used as the corner toggle in Card/Default (alternative to FAB).','Bevel reuses Btn shadow tokens — changing Btn affects Toggle Button too.'],
 tokens:['toggleBtn.size.*','toggleBtn.borderRadius.*','toggleBtn.primary.bg.*','toggleBtn.secondary.bg.*','toggleBtn.text.bg.*','toggleBtn.text.checked.bg.*','toggleBtn.neutral.checked.color.*']});
CSS+=`.ic.fill path{fill:currentColor}`;
reg({id:'link',name:'Link',group:'actions',figma:'8:13512',
 desc:'Inline text link, accent or secondary, with optional icons on either side.',
 props:[{n:'size',t:'enum',o:['md','sm','xs'],d:'md'},{n:'secondary',t:'bool',d:false,desc:'Muted grey link for low-emphasis navigation.'},{n:'state',t:'enum',o:['Default','Hover','Active','Focus'],d:'Default'},{n:'icon',t:'bool',d:false},{n:'icon1',t:'bool',d:true},{n:'lable',t:'text',d:'Terms and conditions',desc:'Label. The prop name keeps the Figma spelling “lable”.'}],
 render:p=>`<a href="#/link" onclick="event.preventDefault()" class="${cls('w-link','sz-'+p.size,p.secondary&&'sec',st(p))}">${p.icon?I('info',16):''}${esc(p.lable)}${p.icon1?I('arrow-right',16,'r'):''}</a>`,
 gallery:()=>['md','sm','xs'].map(s=>`<div class="gr"><a class="w-link sz-${s}">Accent ${s}${I('arrow-right',16,'r')}</a><a class="w-link sec sz-${s}">Secondary ${s}</a></div>`).join(''),galCls:'rows',
 tokens:['link.accent.color.*','link.secondary.color.*','link.iconSize.*','link.gapBetweenIconLeft','link.gapBetweenIconRight','link.outline']});
reg({id:'actionbar',name:'ActionBar',sig:'ActionBar',group:'actions',figma:'8:69441',alias:'confirm cancel footer',
 desc:'Layout wrapper for one or two action buttons (Confirm / Cancel). Used in Modal, Drawer, Card footers.',
 props:[{n:'direction',t:'enum',o:['Row','Column'],d:'Row'},{n:'type',t:'enum',o:['Block','Inline','Float'],d:'Block',desc:'Block = full-width buttons; Inline = auto width; Float = sticky bar over content.'},{n:'position',t:'enum',o:['Right','Left','Center'],d:'Right',desc:'Alignment for Inline.',when:p=>p.type=='Inline'},{n:'btn2',t:'bool',d:true,desc:'Show the secondary “Cancel” button.'}],
 stage:'col',render:p=>`<div style="width:min(420px,100%)">${AB(p)}</div>`,
 notes:['Row + Inline + Right reverses the order: Cancel first, Confirm on the far right.','No own colors — only <code>actionBar.gap</code> and layout logic around real Btn instances.'],
 tokens:['actionBar.gap','actionBar.btnMaxWidth'],uses:['btn']});
reg({id:'promo-widget',name:'Promo widget',sig:'PromoWidget',group:'actions',figma:'8:100329',alias:'floating bubble',
 desc:'Floating round promo button for a screen corner, with an optional countdown tag and notifier dot.',
 props:[{n:'variant',t:'enum',o:['Primary','Accent'],d:'Accent'},{n:'state',t:'enum',o:['Default','Hover','Active'],d:'Default'},{n:'image',t:'bool',d:true,desc:'Image/Front instead of an icon.'},{n:'timer',t:'bool',d:true,desc:'Countdown tag under the circle.'},{n:'badge',t:'bool',d:true,desc:'Badge/Notifier (Important).'}],
 render:p=>`<div class="${cls('w-pw','v-'+slug(p.variant),st(p))}"><button type="button" class="w-pw-b" data-toggle="badge" aria-label="Open promo">${p.image?'<i class="w-pw-img"></i>':I('gift',24)}</button>${p.badge?BADGE_N({variant:'Important'}):''}${p.timer?`<span class="w-pw-t">02:45:10</span>`:''}</div>`,
 notes:['The bevel reuses Btn shadow tokens (<code>promoWidget.boxShadow.*</code>).','Timer tag hangs on the circle with a −8px margin — it is part of the same column, not a separate element.'],
 tokens:['promoWidget.size','promoWidget.borderRadius','promoWidget.primary.bg.*','promoWidget.accent.bg.*','promoWidget.boxShadow.*','promoWidget.countdown.*'],uses:['badge','countdown']});
reg({id:'store-badges',name:'Store badges',sig:'AppsBadge',group:'actions',figma:'5:2647',alias:'app store google play apps badge',
 desc:'Download links to the App Store and Google Play. Same “Apps badge” used in the Sidebar.',
 props:[{n:'os',t:'enum',o:['iOS','Android'],d:'iOS'},{n:'collapse',t:'bool',d:false,desc:'Square 40×40 icon-only version.'}],
 render:p=>APPS(p),gallery:()=>APPS({os:'iOS'})+APPS({os:'Android'})+APPS({os:'iOS',collapse:true})+APPS({os:'Android',collapse:true}),
 notes:['Logos and captions are official brand assets baked into SVG in Figma — do not edit the caption text.'],tokens:['appsBadge.*']});
function APPS(p){return `<a class="${cls('w-app',p.collapse&&'collapse')}" href="#/store-badges" onclick="event.preventDefault()" aria-label="${p.os=='iOS'?'Download on the App Store':'Get it on Google Play'}">${p.os=='iOS'?APPLE:GPLAY}${p.collapse?'':`<span><small>${p.os=='iOS'?'Download on the':'GET IT ON'}</small><b>${p.os=='iOS'?'App Store':'Google Play'}</b></span>`}</a>`}
