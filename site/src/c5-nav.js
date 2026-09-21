/* ===== Navigation: Tabs, Breadcrumbs, Menu, TabBar, Navigator, Paginator, Stepper, Heading ===== */
CSS+=`
.w-tabs{display:flex;align-items:center;gap:8px;width:min(640px,100%);border-bottom:var(--tab-borderWidth) solid var(--tab-br)}
.w-tabs.nodiv{border-bottom:0}.w-tabs.bottom{border-bottom:0;border-top:var(--tab-borderWidth) solid var(--tab-br)}
.w-tabs-r{position:relative;flex:1;display:flex;gap:var(--tab-gapH);overflow-x:auto;scrollbar-width:none}.w-tabs.centered .w-tabs-r{justify-content:center}
.w-tabs.scroll .w-tabs-r{box-shadow:var(--tab-right)}
.w-tab{position:relative;display:inline-flex;align-items:center;gap:var(--tab-item-gap-md);height:var(--tab-item-size-md);padding:0;border:0;background:none;color:var(--tab-item-color-default);font:600 14px/20px var(--fontFamilyMain);cursor:pointer;white-space:nowrap}
.w-tab .ic{width:var(--tab-item-iconSize-md);height:var(--tab-item-iconSize-md)}
.w-tab:hover,.w-tab.is-hover{color:var(--tab-item-color-hover)}.w-tab.is-disabled{color:var(--tab-item-color-disabled);cursor:not-allowed}
.w-tab.on{color:var(--tab-item-checked-color-default)}.w-tab.on::after{content:"";position:absolute;left:0;right:0;bottom:calc(-1 * var(--tab-borderWidth));height:var(--tab-item-indicatorBorderWidth);background:var(--tab-item-checked-indicator-default);border-radius:2px}
.w-tabs.bottom .w-tab.on::after{bottom:auto;top:calc(-1 * var(--tab-borderWidth))}
.w-tab.acc.on{color:var(--tab-item-accent-color-default)}.w-tab.acc.on::after{background:var(--tab-item-accent-indicator-default)}
.w-tab.is-focus,.w-tab:focus-visible{outline:var(--borderWidth-outline-md) solid var(--outline-default)}
.w-tabs.sz-sm .w-tab{height:var(--tab-item-size-sm);gap:var(--tab-item-gap-sm);font-size:12px;line-height:16px}.w-tabs.sz-sm .w-tab .ic{width:var(--tab-item-iconSize-sm);height:var(--tab-item-iconSize-sm)}
.w-tabs.vert{flex-direction:column;align-items:stretch;width:220px;border-bottom:0;border-left:var(--tab-borderWidth) solid var(--tab-br)}.w-tabs.vert.right{border-left:0;border-right:var(--tab-borderWidth) solid var(--tab-br)}
.w-tabs.vert .w-tabs-r{flex-direction:column;gap:var(--tab-gapV)}.w-tabs.vert .w-tab{padding:0 var(--tab-item-left-paddingH)}
.w-tabs.vert .w-tab.on::after{left:calc(-1 * var(--tab-borderWidth));right:auto;top:0;bottom:0;width:var(--tab-item-indicatorBorderWidth);height:auto}.w-tabs.vert.right .w-tab.on::after{left:auto;right:calc(-1 * var(--tab-borderWidth))}
.w-tab-panel{width:min(640px,100%);padding:16px;border-radius:var(--borderRadius-md);background:var(--bg-neutral-primary);color:var(--tt-secondary)}
/* breadcrumbs */
.w-bcr{display:flex;align-items:center;flex-wrap:wrap;gap:var(--breadcrumbs-gap);font-size:14px;line-height:20px}
.w-bcr a{display:inline-flex;align-items:center;gap:var(--breadcrumbs-itemGap);height:var(--breadcrumbs-size);padding:0 var(--breadcrumbs-paddingH);border-radius:var(--breadcrumbs-borderRadius);color:var(--breadcrumbs-color-default);cursor:pointer}
.w-bcr a .ic{width:var(--breadcrumbs-iconSize);height:var(--breadcrumbs-iconSize)}
.w-bcr a:hover,.w-bcr a.is-hover{background:var(--breadcrumbs-bg-hover);color:var(--breadcrumbs-color-hover)}
.w-bcr a.sel{color:var(--breadcrumbs-color-selected);font-weight:600;pointer-events:none}.w-bcr .sep{color:var(--breadcrumbs-separatorColor)}
/* menu */
.w-menu{display:flex;gap:var(--menu-gap)}.w-menu.vert{flex-direction:column}
.w-mi{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--menu-item-gap);min-width:var(--menu-item-size);height:var(--menu-item-size);padding:0 var(--menu-item-paddingH);border:0;border-radius:var(--menu-item-borderRadius);background:none;color:var(--menu-item-color-default);font:600 10px/14px var(--fontFamilyMain);cursor:pointer}
.w-mi .ic{width:var(--menu-item-iconSize);height:var(--menu-item-iconSize);color:var(--menu-item-icon-default)}
.w-mi:hover,.w-mi.is-hover{background:var(--menu-item-bg-hover)}.w-mi.is-active,.w-mi:active{background:var(--menu-item-bg-active)}
.w-mi.on{background:var(--menu-item-checked-bg-default);color:var(--menu-item-checked-color-default)}.w-mi.on .ic{color:var(--menu-item-checked-color-default)}.w-mi.on:hover{background:var(--menu-item-checked-bg-hover)}
.w-mi.is-disabled{color:var(--menu-item-color-disabled);cursor:not-allowed}.w-mi.is-disabled .ic{color:var(--menu-item-icon-disabled)}
.w-mi.is-focus,.w-mi:focus-visible{outline:var(--menu-item-outlineBorderWidth) solid var(--menu-item-outline)}
.w-mi .bd{position:absolute;top:4px;right:8px}
/* tabbar */
.w-tbar{display:flex;align-items:flex-start;justify-content:space-around;width:min(390px,100%);height:var(--tabbar-size);padding:0 var(--tabbar-paddingH);background:var(--tabbar-bg);-webkit-backdrop-filter:blur(var(--image-blur-md));backdrop-filter:blur(var(--image-blur-md));border-radius:var(--tabbar-borderRadius);box-shadow:0 -1px 0 var(--br-secondary)}
.w-tbi{position:relative;flex:1;display:flex;flex-direction:column;align-items:center;gap:var(--tabbar-item-gap);padding:var(--tabbar-item-paddingT) var(--tabbar-item-paddingH) var(--tabbar-item-paddingB);border:0;background:none;color:var(--tabbar-item-default);font:600 10px/14px var(--fontFamilyMain);cursor:pointer}
.w-tbi .ic{width:var(--tabbar-item-iconSize);height:var(--tabbar-item-iconSize)}
.w-tbi:active{color:var(--tabbar-item-active)}.w-tbi.on{color:var(--tabbar-item-checked-default)}.w-tbi.is-disabled{color:var(--tabbar-item-disabled)}
.w-tbi .bd{position:absolute;top:6px;left:calc(50% + 8px)}
.w-tbi.acc .ico{display:grid;place-items:center;width:40px;height:40px;margin-top:-18px;border-radius:var(--tabbar-item-accent-borderRadius);background:var(--tabbar-accent-bg-default);box-shadow:var(--tabbar-accent-boxShadow);color:var(--tabbar-item-accent-icon)}
.w-tbi.acc.on{color:var(--tabbar-item-checked-accent-default)}
/* paginator */
.w-pag{display:flex;align-items:center;gap:var(--paginator-gap);color:var(--paginator-color);font-size:14px;line-height:20px;flex-wrap:wrap}
.w-pag.pos-center{justify-content:center}.w-pag.pos-right{justify-content:flex-end}.w-pag.def{width:min(480px,100%)}.w-pag.def .txt{flex:1;text-align:center}.w-pag.def.pos-left .txt{flex:0;order:3}.w-pag.def.pos-right .txt{flex:0;order:-1}
.w-pgi{display:grid;place-items:center;min-width:var(--paginator-item-size);height:var(--paginator-item-size);padding:0 6px;border:0;border-radius:var(--paginator-item-borderRadius);background:none;color:var(--paginator-item-default-color-default);font:600 14px/20px var(--fontFamilyMain);cursor:pointer}
.w-pgi:hover{background:var(--paginator-item-default-bg-hover);color:var(--paginator-item-default-color-hover)}.w-pgi:active{background:var(--paginator-item-default-bg-active)}
.w-pgi.on{background:var(--paginator-item-checked-bg-default);color:var(--paginator-item-checked-color-default)}.w-pgi.on:hover{background:var(--paginator-item-checked-bg-hover)}
.w-pgi.gap{color:var(--paginator-gapItem-color);cursor:default;background:none}
.w-pgi:focus-visible{outline:var(--paginator-item-outlineBorderWidth) solid var(--paginator-item-outline)}
.w-pag.dis .w-pgi{color:var(--paginator-item-default-color-disabled);pointer-events:none}.w-pag.dis .w-pgi.on{background:var(--paginator-item-checked-bg-disabled)}
.w-pag .jmp{display:flex;align-items:center;gap:8px;margin-left:8px}.w-pag .jmp input{width:56px;height:var(--input-size-sm);border:0;border-radius:var(--input-borderRadius-sm);background:var(--input-bg-default);color:var(--input-color-filled-default);text-align:center;font:inherit}
.w-pag .jmp input:focus{outline:var(--input-borderWidth-outline) solid var(--input-outline-default)}
.w-pag .chg{position:relative}.w-pag .chg select{height:var(--input-size-sm);padding:0 28px 0 10px;border:0;border-radius:var(--input-borderRadius-sm);background:var(--input-bg-default);color:var(--input-color-filled-default);font:inherit;appearance:none}.w-pag .chg .ic{position:absolute;right:6px;top:8px;pointer-events:none;color:var(--input-arrow-default)}
/* stepper */
.w-stp{display:flex;flex-direction:column;gap:0;width:min(360px,100%)}
.w-stp-i{display:grid;grid-template-columns:var(--stepper-indicatorSize) 1fr;column-gap:var(--stepper-item-gap);text-align:left;border:0;background:none;padding:0;cursor:pointer;color:inherit}
.w-stp-ind{display:grid;place-items:center;width:var(--stepper-indicatorSize);height:var(--stepper-indicatorSize);border-radius:var(--stepper-indicatorBorderRadius);background:var(--stepper-indicator-bg-default);color:var(--stepper-indicator-color-default);font:600 14px/20px var(--fontFamilyMain)}
.w-stp-ln{grid-column:1;justify-self:center;width:var(--stepper-lineBorderWidth);min-height:24px;background:var(--stepper-line-default);margin:4px 0}
.w-stp-tx{display:flex;flex-direction:column;justify-content:center;min-height:var(--stepper-indicatorSize)}
.w-stp-tx b{font:600 14px/20px var(--fontFamilyMain);color:var(--stepper-title-default)}.w-stp-tx small{font-size:12px;line-height:16px;color:var(--stepper-subtitle-default)}
.w-stp-ds{grid-column:2;font-size:12px;line-height:16px;color:var(--stepper-description-default);padding:2px 0 16px}
.w-stp-i.active .w-stp-ind{background:var(--stepper-indicator-bg-active);color:var(--stepper-indicator-color-active)}.w-stp-i.active b{color:var(--stepper-title-active)}.w-stp-i.active .w-stp-ds{color:var(--stepper-description-active)}
.w-stp-i.done .w-stp-ind{background:var(--stepper-indicator-bg-done);color:var(--stepper-indicator-color-done)}.w-stp-i.done b{color:var(--stepper-title-done)}.w-stp-i.done .w-stp-ln{background:var(--stepper-line-done)}
.w-stp-i.error .w-stp-ind{background:var(--stepper-indicator-bg-error);color:var(--stepper-indicator-color-error)}.w-stp-i.error b{color:var(--stepper-title-error)}.w-stp-i.error .w-stp-ds{color:var(--stepper-description-error)}
.w-stp.h{flex-direction:row;width:min(640px,100%)}.w-stp.h .w-stp-i{flex:1;grid-template-columns:var(--stepper-indicatorSize) 1fr;align-items:center}.w-stp.h .w-stp-ln,.w-stp.h .w-stp-ds{display:none}
/* heading */
.w-hd{display:flex;align-items:center;gap:var(--heading-gapBetweenAction-md);width:min(720px,100%);min-height:var(--heading-height-md)}
.w-hd-l{flex:1;display:flex;align-items:center;gap:var(--heading-gapBetweenIcon-md);min-width:0;color:var(--heading-color)}
.w-hd-l>.ic{color:var(--heading-icon-color);width:var(--heading-icon-md);height:var(--heading-icon-md)}
.w-hd.lg,.w-hd.xl{min-height:var(--heading-height-lg)}.w-hd.lg .w-hd-l>.ic,.w-hd.xl .w-hd-l>.ic{width:var(--heading-icon-lg);height:var(--heading-icon-lg)}
.w-hd-a{display:flex;align-items:center;gap:var(--heading-gapBetweenAction-md)}.w-hd-a .v{width:1px;height:20px;background:var(--divider-br)}`;
function TABS(o){return `<div class="${cls('w-tabs','sz-'+(o.size||'md'),o.centered&&'centered',o.divider===false&&'nodiv',o.scrollable&&'scroll',(o.position=='Left'||o.position=='Right')&&'vert',slug(o.position||'top'))}" role="tablist">${o.actions?BTN({variant:'Secondary',size:'sm',icon:'chevron-left',iconOnly:true,aria:'Scroll left'}):''}<div class="w-tabs-r">${o.items.map((t,i)=>`<button type="button" role="tab" aria-selected="${i==o.on}" class="${cls('w-tab',i==o.on&&'on',o.accent&&'acc',i==o.on&&o.state&&st(o))}" ${o.key?`data-set="${o.key}=${i}"`:''}>${o.icon?I(o.icons?o.icons[i]:'sparkle',20):''}${esc(t)}${o.badge&&i==1?BADGE_C({variant:'Accent 2',size:'sm',label:'4'}):''}${o.badgeXs&&i==2?BADGE_N({variant:'Important'}):''}</button>`).join('')}</div>${o.actions?BTN({variant:'Secondary',size:'sm',icon:'chevron-right',iconOnly:true,aria:'Scroll right'}):''}</div>`}
reg({id:'tabs',name:'Tabs',group:'navigation',figma:'8:66138',alias:'tab item',
 desc:'Tab/Item with a side indicator and the Tab container (up to 10 tabs, optional side actions and scroll shadow).',
 props:[{n:'size',t:'enum',o:['md','sm'],d:'md'},{n:'position',t:'enum',o:['Top','Bottom','Left','Right'],d:'Top',desc:'Side of the indicator line.'},{n:'state',t:'enum',o:STATES5,d:'Default',desc:'State of the active tab.'},{n:'accent',t:'bool',d:false},{n:'centered',t:'bool',d:false},{n:'divider',t:'bool',d:true},{n:'icon',t:'bool',d:true},{n:'badge',t:'bool',d:true,desc:'Badge/Counter on a tab.'},{n:'badgeXs',t:'bool',d:false,desc:'Badge/Notifier on a tab.'},{n:'actions',t:'bool',d:false},{n:'scrollable',t:'bool',d:false,desc:'Inset shadow “more” hint.'},{n:'on',t:'range',min:0,max:4,d:0,ctl:false}],
 stage:'col',render:p=>{const items=['Lobby','Slots','Live casino','Jackpots','Table games'];return TABS({...p,items,icons:['home','casino','live','crown','dice'],key:'on'})+`<div class="w-tab-panel">Content of <b>${items[p.on]}</b> tab.</div>`},
 notes:['Position = side of the indicator, not decoration (Left/Right make vertical tabs).','Scrollable uses an inset box-shadow — the third “more content” technique in the DS.'],
 tokens:['tab.item.*','tab.gapH','tab.gapV','tab.br','tab.borderWidth','tab.right','tab.left','tab.actions.*'],uses:['badge','btn']});
reg({id:'breadcrumbs',name:'Breadcrumbs',group:'navigation',figma:'8:77264',alias:'path trail',
 desc:'Up to 7 path items with an editable separator. The last item is the current page.',
 props:[{n:'items',t:'range',min:2,max:7,d:4},{n:'separator',t:'text',d:'/'},{n:'icon',t:'bool',d:true,desc:'Home icon on the first item.'},{n:'state',t:'enum',o:['Default','Hover'],d:'Default',desc:'Forced hover on the first item.'},{n:'cur',t:'range',min:0,max:6,d:3,ctl:false}],
 render:p=>{const L=['Home','Casino','Slots','Pragmatic Play','Gates of Olympus','Rules','Paytable'].slice(0,p.items);const cur=Math.min(p.cur,p.items-1);return `<nav class="w-bcr" aria-label="Breadcrumbs">${L.slice(0,cur+1).map((l,i)=>`${i?`<span class="sep">${esc(p.separator)}</span>`:''}<a class="${cls(i==cur&&'sel',i==0&&p.state=='Hover'&&'is-hover')}" data-set="cur=${i}" ${i==cur?'aria-current="page"':''}>${i==0&&p.icon?I('home',16):''}${l}</a>`).join('')}${cur<p.items-1?`<span class="sep" style="margin-left:12px">${BTN({variant:'Text',size:'xs',label:'Go deeper',icon1:'chevron-right',attrs:`data-set="cur=${cur+1}"`})}</span>`:''}</nav>`},
 notes:['Selected state colors come from <code>breadcrumbs.color.selected</code> (not fully verified in Figma).','Click an item to go back up the path.'],tokens:['breadcrumbs.*']});
reg({id:'menu',name:'Menu',group:'navigation',figma:'2642:1043',alias:'bottom nav icon tabs',
 desc:'Vertical icon + label tabs in a horizontal or vertical row. The badge turns Important when its tab is selected.',
 props:[{n:'variant',t:'enum',o:['Horizontal','Vertical'],d:'Horizontal'},{n:'state',t:'enum',o:STATES5,d:'Default',desc:'State of the selected item.'},{n:'badge',t:'bool',d:true},{n:'on',t:'range',min:0,max:4,d:1,ctl:false}],
 render:p=>`<div class="${cls('w-menu',p.variant=='Vertical'&&'vert')}">${[['Lobby','home'],['Promo','promo'],['Casino','casino'],['Live','live'],['Profile','user']].map(([l,ic],i)=>`<button type="button" class="${cls('w-mi',i==p.on&&'on',i==p.on&&st(p))}" data-set="on=${i}">${I(ic,32)}<span>${l}</span>${p.badge&&i==1?`<span class="bd">${BADGE_C({variant:i==p.on?'Important':'Default',size:'sm',label:'2'})}</span>`:''}</button>`).join('')}</div>`,
 notes:['Bottom-nav / tab-bar pattern, not a dropdown or context menu.','The badge is a real Badge/Counter: Default when unchecked, Important when checked.'],tokens:['menu.*','menu.item.*','menu.item.checked.*'],uses:['badge']});
reg({id:'tabbar',name:'TabBar',group:'navigation',figma:'8:133570',alias:'mobile bottom navigation',
 desc:'Mobile bottom navigation on glass with a raised Accent CTA tab (Deposit) and a ripple badge.',
 props:[{n:'badge',t:'bool',d:true,desc:'Badge/Notifier Accent 1 with ripple.'},{n:'accent',t:'bool',d:true,desc:'Raised accent CTA tab.'},{n:'on',t:'range',min:0,max:4,d:0,ctl:false}],
 stage:'pad0',render:p=>`<div style="width:390px;max-width:100%;height:300px;display:flex;flex-direction:column;justify-content:flex-end;border-radius:16px;overflow:hidden;background:var(--layout-bg)"><div style="flex:1;padding:16px;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;align-content:start">${range(6).map(()=>PH('100%',90,'cover')).join('')}</div><nav class="w-tbar">${[['Lobby','home'],['Promo','promo'],['Deposit','wallet'],['Casino','casino'],['Live Casino','live']].map(([l,ic],i)=>{const acc=p.accent&&i==2;return `<button type="button" class="${cls('w-tbi',i==p.on&&'on',acc&&'acc')}" data-set="on=${i}">${acc?`<span class="ico">${I(ic,24)}</span>`:I(ic,24)}<span>${l}</span>${p.badge&&i==1?`<span class="bd">${BADGE_N({variant:'Accent 1',ripple:true})}</span>`:''}</button>`}).join('')}</nav></div>`,
 notes:['Same idea as Menu but an organism with glass background (<code>tabbar.bg</code> + blur) and 5 fixed tabs.'],tokens:['tabbar.*','image.blur.md'],uses:['badge','menu']});
reg({id:'navigator',name:'Navigator',group:'navigation',figma:'8:41440',alias:'dots pagination indicator',
 desc:'Dot or dash position indicator. Same one used in Carousel and Onboarding. Click a dot or the arrows.',
 props:[{n:'size',t:'enum',o:['Medium','Small'],d:'Medium'},{n:'dash',t:'bool',d:true},{n:'actions',t:'bool',d:true,desc:'Prev/Next Btn Text arrows.'},{n:'count',t:'range',min:2,max:7,d:7,desc:'Number of positions (item1–item7).'},{n:'a',t:'range',min:0,max:6,d:3,ctl:false}],
 render:p=>NAV({size:p.size,dash:p.dash,actions:p.actions,count:p.count,active:Math.min(p.a,p.count-1),key:'a'}),
 gallery:()=>NAV({active:3})+NAV({active:3,dash:false})+NAV({active:1,size:'Small'})+NAV({active:1,size:'Small',dash:false}),
 notes:['Dots grow toward the active one (4 → 6 → 8px).','Keep tokens in sync with the Carousel centered mode.'],tokens:['navigator.*']});
reg({id:'paginator',name:'Paginator',group:'navigation',figma:'8:46128',alias:'pagination pages',
 desc:'Default (prev/next + counter) and Advanced (page numbers, gaps, page-size changer and “Go to” jumper).',
 props:[{n:'type',t:'enum',o:['Default','Advanced'],d:'Advanced'},{n:'position',t:'enum',o:['Left','Center','Right'],d:'Center',when:p=>p.type=='Default'},{n:'disabled',t:'bool',d:false},{n:'total',t:'bool',d:true},{n:'charger',t:'bool',d:true,desc:'Page-size changer (Figma spelling “charger”).',when:p=>p.type=='Advanced'},{n:'jumper',t:'bool',d:true,when:p=>p.type=='Advanced'},{n:'page',t:'range',min:1,max:24,d:5,ctl:false}],
 render:p=>{const N=24,c=p.page;const prev=BTN({variant:p.type=='Default'?'Secondary':'Text',size:'md',icon:'chevron-left',iconOnly:true,state:c==1||p.disabled?'Disabled':'',attrs:`data-set="page=${Math.max(1,c-1)}"`,aria:'Previous page'}),next=BTN({variant:p.type=='Default'?'Secondary':'Text',size:'md',icon:'chevron-right',iconOnly:true,state:c==N||p.disabled?'Disabled':'',attrs:`data-set="page=${Math.min(N,c+1)}"`,aria:'Next page'});
  if(p.type=='Default')return `<div class="${cls('w-pag def','pos-'+slug(p.position),p.disabled&&'dis')}">${prev}<span class="txt">${p.total?`Page ${c} of ${N}`:`Page ${c}`}</span>${next}</div>`;
  let pages=[1];const s=Math.max(2,c-1),e=Math.min(N-1,c+1);if(s>2)pages.push('…');for(let i=s;i<=e;i++)pages.push(i);if(e<N-1)pages.push('…');pages.push(N);
  return `<div class="${cls('w-pag',p.disabled&&'dis')}">${p.total?`<span style="color:var(--tt-tertiary);margin-right:8px">${N*20} results</span>`:''}${prev}${pages.map(x=>x=='…'?`<span class="w-pgi gap">…</span>`:`<button type="button" class="${cls('w-pgi',x==c&&'on')}" data-set="page=${x}" ${x==c?'aria-current="page"':''}>${x}</button>`).join('')}${next}${p.charger?`<span class="chg"><select aria-label="Page size"><option>20 / page</option><option>50 / page</option><option>100 / page</option></select>${I('chevron-down',16)}</span>`:''}${p.jumper?`<span class="jmp">Go to<input aria-label="Page number" inputmode="numeric" data-jump placeholder="${c}">Page</span>`:''}</div>`},
 mount:(el,p,set)=>{const j=$('[data-jump]',el);j&&j.addEventListener('keydown',e=>{if(e.key=='Enter'){const v=Math.max(1,Math.min(24,parseInt(j.value)||1));set({page:v})}})},
 notes:['Prev/Next are Btn <b>Secondary</b> in Default and Btn <b>Text</b> in Advanced.','The active page has no bevel. Max 6 items + 2 gaps. Type a page in the jumper and press Enter.'],
 tokens:['paginator.*','paginator.item.*','input.bg.*'],uses:['btn','input']});
reg({id:'stepper',name:'Stepper',group:'navigation',figma:'8:64117',alias:'wizard steps',
 desc:'Numbered wizard steps with a connector line. Done steps show a check. Use Next to walk through.',
 props:[{n:'current',t:'range',min:0,max:4,d:1,desc:'Active step index.'},{n:'error',t:'bool',d:false,desc:'Mark the active step as Error.'},{n:'subtitle',t:'bool',d:true},{n:'description',t:'bool',d:true},{n:'horizontal',t:'bool',d:false,desc:'Items composed in a row (no container variant in Figma).'}],
 stage:'col',render:p=>{const S=[['Account','Email and password','Create your login.'],['Verify','Confirm your email','We sent a 6-digit code.'],['Profile','Name and birth date','Needed for withdrawals.'],['Deposit','Choose a method','Minimum $20.'],['Play','All set','Pick a game in the lobby.']];
  return `<div class="${cls('w-stp',p.horizontal&&'h')}">${S.map(([t,s,d],i)=>{const stt=i<p.current?'done':i==p.current?(p.error?'error':'active'):'';const last=i==S.length-1;return `<button type="button" class="w-stp-i ${stt}" data-set="current=${i}"><span class="w-stp-ind">${stt=='done'?I('check',16):stt=='error'?I('close',16):i+1}</span><span class="w-stp-tx"><b>${t}</b>${p.subtitle?`<small>${s}</small>`:''}</span>${!last?`<span class="w-stp-ln"></span>`:''}${p.description?`<span class="w-stp-ds" ${last?'':'style="grid-row:span 1"'}>${d}</span>`:''}</button>`}).join('')}</div><div style="display:flex;gap:8px">${BTN({variant:'Secondary',size:'sm',label:'Back',state:p.current==0?'Disabled':'',attrs:`data-set="current=${Math.max(0,p.current-1)}"`})}${BTN({variant:'Primary',size:'sm',label:p.current>=4?'Finish':'Next step',attrs:`data-set="current=${Math.min(4,p.current+1)}"`})}</div>`},
 notes:['Not the same as Progress/Steps — Stepper has numbers and text.','Only the title darkens in Done; subtitle and description stay muted.'],tokens:['stepper.*']});
reg({id:'heading',name:'Heading',group:'navigation',figma:'8:100333',alias:'section title all arrows',
 desc:'Section heading with icon, badge and actions (arrows + “All (N)”). Usually sits above a carousel.',
 props:[{n:'size',t:'enum',o:['xs','sm','md','lg','xl'],d:'md'},{n:'icon',t:'bool',d:true},{n:'title',t:'text',d:'Popular games'},{n:'icon1',t:'bool',d:false,desc:'Small info Btn Text after the title.'},{n:'badge',t:'bool',d:true},{n:'actions',t:'bool',d:true},{n:'arrows',t:'bool',d:true,when:p=>p.actions},{n:'divider',t:'bool',d:true,when:p=>p.actions},{n:'all',t:'bool',d:true,when:p=>p.actions}],
 stage:'col',render:p=>HEADING(p),
 notes:['Title is Bungee: xs/sm/md = t4/t3 (32px row), lg/xl = t2 (40px row).','Arrows and “All” are Btn Secondary sm — same as Carousel list mode.'],tokens:['heading.*'],uses:['btn','badge','divider']});
function HEADING(p){const tcls={xs:'t4',sm:'t4',md:'t3',lg:'t2',xl:'t2'}[p.size||'md'];return `<div class="${cls('w-hd',p.size)}"><div class="w-hd-l">${p.icon!==false?I('fire',24):''}<span class="${tcls}">${esc(p.title||'Heading')}</span>${p.icon1?BTN({variant:'Text',size:'xs',icon:'info',iconOnly:true}):''}${p.badge?BADGE_C({variant:'Important',label:'12'}):''}</div>${p.actions!==false?`<div class="w-hd-a">${p.arrows!==false?BTN({variant:'Secondary',size:'sm',icon:'chevron-left',iconOnly:true,aria:'Previous'})+BTN({variant:'Secondary',size:'sm',icon:'chevron-right',iconOnly:true,aria:'Next'}):''}${p.divider!==false?'<i class="v"></i>':''}${p.all!==false?BTN({variant:'Secondary',size:'sm',label:'All (48)'}):''}</div>`:''}</div>`}
