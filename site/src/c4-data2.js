/* ===== Data display II: Countdown, Time, Progress, Stats, Thumb, Image, Accordion, Carousel, Scrollbar, Fader, Overlay ===== */
CSS+=`
.w-ph{position:relative;display:grid;place-items:center;flex:none;border-radius:var(--image-borderRadius);color:var(--tt-quaternary);background-color:var(--bg-neutral-primary);background-image:repeating-linear-gradient(45deg,var(--fill-default) 0 10px,transparent 10px 20px);overflow:hidden}
.w-ph.cover{background-image:repeating-linear-gradient(45deg,var(--fill-lighter) 0 10px,transparent 10px 20px),linear-gradient(135deg,var(--gradientProps-secondary-start),var(--gradientProps-secondary-end))}
.w-ph.warm{background-image:repeating-linear-gradient(45deg,var(--bg-glass-light) 0 10px,transparent 10px 20px),linear-gradient(135deg,var(--gradientProps-primary-start),var(--gradientProps-primary-end))}
/* countdown */
.w-cd{display:inline-flex;align-items:center;gap:12px;color:var(--countdown-label)}.w-cd.col{flex-direction:column}
.w-cd-l{display:flex;align-items:center;gap:6px}.w-cd-l .t4{color:var(--countdown-label)}
.w-cd-c{display:flex;gap:var(--countdown-gap-md);align-items:center}
.w-cd-b{display:flex;flex-direction:column;align-items:center;justify-content:center;width:var(--countdown-width-md);height:var(--countdown-height-md);border-radius:var(--countdown-borderRadius);background:var(--countdown-bg)}
.w-cd-b b{font:600 16px/20px var(--fontFamilyMain);color:var(--countdown-digit-primary)}.w-cd-b small{font-size:10px;line-height:12px;color:var(--countdown-unit-tertiary)}
${['xs','sm','lg'].map(s=>`.w-cd.sz-${s} .w-cd-b{width:var(--countdown-width-${s});height:var(--countdown-height-${s})}.w-cd.sz-${s} .w-cd-c{gap:var(--countdown-gap-${s})}`).join('')}
.w-cd.sz-lg .w-cd-b b{font-size:24px;line-height:28px}.w-cd.sz-sm .w-cd-b b,.w-cd.sz-xs .w-cd-b b{font-size:12px;line-height:14px}.w-cd.sz-xs .w-cd-b small,.w-cd.sz-sm .w-cd-b small{font-size:8px;line-height:10px}.w-cd.sz-xs .w-cd-b small{display:none}
.w-cdc{display:inline-flex;align-items:flex-start;gap:6px}.w-cdc span{display:flex;flex-direction:column;align-items:center;min-width:24px}.w-cdc b{font:600 14px/20px var(--fontFamilyMain);color:var(--countdown-digit-primary)}.w-cdc small{font-size:10px;line-height:14px;color:var(--countdown-unit-tertiary)}.w-cdc i{font-style:normal;color:var(--countdown-unit-tertiary);line-height:20px}
.w-cdc.sm b{font-size:12px;line-height:16px}
.w-cdr{display:inline-flex;align-items:center;gap:4px;font:600 12px/16px var(--fontFamilyMain);color:var(--countdown-digit-primary)}.w-cdr small{font-size:inherit;color:var(--countdown-unit-primary)}.w-cdr.sec{color:var(--countdown-digit-secondary)}.w-cdr.sec small{color:var(--countdown-unit-secondary)}.w-cdr .lbl{font-weight:400;color:var(--tt-secondary)}
.w-cdr.lg{font-size:16px;line-height:20px}.w-cdr.md{font-size:14px;line-height:20px}.w-cdr.xs{font-size:10px;line-height:14px}
/* time */
.w-tb2{display:inline-flex;align-items:center;gap:8px;height:var(--time-base-size);padding:0 var(--time-base-paddingH);border-radius:var(--time-base-borderRadius);background:var(--bg-glass-dark);-webkit-backdrop-filter:blur(var(--glass-blur-sm));backdrop-filter:blur(var(--glass-blur-sm));color:var(--countdown-digit-primary);font:600 12px/16px var(--fontFamilyMain)}
.w-tb2 small{font-weight:400;font-size:10px;line-height:14px;color:var(--tt-secondary)}.w-tb2.center{justify-content:center;min-width:160px}.w-tb2.dis{color:var(--tt-quaternary)}
.w-ts{display:flex;align-items:center;gap:12px;width:min(320px,100%);padding:4px var(--time-scoped-paddingR) 4px 4px;border-radius:var(--borderRadius-md)}
.w-ts.block{width:100%}
.w-ts-i{display:grid;place-items:center;width:var(--time-scoped-iconWrapper-size);height:var(--time-scoped-iconWrapper-size);border-radius:var(--time-scoped-iconWrapper-borderRadius);flex:none}
.w-ts b{display:block;font:600 12px/16px var(--fontFamilyMain);color:var(--tt-primary)}.w-ts small{font-size:10px;line-height:14px;color:var(--countdown-digit-secondary)}
${[['danger','danger'],['warning','warning'],['success','success'],['accent1','accent1'],['accent2','accent2']].map(([v,t])=>`.w-ts.v-${v}{background:var(--gradient-${v})}.w-ts.v-${v} .w-ts-i{background:var(--fill-${v}-default);color:var(--tt-${v})}`).join('')}
/* progress */
.w-pl{display:flex;flex-direction:column;gap:6px;width:min(360px,100%)}
.w-pl-h{display:flex;justify-content:space-between;font-size:12px;line-height:16px;color:var(--progress-color-default)}.w-pl-h span{color:var(--progress-extremes-color)}
.w-pl-t{height:var(--progress-linear-lineSize-md);border-radius:var(--progress-linear-borderRadius-md);background:var(--progress-track-color);box-shadow:inset 0 var(--progress-boxShadow-track-y-md) var(--progress-boxShadow-track-blur-md) var(--progress-boxShadow-track-color);overflow:hidden}
.w-pl-i{height:100%;border-radius:inherit;background:var(--progress-linear-indicator-default);box-shadow:var(--progress-indicator-boxShadow-default);transition:width .3s}
.w-pl.sm .w-pl-t{height:var(--progress-linear-lineSize-sm);border-radius:var(--progress-linear-borderRadius-sm)}.w-pl.lg .w-pl-t{height:var(--progress-linear-lineSize-lg);border-radius:var(--progress-linear-borderRadius-lg)}
.w-pl.success .w-pl-i{background:var(--progress-linear-indicator-success)}.w-pl.error .w-pl-i{background:var(--progress-linear-indicator-error)}.w-pl.success .w-pl-h b{color:var(--progress-color-success)}.w-pl.error .w-pl-h b{color:var(--progress-color-error)}
.w-pl.vert{flex-direction:row;width:auto;height:160px;align-items:stretch}.w-pl.vert .w-pl-t{width:var(--progress-linear-lineSize-md);height:auto;display:flex;align-items:flex-end}.w-pl.vert .w-pl-i{width:100%;height:var(--pv)}
.w-pc{position:relative;display:inline-grid;place-items:center;width:var(--progress-circle-size-md);height:var(--progress-circle-size-md);color:var(--progress-color-default);font:600 12px/16px var(--fontFamilyMain)}
.w-pc svg{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg)}.w-pc circle{transition:stroke-dashoffset .3s}
${['xs','sm','lg','xl'].map(s=>`.w-pc.sz-${s}{width:var(--progress-circle-size-${s});height:var(--progress-circle-size-${s})}`).join('')}
.w-pc.sz-xs span{display:none}.w-pc.sz-lg{font-size:16px}.w-pc.sz-xl{font-size:20px;line-height:28px}
.w-ps{display:flex;flex-direction:column;gap:8px}.w-ps-h{display:flex;justify-content:space-between;font-size:12px;color:var(--progress-color-default)}.w-ps-h span{color:var(--progress-info-color)}
.w-ps-r{display:flex;gap:var(--progress-steps-gapH)}.w-ps-r.block i{flex:1}
.w-ps-r i{width:var(--progress-steps-width-md);height:var(--progress-steps-height-md);border-radius:var(--progress-steps-borderRadius-md);background:var(--progress-track-color);box-shadow:inset 0 var(--progress-boxShadow-track-y-md) var(--progress-boxShadow-track-blur-md) var(--progress-boxShadow-track-color)}
.w-ps-r i.on{background:linear-gradient(180deg,var(--progress-indicator-start-default),var(--progress-indicator-end-success));box-shadow:inset 0 var(--progress-boxShadow-indicator-lightEdge-y-md) var(--progress-boxShadow-indicator-lightEdge-blur-md) var(--progress-boxShadow-indicator-lightEdge-color-default),inset 0 var(--progress-boxShadow-indicator-darkEdge-y-md) var(--progress-boxShadow-indicator-darkEdge-blur-md) var(--progress-boxShadow-indicator-darkEdge-color-default)}
.w-ps.error .w-ps-r i.on{background:var(--progress-indicator-start-error)}
${['xs','sm','lg'].map(s=>`.w-ps.sz-${s} .w-ps-r i{width:var(--progress-steps-width-${s});height:var(--progress-steps-height-${s});border-radius:var(--progress-steps-borderRadius-${s})}`).join('')}
/* stats */
.w-stats{display:flex;flex-direction:column;gap:var(--stats-gap);width:var(--stats-width);min-height:var(--stats-height);padding:12px var(--stats-paddingH);border-radius:var(--stats-borderRadius);background:var(--stats-bg);color:var(--stats-title)}
.w-stats.g-green{background:var(--gradient-success),var(--stats-bg)}.w-stats.g-purple{background:var(--gradient-alt1),var(--stats-bg)}.w-stats.g-blue{background:var(--gradient-accent1),var(--stats-bg)}.w-stats.g-orange{background:var(--gradient-warning),var(--stats-bg)}.w-stats.g-red{background:var(--gradient-danger),var(--stats-bg)}
.w-stats-r{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.w-stats p{margin:0;font-size:14px;line-height:20px;color:var(--stats-description)}
.w-rate{display:flex;color:var(--stats-rating)}.w-rate .ic{width:var(--stats-raitingIconSize);height:var(--stats-raitingIconSize)}.w-rate .fill{color:var(--tt-accent3)}
/* thumb */
.w-th{display:inline-flex;flex-direction:column;gap:var(--thumb-gap);width:var(--thumb-size-md);text-align:left}
.w-th.sz-sm{width:var(--thumb-size-sm)}.w-th.sz-lg{width:var(--thumb-size-lg)}
.w-th-i{position:relative;aspect-ratio:1;border-radius:var(--thumb-borderRadius);overflow:hidden;cursor:pointer}
.w-th-i .w-ph{position:absolute;inset:0;width:100%;height:100%}
.w-th-tags{position:absolute;left:4px;top:4px;right:4px;display:flex;flex-wrap:wrap;gap:2px}
.w-th-tn{position:absolute;right:4px;bottom:4px;display:grid;place-items:center;width:24px;height:24px;border-radius:12px;background:var(--bg-glass-dark);-webkit-backdrop-filter:blur(var(--glass-blur-sm));backdrop-filter:blur(var(--glass-blur-sm));color:var(--tt-accent3)}
.w-th-pl{position:absolute;inset:0;display:grid;place-items:center;background:var(--mask);opacity:0;transition:opacity .15s}.w-th-i:hover .w-th-pl,.w-th.play .w-th-pl{opacity:1}
.w-th b{font:600 12px/16px var(--fontFamilyMain);color:var(--thumb-title);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.w-th small{font-size:10px;line-height:14px;color:var(--thumb-description)}
/* image */
.w-imf{width:160px;aspect-ratio:1}.w-imf.r43{aspect-ratio:4/3}.w-imf.slot{background:none;border:1px dashed var(--br-primary)}
.w-imc{position:relative;display:flex;align-items:flex-end;justify-content:center;width:207px;height:88px;border-radius:var(--image-borderRadius);overflow:visible}
.w-imc .back{position:absolute;inset:0;width:100%;height:100%}.w-imc .front{position:relative;width:72px;height:72px;margin-bottom:8px;box-shadow:var(--shadowMd)}
/* accordion */
.w-acc{display:flex;flex-direction:column;gap:8px;width:min(520px,100%)}
.w-acc-i{border-radius:var(--accordion-block-borderRadius)}
.w-acc-i.block{background:var(--accordion-block-bg);padding:var(--accordion-block-paddingV-md) var(--accordion-block-paddingH-md)}
.w-acc.sz-sm .w-acc-i.block{padding:var(--accordion-block-paddingV-sm) var(--accordion-block-paddingH-sm)}.w-acc.sz-lg .w-acc-i.block,.w-acc.sz-xl .w-acc-i.block{padding:var(--accordion-block-paddingV-lg) var(--accordion-block-paddingH-lg)}
.w-acc-h{display:flex;align-items:center;gap:var(--accordion-gapH);width:100%;border:0;background:none;padding:4px 0;color:var(--accordion-color-default);text-align:left;cursor:pointer}
.w-acc-h:focus-visible{outline:var(--accordion-outline-borderWidth) solid var(--accordion-outline-color);border-radius:var(--accordion-outline-borderRadius)}
.w-acc-h .lbl{flex:1;display:flex;flex-direction:column;gap:2px;font-size:14px;line-height:20px}.w-acc-h .lbl small{font-size:10px;line-height:14px;color:var(--accordion-underline-default)}
.w-acc-h .cap{font-size:12px;color:var(--accordion-underline-default)}
.w-acc-h .chev{display:grid;place-items:center;width:32px;height:32px;border-radius:16px;transition:transform .2s;color:var(--btn-text-color-default)}.w-acc-i.open .chev{transform:rotate(180deg)}
.w-acc-h:hover .chev{background:var(--btn-text-bg-hover)}
.w-acc-h .spl{width:1px;height:20px;background:var(--divider-br)}
.w-acc-b{display:none;gap:var(--accordion-gapH);padding:var(--accordion-gapV) 0 4px;color:var(--accordion-underline-default)}.w-acc-i.open .w-acc-b{display:flex}.w-acc-b.shift{padding-left:44px}
.w-acc-b p{margin:0;flex:1}.w-acc-b .w-ph{width:120px;height:90px;border-radius:var(--accordion-image-borderRadius)}
.w-acc-i.is-disabled .w-acc-h{color:var(--accordion-color-disabled);cursor:not-allowed}
/* carousel */
.w-car{position:relative;display:flex;align-items:center;gap:8px;width:min(640px,100%)}
.w-car-l{position:relative;flex:1;overflow:hidden}
.w-car-t{display:flex;gap:var(--carousel-gap);transition:transform .3s}
.w-car .fd{position:absolute;top:0;bottom:0;width:80px;pointer-events:none;z-index:1}.w-car .fd.l{left:0;background:var(--fader-left-quaternary)}.w-car .fd.r{right:0;background:var(--fader-right-quaternary)}
.w-carc{display:flex;flex-direction:column;align-items:center;gap:16px;width:min(640px,100%)}
.w-carc-s{position:relative;display:flex;align-items:center;justify-content:center;gap:var(--carousel-centered-gap-md);width:100%;height:220px}
.w-carc-s .sl{width:130px;height:180px;border-radius:var(--borderRadius-lg);transition:transform .3s,opacity .3s;opacity:.5;transform:scale(.85)}.w-carc-s .sl.c{opacity:1;transform:none;width:200px;height:200px;z-index:2}
.w-carc-s .nv{position:absolute;top:50%;transform:translateY(-50%);z-index:1}.w-carc-s .nv.l{left:0}.w-carc-s .nv.r{right:0}
/* navigator */
.w-nav{display:inline-flex;align-items:center;gap:var(--navigator-gap)}
.w-nav-d{display:flex;align-items:center;gap:var(--navigator-dash-gap-md);padding:var(--navigator-dash-padding)}
.w-nav-d button{height:var(--navigator-dash-height);width:var(--navigator-dash-tertiary-width-md);border:0;padding:0;border-radius:2px;background:var(--navigator-default);cursor:pointer;transition:width .25s,background .25s}
.w-nav-d button.s2{width:var(--navigator-dash-secondary-width-md)}.w-nav-d button.on{width:var(--navigator-dash-primary-width-md);background:var(--navigator-active)}
.w-nav-o{display:flex;align-items:center;gap:var(--navigator-dot-gap-md);padding:var(--navigator-dot-padding)}
.w-nav-o button{width:var(--navigator-dot-tertiary-size-md);height:var(--navigator-dot-tertiary-size-md);border:0;padding:0;border-radius:50%;background:var(--navigator-default);cursor:pointer;transition:.2s}
.w-nav-o button.s2{width:var(--navigator-dot-secondary-size-md);height:var(--navigator-dot-secondary-size-md)}.w-nav-o button.s1{width:var(--navigator-dot-primary-size-md);height:var(--navigator-dot-primary-size-md)}.w-nav-o button.on{width:var(--navigator-dot-primary-size-md);height:var(--navigator-dot-primary-size-md);background:var(--navigator-active)}
.w-nav.sm .w-nav-d{gap:var(--navigator-dash-gap-sm)}.w-nav.sm .w-nav-d button{width:var(--navigator-dash-tertiary-width-sm)}.w-nav.sm .w-nav-d button.on{width:var(--navigator-dash-primary-width-sm)}.w-nav.sm .w-nav-d button.s2{width:var(--navigator-dash-secondary-width-sm)}
.w-nav.sm .w-nav-o{gap:var(--navigator-dot-gap-sm)}.w-nav.sm .w-nav-o button{width:var(--navigator-dot-tertiary-size-sm);height:var(--navigator-dot-tertiary-size-sm)}.w-nav.sm .w-nav-o button.on,.w-nav.sm .w-nav-o button.s1{width:var(--navigator-dot-primary-size-sm);height:var(--navigator-dot-primary-size-sm)}
/* scrollbar */
.w-scb{position:relative;width:min(360px,100%);height:220px;border-radius:var(--borderRadius-md);background:var(--bg-neutral-primary)}
.w-scb-c{height:100%;overflow:auto;padding:16px 24px 16px 16px;scrollbar-width:none;color:var(--tt-secondary)}.w-scb-c::-webkit-scrollbar{display:none}
.w-scb-c p{margin:0 0 12px}
.w-scb-tr{position:absolute;top:8px;bottom:8px;right:2px;width:calc(var(--scrollbar-size-default) + 2px);padding:1px;border-radius:var(--scrollbar-borderRadius-default);background:var(--scrollbar-track-default);transition:.15s}
.w-scb-th{width:var(--scrollbar-size-default);height:48px;border-radius:var(--scrollbar-borderRadius-default);background:var(--scrollbar-thumb-default);transition:width .15s}
.w-scb:hover .w-scb-tr,.w-scb.hov .w-scb-tr{background:var(--scrollbar-track-hover);width:calc(var(--scrollbar-size-hover) + 2px)}.w-scb:hover .w-scb-th,.w-scb.hov .w-scb-th{width:var(--scrollbar-size-hover);background:var(--scrollbar-thumb-hover);border-radius:var(--scrollbar-borderRadius-hover)}
.w-scb.h .w-scb-c{overflow:auto hidden;white-space:nowrap;padding:16px 16px 24px}.w-scb.h .w-scb-c p{display:inline-block;width:160px;height:150px;margin-right:8px;white-space:normal;vertical-align:top;border-radius:8px;background:var(--fill-default);padding:12px}
.w-scb.h .w-scb-tr{top:auto;left:12px;right:12px;bottom:2px;width:auto;height:calc(var(--scrollbar-size-default) + 2px)}.w-scb.h .w-scb-th{width:48px;height:var(--scrollbar-size-default)}.w-scb.h:hover .w-scb-tr{height:calc(var(--scrollbar-size-hover) + 2px);width:auto}.w-scb.h:hover .w-scb-th{height:var(--scrollbar-size-hover);width:48px}
/* fader + overlay */
.w-fdd{position:relative;width:min(360px,100%);height:220px;border-radius:var(--borderRadius-md);overflow:hidden}
.w-fdd .ctn{height:100%;overflow:auto;padding:16px;scrollbar-width:none}.w-fdd .ctn p{margin:0 0 12px;color:var(--tt-secondary)}
.w-fdd .fd{position:absolute;display:flex;justify-content:center;align-items:flex-end;pointer-events:none}.w-fdd .fd .w-btn{pointer-events:auto}
.w-fdd .fd.bottom{left:0;right:0;bottom:0;height:80px;padding-bottom:8px}.w-fdd .fd.top{left:0;right:0;top:0;height:80px;align-items:flex-start;padding-top:8px}
.w-fdd .fd.left{top:0;bottom:0;left:0;width:80px;align-items:center;justify-content:flex-start;padding-left:8px}.w-fdd .fd.right{top:0;bottom:0;right:0;width:80px;align-items:center;justify-content:flex-end;padding-right:8px}
.w-ovl{position:relative;width:min(360px,100%);height:200px;border-radius:var(--borderRadius-lg);overflow:hidden}
.w-ovl .w-ph{position:absolute;inset:0;width:100%;height:100%;border-radius:0}.w-ovl .o{position:absolute;inset:0}.w-ovl .tx{position:absolute;left:16px;bottom:16px;right:16px;color:var(--tt-white)}.w-ovl.left .tx{top:16px;bottom:auto;width:50%}.w-ovl.right .tx{left:auto;top:16px;bottom:auto;width:50%;text-align:right}.w-ovl.top .tx{top:16px;bottom:auto}`;
/* ---- helpers ---- */
const ENDS={};function endAt(key,sec){return ENDS[key]||(ENDS[key]=Date.now()+sec*1000)}
function parts(ms){const s=Math.max(0,Math.floor(ms/1000));return {d:Math.floor(s/86400),h:Math.floor(s%86400/3600),m:Math.floor(s%3600/60),s:s%60}}
const p2=n=>String(n).padStart(2,'0');
function liveTimers(el,pg){if(!el)return;tick(()=>$$('[data-end]',el).forEach(x=>{const P=parts(+x.dataset.end-Date.now());const f=x.dataset.fmt||'cells';
 if(f=='cells')$$('[data-u]',x).forEach(b=>b.textContent=p2(P[b.dataset.u]));else if(f=='dhm')x.textContent=`${p2(P.d)}:${p2(P.h)}:${p2(P.m)}`;else if(f=='hms')x.textContent=`${p2(P.h+P.d*24)}:${p2(P.m)}:${p2(P.s)}`;else if(f=='min')x.textContent=`${P.m+P.h*60+P.d*1440} min`;}),1000,pg)}
function CDCELL(o){const P=parts(o.end-Date.now());const U=[['d','Day',o.day!==false],['h','Hrs',o.hour!==false],['m','Min',o.minutes!==false],['s','Sec',!!o.seconds]].filter(u=>u[2]);
 return `<div class="${cls('w-cd','sz-'+(o.size||'md'),o.align=='Column'&&'col')}" data-end="${o.end}">${o.label!==false?`<span class="w-cd-l">${o.icon?I('clock',20):''}<span class="t4">${esc(o.text||'Ends in')}</span></span>`:''}<span class="w-cd-c">${U.map(([k,u])=>`<span class="w-cd-b"><b data-u="${k}">${p2(P[k])}</b><small>${u}</small></span>`).join('')}</span></div>`}
function TIMEBASE(o){return `<span class="${cls('w-tb2',o.center&&'center',o.state=='Disabled'&&'dis')}">${o.label!==false?`<small>${esc(o.text||'Time left')}</small>`:''}${o.variant=='Date'?`<span>21.09 – 30.09</span>`:`<span data-end="${o.end||endAt('tb',3*86400+4*3600)}" data-fmt="dhm">00:00:00</span>`}</span>`}
function PCIRC(o){const s=o.size||'md',px={xs:16,sm:40,md:48,lg:72,xl:108}[s],w={xs:3,sm:3,md:3,lg:6,xl:8}[s],v=o.value??60,gap=o.variant=='Gap';const sw=w*36/px,r=18-sw/2,c=2*Math.PI*r,span=gap?.8:1;
 const col=o.state=='Error'?'var(--progress-circle-indicator-error)':o.state=='Success'?'var(--progress-circle-indicator-success)':'var(--progress-circle-indicator-default)';const cap=o.round?'round':'butt';
 return `<span class="w-pc sz-${s}"><svg viewBox="0 0 36 36" style="${gap?'transform:rotate(126deg)':''}">${o.track!==false?`<circle cx="18" cy="18" r="${r}" fill="none" stroke-linecap="${cap}" stroke-dasharray="${c*span} ${c}" style="stroke:var(--progress-track-color);stroke-width:${sw}"/>`:''}${v>0?`<circle cx="18" cy="18" r="${r}" fill="none" stroke-linecap="${cap}" stroke-dasharray="${c*span*v/100} ${c}" style="stroke:${col};stroke-width:${sw}"/>`:''}</svg><span>${o.label??v+'%'}</span></span>`}
function PLIN(o){const v=o.value??60;return `<div class="${cls('w-pl',o.size,slug(o.state||''),o.vertical&&'vert')}" ${o.vertical?`style="--pv:${v}%"`:''}>${o.header!==false&&!o.vertical?`<div class="w-pl-h"><b>${esc(o.label||'Wager')}</b><span>${o.info||`${v}%`}</span></div>`:''}<div class="w-pl-t"><div class="w-pl-i" style="${o.vertical?'':`width:${v}%`}"></div></div></div>`}
function THUMB(o){const T=[['top','Top','Accent 1'],['propNew','New','Success'],['popular','Popular','Warning'],['live','Live','Alt 3'],['exclusive','Exclusive','Alt 2'],['jackpot','Jackpot','Alt 1']];
 return `<div class="${cls('w-th','sz-'+(o.size||'md'))}"><div class="w-th-i" role="button" tabindex="0" aria-label="Play ${esc(o.text||'game')}">${PH(0,0,o.warm?'warm':'cover')}<div class="w-th-tags">${T.filter(t=>o[t[0]]).map(t=>TAG({variant:t[2],size:'xs',label:t[1]})).join('')}</div>${o.tournament?`<span class="w-th-tn">${I('trophy',14)}</span>`:''}<span class="w-th-pl">${BTN({variant:'Primary',size:'md',icon:'play',iconOnly:true,aria:'Play'})}</span></div>${o.title!==false?`<b>${esc(o.text||'Game name')}</b>`:''}${o.caption!==false?`<small>${esc(o.text1||'Provider Name')}</small>`:''}</div>`}
function NAV(o){const n=o.count||7,a=o.active||0;const dist=i=>Math.abs(i-a);return `<div class="${cls('w-nav',o.size=='Small'&&'sm')}">${o.actions?BTN({variant:'Text',size:'sm',icon:'chevron-left',iconOnly:true,attrs:`data-set="${o.key}=${(a-1+n)%n}"`,aria:'Previous'}):''}<div class="${o.dash!==false?'w-nav-d':'w-nav-o'}">${range(n).map(i=>`<button type="button" aria-label="Slide ${i+1}" class="${cls(i==a&&'on',dist(i)==1&&'s2',o.dash===false&&dist(i)==2&&'s2',o.dash===false&&dist(i)==1&&'s1')}" ${o.key?`data-set="${o.key}=${i}"`:''}></button>`).join('')}</div>${o.actions?BTN({variant:'Text',size:'sm',icon:'chevron-right',iconOnly:true,attrs:`data-set="${o.key}=${(a+1)%n}"`,aria:'Next'}):''}</div>`}
const LOREM=['Deposit bonuses are credited instantly after the payment is confirmed.','Wager requirements apply to bonus money only, real money is always withdrawable.','Free spins expire 7 days after they are credited to your account.','Contact support 24/7 via chat if a payment takes longer than expected.','Cashback is calculated every Monday for the previous week.','VIP levels update in real time as you play.'];
/* ---- defs ---- */
reg({id:'countdown',name:'Countdown',group:'data',figma:'8:41427',alias:'timer',
 desc:'Live timer in three weights: Cellular (boxes), Textual-Column (value over unit) and Textual-Row (inline, = Time/Base).',
 props:[{n:'type',t:'enum',o:['Cellular','Textual-Column','Textual-Row'],d:'Cellular'},{n:'size',t:'enum',o:['xs','sm','md','lg'],d:'md'},{n:'align',t:'enum',o:['Row','Column'],d:'Column',when:p=>p.type=='Cellular'},{n:'variant',t:'enum',o:['Primary','Secondary'],d:'Primary',when:p=>p.type=='Textual-Row'},{n:'label',t:'bool',d:true},{n:'icon',t:'bool',d:true,when:p=>p.label},{n:'day',t:'bool',d:true},{n:'hour',t:'bool',d:true},{n:'minutes',t:'bool',d:true},{n:'seconds',t:'bool',d:true}],
 render:p=>{const end=endAt('cd',2*86400+7*3600+42*60);const U=[['d','Day',p.day],['h','Hrs',p.hour],['m','Min',p.minutes],['s','Sec',p.seconds]].filter(u=>u[2]);
  if(p.type=='Cellular')return CDCELL({end,size:p.size,align:p.align,label:p.label,icon:p.icon,day:p.day,hour:p.hour,minutes:p.minutes,seconds:p.seconds});
  if(p.type=='Textual-Column')return `<span class="w-cd col" data-end="${end}">${p.label?`<span class="w-cd-l">${p.icon?I('clock',16):''}<span class="bodySm">Ends in</span></span>`:''}<span class="w-cdc ${p.size=='sm'||p.size=='xs'?'sm':''}">${U.map(([k,u],i)=>`${i?'<i>:</i>':''}<span><b data-u="${k}">00</b><small>${u}</small></span>`).join('')}</span></span>`;
  return `<span class="${cls('w-cdr',p.size,p.variant=='Secondary'&&'sec')}" data-end="${end}">${p.label?`<span class="lbl">Ends in</span>`:''}${U.map(([k])=>`<span><b data-u="${k}">00</b><small>${k}</small></span>`).join(' ')}</span>`},
 mount:el=>liveTimers(el),
 gallery:()=>['xs','sm','md','lg'].map(s=>`<div class="gl"><small>Cellular ${s}</small>${CDCELL({end:endAt('g',90000),size:s,label:false})}</div>`).join(''),
 after:m=>liveTimers(m.querySelector('.gal'),1),
 notes:['Cellular = accent, Column = medium, Row = compact inline.','Row units use <code>countdown.unit.primary</code> (same color as digits) — unlike the other two.','Splitters are independent boolean props in Figma — keep them in sync with visible units.'],
 tokens:['countdown.bg','countdown.borderRadius','countdown.width.*','countdown.height.*','countdown.gap.*','countdown.digit.*','countdown.unit.*','countdown.label']});
reg({id:'time',name:'Time',group:'data',figma:'3953:2088',alias:'time base scoped timer badge',
 desc:'Time/Base — glass badge with a live timer or date range. Time/Scoped — colored row with icon, title and expiry.',
 props:[{n:'type',t:'enum',o:['Base','Scoped'],d:'Base'},{n:'variant',t:'enum',o:['Timer','Date'],d:'Timer',when:p=>p.type=='Base'},{n:'state',t:'enum',o:['Default','Disabled'],d:'Default',when:p=>p.type=='Base'},{n:'center',t:'bool',d:false,when:p=>p.type=='Base'},{n:'label',t:'bool',d:true,when:p=>p.type=='Base'},{n:'text',t:'text',d:'Time left',when:p=>p.type=='Base'&&p.label},
  {n:'scoped',t:'enum',o:['Danger','Warning','Success','Accent1','Accent2'],d:'Danger',when:p=>p.type=='Scoped'},{n:'block',t:'bool',d:false,when:p=>p.type=='Scoped'},{n:'countdown',t:'bool',d:true,when:p=>p.type=='Scoped'},{n:'title',t:'text',d:'Free spins expire soon',when:p=>p.type=='Scoped'}],
 stage:'',render:p=>p.type=='Base'?`<div class="w-ph cover" style="width:320px;height:160px;border-radius:16px;display:flex;align-items:flex-start;justify-content:flex-start;padding:12px">${TIMEBASE({variant:p.variant,state:p.state,center:p.center,label:p.label,text:p.text})}</div>`:
  `<div class="${cls('w-ts','v-'+slug(p.scoped),p.block&&'block')}"><span class="w-ts-i">${I({Danger:'alert-circle',Warning:'clock',Success:'check-circle',Accent1:'gift',Accent2:'fire'}[p.scoped],20)}</span><span><b>${esc(p.title)}</b>${p.countdown?`<small>Expire in <span data-end="${endAt('ts',47*60)}" data-fmt="min">47 min</span></small>`:''}</span></div>`,
 mount:el=>liveTimers(el),
 notes:['Time/Base is the same badge used across Card/Ticket, Tournament, Lottery, Free spins — this is its single source.','Glass = <code>bg.glass.dark</code> + backdrop blur; without the dark fill the text loses contrast.'],
 tokens:['time.base.*','time.scoped.*','bg.glass.dark','glass.blur.sm','countdown.digit.primary','fill.danger.default','gradient.danger']});
reg({id:'progress',name:'Progress',group:'data',figma:'8:41415',alias:'bar ring steps',
 desc:'Linear bar, Circle ring and discrete Steps. Drag the value slider or use the buttons.',
 props:[{n:'type',t:'enum',o:['Linear','Circle','Steps'],d:'Linear'},{n:'value',t:'range',min:0,max:100,d:62},{n:'state',t:'enum',o:['Default','Success','Error'],d:'Default'},{n:'size',t:'enum',o:['xs','sm','md','lg','xl'],d:'md'},{n:'horizontal',t:'bool',d:true,when:p=>p.type=='Linear'},{n:'variant',t:'enum',o:['Full','Gap'],d:'Full',when:p=>p.type=='Circle'},{n:'lineRounding',t:'bool',d:true,when:p=>p.type=='Circle'},{n:'track',t:'bool',d:true,when:p=>p.type=='Circle'},{n:'block',t:'bool',d:false,when:p=>p.type=='Steps'},{n:'header',t:'bool',d:true,when:p=>p.type!='Circle'}],
 stage:'col',render:p=>{const ctl=`<div style="display:flex;gap:8px">${BTN({variant:'Secondary',size:'sm',icon:'minus',iconOnly:true,attrs:`data-set="value=${Math.max(0,p.value-10)}"`,aria:'Decrease'})}${BTN({variant:'Secondary',size:'sm',icon:'plus',iconOnly:true,attrs:`data-set="value=${Math.min(100,p.value+10)}"`,aria:'Increase'})}</div>`;
  if(p.type=='Linear')return PLIN({value:p.value,state:p.state,size:p.size=='xs'||p.size=='sm'?'sm':p.size=='lg'||p.size=='xl'?'lg':'',vertical:!p.horizontal,header:p.header,info:`$${Math.round(p.value*12.5)} / $1,250`})+ctl;
  if(p.type=='Circle')return PCIRC({value:p.value,size:p.size,state:p.state,variant:p.variant,round:p.lineRounding,track:p.track})+ctl;
  const n=10,on=Math.round(p.value/10);return `<div class="${cls('w-ps','sz-'+(p.size=='xl'?'lg':p.size),p.state=='Error'&&'error')}" style="width:${p.block?'min(360px,100%)':'auto'}">${p.header?`<div class="w-ps-h"><b>Daily quest</b><span>${on}/${n}</span></div>`:''}<div class="w-ps-r ${p.block?'block':''}">${range(n).map(i=>`<i class="${i<on?'on':''}"></i>`).join('')}</div></div>`+ctl},
 gallery:()=>['xs','sm','md','lg','xl'].map(s=>PCIRC({value:72,size:s})).join('')+PCIRC({value:40,size:'lg',variant:'Gap',round:true})+PCIRC({value:100,size:'lg',state:'Success'})+PCIRC({value:30,size:'lg',state:'Error'}),
 notes:['Linear = percentage done, Circle = compact dashboard, Steps = discrete wizard. Not the same as Stepper.','In Figma Circle is two overlaid SVG assets with a fixed angle; in code use stroke-dasharray as here.','Indicator gradient green → blue: <code>progress.indicator.start/end</code>.'],
 tokens:['progress.track.color','progress.linear.*','progress.indicator.*','progress.circle.*','progress.steps.*','progress.color.*','progress.boxShadow.*']});
reg({id:'stats',name:'Stats',group:'data',figma:'8:100330',alias:'statistic trust card rating',
 desc:'Colored statistic tile with title, star rating, tag and description. Used in the Hero trust block.',
 props:[{n:'variant',t:'enum',o:['Green','Purple','Blue','Orange','Red'],d:'Blue'},{n:'gradient',t:'bool',d:true},{n:'titile',t:'bool',d:true,desc:'Title (Figma spelling “titile”).'},{n:'text',t:'text',d:'$2.4M',when:p=>p.titile},{n:'rating',t:'bool',d:false},{n:'tag',t:'bool',d:true},{n:'description',t:'text',d:'Total won this week'}],
 render:p=>STATS(p),gallery:()=>['Green','Purple','Blue','Orange','Red'].map(v=>STATS({variant:v,gradient:true,titile:true,text:'4.9',rating:v=='Green',tag:true,description:'24/7 rating'})).join(''),
 notes:['Designer TODO in Figma: gradients are not bound to tokens yet; here they map to <code>gradient.success/alt1/accent1/warning/danger</code>.','Rating stars are embedded icons, not a separate component (yet).'],
 tokens:['stats.*','gradient.success','gradient.alt1','gradient.accent1','gradient.warning','gradient.danger'],uses:['tag']});
function STATS(p){return `<div class="${cls('w-stats',p.gradient&&'g-'+slug(p.variant))}"><div class="w-stats-r">${p.titile?`<span class="t4">${esc(p.text)}</span>`:''}${p.rating?`<span class="w-rate">${range(4).map(()=>`<span class="fill">${I('star',24)}</span>`).join('')}<span class="fill">${I('star-h',24)}</span></span>`:''}${p.tag?TAG({variant:'Success',size:'sm',label:'+12%'}):''}</div><p>${esc(p.description)}</p></div>`}
reg({id:'thumb',name:'Thumb',group:'data',figma:'8:104797',alias:'game thumbnail tile',
 desc:'Game thumbnail with up to six tags, provider caption and tournament badge. Hover to see the play action.',
 props:[{n:'size',t:'enum',o:['sm','md','lg'],d:'lg'},{n:'title',t:'bool',d:true},{n:'text',t:'text',d:'Gates of Olympus'},{n:'caption',t:'bool',d:true},{n:'text1',t:'text',d:'Pragmatic Play'},{n:'top',t:'bool',d:true},{n:'propNew',t:'bool',d:false},{n:'popular',t:'bool',d:true},{n:'live',t:'bool',d:false},{n:'exclusive',t:'bool',d:false},{n:'jackpot',t:'bool',d:false},{n:'tournament',t:'bool',d:true}],
 render:p=>THUMB(p),gallery:()=>['sm','md','lg'].map(s=>THUMB({size:s,top:1,text:'Size '+s})).join(''),
 notes:['Caption is intentionally blue (<code>thumb.description</code>) — it reads as a link to the provider.','Tags are real Tag xs instances. Up to 6 can be active; in practice show 1–2.','Also available: Thumb/Adaptive (skeleton), Thumb/with Counter, Thumb/Btn.'],
 tokens:['thumb.size.*','thumb.gap','thumb.borderRadius','thumb.title','thumb.description','thumb.btn.*'],uses:['tag','image']});
reg({id:'image',name:'Image',group:'data',figma:'4347:6747',alias:'placeholder cover front',
 desc:'Placeholder primitives: Image/Front (square or 4:3) and Image/Cover (back + front layers).',
 props:[{n:'type',t:'enum',o:['Front','Cover'],d:'Cover'},{n:'ratio',t:'enum',o:['1:1','4:3 (old)'],d:'1:1',when:p=>p.type=='Front'},{n:'slot',t:'bool',d:false,desc:'Transparent children container instead of texture.'},{n:'front',t:'bool',d:true,when:p=>p.type=='Cover'}],
 render:p=>p.type=='Front'?`<div class="${cls('w-ph w-imf',p.ratio!='1:1'&&'r43',p.slot&&'slot')}">${p.slot?'<span class="bodySm">children</span>':I('image',24)}</div>`:`<div class="w-imc">${p.slot?'<div class="back" style="border:1px dashed var(--br-primary);border-radius:8px"></div>':PH('100%','100%','back cover')}${p.front?PH(72,72,'front warm'):''}</div>`,
 notes:['Cover slot replaces only the Back layer — Front always stays textured.','Prefer 1:1; 4:3 is legacy.'],tokens:['image.*']});
reg({id:'accordion',name:'Accordion',group:'data',figma:'8:69483',alias:'collapse faq expand',
 desc:'Expandable sections. Default (no background) or Block (card). Single mode keeps one section open.',
 props:[{n:'kind',t:'enum',o:['Default','Block'],d:'Block'},{n:'type',t:'enum',o:['Single','Multiple'],d:'Single'},{n:'size',t:'enum',o:['sm','md','lg','xl'],d:'md',when:p=>p.kind=='Block'},{n:'title',t:'bool',d:false,desc:'Bungee t4 label (Block only).',when:p=>p.kind=='Block'},{n:'state',t:'enum',o:STATES5,d:'Default'},{n:'control',t:'bool',d:false,desc:'Left chevron.'},{n:'control1',t:'bool',d:true,desc:'Right chevron.'},{n:'overline',t:'bool',d:false},{n:'underline',t:'bool',d:true},{n:'caption',t:'bool',d:false},{n:'action',t:'bool',d:false},{n:'splitter',t:'bool',d:false,when:p=>p.action},{n:'image',t:'bool',d:false},{n:'open',t:'text',d:'0',ctl:false}],
 stage:'top',render:p=>{const Q=[['How fast are withdrawals?','Most e-wallets are paid within 1 hour. Cards and bank transfers take 1–3 business days.'],['What is a wager?','The amount you need to bet before bonus money turns into real money.'],['Can I have two bonuses at once?','Only one active bonus per account. Others wait in the queue.']];const open=String(p.open).split(',').filter(x=>x!=='');
  return `<div class="${cls('w-acc','sz-'+p.size)}">${Q.map(([q,a],i)=>{const o=open.includes(String(i));const nx=p.type=='Single'?(o?'':String(i)):(o?open.filter(x=>x!=i):[...open,i]).join(',');const chev=`<span class="chev">${I('chevron-down',20)}</span>`;
   return `<div class="${cls('w-acc-i',p.kind=='Block'&&'block',o&&'open',i==0&&st(p))}"><button type="button" class="w-acc-h" aria-expanded="${o}" data-set="open=${nx}">${p.control?chev:''}<span class="lbl">${p.overline?'<small>FAQ</small>':''}<span class="${p.kind=='Block'&&p.title?'t4':''}">${q}</span>${p.underline?`<small>Payments</small>`:''}</span>${p.caption?'<span class="cap">Caption</span>':''}${p.action?`<span class="chev">${I('info',20)}</span>`:''}${p.action&&p.splitter?'<i class="spl"></i>':''}${p.control1?chev:''}</button><div class="w-acc-b ${p.control?'shift':''}">${p.image?PH(0,0,'cover'):''}<p>${a}</p></div></div>`}).join('')}</div>`},
 notes:['Control chevrons are Btn Text, the same pattern as carousel arrows.','Block with Title = true switches the label to Bungee t4.'],
 tokens:['accordion.*','accordion.block.*','btn.text.bg.*'],uses:['btn','image','divider']});
reg({id:'carousel',name:'Carousel',group:'data',figma:'8:13505',alias:'slider',
 desc:'Navigation frame for content: a scrolling list with faders, or three centered slots with a Navigator.',
 props:[{n:'centered',t:'bool',d:false},{n:'fader',t:'bool',d:true,when:p=>!p.centered},{n:'actions',t:'bool',d:true},{n:'breakpoint',t:'enum',o:['xs','sm','md','lg','xl'],d:'md',when:p=>p.centered},{n:'i',t:'range',min:0,max:6,d:0,ctl:false}],
 stage:'col',render:p=>{if(!p.centered){const N=10,per=4,max=N-per;const i=Math.min(p.i,max);return `<div class="w-car">${p.actions?BTN({variant:'Text',size:'md',icon:'chevron-left',iconOnly:true,attrs:`data-set="i=${Math.max(0,i-1)}"`,state:i==0?'Disabled':'',aria:'Previous'}):''}<div class="w-car-l">${p.fader&&i>0?'<i class="fd l"></i>':''}<div class="w-car-t" style="transform:translateX(calc(${-i} * (var(--thumb-size-md) + var(--carousel-gap))))">${range(N).map(k=>THUMB({size:'md',text:'Game '+(k+1),caption:false,top:k==1,propNew:k==3})).join('')}</div>${p.fader&&i<max?'<i class="fd r"></i>':''}</div>${p.actions?BTN({variant:'Text',size:'md',icon:'chevron-right',iconOnly:true,attrs:`data-set="i=${Math.min(max,i+1)}"`,state:i>=max?'Disabled':'',aria:'Next'}):''}</div>`}
  const n=7,i=p.i%n;return `<div class="w-carc"><div class="w-carc-s" style="gap:var(--carousel-centered-gap-${p.breakpoint})">${[-1,0,1].map(d=>`<div class="w-ph ${d?'cover':'warm'} sl ${d?'':'c'}"><span class="t5" style="color:var(--tt-white)">Promo ${(i+d+n)%n+1}</span></div>`).join('')}${p.actions?`<span class="nv l">${BTN({variant:'Neutral',size:'xl',icon:'chevron-left',iconOnly:true,attrs:`data-set="i=${(i-1+n)%n}"`,aria:'Previous'})}</span><span class="nv r">${BTN({variant:'Neutral',size:'xl',icon:'chevron-right',iconOnly:true,attrs:`data-set="i=${(i+1)%n}"`,aria:'Next'})}</span>`:''}</div>${NAV({active:i,key:'i'})}</div>`},
 notes:['List mode arrows are Btn <b>Text</b>; centered mode arrows are Btn <b>Neutral</b> 56px — do not mix.','Max 11 items in list mode. component* ↔ item* slots do not map linearly in Figma — check explicitly.'],
 tokens:['carousel.gap','carousel.centered.gap.*','fader.left.*','fader.right.*','navigator.*'],uses:['btn','fader','navigator','thumb']});
reg({id:'scrollbar',name:'Scrollbar',group:'data',figma:'5:2646',
 desc:'Custom track + thumb drawn over native overflow. Scroll the box — the thumb follows.',
 props:[{n:'state',t:'enum',o:['Default','Hover'],d:'Default'},{n:'horizontal',t:'bool',d:false}],
 render:p=>`<div class="${cls('w-scb',p.horizontal&&'h',p.state=='Hover'&&'hov')}"><div class="w-scb-c">${LOREM.concat(LOREM).map(t=>`<p>${t}</p>`).join('')}</div><div class="w-scb-tr"><div class="w-scb-th"></div></div></div>`,
 mount:el=>{const b=$('.w-scb',el),c=$('.w-scb-c',el),tr=$('.w-scb-tr',el),th=$('.w-scb-th',el),h=b.classList.contains('h');const f=()=>{if(h){const r=c.scrollLeft/(c.scrollWidth-c.clientWidth||1);th.style.transform=`translateX(${r*(tr.clientWidth-th.offsetWidth)}px)`}else{const r=c.scrollTop/(c.scrollHeight-c.clientHeight||1);th.style.transform=`translateY(${r*(tr.clientHeight-th.offsetHeight-2)}px)`}};c.addEventListener('scroll',f);f()},
 notes:['Always a drawn element over real CSS overflow — never style the native bar to imitate it.','Hover widens the thumb from 6 to 8px and shows the track.'],tokens:['scrollbar.*']});
reg({id:'fader',name:'Fader',group:'data',figma:'8:13509',alias:'gradient edge more content',
 desc:'Gradient edge that hints at more content, with an optional scroll button.',
 props:[{n:'variant',t:'enum',o:['Primary','Secondary','Tertiary','Quaternary'],d:'Primary',desc:'Matches the background level it sits on.'},{n:'position',t:'enum',o:['Top','Bottom','Left','Right'],d:'Bottom'},{n:'button',t:'bool',d:true,desc:'Btn Secondary 40px with an arrow.'}],
 render:p=>{const pos=slug(p.position),v=slug(p.variant);const arr={top:'chevron-up',bottom:'chevron-down',left:'chevron-left',right:'chevron-right'}[pos];return `<div class="w-fdd" style="background:var(--bg-neutral-${v})"><div class="ctn">${LOREM.map(t=>`<p>${t}</p>`).join('')}</div><div class="fd ${pos}" style="background:var(--fader-${pos}-${v})">${p.button?BTN({variant:'Secondary',size:'md',icon:arr,iconOnly:true,attrs:'data-fscroll',aria:'Scroll'}):''}</div></div>`},
 mount:(el,p)=>{const b=$('[data-fscroll]',el);b&&b.addEventListener('click',()=>{const c=$('.ctn',el);c.scrollBy({top:p.position=='Top'?-80:80,behavior:'smooth'})})},
 notes:['Three different “more content” techniques exist: Fader (gradient), List/Fadeable (mask), Tabs (inset shadow). Do not unify them.'],tokens:['fader.*']});
reg({id:'overlay',name:'Overlay',group:'data',figma:'8:41413',alias:'darken gradient scrim',
 desc:'Neutral black gradient that keeps text readable over imagery. Card overlays are local variations of it.',
 props:[{n:'variant',t:'enum',o:['Left','Right','Top','Bottom'],d:'Bottom'}],
 render:p=>{const v=slug(p.variant);return `<div class="w-ovl ${v}">${PH(0,0,'warm')}<i class="o" style="background:var(--overlay-${v})"></i><div class="tx"><div class="t4">Weekend reload</div><div class="bodySm">Get 50% up to $200</div></div></div>`},
 notes:['Two-stop gradient only. For 3-stop overlays (Card/Tournament) use the card overlay tokens.'],tokens:['overlay.*']});
