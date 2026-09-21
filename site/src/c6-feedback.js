/* ===== Feedback: Alert, Notification, Empty, Spinner, Skeleton · Overlays: Tooltip, Dropdown, Modal, Drawer ===== */
CSS+=`
.stage .t1,.stage .t2,.stage .t3,.stage .t4,.stage .t5,.stage .d3,.hero-live .t4{margin:0}
.stage.clip{overflow:hidden}
/* spinner */
.w-spin{display:inline-block;flex:none;box-sizing:border-box;width:var(--spinner-size-md);height:var(--spinner-size-md);border-radius:50%;border:var(--spinner-borderWidth-md) solid var(--spinner-track);border-top-color:var(--spinner-thumb-default);animation:w-rot .8s linear infinite}
.w-spin.acc{border-top-color:var(--spinner-thumb-accent1)}
.w-spin.sz-xs{width:var(--spinner-size-xs);height:var(--spinner-size-xs);border-width:var(--spinner-borderWidth-xs)}
.w-spin.sz-sm{width:var(--spinner-size-sm);height:var(--spinner-size-sm);border-width:var(--spinner-borderWidth-sm)}
.w-spin.sz-lg{width:var(--spinner-size-lg);height:var(--spinner-size-lg);border-width:var(--spinner-borderWidth-lg)}
@keyframes w-rot{to{transform:rotate(360deg)}}
/* skeleton */
.w-sk{display:block;border-radius:var(--skeleton-borderRadius);background:var(--skeleton-start)}
.w-sk.anim{background:linear-gradient(90deg,var(--skeleton-start) 0%,var(--skeleton-end) 40%,var(--skeleton-start) 80%);background-size:300% 100%;animation:w-shim 1.4s ease-in-out infinite}
@keyframes w-shim{0%{background-position:100% 0}100%{background-position:-50% 0}}
.w-sk.c{border-radius:50%}
.sk-card{display:flex;flex-direction:column;gap:12px;width:240px;padding:12px;border-radius:var(--card-borderRadius,16px);background:var(--bg-neutral-primary)}
.sk-row{display:flex;align-items:center;gap:12px;width:min(420px,100%)}.sk-col{display:flex;flex-direction:column;gap:8px;flex:1}
.sk-grid{display:grid;grid-template-columns:repeat(4,96px);gap:8px}
/* alert */
.w-al{position:relative;display:flex;align-items:flex-start;gap:var(--alert-gap);width:min(480px,100%);padding:var(--alert-padding);border-radius:var(--alert-borderRadius);color:var(--alert-color);font-size:12px;line-height:16px;box-sizing:border-box}
.w-al>.ic{flex:none;width:var(--alert-iconSize);height:var(--alert-iconSize)}
.w-al.out{box-shadow:inset 0 0 0 var(--alert-borderWidth) var(--al-br)}
.w-al .tx{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0;padding-top:2px}.w-al .tx b{font-weight:600}.w-al .tx span{color:var(--tt-secondary)}
.w-al .acts{display:flex;gap:8px;margin-top:8px}
.w-al.x{padding-right:var(--alert-shift)}.w-al .cls{position:absolute;top:-1px;right:-1px}
.w-al.col{width:auto;padding:var(--alert-collapse-padding)}
${['success','warning','error','info','tip'].map(v=>`.w-al.v-${v}{background:var(--alert-bg-${v});--al-br:var(--alert-br-${v})}.w-al.v-${v}>.ic{color:var(--alert-icon-${v})}`).join('')}
.w-al.glob{width:min(720px,100%);border-radius:0}
.restore{display:flex;flex-direction:column;align-items:center;gap:12px;color:var(--tt-tertiary);font-size:12px}
/* notification */
.w-ni{display:grid;place-items:center;position:relative;flex:none;width:var(--notification-indicator-size);height:var(--notification-indicator-size);border-radius:50%;background:var(--ni-bg);color:var(--ni-c);box-shadow:0 0 0 4px var(--ni-br)}
.w-ni .ic{width:var(--notification-indicator-iconSize);height:var(--notification-indicator-iconSize)}
.w-ni svg.rg{position:absolute;inset:-6px;width:calc(100% + 12px);height:calc(100% + 12px);transform:rotate(-90deg)}
${['success','warning','danger','info'].map(v=>`.w-ni.v-${v}{--ni-bg:var(--notification-indicator-${v}-bg);--ni-c:var(--notification-indicator-${v}-color);--ni-br:var(--notification-indicator-${v}-br)}`).join('')}
.w-ngi{position:relative;display:flex;gap:var(--notification-item-gap);width:100%;min-width:var(--notification-global-minWidth);max-width:var(--notification-global-maxWidth);padding:var(--notification-item-paddingV) var(--notification-item-paddingR) var(--notification-item-paddingV) var(--notification-item-paddingL);border-radius:var(--notification-global-borderRadius);background:var(--notification-global-bg);box-shadow:var(--notification-shadow);box-sizing:border-box;font-size:12px;line-height:16px;animation:w-nin .28s cubic-bezier(.2,.8,.2,1)}
.w-ngi .tx{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0}.w-ngi b{color:var(--notification-title);font-weight:600}.w-ngi span{color:var(--notification-message)}
.w-ngi .ico{flex:none;width:var(--notification-global-iconSize);height:var(--notification-global-iconSize);color:var(--tt-accent1)}
.w-ngi .cov{flex:none;width:var(--notification-global-image-size);height:var(--notification-global-image-size);border-radius:var(--notification-global-image-borderRadius)}
.w-ngi .cls{position:absolute;top:8px;right:8px}.w-ngi .w-btn.v-primary{margin-top:8px;align-self:flex-start}
.w-ngi.stack{margin-bottom:12px}.w-ngi.stack::before,.w-ngi.stack::after{content:"";position:absolute;left:12px;right:12px;bottom:-6px;height:12px;border-radius:0 0 12px 12px;background:var(--notification-edge-bg);-webkit-backdrop-filter:blur(var(--notification-edge-backgroundBlur));backdrop-filter:blur(var(--notification-edge-backgroundBlur));z-index:-1}
.w-ngi.stack::after{left:24px;right:24px;bottom:-12px;opacity:.6}
.w-ngi.out{animation:w-nout .22s ease-in forwards}
@keyframes w-nin{from{opacity:0;transform:translateY(-12px) scale(.98)}}@keyframes w-nout{to{opacity:0;transform:translateX(24px)}}
.w-scr{position:relative;width:100%;height:420px;border-radius:var(--borderRadius-lg,16px);background:var(--layout-bg);box-shadow:inset 0 0 0 1px var(--br-secondary);overflow:hidden}
.w-scr .bar{display:flex;align-items:center;gap:8px;height:48px;padding:0 16px;border-bottom:1px solid var(--br-secondary);color:var(--tt-tertiary);font-size:12px}
.w-scr .bar i{width:10px;height:10px;border-radius:50%;background:var(--fill-darker)}
.w-scr .cta{position:absolute;left:50%;top:55%;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:12px;color:var(--tt-tertiary);font-size:12px;text-align:center}
.w-ngs{position:absolute;display:flex;flex-direction:column;gap:var(--notification-gap);width:min(360px,calc(100% - 16px));z-index:3}
.w-ngs.top{top:calc(48px + 16px)}.w-ngs.bottom{bottom:var(--notification-marginB);flex-direction:column-reverse}
.w-ngs.left{left:var(--notification-marginH)}.w-ngs.right{right:var(--notification-marginH)}.w-ngs.center{left:50%;transform:translateX(-50%);align-items:center}
.w-nloc{position:relative;width:260px;height:300px;border-radius:16px;overflow:hidden;background:var(--bg-neutral-primary)}
.w-nloc .w-ph{position:absolute;inset:0;width:100%;height:100%;border-radius:0}
.w-nloc .pan{position:absolute;left:8px;right:8px;bottom:8px;display:flex;flex-direction:column;gap:var(--notification-local-gap);padding:var(--notification-local-padding);border-radius:var(--notification-local-borderRadius);background:var(--notification-local-bg);-webkit-backdrop-filter:blur(var(--glass-blur-sm));backdrop-filter:blur(var(--glass-blur-sm));color:var(--tt-primary);font-size:12px;line-height:16px;animation:w-nin .25s}
.w-nloc .pan b{padding-right:var(--notification-local-titleShift);font:600 14px/20px var(--fontFamilyMain)}.w-nloc .pan .cd{color:var(--notification-local-countdown)}
.w-nloc .pan .cls{position:absolute;top:8px;right:8px}
/* empty */
.w-emp{display:flex;flex-direction:column;align-items:center;gap:var(--empty-gap);max-width:var(--empty-maxWidth);text-align:center}
.w-emp .ic.big{width:var(--empty-iconSize);height:var(--empty-iconSize);color:var(--empty-icon)}
.w-emp .w-ph{border-radius:var(--empty-imageBorderRadius)}
.w-emp .tx{display:flex;flex-direction:column;gap:var(--empty-textGap)}.w-emp .tt{color:var(--empty-title)}.w-emp .ds{color:var(--empty-description);font-size:12px;line-height:16px}
.w-emp.sm .tt{font:600 12px/16px var(--fontFamilyMain)}.w-emp.lg .ds{font-size:14px;line-height:20px}
.w-emp .acts{display:flex;gap:8px}
/* popover placement (Tooltip, Dropdown) */
.w-anc{position:relative;display:inline-flex}
.w-pop{position:absolute;z-index:6}
.w-pop.s-top{bottom:calc(100% + var(--pg,4px) + 6px)}.w-pop.s-bottom{top:calc(100% + var(--pg,4px) + 6px)}
.w-pop.s-left{right:calc(100% + var(--pg,4px) + 6px)}.w-pop.s-right{left:calc(100% + var(--pg,4px) + 6px)}
.w-pop.s-top.a-left,.w-pop.s-bottom.a-left{left:0}.w-pop.s-top.a-right,.w-pop.s-bottom.a-right{right:0}
.w-pop.s-top.a-center,.w-pop.s-bottom.a-center{left:50%;transform:translateX(-50%)}
.w-pop.s-left.a-top,.w-pop.s-right.a-top{top:0}.w-pop.s-left.a-bottom,.w-pop.s-right.a-bottom{bottom:0}
.w-pop.s-left.a-center,.w-pop.s-right.a-center{top:50%;transform:translateY(-50%)}
.w-pop .arr{position:absolute;width:12px;height:12px;background:inherit;transform:rotate(45deg);border-radius:2px}
.w-pop.s-top .arr{bottom:-5px}.w-pop.s-bottom .arr{top:-5px}.w-pop.s-left .arr{right:-5px}.w-pop.s-right .arr{left:-5px}
.w-pop.s-top.a-left .arr,.w-pop.s-bottom.a-left .arr{left:calc(var(--aw,40px)/2 - 6px)}.w-pop.s-top.a-right .arr,.w-pop.s-bottom.a-right .arr{right:calc(var(--aw,40px)/2 - 6px)}
.w-pop.s-top.a-center .arr,.w-pop.s-bottom.a-center .arr{left:calc(50% - 6px)}
.w-pop.s-left.a-top .arr,.w-pop.s-right.a-top .arr{top:calc(var(--ah,40px)/2 - 6px)}.w-pop.s-left.a-bottom .arr,.w-pop.s-right.a-bottom .arr{bottom:calc(var(--ah,40px)/2 - 6px)}
.w-pop.s-left.a-center .arr,.w-pop.s-right.a-center .arr{top:calc(50% - 6px)}
/* tooltip */
.w-tt{--pg:var(--tooltip-gap);width:max-content;max-width:var(--tooltip-maxWidth);padding:var(--tooltip-paddingV) var(--tooltip-paddingH);border-radius:var(--tooltip-borderRadius);background:var(--tooltip-bg);color:var(--tooltip-color);box-shadow:var(--tooltip-boxShadow);font-size:12px;line-height:16px;text-align:left;pointer-events:none;opacity:0;visibility:hidden;transition:opacity .15s,visibility .15s}
.w-tt .cu{display:flex;align-items:center;gap:8px;margin-top:6px}
.w-anc:hover>.w-tt,.w-anc:focus-within>.w-tt,.w-tt.show{opacity:1;visibility:visible}
.tt-grid{display:grid;grid-template-columns:repeat(3,auto);gap:88px 150px;padding:40px 0;justify-items:center}
/* dropdown */
.w-dd{--pg:var(--dropdown-gap);min-width:220px;padding:var(--dropdown-paddingV) 0;border-radius:var(--dropdown-borderRadius);background:var(--dropdown-bg);box-shadow:0 var(--shadow-y-lg) var(--shadow-blur-lg) var(--shadow-default);box-sizing:border-box;max-height:236px;overflow:auto;scrollbar-width:thin}
.w-dd.hug{width:100%;min-width:0}.w-anc.full{display:flex;width:280px}
.w-dd.rounded{padding-left:8px;padding-right:8px}
.w-ddi{display:flex;align-items:center;gap:var(--dropdown-item-gap);width:100%;min-height:var(--dropdown-item-size);padding:var(--dropdown-item-paddingV) var(--dropdown-item-paddingH);border:0;background:none;color:var(--dropdown-item-color-default);font:400 14px/20px var(--fontFamilyMain);text-align:left;cursor:pointer;box-sizing:border-box}
.w-dd.rounded .w-ddi{padding:var(--dropdown-item-paddingV) var(--dropdown-item-rounded-paddingH);border-radius:var(--borderRadius-sm,8px)}
.w-ddi>.ic{flex:none;width:var(--dropdown-item-iconSize);height:var(--dropdown-item-iconSize)}
.w-ddi .lb{flex:1;display:flex;align-items:baseline;gap:var(--dropdown-item-captionGap);min-width:0}.w-ddi .lb small{color:var(--dropdown-item-color-caption);font-size:12px;line-height:16px}
.w-ddi .ar{width:var(--dropdown-item-arrowSize);height:var(--dropdown-item-arrowSize);color:var(--dropdown-item-arrow-default)}
.w-ddi .ck{width:var(--dropdown-item-indicatorSize);height:var(--dropdown-item-indicatorSize);margin-left:var(--dropdown-item-indicatorPadding);flex:none}
.w-ddi .fl{flex:none;width:var(--dropdown-item-flagWidth);height:var(--dropdown-item-flagHeight);border-radius:2px;overflow:hidden;display:flex;flex-direction:column}.w-ddi .fl i{flex:1}
.w-ddi .av{flex:none;display:grid;place-items:center;width:24px;height:24px;border-radius:50%;background:var(--fill-darker);color:var(--tt-secondary);font-size:10px;font-weight:600}
.w-ddi:hover,.w-ddi.is-hover{background:var(--dropdown-item-bg-hover);color:var(--dropdown-item-color-hover)}.w-ddi:hover .ar{color:var(--dropdown-item-arrow-hover)}
.w-ddi:active{background:var(--dropdown-item-bg-active)}
.w-ddi.on{background:var(--dropdown-item-checked-bg-default);color:var(--dropdown-item-checked-color-default)}.w-ddi.on:hover{background:var(--dropdown-item-checked-bg-hover)}
.w-ddi.dgr{color:var(--dropdown-item-danger-color-default)}.w-ddi.dgr:hover{background:var(--dropdown-item-danger-bg-hover)}
.w-ddi.dis{color:var(--dropdown-item-disabled-color-default);cursor:not-allowed;background:none}.w-ddi.dis small{color:var(--dropdown-item-disabled-color-caption)}
.w-ddg{display:flex;align-items:center;height:var(--dropdown-group-headerSize);padding:0 var(--dropdown-group-header-paddingH);color:var(--dropdown-group-header-color);font:600 10px/14px var(--fontFamilyMain);letter-spacing:var(--letterSpacingOverline);text-transform:uppercase}
.w-ddd{padding:var(--dropdown-divider-paddingV) 0}.w-ddd hr{margin:0;border:0;border-top:1px solid var(--br-secondary)}
.w-dtr{display:flex;align-items:center;gap:8px;width:100%;height:var(--input-size-md);padding:0 12px 0 16px;border:0;border-radius:var(--input-borderRadius-md);background:var(--input-bg-default);color:var(--input-color-filled-default);font:400 14px/20px var(--fontFamilyMain);cursor:pointer;box-sizing:border-box}
.w-dtr span{flex:1;text-align:left}.w-dtr .ic{color:var(--input-arrow-default);transition:transform .15s}.w-dtr.open .ic.chev{transform:rotate(180deg)}
.w-dtr.open{outline:var(--input-borderWidth-outline) solid var(--input-outline-default)}
/* modal + drawer */
.w-mask{position:absolute;inset:0;display:flex;background:var(--modal-mask);-webkit-backdrop-filter:blur(var(--glass-blur-sm));backdrop-filter:blur(var(--glass-blur-sm));z-index:8;animation:w-fade .2s}
@keyframes w-fade{from{opacity:0}}
.w-mask.m{align-items:flex-start;justify-content:center;padding:var(--modal-marginV) var(--modal-marginH);overflow:auto;box-sizing:border-box}.w-mask.m.cen{align-items:center}
.w-mdl{position:relative;display:flex;flex-direction:column;width:100%;max-width:var(--modal-size-md);border-radius:var(--modal-borderRadius);background:var(--modal-bg);box-shadow:0 var(--shadow-y-lg) var(--shadow-blur-lg) var(--shadow-default);overflow:hidden;animation:w-pop .24s cubic-bezier(.2,.8,.2,1);flex:none}
.w-mdl.sz-sm{max-width:var(--modal-size-sm)}.w-mdl.sz-lg{max-width:var(--modal-size-lg)}.w-mdl.fill{align-self:stretch}
@keyframes w-pop{from{opacity:0;transform:translateY(12px) scale(.97)}}
.w-mdl.hz{flex-direction:row}.w-mdl.hz>.w-ph{width:40%;height:auto;min-height:240px;border-radius:0}
.w-mdl>.w-ph.hero{width:100%;height:var(--modal-image-height);border-radius:0}
.w-mdl .in{display:flex;flex-direction:column;gap:var(--modal-gap);padding:var(--modal-paddingV) var(--modal-paddingH);flex:1;min-width:0}
.w-mdl.fill .in .lay{flex:1}
.w-mdl .in>.w-ph{width:100%;height:var(--modal-image-height);border-radius:var(--modal-image-borderRadius)}
.w-mh{display:flex;flex-direction:column;gap:var(--modal-header-gap)}.w-mh .hr{display:flex;align-items:center;gap:8px;padding-right:var(--modal-title-shift)}
.w-mh .hr>.ic{width:var(--modal-icon-size);height:var(--modal-icon-size);color:var(--modal-icon-color);flex:none}
.w-mh .t4{color:var(--tt-primary)}.w-mh p{margin:0;color:var(--tt-secondary);font-size:12px;line-height:16px}
.lay{color:var(--tt-secondary);font-size:14px;line-height:20px}.lay p{margin:0 0 8px}
.w-xw{position:absolute;top:4px;right:4px;padding:var(--modal-close-padding);border-radius:var(--modal-close-borderRadius);background:var(--modal-bg);z-index:2}
.w-mask.d{padding:0}.w-mask.d.pl{justify-content:flex-start;padding-right:var(--drawer-offset)}.w-mask.d.pr{justify-content:flex-end;padding-left:var(--drawer-offset)}
.w-mask.d.pt{align-items:flex-start}.w-mask.d.pb{align-items:flex-end}
.w-drw{position:relative;display:flex;flex-direction:column;gap:var(--drawer-gap);padding:var(--drawer-padding);background:var(--drawer-bg);box-sizing:border-box;box-shadow:0 var(--shadow-y-lg) var(--shadow-blur-lg) var(--shadow-default);overflow:auto}
.w-drw.h{width:100%;max-width:var(--drawer-maxSize-md);height:100%}.w-drw.h.sm{max-width:var(--drawer-maxSize-sm)}
.w-drw.v{width:100%;max-height:100%}.w-drw.v.mh{max-height:60%}
.pl .w-drw{animation:w-dl .26s cubic-bezier(.2,.8,.2,1)}.pr .w-drw{animation:w-dr .26s cubic-bezier(.2,.8,.2,1)}.pt .w-drw{animation:w-dt .26s cubic-bezier(.2,.8,.2,1)}.pb .w-drw{animation:w-db .26s cubic-bezier(.2,.8,.2,1)}
@keyframes w-dl{from{transform:translateX(-100%)}}@keyframes w-dr{from{transform:translateX(100%)}}@keyframes w-dt{from{transform:translateY(-100%)}}@keyframes w-db{from{transform:translateY(100%)}}
.pl .w-drw.rnd{border-radius:0 var(--drawer-borderRadius) var(--drawer-borderRadius) 0}.pr .w-drw.rnd{border-radius:var(--drawer-borderRadius) 0 0 var(--drawer-borderRadius)}
.pt .w-drw.rnd{border-radius:0 0 var(--drawer-borderRadius) var(--drawer-borderRadius)}.pb .w-drw.rnd{border-radius:var(--drawer-borderRadius) var(--drawer-borderRadius) 0 0}
.w-drw .dh{display:flex;flex-direction:column;gap:var(--drawer-header-gap);padding-right:var(--drawer-tiitle-shift)}.w-drw .dh .hr{display:flex;align-items:center;gap:8px}
.w-drw .dh .hr .ic{width:var(--drawer-icon-size);height:var(--drawer-icon-size);color:var(--drawer-icon-color)}.w-drw .dh .t4{color:var(--drawer-title)}.w-drw .dh p{margin:0;color:var(--drawer-description);font-size:12px;line-height:16px}
.w-drw>.w-ph{width:100%;height:var(--drawer-image-height);border-radius:var(--drawer-image-borderRadius);flex:none}
.w-drw .lay{flex:1}
.w-drw .x{position:absolute;top:4px;right:4px;padding:var(--drawer-close-padding);border-radius:var(--drawer-close-borderRadius);background:var(--drawer-bg)}
.w-swp{display:flex;justify-content:center;padding:var(--drawer-swapIndicator-padding) 0 0;margin:calc(-1 * var(--drawer-padding)) 0 calc(var(--drawer-gap) * -.5)}.w-swp i{width:var(--drawer-swapIndicator-length);height:var(--drawer-swapIndicator-thickness);border-radius:var(--drawer-swapIndicator-borderRadius);background:var(--drawer-swapIndicator-color)}
.pt .w-swp{order:9;margin:0 0 calc(-1 * var(--drawer-padding));padding:0 0 var(--drawer-swapIndicator-padding)}
.mock{display:flex;flex-direction:column;align-items:center;gap:12px;color:var(--tt-tertiary);font-size:12px;text-align:center}
.lay-list{display:flex;flex-direction:column;gap:8px}.lay-list div{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px;border-radius:12px;background:var(--fill-default);color:var(--tt-primary)}
`;
/* ---- helpers ---- */
const POS12=['Top — Left','Top — Center','Top — Right','Bottom — Left','Bottom — Center','Bottom — Right','Left — Top','Left — Center','Left — Bottom','Right — Top','Right — Center','Right — Bottom'];
const posCls=p=>{const [s,a]=String(p).split(' — ');return `s-${slug(s)} a-${slug(a)}`};
const ALI={success:'check-circle',warning:'alert-triangle',error:'alert-circle',info:'info',tip:'bulb',danger:'alert-circle'};
function ALERT(o){const v=slug(o.variant||'Info');const ic=I(ALI[v],20);
 if(o.collapse)return `<div class="${cls('w-al col','v-'+v,o.outline&&'out')}" role="status" title="${esc(o.text||'')}">${ic}</div>`;
 return `<div class="${cls('w-al','v-'+v,o.outline&&'out',o.closable&&'x',o.global&&'glob')}" role="${v=='error'||v=='warning'?'alert':'status'}">${o.icon!==false?ic:''}<div class="tx">${o.title!==false?`<b>${esc(o.text||'Title')}</b>`:''}${o.description1!==false?`<span>${esc(o.description||'Description')}</span>`:''}${o.action1?`<div class="acts">${o.action2!==false?BTN({variant:'Secondary',size:'sm',label:'Decline',attrs:'data-al="decline"'}):''}${BTN({variant:'Accent',size:'sm',label:'Accept',attrs:'data-al="accept"'})}</div>`:''}</div>${o.closable?`<span class="cls">${BTN({variant:'Text',size:'sm',icon:'close',iconOnly:true,aria:'Close',attrs:o.closeAttr||''})}</span>`:''}</div>`}
function NI(o){const v=slug(o.variant||'Success');const rr=19.5,len=2*Math.PI*rr;return `<span class="w-ni v-${v}">${I({success:'check',warning:'alert-triangle',danger:'close',info:'info'}[v],24)}${o.ring!==false?`<svg class="rg" viewBox="0 0 44 44"><circle cx="22" cy="22" r="${rr}" fill="none" stroke-linecap="round" stroke-dasharray="${len}" stroke-dashoffset="${len*(1-(o.pct??100)/100)}" style="stroke:var(--ni-bg);stroke-width:${o.bw||2}" data-ring/></svg>`:''}</span>`}
function NGI(o){const ad=o.addons===false?'':o.addon=='Indicator'?NI({variant:o.nv||'Success',pct:o.pct,ring:o.ring}):o.addon=='Cover'?PH(null,null,'cov cover'):`<span class="ico">${I(o.ico||'gift',32)}</span>`;
 return `<div class="${cls('w-ngi',o.variant=='Stack'&&'stack')}" ${o.id?`data-nid="${o.id}"`:''} role="status">${ad}<div class="tx">${o.title!==false?`<b>${esc(o.text||'Title')}</b>`:''}<span>${esc(o.message||'Message')}</span>${o.actionBar?BTN({variant:'Primary',size:'sm',label:'Confirm',attrs:o.id?`data-nclose="${o.id}"`:''}):''}</div><span class="cls">${BTN({variant:'Secondary',size:'sm',icon:'close',iconOnly:true,aria:'Close',attrs:o.id?`data-nclose="${o.id}"`:''})}</span></div>`}
function SK(w,h,o={}){return `<span class="${cls('w-sk',o.anim!==false&&'anim',o.c&&'c')}" style="width:${typeof w=='number'?w+'px':w};height:${h}px"></span>`}
function DDI(o){return `<button type="button" class="${cls('w-ddi',o.checked&&'on',o.danger&&'dgr',o.disabled&&'dis',o.state=='Hover'&&'is-hover')}" ${o.attrs||''} ${o.disabled?'aria-disabled="true"':''} role="menuitem">${o.avatar?`<span class="av">${o.avatar}</span>`:''}${o.icon?I(o.icon,20):''}${o.flag?`<span class="fl">${o.flag.map(c=>`<i style="background:${c}"></i>`).join('')}</span>`:''}<span class="lb"><span>${esc(o.label||'Label')}</span>${o.caption?`<small>${esc(o.caption)}</small>`:''}</span>${o.arrow?I('chevron-right',16,'ar'):''}${o.checked&&o.check!==false?I('check',20,'ck'):''}</button>`}
function MODAL_BODY(p){return `<div class="lay"><p>Your first deposit is matched 100% up to $500. Wagering x35 applies to bonus funds within 7 days.</p><div class="lay-list"><div><span>Bonus amount</span><b>$250</b></div><div><span>Free spins</span><b>50 FS</b></div></div></div>`}
/* ---- Spinner ---- */
reg({id:'spinner',name:'Spinner',group:'feedback',figma:'8:41422',alias:'loader loading',
 desc:'Ring loading indicator: full track + a bright quarter arc. Also used inside Btn in the Loading state.',
 props:[{n:'variant',t:'enum',o:['Neutral','Accent 1'],d:'Neutral',desc:'Neutral on filled surfaces (inside Primary/Accent buttons); Accent 1 on neutral backgrounds.'},{n:'size',t:'enum',o:['xs','sm','md','lg'],d:'md',desc:'12 / 16 / 20 / 24px (spinner.size.*).'}],
 render:p=>`<div style="display:flex;flex-direction:column;align-items:center;gap:16px">${SPIN({size:p.size,variant:p.variant})}<span class="bodySm" style="color:var(--tt-tertiary)">Loading games…</span></div>`,
 gallery:()=>['Neutral','Accent 1'].map(v=>`<div class="gl"><div style="display:flex;gap:20px;align-items:center">${['xs','sm','md','lg'].map(s=>SPIN({size:s,variant:v})).join('')}</div><small>${v} · xs sm md lg</small></div>`).join('')+`<div class="gl"><div style="display:flex;gap:12px">${BTN({variant:'Primary',size:'md',label:'Deposit',state:'Loading'})}${BTN({variant:'Secondary',size:'md',label:'Details',state:'Loading'})}</div><small>Inside Btn (Loading)</small></div>`,
 notes:['The Figma asset is a static SVG — rotation is added in code (0.8s linear, infinite). With reduced motion the ring still renders.','Btn Loading maps sizes: xs/sm → Spinner xs, md → sm, lg/xl → md. Filled buttons take Neutral, Secondary/Text/Neutral take Accent 1.'],
 tokens:['spinner.*'],uses:['btn']});
/* ---- Skeleton ---- */
reg({id:'skeleton',name:'Skeleton',group:'feedback',alias:'shimmer placeholder loading',
 desc:'Content placeholder shown while data loads. Uses two fill tones (skeleton.start / skeleton.end) with a shimmer.',
 props:[{n:'layout',t:'enum',o:['Card','List','Thumbs','Text'],d:'Card',desc:'Preset composition of skeleton blocks.'},{n:'animated',t:'bool',d:true,desc:'Shimmer between start and end tones.'},{n:'loaded',t:'bool',d:false,desc:'Swap skeleton for real content. Click “Reload” to replay.'}],
 render:p=>{const a={anim:p.animated};if(p.loaded){return p.layout=='Thumbs'?`<div class="sk-grid">${range(8).map(i=>THUMB({size:'sm',top:i%3==0})).join('')}</div>`:p.layout=='List'?`<div style="display:flex;flex-direction:column;gap:12px">${range(3).map(i=>`<div class="sk-row">${AVATAR({size:'md',label:['JD','AK','MR'][i]})}<div class="sk-col"><b style="font-size:14px">${['John Doe','Anna K.','Max R.'][i]}</b><span class="bodySm" style="color:var(--tt-tertiary)">Won $${[1200,860,430][i]} on Book of Gold</span></div></div>`).join('')}</div>`:p.layout=='Text'?`<div style="width:min(420px,100%);color:var(--tt-secondary)"><h3 class="t4" style="color:var(--tt-primary);margin-bottom:8px">Welcome bonus</h3><p style="margin:0">Get 100% up to $500 and 50 free spins on your first deposit. Wagering applies.</p></div>`:`<div class="sk-card">${PH('100%',140,'cover')}<b>Weekly tournament</b><span class="bodySm" style="color:var(--tt-tertiary)">Prize pool $10,000</span>${BTN({variant:'Primary',size:'sm',label:'Join',block:true})}</div>`}
  return (p.layout=='Thumbs'?`<div class="sk-grid">${range(8).map(()=>SK(96,128,a)).join('')}</div>`:p.layout=='List'?`<div style="display:flex;flex-direction:column;gap:12px">${range(3).map(()=>`<div class="sk-row">${SK(40,40,{...a,c:true})}<div class="sk-col">${SK('60%',14,a)}${SK('85%',12,a)}</div></div>`).join('')}</div>`:p.layout=='Text'?`<div class="sk-col" style="width:min(420px,100%);flex:none">${SK('45%',24,a)}${SK('100%',14,a)}${SK('92%',14,a)}${SK('70%',14,a)}</div>`:`<div class="sk-card">${SK('100%',140,a)}${SK('70%',16,a)}${SK('45%',12,a)}${SK('100%',32,a)}</div>`)},
 stage:'col',mount:(el,p,set)=>{el.insertAdjacentHTML('beforeend',`<div>${BTN({variant:'Secondary',size:'sm',label:p.loaded?'Reload':'Finish loading',icon:p.loaded?'arrow-left':'check',attrs:`data-set="loaded=${!p.loaded}"`})}</div>`);if(!p.loaded){const t=setTimeout(()=>{if(CUR=='skeleton'&&!S('skeleton').loaded&&S('skeleton')._auto!==false){set({loaded:true})}},2600);TICKS.push(t)}},
 notes:['Match the skeleton to the final layout — same sizes and radii — so nothing jumps when content arrives.','Preview auto-finishes after ~2.6s; press Reload to see it again.'],tokens:['skeleton.*'],uses:['thumb','avatar']});
/* ---- Alert ---- */
reg({id:'alert',name:'Alert',sig:'Alert',group:'feedback',figma:'8:69442',alias:'inline message banner info warning error',
 desc:'Inline message with icon, title, description and optional actions. Five semantic variants, filled or outlined, and a collapsed icon-only form.',
 props:[{n:'variant',t:'enum',o:['Success','Warning','Error','Info','Tip'],d:'Info'},{n:'outline',t:'bool',d:true,desc:'1px border in the variant colour.'},{n:'collapse',t:'bool',d:false,desc:'Icon-only 36×36 form (full text in the tooltip).'},{n:'global',t:'bool',d:false,desc:'Alert/Global — full-width, no radius, sits at the top of a page.'},
  {n:'icon',t:'bool',d:true,when:p=>!p.collapse},{n:'title',t:'bool',d:true,when:p=>!p.collapse},{n:'text',t:'text',d:'Verify your account',when:p=>!p.collapse},{n:'description1',t:'bool',d:true,when:p=>!p.collapse},{n:'description',t:'text',d:'Upload an ID document to unlock withdrawals.',when:p=>!p.collapse},
  {n:'action1',t:'bool',d:false,desc:'Actions row: Decline (Secondary sm) + Accept (Accent sm).',when:p=>!p.collapse},{n:'action2',t:'bool',d:true,desc:'Show Decline.',when:p=>p.action1&&!p.collapse},{n:'closable',t:'bool',d:true,desc:'Close — Btn Text sm pinned top-right.',when:p=>!p.collapse},{n:'hidden',t:'bool',d:false,ctl:false}],
 render:p=>p.hidden?`<div class="restore">Alert dismissed${BTN({variant:'Secondary',size:'sm',label:'Show again',attrs:'data-set="hidden=false"'})}</div>`:ALERT({...p,closeAttr:'data-set="hidden=true"'}),
 mount:el=>$$('[data-al]',el).forEach(b=>b.addEventListener('click',()=>toast(b.dataset.al=='accept'?'Accepted':'Declined'))),
 gallery:()=>['Success','Warning','Error','Info','Tip'].map(v=>`<div class="gl wide">${ALERT({variant:v,outline:true,text:v,description:'Short supporting description.'})}<small>${v}</small></div>`).join('')+`<div class="gl">${['Success','Warning','Error','Info','Tip'].map(v=>ALERT({variant:v,collapse:true})).join(' ')}<small>Collapse</small></div><div class="gl wide">${ALERT({variant:'Warning',outline:false,text:'Session expires soon',description:'Filled — no border.',action1:true})}<small>Outline off + actions</small></div>`,galCls:'g-wide',
 notes:['Accept uses <b>Accent</b>, not Primary — it’s the conversion action of the message.','Error and Warning are announced with role="alert"; the rest use role="status".','Tip is the neutral hint variant — use it for non-critical advice.'],
 tokens:['alert.*'],uses:['btn','tooltip']});
/* ---- Notification ---- */
let NQ=[],NID=0;
reg({id:'notification',name:'Notification',group:'feedback',figma:'8:69455',alias:'toast snackbar push global local indicator',
 desc:'System messages. Global — toast stack pinned to one of 6 screen corners with an auto-close ring; Item — the toast card; Indicator — coloured status disc; Local — overlay inside a card.',
 props:[{n:'type',t:'enum',o:['Global','Item','Indicator','Local'],d:'Global'},
  {n:'position',t:'enum',o:['Top-Right','Top-Center','Top-Left','Bottom-Right','Bottom-Center','Bottom-Left'],d:'Top-Right',when:p=>p.type=='Global',desc:'Screen corner of the stack.'},
  {n:'autoClose',t:'range',min:2,max:10,d:5,when:p=>p.type=='Global',desc:'Seconds before a toast closes. The indicator ring counts down.'},
  {n:'variant',t:'enum',o:['Default','Stack'],d:'Default',when:p=>p.type=='Item',desc:'Stack shows edges of toasts queued underneath.'},
  {n:'addon',t:'enum',o:['Icon','Indicator','Cover'],d:'Indicator',when:p=>p.type=='Item'||p.type=='Global',desc:'Left addon — mutually exclusive.'},
  {n:'indicator',t:'enum',o:['Success','Warning','Danger','Info'],d:'Success',when:p=>p.type!='Local',desc:'Indicator colour.'},
  {n:'text',t:'text',d:'Deposit received',when:p=>p.type!='Indicator'},{n:'message',t:'text',d:'$250 has been added to your balance.',when:p=>p.type!='Indicator'},
  {n:'actionBar',t:'bool',d:false,when:p=>p.type=='Item'||p.type=='Global',desc:'Btn Primary “Confirm”.'},{n:'open',t:'bool',d:true,ctl:false}],
 stage:'col',render:p=>{
  if(p.type=='Indicator')return `<div style="display:flex;gap:28px">${['Success','Warning','Danger','Info'].map(v=>`<div style="display:flex;flex-direction:column;align-items:center;gap:12px">${NI({variant:v,pct:v==p.indicator?100:70})}<small class="bodySm" style="color:var(--tt-tertiary)">${v}</small></div>`).join('')}</div>`;
  if(p.type=='Item')return `<div style="width:min(400px,100%)">${p.open?NGI({variant:p.variant,addon:p.addon,nv:p.indicator,text:p.text,message:p.message,actionBar:p.actionBar,pct:100}).replace(/data-nclose="[^"]*"|aria-label="Close"/g,m=>m=='aria-label="Close"'?'aria-label="Close" data-set="open=false"':''):`<div class="restore">Notification closed${BTN({variant:'Secondary',size:'sm',label:'Show again',attrs:'data-set="open=true"'})}</div>`}</div>`;
  if(p.type=='Local')return `<div class="w-nloc">${PH(null,null,'cover')}${p.open?`<div class="pan"><b>${esc(p.text)}</b><span>${esc(p.message)}</span><span class="cd">Closes automatically</span>${AB({type:'Block',confirm:'Confirm',cancel:'Cancel',size:'sm'}).replace(/<button/g,'<button data-set="open=false"')}<span class="cls">${BTN({variant:'Secondary',size:'sm',icon:'close',iconOnly:true,aria:'Close',attrs:'data-set="open=false"'})}</span></div>`:`<div class="pan" style="align-items:center">${BTN({variant:'Primary',size:'sm',label:'Buy for 500 coins',attrs:'data-set="open=true"'})}</div>`}</div>`;
  const [v,h]=p.position.toLowerCase().split('-');
  return `<div class="w-scr"><div class="bar"><i></i><i></i><i></i><span style="margin-left:8px">casino.example / lobby</span></div><div class="cta">${BTN({variant:'Accent',size:'md',label:'Push notification',icon:'bell',attrs:'data-push'})}<span>Stack of up to 3. Hover a toast to pause it.</span></div><div class="w-ngs ${v} ${h}" id="ngs"></div></div>`},
 mount:(el,p)=>{if(p.type!='Global')return;const box=$('#ngs',el);const MSG=[['Deposit received','$250 has been added to your balance.','Success','wallet'],['Bonus activated','50 free spins on Book of Gold.','Info','gift'],['Wagering at 90%','Only $120 left to unlock your bonus.','Warning','target'],['Withdrawal declined','Verify your ID to continue.','Danger','lock']];
  const kill=id=>{const n=box.querySelector(`[data-nid="${id}"]`);if(!n)return;n.classList.add('out');setTimeout(()=>n.remove(),220);NQ=NQ.filter(x=>x.id!=id)};
  const add=()=>{const m=MSG[NID%MSG.length],id=++NID;const P=S('notification');const node=document.createElement('div');node.innerHTML=NGI({id,addon:P.addon,nv:NID==1?P.indicator:m[2],ico:m[3],text:NID==1?P.text:m[0],message:NID==1?P.message:m[1],actionBar:P.actionBar,pct:100});const it=node.firstChild;box.prepend(it);
   const dur=P.autoClose*1000;let left=dur,start=Date.now(),t;const ring=it.querySelector('[data-ring]');const len=ring?+ring.getAttribute('stroke-dasharray'):0;
   const run=()=>{start=Date.now();if(ring){ring.style.transition=`stroke-dashoffset ${left}ms linear`;requestAnimationFrame(()=>ring.style.strokeDashoffset=len)}t=setTimeout(()=>kill(id),left)};
   const pause=()=>{clearTimeout(t);left-=Date.now()-start;if(ring){const cs=getComputedStyle(ring).strokeDashoffset;ring.style.transition='none';ring.style.strokeDashoffset=cs}};
   it.addEventListener('mouseenter',pause);it.addEventListener('mouseleave',run);requestAnimationFrame(run);
   $$('[data-nclose]',it).forEach(b=>b.addEventListener('click',()=>{clearTimeout(t);kill(id)}));
   const all=$$('.w-ngi',box);if(all.length>3){const last=all[all.length-1];kill(last.dataset.nid)}};
  $('[data-push]',el).addEventListener('click',add);setTimeout(add,300)},
 gallery:()=>`<div class="gl wide">${NGI({addon:'Icon',text:'Welcome gift',message:'Open your first chest in the Shop.'})}<small>Item · Icon</small></div><div class="gl wide">${NGI({addon:'Cover',text:'New game',message:'Gates of Olympus is live now.',actionBar:true})}<small>Item · Cover + ActionBar</small></div><div class="gl wide">${NGI({variant:'Stack',addon:'Indicator',nv:'Info',text:'3 new messages',message:'Tap to view all notifications.'})}<small>Item · Stack</small></div>`,galCls:'g-wide',
 notes:['The toast card has its own two-layer shadow (notification.shadow) — stronger than shadow/lg.','The ring around the Indicator is the auto-close countdown (same arc as Progress Circle). Hover pauses it.','Local is the confirm overlay used inside Shop / Details cards.','paddingR 44px reserves room for the Close button — keep it even when Close is hidden.'],
 tokens:['notification.*'],uses:['btn','actionbar','progress']});
/* ---- Empty ---- */
reg({id:'empty',name:'Empty',group:'feedback',figma:'8:69452',alias:'empty state no data no results',
 desc:'“Nothing here yet” state with an image or icon, title, description and up to two buttons.',
 props:[{n:'size',t:'enum',o:['sm','md','lg'],d:'md',desc:'sm uses a SemiBold 12 title (not Bungee); md = t5, lg = t4.'},{n:'media',t:'enum',o:['Image','Icon','None'],d:'Icon'},{n:'title',t:'bool',d:true},{n:'text',t:'text',d:'No games found'},{n:'description',t:'bool',d:true},{n:'text1',t:'text',d:'Try another search or clear the filters.'},{n:'button1',t:'bool',d:true,desc:'Secondary button.'},{n:'button2',t:'bool',d:true,desc:'Primary button.'}],
 render:p=>{const bs=p.size=='sm'?'sm':'md';return `<div class="${cls('w-emp',p.size)}">${p.media=='Image'?PH(p.size=='sm'?160:240,p.size=='sm'?90:135,'cover'):p.media=='Icon'?I('search',56,'big'):''}<div class="tx">${p.title?`<span class="${p.size=='sm'?'tt':p.size=='md'?'t5 tt':'t4 tt'}">${esc(p.text)}</span>`:''}${p.description?`<span class="ds">${esc(p.text1)}</span>`:''}</div>${p.button1||p.button2?`<div class="acts">${p.button1?BTN({variant:'Secondary',size:bs,label:'Clear filters',attrs:'data-emp="clear"'}):''}${p.button2?BTN({variant:'Primary',size:bs,label:'Go to lobby',attrs:'data-emp="lobby"'}):''}</div>`:''}</div>`},
 mount:el=>$$('[data-emp]',el).forEach(b=>b.addEventListener('click',()=>toast(b.dataset.emp=='clear'?'Filters cleared':'Opening lobby…'))),
 notes:['Size sm is the documented exception to “titles are Bungee”: it uses Open Sans SemiBold 12.','Pair buttons as Secondary (escape) + Primary (next step).'],tokens:['empty.*'],uses:['btn','image']});
/* ---- Tooltip ---- */
reg({id:'tooltip',name:'Tooltip',group:'overlays',figma:'8:41429',alias:'hint popover title',
 desc:'Short hint anchored to an element. 12 positions around the anchor; opens on hover and keyboard focus.',
 props:[{n:'position',t:'enum',o:POS12,d:'Top — Center'},{n:'popup',t:'bool',d:true,desc:'Pin open. Off = real hover / focus behaviour.'},{n:'message',t:'bool',d:true},{n:'text',t:'text',d:'Wager bonus funds x35 within 7 days'},{n:'customUi',t:'bool',d:false,desc:'Slot for custom content under the message.'}],
 render:p=>`<span class="w-anc">${BTN({variant:'Neutral',size:'md',icon:'info',iconOnly:true,aria:'More info'})}<span class="${cls('w-pop w-tt',posCls(p.position),p.popup&&'show')}" role="tooltip">${p.message?esc(p.text):''}${p.customUi?`<span class="cu">${TAG({variant:'Success',size:'sm',label:'+50 FS'})}${TAG({variant:'Accent 1',size:'sm',label:'x35'})}</span>`:''}<i class="arr"></i></span></span>`,
 stage:'tall',extra:()=>`<section class="blk"><h2 class="t4">${t('All 12 positions')}</h2><p class="hint" style="margin:-4px 0 12px">${t('Hover or tab to any anchor.')}</p><div class="stage" style="min-height:0"><div class="tt-grid">${[['Top — Left','Top — Center','Top — Right'],['Left — Top','','Right — Top'],['Left — Center','','Right — Center'],['Left — Bottom','','Right — Bottom'],['Bottom — Left','Bottom — Center','Bottom — Right']].flat().map(ps=>ps?`<span class="w-anc">${BTN({variant:'Secondary',size:'md',icon:'info',iconOnly:true,aria:ps})}<span class="w-pop w-tt ${posCls(ps)}" role="tooltip">${ps}<i class="arr"></i></span></span>`:'<span></span>').join('')}</div></div></section>`,
 notes:['Max width 320px; text wraps. Keep it to one or two lines — longer content belongs in a Dropdown or Modal.','Arrow points at the centre of a 40×40 anchor.','Tooltips must never hold the only copy of critical info (not reachable on touch).'],
 tokens:['tooltip.*'],uses:['btn','tag']});
/* ---- Dropdown ---- */
const FLAGS={English:['#012169','#fff','#c8102e'],Українська:['#0057b7','#ffd700'],Polski:['#fff','#dc143c'],Deutsch:['#000','#dd0000','#ffce00'],Español:['#aa151b','#f1bf00','#aa151b']};
reg({id:'dropdown',name:'Dropdown',group:'overlays',figma:'8:69451',alias:'select menu popover options item group',
 desc:'Trigger + floating panel with menu items. Items support icon, avatar, flag, caption, check, danger, disabled and a submenu arrow. Square or Rounded item shape.',
 props:[{n:'content',t:'enum',o:['Actions','Language','Sort'],d:'Actions',desc:'Demo menu content.'},{n:'position',t:'enum',o:POS12,d:'Bottom — Left'},{n:'hug',t:'bool',d:false,desc:'Off: trigger and panel stretch to the field width.'},{n:'shape',t:'enum',o:['Square','Rounded'],d:'Square',desc:'Dropdown/Item/Square vs /Rounded.'},{n:'caption',t:'bool',d:true},{n:'group',t:'bool',d:true,desc:'Group headers + divider.'},{n:'open',t:'bool',d:true},{n:'sel',t:'text',d:'',ctl:false}],
 stage:'tall',render:p=>{let items,label;
  if(p.content=='Language'){const s=p.sel||'English';label=s;items=Object.keys(FLAGS).map(k=>DDI({flag:FLAGS[k],label:k,caption:p.caption?{English:'EN',Українська:'UK',Polski:'PL',Deutsch:'DE',Español:'ES'}[k]:'',checked:k==s,attrs:`data-dd="${k}"`})).join('')}
  else if(p.content=='Sort'){const s=p.sel||'Popular';label='Sort: '+s;items=(p.group?`<div class="w-ddg">Order by</div>`:'')+[['Popular','fire'],['Newest','sparkle'],['A–Z','sort'],['Jackpot size','crown']].map(([k,i])=>DDI({icon:i,label:k,checked:k==s,attrs:`data-dd="${k}"`})).join('')+(p.group?`<div class="w-ddd"><hr></div><div class="w-ddg">Provider</div>`:'')+DDI({icon:'filter',label:'All providers',caption:p.caption?'42':'',arrow:true,attrs:'data-dd="Popular"'})}
  else{label='My account';items=(p.group?`<div class="w-ddg">Signed in as</div>`:'')+DDI({avatar:'JD',label:'John Doe',caption:p.caption?'VIP 3':'',attrs:'data-dd="Profile"'})+DDI({icon:'wallet',label:'Wallet',caption:p.caption?'$1,250.00':'',attrs:'data-dd="Wallet"'})+DDI({icon:'gift',label:'Bonuses',caption:p.caption?'3 active':'',arrow:true,attrs:'data-dd="Bonuses"'})+DDI({icon:'settings',label:'Settings',attrs:'data-dd="Settings"'})+DDI({icon:'lock',label:'Self-exclusion',caption:p.caption?'Unavailable':'',disabled:true})+(p.group?`<div class="w-ddd"><hr></div>`:'')+DDI({icon:'logout',label:'Log out',danger:true,attrs:'data-dd="Log out"'})}
  return `<span class="${cls('w-anc',!p.hug&&'full')}" data-ddw><button type="button" class="${cls('w-dtr',p.open&&'open')}" data-toggle="open" aria-haspopup="menu" aria-expanded="${p.open}">${p.content=='Language'?`<span class="fl" style="display:flex;flex-direction:column;width:24px;height:16px;flex:none;border-radius:2px;overflow:hidden">${FLAGS[label].map(c=>`<i style="flex:1;background:${c}"></i>`).join('')}</span>`:p.content=='Actions'?I('user',20):I('sort',20)}<span>${esc(label)}</span>${I('chevron-down',20,'chev')}</button>${p.open?`<div class="${cls('w-pop w-dd',posCls(p.position),!p.hug&&'hug',p.shape=='Rounded'&&'rounded')}" role="menu" style="--aw:${p.hug?160:280}px">${items}</div>`:''}</span>`},
 mount:(el,p,set)=>{$$('[data-dd]',el).forEach(b=>b.addEventListener('click',()=>{const v=b.dataset.dd;if(p.content=='Actions'){toast(v);set({open:false})}else set({sel:v,open:false})}));
  const out=e=>{if(CUR!='dropdown'){document.removeEventListener('mousedown',out);return}if(S('dropdown').open&&!e.target.closest('[data-ddw]')&&e.target.closest('#stage')){document.removeEventListener('mousedown',out);set({open:false})}};if(p.open)setTimeout(()=>document.addEventListener('mousedown',out),0)},
 esc:()=>S('dropdown').open&&set({open:false}),
 extra:()=>`<section class="blk"><h2 class="t4">${t('Item states')}</h2><div class="gal"><div class="gl"><div class="w-dd" style="position:static">${DDI({icon:'star',label:'Default',caption:'Caption'})}${DDI({icon:'star',label:'Hover',state:'Hover'})}${DDI({icon:'star',label:'Checked',checked:true})}${DDI({icon:'star',label:'Danger',danger:true})}${DDI({icon:'star',label:'Disabled',disabled:true,caption:'Caption'})}${DDI({icon:'star',label:'Submenu',arrow:true})}</div><small>Square</small></div><div class="gl"><div class="w-dd rounded" style="position:static">${DDI({avatar:'JD',label:'Avatar'})}${DDI({flag:FLAGS['Українська'],label:'Flag',caption:'UK'})}${DDI({icon:'star',label:'Hover',state:'Hover'})}${DDI({icon:'star',label:'Checked',checked:true})}</div><small>Rounded</small></div></div></section>`,
 notes:['Same 12-position system as Tooltip; offset from the trigger = dropdown.gap.','Up to 10 items per menu; beyond that the panel scrolls (max 320px here).','Danger is reserved for destructive items (Log out, Delete). Checked shows the Accent 1 tint + check.','Click outside or press Esc to close.'],
 tokens:['dropdown.*'],uses:['input','avatar','scrollbar']});
/* ---- Modal ---- */
reg({id:'modal',name:'Modal',group:'overlays',figma:'8:69454',alias:'dialog popup lightbox',
 desc:'Centred dialog over a dimmed, blurred mask. Header (icon + Bungee t4 title + description), content slot and ActionBar. Esc or mask click closes.',
 props:[{n:'size',t:'enum',o:['sm','md','lg'],d:'md',desc:'Max width 400 / 640 / 880px.'},{n:'type',t:'enum',o:['Fit','Fill'],d:'Fit',desc:'Fill stretches to the available height.'},{n:'centered',t:'bool',d:false,desc:'Vertically centred; off = pinned to marginV from the top.'},{n:'horizontal',t:'bool',d:false,desc:'Hero image on the left.'},
  {n:'heroStart',t:'bool',d:true,desc:'160px hero image on top.'},{n:'header',t:'bool',d:true},{n:'icon',t:'bool',d:true},{n:'title',t:'text',d:'Welcome bonus'},{n:'description',t:'bool',d:true},{n:'text',t:'text',d:'Claim before the offer expires.'},{n:'actionBar',t:'bool',d:true},{n:'closable',t:'bool',d:true},{n:'open',t:'bool',d:true,ctl:false}],
 stage:'tall clip',render:p=>`<div class="mock">${I('grid',32)}<span>Page content</span>${BTN({variant:'Primary',size:'md',label:'Open modal',attrs:'data-set="open=true"'})}</div>${p.open?`<div class="${cls('w-mask m',(p.centered||p.type=='Fill')&&'cen')}" data-mask><div class="${cls('w-mdl','sz-'+p.size,p.type=='Fill'&&'fill',p.horizontal&&'hz')}" role="dialog" aria-modal="true" aria-label="${esc(p.title)}">${p.heroStart?PH(null,null,p.horizontal?'cover':'hero cover'):''}<div class="in">${p.header?`<div class="w-mh"><div class="hr">${p.icon?I('gift',24):''}<span class="t4">${esc(p.title)}</span></div>${p.description?`<p>${esc(p.text)}</p>`:''}</div>`:''}${MODAL_BODY(p)}${p.actionBar?AB({type:'Block',size:'md',confirm:'Claim bonus',cancel:'Later'}).replace(/<button/g,'<button data-set="open=false"'):''}</div>${p.closable?`<span class="w-xw">${BTN({variant:'Secondary',size:'sm',icon:'close',iconOnly:true,aria:'Close',attrs:'data-set="open=false"'})}</span>`:''}</div></div>`:''}`,
 mount:(el,p,set)=>{const m=$('[data-mask]',el);m&&m.addEventListener('click',e=>{if(e.target==m)set({open:false})})},
 esc:()=>S('modal').open&&set({open:false}),
 notes:['Mask = modal.mask + glass blur sm. Card uses shadow/lg.','Title is Bungee t4. The Close button sits in a round wrapper (modal.close.*) so it stays readable over the hero image.','Use Modal for decisions that block the flow; for side content use Drawer.'],
 tokens:['modal.*'],uses:['btn','actionbar','image']});
/* ---- Drawer ---- */
reg({id:'drawer',name:'Drawer',group:'overlays',figma:'8:69450',alias:'side panel sheet bottom sheet',
 desc:'Panel that slides in from a screen edge over the mask. Horizontal (Left/Right) or Vertical (Top/Bottom, with a swipe indicator).',
 props:[{n:'family',t:'enum',o:['Horizontal','Vertical'],d:'Horizontal'},{n:'position',t:'enum',o:['Left','Right'],d:'Right',when:p=>p.family=='Horizontal'},{n:'positionV',t:'enum',o:['Top','Bottom'],d:'Bottom',when:p=>p.family=='Vertical'},
  {n:'size',t:'enum',o:['md','sm'],d:'sm',when:p=>p.family=='Horizontal',desc:'Max width 640 / 400px.'},{n:'maxHeight',t:'bool',d:false,when:p=>p.family=='Vertical',desc:'Cap the panel height.'},{n:'rounded',t:'bool',d:true,desc:'Radius on the side facing away from the screen edge.'},
  {n:'cover',t:'bool',d:false},{n:'header',t:'bool',d:true},{n:'icon',t:'bool',d:true},{n:'title',t:'text',d:'Deposit'},{n:'actionBar',t:'bool',d:true},{n:'closable',t:'bool',d:true},{n:'open',t:'bool',d:true,ctl:false}],
 stage:'tall clip',render:p=>{const H=p.family=='Horizontal',pos=H?p.position:p.positionV;const pc={Left:'pl',Right:'pr',Top:'pt',Bottom:'pb'}[pos];
  return `<div class="mock">${I('grid',32)}<span>Page content</span>${BTN({variant:'Primary',size:'md',label:'Open drawer',attrs:'data-set="open=true"'})}</div>${p.open?`<div class="w-mask d ${pc}" data-mask><div class="${cls('w-drw',H?'h':'v',H&&p.size,!H&&p.maxHeight&&'mh',p.rounded&&'rnd')}" role="dialog" aria-modal="true" aria-label="${esc(p.title)}">${!H?`<div class="w-swp"><i></i></div>`:''}${p.cover?PH(null,null,'cover'):''}${p.header?`<div class="dh"><div class="hr">${p.icon?I('wallet',24):''}<span class="t4">${esc(p.title)}</span></div><p>Choose a payment method.</p></div>`:''}<div class="lay"><div class="lay-list">${[['Visa / Mastercard','Instant'],['Apple Pay','Instant'],['Bank transfer','1–3 days']].map(([a,b],i)=>RADIO({label:a,desc:b,checked:i==0,attrs:'data-drr'})).join('')}</div></div>${p.actionBar?AB({type:'Block',size:'md',confirm:'Continue',cancel:'Cancel'}).replace(/<button/g,'<button data-set="open=false"'):''}${p.closable?`<span class="x">${BTN({variant:'Secondary',size:'sm',icon:'close',iconOnly:true,aria:'Close',attrs:'data-set="open=false"'})}</span>`:''}</div></div>`:''}`},
 mount:(el,p,set)=>{const m=$('[data-mask]',el);m&&m.addEventListener('click',e=>{if(e.target==m)set({open:false})});const rs=$$('[data-drr]',el);rs.forEach(r=>r.addEventListener('click',()=>rs.forEach(x=>{const on=x==r;x.classList.toggle('checked',on);x.setAttribute('aria-checked',on)})))},
 esc:()=>S('drawer').open&&set({open:false}),
 notes:['Rounded puts the radius on the side facing away from the screen edge (Left → right corners).','drawer.offset keeps a strip of the page visible so users see where they are.','Vertical drawers show the swipe indicator — the mobile bottom-sheet pattern.'],
 tokens:['drawer.*'],uses:['btn','actionbar','radio','scrollbar']});
CSS+=`.gal .gl.wide{flex:1 1 100%}.gal.g-wide .gl{flex:1 1 360px}.gal.g-wide .gl.wide>*:first-child{max-width:100%}`;
