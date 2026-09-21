/* ===== Data display I: Badge, Tag, Status, Avatar, Divider, Propser, List, Table ===== */
const TAGV=['Default','Accent 1','Accent 2','Success','Warning','Danger','Alt 1','Alt 2','Alt 3','Alt 4','Alt 5'];
const tv=v=>v.toLowerCase().replace(/\s+/g,'');
CSS+=`
.w-bc{display:inline-flex;align-items:center;justify-content:center;min-width:var(--badge-counter-size-md);height:var(--badge-counter-size-md);padding:0 var(--badge-counter-paddingH-md);border-radius:var(--badge-counter-borderRadius-md);font:600 12px/16px var(--fontFamilyMain);background:var(--badge-bg-default);color:var(--badge-counter-color-default);box-shadow:var(--bevel)}
.w-bc.sz-sm{min-width:var(--badge-counter-size-sm);height:var(--badge-counter-size-sm);padding:0 var(--badge-counter-paddingH-sm);border-radius:var(--badge-counter-borderRadius-sm);font-size:10px;line-height:14px}
${['accent1','accent2','important','success'].map(v=>`.w-bc.v-${v},.w-bn.v-${v}{background:var(--badge-bg-${v});color:var(--badge-counter-color-${v})}`).join('')}
.w-bn{display:inline-block;width:var(--badge-notifier-size);height:var(--badge-notifier-size);border-radius:var(--badge-notifier-borderRadius);background:var(--badge-bg-default);box-shadow:var(--bevel);position:relative;flex:none}
.w-bn.ripple::after{content:"";position:absolute;inset:0;border-radius:50%;background:inherit;animation:ripple 1.6s ease-out infinite}
@keyframes ripple{from{transform:scale(1);opacity:var(--badge-ripple-opacity-start)}to{transform:scale(5.3);opacity:var(--badge-ripple-opacity-end)}}
.w-bm{display:inline-flex;align-items:center;gap:var(--badge-bookmark-gap);height:var(--badge-bookmark-height);padding:0 var(--badge-bookmark-paddingH);background:var(--badge-bookmark-bg);color:var(--badge-bookmark-color);font:600 12px/16px var(--fontFamilyMain);border-radius:var(--badge-bookmark-borderRadius)}
.w-bm .ic{width:var(--badge-bookmark-iconSize);height:var(--badge-bookmark-iconSize)}
.w-bm.p-top{border-top-left-radius:0;border-top-right-radius:0}.w-bm.p-bottom{border-bottom-left-radius:0;border-bottom-right-radius:0}.w-bm.p-left{border-top-left-radius:0;border-bottom-left-radius:0}.w-bm.p-right{border-top-right-radius:0;border-bottom-right-radius:0}
.w-bl{position:relative;display:inline-grid;place-items:center;width:40px;height:44px;color:var(--tt-white);font:600 14px/20px var(--fontFamilyMain)}.w-bl.sz-xs{width:28px;height:32px;font-size:12px}
.w-bl svg{position:absolute;inset:0;width:100%;height:100%}.w-bl span{position:relative}
/* tag */
.w-tag{display:inline-flex;align-items:center;gap:var(--tag-gap-md);height:var(--tag-size-md);padding:0 var(--tag-paddingH-md);border-radius:var(--tag-rounded-borderRadius-md);font:400 12px/16px var(--fontFamilyMain);white-space:nowrap;background:var(--tag-default-bg);color:var(--tag-default-color);box-shadow:inset 0 0 0 var(--tag-borderWidth) var(--tag-default-br)}
${['xs','sm','lg'].map(s=>`.w-tag.sz-${s}{height:var(--tag-size-${s});padding:0 var(--tag-paddingH-${s});gap:var(--tag-gap-${s});border-radius:var(--tag-rounded-borderRadius-${s})}.w-tag.sz-${s}.circle{border-radius:var(--tag-circle-borderRadius-${s})}.w-tag.sz-${s} .ic{width:var(--tag-iconSize-${s});height:var(--tag-iconSize-${s})}`).join('')}
.w-tag.sz-xs{font-size:10px;line-height:14px}.w-tag.circle{border-radius:var(--tag-circle-borderRadius-md)}.w-tag .ic{width:var(--tag-iconSize-md);height:var(--tag-iconSize-md)}.w-tag.strong{font-weight:600}
${['accent1','accent2','success','warning','danger','alt1','alt2','alt3'].map(v=>`.w-tag.v-${v}{background:var(--tag-${v}-bg);color:var(--tag-${v}-color);box-shadow:none}`).join('')}
.w-tag.v-alt4{background:var(--tag-alt4-bg);color:var(--tag-alt4-color);box-shadow:inset 0 0 0 1px var(--tag-alt4-br)}.w-tag.v-alt5{background:var(--tag-alt5-bg);color:var(--tag-alt5-color);box-shadow:inset 0 0 0 1px var(--tag-alt5-br)}
.w-tag .av{width:16px;height:16px;border-radius:50%;background:var(--bg-glass-light);margin-left:-6px}
/* status */
.w-st{display:inline-flex;align-items:center;gap:var(--status-tag-gap-sm);color:var(--status-label);font:400 14px/20px var(--fontFamilyMain);white-space:nowrap}
.w-st .ind{width:var(--status-indicatorSize);height:var(--status-indicatorSize);border-radius:var(--status-indicatorBorderRadius);background:var(--status-indicator-default);flex:none}
${['accent1','accent2','success','warning','danger'].map(v=>`.w-st.v-${v} .ind{background:var(--status-indicator-${v})}.w-st.t-tag.v-${v},.w-st.t-button.v-${v}{background:var(--status-bg-${v});box-shadow:inset 0 0 0 var(--status-tag-borderWidth) var(--status-br-${v})}`).join('')}
.w-st.t-tag{height:var(--status-tag-size-sm);padding:0 var(--status-tag-paddingH-sm);border-radius:var(--status-tag-rounded-borderRadius-sm);background:var(--status-bg-default);box-shadow:inset 0 0 0 var(--status-tag-borderWidth) var(--status-br-default);font-size:12px;line-height:16px}
.w-st.t-tag.xs{height:var(--status-tag-size-xs);padding:0 var(--status-tag-paddingH-xs);gap:var(--status-tag-gap-xs);border-radius:var(--status-tag-rounded-borderRadius-xs)}
.w-st.t-tag.circle{border-radius:var(--status-tag-circle-borderRadius-sm)}
.w-st.t-button{height:var(--status-btn-size-md);padding:0 var(--status-btn-paddingH-md);gap:var(--status-btn-gap-md);border-radius:var(--status-btn-borderRadius-md);background:var(--status-bg-default);box-shadow:var(--status-btn-boxShadow)!important;font-weight:600}
${SZ.map(s=>`.w-st.t-button.sz-${s}{height:var(--status-btn-size-${s});padding:0 var(--status-btn-paddingH-${s});gap:var(--status-btn-gap-${s});border-radius:var(--status-btn-borderRadius-${s})}`).join('')}
/* avatar */
.w-av{position:relative;display:inline-grid;place-items:center;flex:none;width:var(--avatar-size-md);height:var(--avatar-size-md);border-radius:var(--avatar-borderRadius-md);background:var(--avatar-bg);box-shadow:inset 0 0 0 var(--avatar-borderWidth) var(--avatar-br);color:var(--avatar-color);font:600 10px/14px var(--fontFamilyMain)}
${['sm','lg','xl'].map(s=>`.w-av.sz-${s}{width:var(--avatar-size-${s});height:var(--avatar-size-${s});border-radius:var(--avatar-borderRadius-${s})}.w-av.sz-${s} .ic{width:var(--avatar-iconSize-${s});height:var(--avatar-iconSize-${s})}`).join('')}
.w-av .ic{width:var(--avatar-iconSize-md);height:var(--avatar-iconSize-md)}
.w-av.sz-xl{font-size:20px;line-height:28px}.w-av.sz-lg{font-size:14px}.w-av.sz-sm{font-size:8px}
.w-av .img{position:absolute;inset:3px;border-radius:50%;background:linear-gradient(160deg,var(--product1Step-500),var(--product2Step-500));overflow:hidden}
.w-av .img::after{content:"";position:absolute;left:50%;top:26%;width:36%;height:36%;transform:translateX(-50%);border-radius:50%;background:var(--bg-glass-light);box-shadow:0 calc(var(--avatar-size-md) * .55) 0 calc(var(--avatar-size-md) * .2) var(--bg-glass-light)}
.w-av.no-prog .img{inset:0}
.w-av .ring{position:absolute;inset:-4px;width:calc(100% + 8px);height:calc(100% + 8px);transform:rotate(-90deg)}
.w-av .bdg{position:absolute;top:-4px;right:-6px}
.w-av .add{position:absolute;right:-4px;bottom:-4px;display:grid;place-items:center;width:var(--avatar-size-addSize);height:var(--avatar-size-addSize);border-radius:50%;background:var(--avatar-add-bg);transform:scale(.72);transform-origin:bottom right}
.w-av .add i{display:grid;place-items:center;width:24px;height:24px;border-radius:50%;background:var(--btn-accent-bg-default);box-shadow:var(--btn-accent-boxShadow);color:var(--btn-accent-color-default)}
/* divider */
.w-dv{display:flex;align-items:center;gap:var(--divider-gapH);width:min(420px,100%);color:var(--divider-color);font-size:14px;line-height:20px}
.w-dv::before,.w-dv::after{content:"";flex:1;border-top:var(--divider-borderWidth) solid var(--divider-br)}
.w-dv.l::before{flex:0 0 16px}.w-dv.r::after{flex:0 0 16px}.w-dv.nolabel{gap:0}
.w-dv.strong::before,.w-dv.strong::after{border-top-width:var(--borderWidth-strong)}.w-dv.dashed::before,.w-dv.dashed::after{border-top-style:dashed}
.w-dv.v{flex-direction:column;width:auto;height:160px;gap:var(--divider-gapV)}.w-dv.v::before,.w-dv.v::after{border-top:0;border-left:var(--divider-borderWidth) solid var(--divider-br)}.w-dv.v.strong::before,.w-dv.v.strong::after{border-left-width:var(--borderWidth-strong)}.w-dv.v.dashed::before,.w-dv.v.dashed::after{border-left-style:dashed}
/* propser */
.w-pr{display:inline-flex;align-items:center;gap:var(--propser-gap);flex-wrap:wrap;font-size:14px;line-height:20px;color:var(--propser-item-color)}
.w-pr.sm{font-size:12px;line-height:16px}.w-pr .sp{color:var(--propser-splitter)}
.w-pr-i{display:inline-flex;align-items:center;gap:var(--propser-item-gap)}.w-pr-i .ic{color:var(--propser-item-icon-default);width:var(--propser-item-iconSize-md);height:var(--propser-item-iconSize-md)}.w-pr.sm .ic{width:var(--propser-item-iconSize-sm);height:var(--propser-item-iconSize-sm)}
.w-pr-i.a1 .ic{color:var(--propser-item-icon-accent1)}.w-pr-i.a2 .ic{color:var(--propser-item-icon-accent2)}
/* list */
.w-list{display:flex;flex-direction:column;width:min(440px,100%);border-radius:var(--borderRadius-md);background:var(--bg-neutral-primary);padding:4px}
.w-li{position:relative;display:flex;align-items:center;gap:var(--list-item-gapH);min-height:var(--list-item-height);padding:var(--list-item-paddingV) var(--list-item-paddingH);border-radius:var(--borderRadius-md);color:var(--list-item-color-default);cursor:pointer;text-align:left}
.w-li.div::after{content:"";position:absolute;left:var(--list-item-paddingH);right:var(--list-item-paddingH);bottom:0;border-bottom:1px solid var(--divider-br)}.w-li:last-child::after{display:none}
.w-li:hover,.w-li.is-hover{background:var(--list-item-bg-hover)}.w-li.is-active,.w-li:active{background:var(--list-item-bg-active)}
.w-li.hl{background:var(--list-item-highlighted-bg-default)}.w-li.hl:hover{background:var(--list-item-highlighted-bg-hover)}
.w-li.shifted{align-items:flex-start}.w-li.shifted:hover{background:var(--list-item-shifted-bg-hover)}.w-li.shifted.hl{background:var(--list-item-shifted-highlighted-bg-default)}
.w-li.centered{justify-content:center;text-align:center}.w-li.centered .li-b{align-items:center;flex:0 1 auto}
.w-li.is-disabled{color:var(--list-item-color-disabled);cursor:not-allowed}
.w-li.is-focus{outline:var(--list-outline-borderWidth) solid var(--list-item-outline-color)}
.w-li .li-ad{width:var(--list-item-addon-label-width);display:flex;flex-direction:column;align-items:center;gap:2px;color:var(--list-item-color-icon-default);font-size:10px;line-height:14px}
.w-li .li-p{color:var(--list-item-color-icon-default)}
.li-b{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.li-b .ov,.li-b .un{font-size:10px;line-height:14px;color:var(--list-item-color-overline-default)}
.li-b .lb{font-size:14px;line-height:20px}.w-li.strong .lb{font-weight:600}
.li-b .ds{font-size:12px;line-height:16px;color:var(--list-item-color-subtitle-default)}
.li-s{display:flex;align-items:center;gap:var(--list-item-statusGap);color:var(--list-item-color-subtitle-default);font-size:12px}
.li-a{color:var(--list-item-arrow)}
.w-lin{display:flex;align-items:center;gap:var(--list-item-track-gap);width:min(440px,100%);padding:6px 0;font-size:14px;line-height:20px;color:var(--list-item-color-default)}
.w-lin .ic{width:var(--list-item-inline-iconSize);height:var(--list-item-inline-iconSize);color:var(--list-item-color-icon-default)}
.w-lin .tr{flex:1;border-bottom:1px dashed var(--list-item-track-color);transform:translateY(4px)}
.w-lin b{font-weight:600}.w-lin.a1 b{color:var(--list-item-color-accent1)}
.w-fade{width:min(440px,100%);overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 var(--list-fadeable-fader-width-lg),#000 calc(100% - var(--list-fadeable-fader-width-lg)),transparent);mask-image:linear-gradient(90deg,transparent,#000 var(--list-fadeable-fader-width-lg),#000 calc(100% - var(--list-fadeable-fader-width-lg)),transparent)}
.w-fade>div{display:flex;gap:8px;overflow-x:auto;padding:4px var(--list-fadeable-fader-width-lg);scrollbar-width:none}
/* table */
.w-tbl-w{width:100%;max-width:760px;overflow:auto;border-radius:var(--borderRadius-md);background:var(--bg-neutral-primary)}
.w-tbl{width:100%;border-collapse:collapse;min-width:620px;font-size:14px;line-height:20px}
.w-tbl th{height:var(--table-cell-size);padding:0 var(--table-cell-paddingH);text-align:left;background:var(--table-header-bg);color:var(--table-header-color-default);font-weight:600;font-size:12px;white-space:nowrap}
.w-tbl th .th{display:flex;align-items:center;gap:6px}
.w-tbl th button{display:grid;place-items:center;width:24px;height:24px;border:0;border-radius:12px;background:none;color:var(--table-header-action-color-default);cursor:pointer}.w-tbl th button:hover{color:var(--table-header-action-color-hover)}.w-tbl th button.on{color:var(--table-header-action-color-checked)}
.w-tbl th button .ic{width:var(--table-header-actionSize);height:var(--table-header-actionSize)}
.w-tbl th.ctl,.w-tbl td.ctl{width:52px;padding-right:0}
.w-tbl td{height:var(--table-cell-size);padding:var(--table-cell-paddingV) var(--table-cell-paddingH);border-bottom:var(--table-cell-borderWidth) solid var(--table-cell-br);color:var(--table-cell-color-default)}
.w-tbl tr:hover td{background:var(--table-cell-bg-hover)}
.w-tbl.striped tbody tr:nth-child(even) td{background:var(--table-cell-bg-striped)}
.w-tbl tr.chk td{background:var(--table-cell-checked-bg-default)}.w-tbl tr.hl td{background:var(--table-cell-highlighted-bg-default)}
.w-tbl td .cell{display:flex;align-items:center;gap:12px}.w-tbl td .un{display:block;font-size:12px;line-height:16px;color:var(--table-cell-color-underline)}
.w-tbl td.pos{color:var(--table-cell-color-positive);font-weight:600}.w-tbl td.neg{color:var(--table-cell-color-negative);font-weight:600}.w-tbl td.rec{color:var(--table-cell-color-received);font-weight:600}
.w-tbl td.r,.w-tbl th.r{text-align:right}.w-tbl th.r .th{justify-content:flex-end}
.w-tbl .pm{width:32px;height:24px;border-radius:4px;display:grid;place-items:center;background:var(--fill-default);color:var(--tt-secondary)}`;
function BADGE_C(o){return `<span class="${cls('w-bc','v-'+tv(o.variant||'Default'),o.size=='sm'&&'sz-sm')}">${esc(o.label??'0')}</span>`}
function BADGE_N(o={}){return `<span class="${cls('w-bn','v-'+tv(o.variant||'Important'),o.ripple&&'ripple')}"></span>`}
function TAG(o){return `<span class="${cls('w-tag','v-'+tv(o.variant||'Default'),'sz-'+(o.size||'md'),o.circle&&'circle',o.strong&&'strong')}">${o.avatar?'<i class="av"></i>':''}${o.icon?I(o.icon,16):''}${esc(o.label||'Label')}</span>`}
function STATUS(o){const t=slug(o.type||'Default');return `<span class="${cls('w-st','t-'+t,'v-'+tv(o.variant||'Default'),t=='button'&&'sz-'+(o.size||'md'),t=='tag'&&o.size=='xs'&&'xs',o.circle&&'circle')}">${o.indicator!==false?'<i class="ind"></i>':''}${o.icon?I(o.icon,16):''}${esc(o.label||'Label')}</span>`}
function RING(pct,col,w=3){const r=18-w/2,c=2*Math.PI*r;return `<svg class="ring" viewBox="0 0 36 36"><circle cx="18" cy="18" r="${r}" fill="none" style="stroke:var(--progress-track-color);stroke-width:${w}"/><circle cx="18" cy="18" r="${r}" fill="none" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c*(1-pct/100)}" style="stroke:${col||'var(--progress-circle-indicator-default)'};stroke-width:${w}"/></svg>`}
function AVATAR(o){const s=o.size||'md',t=o.type||'Label';return `<span class="${cls('w-av','sz-'+s,!o.progress&&'no-prog')}">${t=='Image'?'<i class="img"></i>':t=='Icon'?I('user',20):esc(o.label||'SW')}${o.progress?RING(o.pct??68,null,2.2):''}${o.badge?`<span class="bdg">${BADGE_C({variant:'Important',size:'sm',label:o.badge})}</span>`:''}${o.add?`<span class="add"><i>${I('plus',12)}</i></span>`:''}</span>`}
const HEX=c=>`<svg viewBox="0 0 40 44"><path d="M20 1.5l16.5 9.5v22L20 42.5 3.5 33V11z" style="fill:${c}"/><path d="M20 1.5l16.5 9.5v22L20 42.5 3.5 33V11z" fill="none" stroke-width="2" style="stroke:var(--bg-glass-light)"/></svg>`;
reg({id:'badge',name:'Badge',group:'data',figma:'5:2638',alias:'counter notifier bookmark loyalty',
 desc:'Counters, notifier dots (with ripple), bookmark labels and loyalty hexagons. Click the counter to increase it.',
 props:[{n:'type',t:'enum',o:['Counter','Notifier','Bookmark','Loyalty'],d:'Counter'},{n:'variant',t:'enum',o:['Default','Accent 1','Accent 2','Important','Success'],d:'Important',when:p=>p.type=='Counter'||p.type=='Notifier'},{n:'size',t:'enum',o:['md','sm'],d:'md',when:p=>p.type=='Counter'},{n:'label',t:'text',d:'3',when:p=>p.type=='Counter'},{n:'ripple',t:'bool',d:true,desc:'Pulse ring (not available for Default).',when:p=>p.type=='Notifier'},
  {n:'position',t:'enum',o:['Top','Bottom','Left','Right'],d:'Left',desc:'Attached side — its corners stay square.',when:p=>p.type=='Bookmark'},{n:'lable',t:'text',d:'Bestseller',when:p=>p.type=='Bookmark'},{n:'loyaltyType',t:'enum',o:['Current','Next','Past'],d:'Current',when:p=>p.type=='Loyalty'}],
 render:p=>{if(p.type=='Counter')return `<span data-inc style="cursor:pointer" title="Click to increase">${BADGE_C({variant:p.variant,size:p.size,label:p.label})}</span>`;
  if(p.type=='Notifier')return `<span style="display:inline-flex;align-items:center;gap:12px;color:var(--tt-secondary)">${BADGE_N({variant:p.variant,ripple:p.ripple&&p.variant!='Default'})} New message</span>`;
  if(p.type=='Bookmark')return `<span class="w-bm p-${slug(p.position)}">${I('fire',16)}${esc(p.lable)}</span>`;
  const col={Current:'var(--success)',Next:'var(--product2)',Past:'var(--toneStep-500)'}[p.loyaltyType];return `<span class="w-bl">${HEX(col)}<span>07</span></span><span class="w-bl sz-xs">${HEX(col)}<span>08</span></span>`},
 mount:(el,p,set)=>{const c=$('[data-inc]',el);c&&c.addEventListener('click',()=>{const n=parseInt(p.label)||0;set({label:String(n>=99?1:n+1)})})},
 gallery:()=>`<div class="gr">${['Default','Accent 1','Accent 2','Important','Success'].map(v=>BADGE_C({variant:v,label:'12'})+BADGE_C({variant:v,size:'sm',label:'5'})).join('')}</div><div class="gr">${['Default','Accent 1','Accent 2','Important','Success'].map(v=>BADGE_N({variant:v,ripple:v!='Default'})).join('<span style="width:12px"></span>')}</div><div class="gr">${['Top','Bottom','Left','Right'].map(x=>`<span class="w-bm p-${slug(x)}">${I('fire',16)}${x}</span>`).join('')}</div>`,galCls:'rows',
 notes:['Counter and Notifier always carry the bevel effect — a volumetric capsule, not flat.','Ripple exists for 4 of 5 colors (no Default). Opacity animates 0.64 → 0 (<code>badge.ripple.opacity</code>).','Badge/Bookmark prop is spelled “lable” in Figma. Badge/Loyalty shapes are image assets per type.'],
 tokens:['badge.counter.*','badge.notifier.*','badge.bg.*','badge.counter.color.*','badge.bookmark.*','badge.ripple.opacity.*','bevel']});
reg({id:'tag',name:'Tag',group:'data',figma:'8:41426',alias:'label pill game tag',
 desc:'Static label in 11 color variants × 4 sizes. Used across all cards and game thumbnails.',
 props:[{n:'variant',t:'enum',o:TAGV,d:'Accent 1'},{n:'size',t:'enum',o:['xs','sm','md','lg'],d:'md'},{n:'circle',t:'bool',d:false,desc:'Full pill radius.'},{n:'strong',t:'bool',d:false,desc:'SemiBold label.'},{n:'avatar',t:'bool',d:false},{n:'icon',t:'bool',d:true},{n:'lable',t:'text',d:'Exclusive'}],
 render:p=>TAG({variant:p.variant,size:p.size,circle:p.circle,strong:p.strong,avatar:p.avatar,icon:p.icon?'sparkle':null,label:p.lable}),
 gallery:()=>`<div class="gr">${TAGV.map(v=>TAG({variant:v,label:v})).join('')}</div><div class="gr">${['xs','sm','md','lg'].map(s=>TAG({variant:'Success',size:s,label:'Size '+s,icon:'check'})).join('')}${TAG({variant:'Accent 2',circle:true,label:'Circle'})}${TAG({variant:'Warning',strong:true,label:'Strong'})}</div>`,galCls:'rows',
 notes:['Game tags on Thumb: Top = Accent 1, New = Success, Popular = Warning, Live = Alt 3, Exclusive = Alt 2, Jackpot = Alt 1.','Red/bright colors only for critical states (Danger), per the non-promotional DS style.'],
 tokens:['tag.default.*','tag.accent1.*','tag.accent2.*','tag.success.*','tag.warning.*','tag.danger.*','tag.alt1.*','tag.alt2.*','tag.alt3.*','tag.alt4.*','tag.alt5.*','tag.size.*','tag.paddingH.*','tag.rounded.borderRadius.*','tag.circle.borderRadius.*']});
reg({id:'status',name:'Status',group:'data',figma:'8:41421',
 desc:'State indicator in three weights: Default (inline), Tag (pill) and Button (bevel, CTA-like but not clickable).',
 props:[{n:'type',t:'enum',o:['Default','Tag','Button'],d:'Tag'},{n:'variant',t:'enum',o:['Default','Accent 1','Accent 2','Success','Warning','Danger'],d:'Success'},{n:'size',t:'enum',o:SZ,d:'md',when:p=>p.type=='Button'},{n:'circle',t:'bool',d:false,when:p=>p.type=='Tag'},{n:'indicator',t:'bool',d:true},{n:'icon',t:'bool',d:false},{n:'label',t:'text',d:'Verified'}],
 render:p=>STATUS({type:p.type,variant:p.variant,size:p.size,circle:p.circle,indicator:p.indicator,icon:p.icon?'check-circle':null,label:p.label}),
 gallery:()=>['Default','Tag','Button'].map(t=>`<div class="gr">${['Default','Accent 1','Accent 2','Success','Warning','Danger'].map(v=>STATUS({type:t,variant:v,label:v,size:'sm'})).join('')}</div>`).join(''),galCls:'rows',
 notes:['Only Status/Button has the bevel effect.','Note the token mapping: <code>status.indicator.accent1</code> is pink and <code>accent2</code> is blue.'],
 tokens:['status.indicator.*','status.label','status.bg.*','status.br.*','status.tag.*','status.btn.*','status.btn.boxShadow']});
reg({id:'avatar',name:'Avatar',group:'data',figma:'8:69444',alias:'user profile picture',
 desc:'User picture, icon or initials with optional progress ring, counter badge and add button.',
 props:[{n:'size',t:'enum',o:['sm','md','lg','xl'],d:'xl'},{n:'type',t:'enum',o:['Image','Icon','Label'],d:'Label'},{n:'label',t:'text',d:'SW',when:p=>p.type=='Label'},{n:'progress',t:'bool',d:true,desc:'Progress/Circle ring (e.g. VIP level).'},{n:'pct',t:'range',min:0,max:100,d:68,when:p=>p.progress},{n:'badge',t:'bool',d:false},{n:'add',t:'bool',d:false,desc:'Accent “+” button.'}],
 render:p=>AVATAR({size:p.size,type:p.type,label:p.label,progress:p.progress,pct:p.pct,badge:p.badge?'2':'',add:p.add}),
 gallery:()=>['sm','md','lg','xl'].map(s=>AVATAR({size:s,type:'Label'})+AVATAR({size:s,type:'Icon'})+AVATAR({size:s,type:'Image'})).join(''),
 notes:['The ring is the same arc as Progress/Circle; the badge is a real Badge/Counter (Important).','The add button is always the Accent gradient.'],
 tokens:['avatar.*','progress.circle.indicator.*','progress.track.color'],uses:['progress','badge']});
reg({id:'divider',name:'Divider',group:'data',figma:'8:13508',alias:'separator line',
 desc:'Horizontal or vertical separator with an optional label.',
 props:[{n:'vertical',t:'bool',d:false},{n:'layout',t:'enum',o:['Center','Left','Right'],d:'Center',when:p=>!p.vertical},{n:'strong',t:'bool',d:false},{n:'dashed',t:'bool',d:false},{n:'label',t:'bool',d:true},{n:'text',t:'text',d:'or',when:p=>p.label}],
 render:p=>`<div class="${cls('w-dv',p.vertical&&'v',p.layout=='Left'&&'l',p.layout=='Right'&&'r',p.strong&&'strong',p.dashed&&'dashed',!p.label&&'nolabel')}" role="separator">${p.label?`<span>${esc(p.text)}</span>`:''}</div>`,
 notes:['Vertical divider (layout “🚧” in Figma) is the one used inside Card/Tournament and Card/Lottery with label off.'],tokens:['divider.*']});
reg({id:'propser',name:'Propser',group:'data',figma:'8:53656',alias:'meta row properties',
 desc:'Inline metadata row “Label • Label” with icons. Built into List/Item.',
 props:[{n:'size',t:'enum',o:['md','sm'],d:'md'},{n:'items',t:'range',min:1,max:5,d:3},{n:'splitter',t:'text',d:'•'},{n:'icons',t:'bool',d:true}],
 render:p=>{const it=[['Pragmatic Play','dice',''],['RTP 96.5%','target','a1'],['High volatility','flash','a2'],['Megaways','sparkle',''],['Buy bonus','gift','']].slice(0,p.items);return `<div class="${cls('w-pr',p.size=='sm'&&'sm')}">${it.map(([l,ic,v],i)=>`${i?`<span class="sp">${esc(p.splitter)}</span>`:''}<span class="w-pr-i ${v}">${p.icons?I(ic,16):''}${l}</span>`).join('')}</div>`},
 notes:['Every item adds its own splitter in front. Splitter is editable text.','Not to be confused with Paginator.'],tokens:['propser.*']});
reg({id:'list',name:'List',group:'data',figma:'8:36647',alias:'list item row',
 desc:'List/Item constructor (Default), Label ⋯ Value rows (Inline) and mask-faded horizontal lists (Fadeable).',
 props:[{n:'type',t:'enum',o:['Default','Inline','Fadeable'],d:'Default'},{n:'state',t:'enum',o:['Default','Hover','Active','Focus','Disabled'],d:'Default',when:p=>p.type=='Default'},{n:'shifted',t:'bool',d:false,desc:'Addon column on the left, content top-aligned.',when:p=>p.type=='Default'},{n:'centered',t:'bool',d:false,when:p=>p.type=='Default'},{n:'labelSize',t:'enum',o:['Default','Strong'],d:'Strong',when:p=>p.type=='Default'},{n:'highlighted',t:'bool',d:false,when:p=>p.type=='Default'},
  {n:'prefix',t:'bool',d:true,when:p=>p.type=='Default'},{n:'overline',t:'bool',d:false,when:p=>p.type=='Default'},{n:'underline',t:'bool',d:false,when:p=>p.type=='Default'},{n:'propser',t:'bool',d:false,when:p=>p.type=='Default'},{n:'status',t:'bool',d:true,when:p=>p.type=='Default'},{n:'description',t:'bool',d:true,when:p=>p.type=='Default'},{n:'arrow',t:'bool',d:true,when:p=>p.type=='Default'},{n:'divider',t:'bool',d:true,when:p=>p.type=='Default'},
  {n:'variant',t:'enum',o:['Default','Accent1'],d:'Default',when:p=>p.type=='Inline'},{n:'counter',t:'bool',d:true,when:p=>p.type=='Inline'},{n:'sel',t:'range',min:0,max:2,d:0,ctl:false}],
 render:p=>{if(p.type=='Inline')return `<div style="width:min(440px,100%)">${[['Wager','x35','trophy'],['Min deposit','$20','wallet'],['Max bet','$5','coin']].map(([l,v,ic],i)=>`<div class="w-lin ${p.variant=='Accent1'?'a1':''}">${I(ic,20)}<span>${l}</span>${p.counter&&i==0?BADGE_C({variant:'Accent 2',size:'sm',label:'2'}):''}<i class="tr"></i><b>${v}</b></div>`).join('')}</div>`;
  if(p.type=='Fadeable')return `<div class="w-fade"><div>${['Slots','Live','Megaways','Jackpots','Table games','Crash','Bonus buy','New','Popular'].map((l,i)=>CHIP({label:l,size:'sm',checked:i==p.sel,set:'sel='+i})).join('')}</div></div>`;
  const rows=[['Deposit','Visa •••• 4417','Completed','success'],['Withdrawal','Bank transfer','Pending','warning'],['Bonus','Welcome pack','Expired','danger']];
  return `<div class="w-list">${rows.map(([l,d,s,v],i)=>`<div role="button" tabindex="0" class="${cls('w-li',p.divider&&'div',p.shifted&&'shifted',p.centered&&'centered',p.labelSize=='Strong'&&'strong',(p.highlighted&&i==p.sel)&&'hl',i==0&&st(p))}" data-set="sel=${i}">${p.shifted?`<span class="li-ad">${I(['wallet','arrow-right','gift'][i],24)}<span>${['12:40','09:15','Yesterday'][i]}</span></span>`:p.prefix?`<span class="li-p">${I(['wallet','arrow-right','gift'][i],24)}</span>`:''}<span class="li-b">${p.overline?'<span class="ov">Today</span>':''}<span class="lb">${l}</span>${p.propser?`<span class="w-pr sm"><span class="w-pr-i">$250</span><span class="sp">•</span><span class="w-pr-i">USD</span></span>`:''}${p.description?`<span class="ds">${d}</span>`:''}${p.underline?'<span class="un">ID 48213</span>':''}</span>${p.status?`<span class="li-s">${STATUS({type:'Default',variant:v=='danger'?'Danger':v=='warning'?'Warning':'Success',label:s})}</span>`:''}${p.arrow?`<span class="li-a">${I('chevron-right',20)}</span>`:''}</div>`).join('')}</div>`},
 notes:['List/Item — Default is a constructor like Card/Default: combine slots, do not create new layouts.','Item-Inline embeds a real Badge/Counter; its track is a dashed line.','Fadeable uses a CSS <b>mask</b>, not the Fader gradient — different techniques, do not unify.'],
 tokens:['list.item.*','list.item.highlighted.bg.*','list.item.shifted.bg.*','list.item.track.*','list.fadeable.fader.width.*'],uses:['propser','status','badge','divider']});
reg({id:'table',name:'Table',group:'data',figma:'8:100331',alias:'grid transactions data table',
 desc:'Cell components for transaction, payment and bet tables. Sort by clicking a column, select rows with checkboxes.',
 props:[{n:'variant',t:'enum',o:['Default','Transaction'],d:'Transaction',desc:'Default cells or Transaction (semantic amount colors).'},{n:'control',t:'bool',d:true,desc:'Checkbox column (Cell/Header Control).'},{n:'striped',t:'bool',d:false},{n:'highlighted',t:'bool',d:false,desc:'Highlight the first row.'},{n:'underline',t:'bool',d:true,desc:'Secondary line under the label.'},{n:'sort',t:'enum',o:['none','asc','desc'],d:'desc',ctl:false},{n:'chk',t:'text',d:'1',ctl:false}],
 render:p=>{let rows=[{id:0,d:'21 Sep 2026',t:'Deposit',m:'Visa',a:250,s:'Completed'},{id:1,d:'20 Sep 2026',t:'Withdrawal',m:'Bank',a:-120,s:'Pending'},{id:2,d:'18 Sep 2026',t:'Bonus',m:'Welcome',a:50,s:'Completed'},{id:3,d:'15 Sep 2026',t:'Deposit',m:'Crypto',a:1000,s:'Completed'},{id:4,d:'12 Sep 2026',t:'Withdrawal',m:'Visa',a:-300,s:'Declined'}];
  if(p.sort!='none')rows=rows.slice().sort((a,b)=>p.sort=='asc'?a.a-b.a:b.a-a.a);const chk=String(p.chk).split(',').filter(Boolean);const all=chk.length==rows.length;
  return `<div class="w-tbl-w"><table class="${cls('w-tbl',p.striped&&'striped')}"><thead><tr>${p.control?`<th class="ctl">${CB({checked:all,indeterminate:chk.length&&!all,label:false,attrs:''}).replace('class="w-cb','data-set="chk='+(all?'':rows.map(r=>r.id).join(','))+'" class="w-cb')}</th>`:''}<th><span class="th">Date</span></th><th><span class="th">Type<button type="button" aria-label="Filter">${I('filter',16)}</button></span></th><th><span class="th">Method<button type="button" aria-label="Search">${I('search',16)}</button></span></th><th class="r"><span class="th">Amount<button type="button" class="on" data-cycle="sort|desc|asc|none" aria-label="Sort">${I('sort',16)}</button></span></th><th><span class="th">Status</span></th></tr></thead>
  <tbody>${rows.map((r,i)=>{const on=chk.includes(String(r.id));const nc=on?chk.filter(x=>x!=r.id):[...chk,r.id];return `<tr class="${cls(on&&'chk',p.highlighted&&i==0&&'hl')}">${p.control?`<td class="ctl">${CB({checked:on,label:false}).replace('class="w-cb',`data-set="chk=${nc.join(',')}" class="w-cb`)}</td>`:''}<td>${r.d}${p.underline?`<span class="un">ID 48${r.id}13</span>`:''}</td><td><span class="cell">${I(r.t=='Deposit'?'wallet':r.t=='Bonus'?'gift':'arrow-right',20)}${r.t}</span></td><td><span class="cell"><i class="pm">${I(r.m=='Crypto'?'coin':'wallet',14)}</i>${r.m}</span></td><td class="r ${p.variant=='Transaction'?(r.t=='Bonus'?'rec':r.a>0?'pos':'neg'):''}">${r.a>0?'+':'−'}$${Math.abs(r.a).toLocaleString('en-US')}</td><td>${STATUS({type:'Default',variant:r.s=='Completed'?'Success':r.s=='Pending'?'Warning':'Danger',label:r.s})}</td></tr>`}).join('')}</tbody></table></div>`},
 notes:['Table is still being finished by designers: sticky header/columns, sort hover, confirmation popups and expand arrows are TODO in Figma.','Row highlight and row select are row-level props passed through every cell type.','Transaction colors: positive = accent1, negative = danger, received = success.'],
 tokens:['table.header.*','table.cell.*','table.cell.color.*','table.cell.checked.bg.*'],uses:['checkbox','status','avatar']});
