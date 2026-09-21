/* ===== Forms: Input/TextArea, Checkbox, Radio, Switcher, Segmented, Chip, Calendar ===== */
CSS+=`
/* input */
.w-in{display:flex;flex-direction:column;gap:var(--input-header-gap);width:min(360px,100%);font-size:14px;line-height:20px}
.w-in-h{display:flex;align-items:center;gap:4px;color:var(--input-label-default);font-size:12px;line-height:16px}
.w-in-h .ast{color:var(--input-asterix)}.w-in-h .opt{color:var(--input-labelOptional)}.w-in-h .ic{color:var(--input-iconInfo)}
.w-in-f{--ih:var(--input-size-md);position:relative;display:flex;align-items:center;gap:var(--input-gap-md);min-height:var(--ih);padding:0 var(--input-paddingH-md);border-radius:var(--input-borderRadius-md);background:var(--input-bg-default);box-shadow:inset 0 0 0 var(--input-borderWidth-default) var(--input-br-default),inset 0 var(--embossProps-lightEdge-y) var(--embossProps-lightEdge-blur) var(--embossProps-lightEdge-color),inset 0 var(--embossProps-darkEdge-y) var(--embossProps-darkEdge-blur) var(--embossProps-darkEdge-color);color:var(--input-color-default);transition:background .15s}
.w-in.sz-sm .w-in-f{--ih:var(--input-size-sm);gap:var(--input-gap-sm);padding:0 var(--input-paddingH-sm);font-size:12px;line-height:16px;border-radius:var(--input-borderRadius-sm)}
.w-in.sz-lg .w-in-f{--ih:var(--input-size-lg);gap:var(--input-gap-lg);padding:0 var(--input-paddingH-lg);font-size:18px;line-height:24px;border-radius:var(--input-borderRadius-lg)}
.w-in-f input,.w-in-f textarea{flex:1;min-width:0;height:100%;border:0;outline:0;background:none;font:inherit;color:var(--input-color-filled-default);padding:0}
.w-in-f input::placeholder,.w-in-f textarea::placeholder{color:var(--input-color-default)}
.w-in-f textarea{resize:vertical;min-height:88px;padding:var(--input-paddingV-md) 0}
.w-in.area .w-in-f{align-items:flex-start}.w-in.area .w-in-f .ic{margin-top:10px}
.w-in-f:hover,.w-in.is-hover .w-in-f{background:var(--input-bg-hover)}
.w-in.is-active .w-in-f{background:var(--input-bg-active)}
.w-in-f:focus-within,.w-in.is-focus .w-in-f{background:var(--input-bg-focus);outline:var(--input-borderWidth-outline) solid var(--input-outline-default)}
.w-in.is-disabled .w-in-f{background:var(--input-bg-disabled);color:var(--input-color-disabled);pointer-events:none}.w-in.is-disabled input{color:var(--input-color-filled-disabled)}
.w-in.v-success .w-in-f{box-shadow:inset 0 0 0 var(--input-borderWidth-success-default) var(--input-br-success-default)}
.w-in.v-warning .w-in-f{box-shadow:inset 0 0 0 var(--input-borderWidth-warning-default) var(--input-br-warning-default)}
.w-in.v-error .w-in-f{background:var(--input-bg-error-default);box-shadow:inset 0 0 0 var(--input-borderWidth-error-default) var(--input-br-error-default)}
.w-in.v-error .w-in-f:focus-within{outline-color:var(--input-outline-error)}
.w-in .pre{color:var(--input-prefix-icon-default);display:flex;align-items:center;gap:var(--input-prefixGap-md)}.w-in .pre b{font-weight:400;color:var(--input-prefix-label-default)}
.w-in .suf{display:flex;align-items:center;gap:var(--input-suffixGap-md);color:var(--input-suffix-icon-default)}
.w-in .suf .spl{width:var(--input-borderWidth-splitter);height:var(--input-suffix-splitterHeight-md);background:var(--br-primary)}
.w-in .clr{display:grid;place-items:center;border:0;background:none;padding:0;color:var(--input-clear-default);cursor:pointer}.w-in .clr:hover{color:var(--input-clear-hover)}
.w-in:not(.filled) .clr{display:none}
.w-in .arw{color:var(--input-arrow-default)}.w-in .cnt{font-size:12px;color:var(--input-counter-default)}
.w-in .flag{width:var(--input-flagWidth-md);height:var(--input-flagHeight-md);border-radius:2px;background:linear-gradient(var(--product1Step-500) 50%,var(--tt-accent3) 50%);flex:none}
.w-in .add{display:flex;align-items:center;align-self:stretch;margin:0 calc(-1 * var(--input-paddingH-md));padding:0 12px;background:var(--input-addon-bg-default);color:var(--input-addon-color-default);box-shadow:inset 0 0 0 1px var(--input-addon-br-default)}
.w-in .add.l{border-radius:var(--input-borderRadius-md) 0 0 var(--input-borderRadius-md);margin-right:0}.w-in .add.r{border-radius:0 var(--input-borderRadius-md) var(--input-borderRadius-md) 0;margin-left:0}
.w-in-ft{display:flex;align-items:center;gap:4px;font-size:12px;line-height:16px;color:var(--input-helper-label-default)}
.w-in-ft .ic{color:var(--input-helper-icon-default)}
.w-in.v-success .w-in-ft{color:var(--input-helper-label-success)}.w-in.v-success .w-in-ft .ic{color:var(--input-helper-icon-success)}
.w-in.v-warning .w-in-ft .ic{color:var(--input-helper-icon-warning)}.w-in.v-error .w-in-ft{color:var(--input-helper-label-error)}.w-in.v-error .w-in-ft .ic{color:var(--input-helper-icon-error)}
.w-req{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:2px;font-size:12px;line-height:16px;color:var(--input-requirement-label-default)}
.w-req li{display:flex;gap:6px;align-items:center}.w-req li.ok{color:var(--input-requirement-label-success)}.w-req li.bad{color:var(--input-requirement-label-error)}
/* checkbox / radio */
.w-cb{display:inline-flex;align-items:flex-start;gap:var(--checkbox-gap);cursor:pointer;user-select:none;max-width:360px;text-align:left;border:0;background:none;padding:0}
.w-cb.right{flex-direction:row-reverse;justify-content:space-between;width:min(320px,100%)}
.w-cb-c{position:relative;flex:none;display:grid;place-items:center;width:var(--checkbox-size);height:var(--checkbox-size);border-radius:var(--checkbox-borderRadius);background:var(--checkbox-default-bg-default);box-shadow:inset 0 0 0 var(--checkbox-borderWidth-validation) var(--checkbox-br-default);color:var(--checkbox-checked-indicator-default);transition:background .12s}
.w-cb:hover .w-cb-c,.w-cb.is-hover .w-cb-c{background:var(--checkbox-default-bg-hover)}.w-cb.is-active .w-cb-c,.w-cb:active .w-cb-c{background:var(--checkbox-default-bg-active)}
.w-cb.checked .w-cb-c{background:var(--checkbox-checked-bg-default);box-shadow:none}.w-cb.checked:hover .w-cb-c,.w-cb.checked.is-hover .w-cb-c{background:var(--checkbox-checked-bg-hover)}.w-cb.checked.is-active .w-cb-c{background:var(--checkbox-checked-bg-active)}
.w-cb.indet .w-cb-c::after{content:"";width:var(--checkbox-indicatorSize);height:2.5px;border-radius:var(--checkbox-indicatorBorderRadius);background:var(--checkbox-indeterminate-indicator-default)}
.w-cb.error .w-cb-c{background:var(--checkbox-error-bg-default);box-shadow:inset 0 0 0 var(--checkbox-borderWidth-validation) var(--checkbox-br-error-default)}
.w-cb.is-focus .w-cb-c,.w-cb:focus-visible .w-cb-c{outline:var(--checkbox-borderWidth-outline) solid var(--checkbox-outline-default);outline-offset:0}.w-cb:focus-visible{outline:0}
.w-cb.is-disabled{cursor:not-allowed}.w-cb.is-disabled .w-cb-c{background:var(--checkbox-default-bg-disabled);box-shadow:inset 0 0 0 1px var(--checkbox-br-disabled)}.w-cb.is-disabled.checked .w-cb-c{background:var(--checkbox-checked-bg-disabled);color:var(--checkbox-checked-indicator-disabled);box-shadow:none}
.w-cb-t{display:flex;flex-direction:column;gap:2px;font-size:14px;line-height:20px;color:var(--checkbox-label-default)}.w-cb-t small{font-size:12px;line-height:16px;color:var(--checkbox-description-default)}
.w-cb.is-disabled .w-cb-t,.w-cb.is-disabled .w-cb-t small{color:var(--checkbox-label-disabled)}
.w-cb .err{font-size:12px;color:var(--checkbox-helper-error)}
.w-rd .w-cb-c{border-radius:var(--radio-borderRadius);background:var(--radio-default-bg-default);box-shadow:inset 0 0 0 var(--radio-borderWidth) var(--radio-default-br-default)}
.w-rd:hover .w-cb-c,.w-rd.is-hover .w-cb-c{background:var(--radio-default-bg-hover)}
.w-rd.checked .w-cb-c{background:var(--radio-checked-bg-default)}.w-rd.checked .w-cb-c::after{content:"";width:var(--radio-indicatorSize);height:var(--radio-indicatorSize);border-radius:50%;background:var(--radio-checked-indicator-default)}
.w-rd.checked:hover .w-cb-c{background:var(--radio-checked-bg-hover)}.w-rd.is-disabled .w-cb-c{background:var(--radio-default-bg-disabled)}.w-rd.is-disabled.checked .w-cb-c{background:var(--radio-checked-bg-disabled)}
.w-rd.is-focus .w-cb-c,.w-rd:focus-visible .w-cb-c{outline-color:var(--radio-outline)}
.w-rc{display:flex;align-items:center;gap:12px;width:240px;min-height:var(--radio-card-minHeight);padding:var(--radio-card-paddingV) var(--radio-card-paddingH);border:0;border-radius:var(--radio-card-borderRadius);background:var(--radio-card-bg-default);box-shadow:inset 0 0 0 1px var(--radio-card-br-default);cursor:pointer;text-align:left;color:var(--radio-card-icon-default)}
.w-rc:hover,.w-rc.is-hover{box-shadow:inset 0 0 0 1px var(--radio-card-br-hover)}
.w-rc.checked{box-shadow:inset 0 0 0 1px var(--radio-card-checked-br-default);color:var(--radio-card-checked-icon-default)}
.w-rc .w-cb-t{flex:1;font-size:12px;line-height:16px;font-weight:600}.w-rc.checked .w-cb-t{color:var(--radio-card-checked-label-default)}.w-rc .w-cb-t small{font-size:10px;line-height:14px;font-weight:400}
.w-rc.is-disabled{cursor:not-allowed;color:var(--radio-card-icon-disabled)}.w-rc.is-focus{outline:var(--radio-borderWidthOutline) solid var(--radio-outline)}
.w-rc .rc-img{width:var(--radio-card-imageSize);height:var(--radio-card-imageSize);border-radius:6px}
/* switcher */
.w-sw{display:inline-flex;align-items:center;gap:12px;border:0;background:none;padding:0;cursor:pointer;color:var(--switcher-label-default);font-size:14px;line-height:20px;text-align:left}
.w-sw.right{flex-direction:row-reverse;justify-content:space-between;width:min(320px,100%)}
.w-sw-tr{position:relative;flex:none;display:inline-flex;align-items:center;gap:var(--switcher-gap-default);height:var(--switcher-size);min-width:calc(var(--switcher-size) + 18px);padding:var(--switcher-padding);border-radius:var(--switcher-borderRadius);background:var(--switcher-bg-default);transition:background .15s}
.w-sw-ind{display:grid;place-items:center;width:var(--switcher-indicator-size-default);height:var(--switcher-indicator-size-default);border-radius:var(--switcher-borderRadiusIndicator);background:var(--switcher-indicator-bg-default);color:var(--switcher-indicator-color-default);box-shadow:var(--shadowSm);transition:transform .18s,width .12s}
.w-sw-ind .ic{width:var(--switcher-indicator-iconSize);height:var(--switcher-indicator-iconSize)}
.w-sw-in{min-width:var(--switcher-inner-minWidth);display:flex;align-items:center;color:var(--switcher-inner-color-default);font:600 10px/14px var(--fontFamilyMain);padding-right:4px}
.w-sw-in .ic{width:var(--switcher-inner-iconSize);height:var(--switcher-inner-iconSize)}
.w-sw:hover .w-sw-tr,.w-sw.is-hover .w-sw-tr{background:var(--switcher-bg-hover)}.w-sw:active .w-sw-ind,.w-sw.is-active .w-sw-ind{width:var(--switcher-indicator-size-active)}
.w-sw.checked .w-sw-tr{background:var(--switcher-checked-bg-default);flex-direction:row-reverse;padding-left:4px}.w-sw.checked:hover .w-sw-tr{background:var(--switcher-checked-bg-hover)}
.w-sw.checked .w-sw-ind{color:var(--switcher-checked-indicator-color-default)}.w-sw.checked .w-sw-in{color:var(--switcher-checked-inner-color-default);padding:0 0 0 4px}
.w-sw.is-focus .w-sw-tr,.w-sw:focus-visible .w-sw-tr{outline:var(--switcher-outlineBorderWidth) solid var(--switcher-outline);outline-offset:1px}.w-sw:focus-visible{outline:0}
.w-sw.is-disabled{cursor:not-allowed;color:var(--switcher-label-disabled)}.w-sw.is-disabled .w-sw-tr{background:var(--switcher-bg-disabled)}.w-sw.is-disabled.checked .w-sw-tr{background:var(--switcher-checked-bg-disabled)}.w-sw.is-disabled .w-sw-ind{background:var(--switcher-indicator-bg-disabled)}
.w-sw-t{display:flex;flex-direction:column}.w-sw-t small{font-size:12px;line-height:16px;color:var(--tt-secondary)}
.w-sw.sm{gap:0}.w-sw.sm .w-sw-tr{min-width:0}
/* segmented */
.w-seg{display:inline-flex;gap:0;padding:var(--segmented-padding);border-radius:var(--segmented-borderRadius-md);background:var(--segmented-bg);position:relative}
.w-seg.block{display:flex;width:min(420px,100%)}.w-seg.block .w-seg-i{flex:1}
.w-seg-i{display:inline-flex;align-items:center;justify-content:center;gap:var(--segmented-item-gap-md);height:var(--segmented-item-size-md);padding:0 var(--segmented-item-paddingH-md);border:0;border-radius:var(--segmented-item-borderRadius-md);background:var(--segmented-item-bg);color:var(--segmented-item-label-default);font:400 14px/20px var(--fontFamilyMain);cursor:pointer;white-space:nowrap;transition:background .15s,color .15s}
.w-seg-i:hover{color:var(--segmented-item-label-hover)}
.w-seg-i.on{background:var(--segmented-item-checked-bg);color:var(--segmented-item-checked-label);box-shadow:var(--shadowSm);font-weight:600}
.w-seg.sm{border-radius:var(--segmented-borderRadius-sm)}.w-seg.sm .w-seg-i{height:var(--segmented-item-size-sm);padding:0 var(--segmented-item-paddingH-sm);border-radius:var(--segmented-item-borderRadius-sm);font-size:12px;line-height:16px;gap:var(--segmented-item-gap-sm)}
.w-seg.focus{outline:var(--segmented-outline-borderWidth) solid var(--segmented-outline-color);outline-offset:1px}
.w-seg-i.dis{color:var(--segmented-item-label-disabled);cursor:not-allowed}
/* chip */
.w-chip{display:inline-flex;align-items:center;gap:var(--chip-gap);height:var(--chip-size-md);padding:0 var(--chip-paddingH);border:0;border-radius:var(--chip-rounded-borderRadius-md);background:var(--chip-bg-default);box-shadow:inset 0 0 0 var(--chip-borderWidth) var(--chip-br-default);color:var(--chip-color-default);font:400 12px/16px var(--fontFamilyMain);cursor:pointer;white-space:nowrap;user-select:none}
.w-chip.circle{border-radius:var(--chip-circle-borderRadius-md)}.w-chip .ic{width:var(--chip-iconSize-md);height:var(--chip-iconSize-md)}
.w-chip.sz-sm{height:var(--chip-size-sm);border-radius:var(--chip-rounded-borderRadius-sm)}.w-chip.sz-sm.circle{border-radius:var(--chip-circle-borderRadius-sm)}.w-chip.sz-sm .ic{width:var(--chip-iconSize-sm);height:var(--chip-iconSize-sm)}
.w-chip:hover,.w-chip.is-hover{background:var(--chip-bg-hover)}.w-chip:active,.w-chip.is-active{background:var(--chip-bg-active)}
.w-chip.checked{background:var(--chip-checked-bg-default);box-shadow:inset 0 0 0 var(--chip-borderWidth) var(--chip-checked-br-default)}.w-chip.checked:hover{background:var(--chip-checked-bg-hover)}
.w-chip .x{display:grid;place-items:center;color:var(--chip-close-default);margin-right:-4px}.w-chip .x:hover{color:var(--chip-close-hover)}.w-chip.checked .x{color:var(--chip-checked-close-default)}
.w-chip.is-focus,.w-chip:focus-visible{outline:var(--chip-outlineBorderWidth-md) solid var(--chip-outline-color);outline-offset:1px}
.w-chip.is-disabled{background:var(--chip-bg-disabled);color:var(--chip-color-disabled);box-shadow:inset 0 0 0 1px var(--chip-br-disabled);cursor:not-allowed}
.w-chip .av{width:24px;height:24px;margin-left:-8px;border-radius:50%;background:var(--avatar-bg);display:grid;place-items:center;font-size:10px;font-weight:600;color:var(--avatar-color)}.w-chip.sz-sm .av{width:18px;height:18px;margin-left:-8px}
/* calendar */
.w-cal{display:inline-flex;flex-direction:column;gap:var(--calendar-gap);padding:16px;border-radius:var(--borderRadius-lg);background:var(--bg-neutral-primary)}
.w-cal-h{display:flex;align-items:center;gap:4px}
.w-cal-m{display:flex;align-items:center;gap:var(--calendar-month-gap-md);margin-right:auto;border:0;background:none;padding:0 4px;color:var(--calendar-month-color);cursor:pointer}.w-cal-m .ic{color:var(--calendar-month-icon)}
.w-cal.lg .w-cal-m{gap:var(--calendar-month-gap-lg)}
.w-cal-v{width:1px;height:20px;background:var(--divider-br);margin:0 4px}
.w-cal-g{display:grid;grid-template-columns:repeat(7,var(--calendar-item-size-md));gap:4px}.w-cal.lg .w-cal-g{grid-template-columns:repeat(7,var(--calendar-item-size-lg))}
.w-cal-d{height:24px;display:grid;place-items:center;font-size:12px;line-height:16px;color:var(--calendar-day-color-default);font-weight:600}
.w-cal-i{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;height:var(--calendar-item-size-md);border:0;border-radius:var(--calendar-item-borderRadius);background:none;box-shadow:inset 0 0 0 var(--calendar-item-borderWidth) var(--calendar-item-default-bg-defalut);color:var(--calendar-item-default-color-default);font:400 14px/20px var(--fontFamilyMain);cursor:pointer}
.w-cal.lg .w-cal-i{height:var(--calendar-item-size-lg);font-size:16px}
.w-cal-i:hover{background:var(--calendar-item-default-bg-hover)}.w-cal-i:active{background:var(--calendar-item-default-bg-active)}
.w-cal-i.ext{box-shadow:none;color:var(--calendar-item-external-color-default)}.w-cal-i.ext:hover{background:var(--calendar-item-external-bg-hover)}
.w-cal-i.today{box-shadow:inset 0 0 0 var(--calendar-item-borderWidth) var(--calendar-item-today-br-hover);color:var(--calendar-item-today-color-default)}
.w-cal-i.on{background:var(--calendar-item-checked-bg);color:var(--calendar-item-checked-color);box-shadow:none}
.w-cal-i .dot{width:var(--calendar-item-size-indicatorSize);height:var(--calendar-item-size-indicatorSize);border-radius:50%;background:var(--calendar-item-default-color-indicator)}.w-cal-i.on .dot{background:var(--calendar-item-checked-color)}
.w-cal-i .bd{position:absolute;top:-4px;right:-4px;display:grid;place-items:center;padding:var(--calendar-badge-padding-md);border-radius:var(--calendar-badge-borderRadius-md);background:var(--calendar-item-badge-bg-default);box-shadow:inset 0 0 0 1px var(--calendar-item-badge-br-default);color:var(--tt-accent2)}
.w-cal-i .bd .ic{width:var(--calendar-item-badge-iconSize-md);height:var(--calendar-item-badge-iconSize-md)}
.w-cal-i:focus-visible{outline:var(--calendar-item-outlineBorderWidth) solid var(--calendar-item-outline)}`;
/* ---- helpers ---- */
const CHECK_SVG='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
function CB(o){return `<button type="button" role="checkbox" aria-checked="${o.indeterminate?'mixed':!!o.checked}" class="${cls('w-cb',o.layout=='Right'&&'right',o.checked&&!o.indeterminate&&'checked',o.indeterminate&&'indet',o.error&&'error',o.state&&st(o))}" ${o.toggle?`data-toggle="${o.toggle}"`:''}><span class="w-cb-c">${o.checked&&!o.indeterminate?CHECK_SVG:''}</span>${o.label!==false?`<span class="w-cb-t">${esc(o.label||'Label')}${o.desc?`<small>${esc(o.desc)}</small>`:''}${o.error&&o.errText?`<span class="err">${esc(o.errText)}</span>`:''}</span>`:''}</button>`}
function RADIO(o){return `<button type="button" role="radio" aria-checked="${!!o.checked}" class="${cls('w-cb w-rd',o.layout=='Right'&&'right',o.checked&&'checked',o.state&&st(o))}" ${o.attrs||''}><span class="w-cb-c"></span>${o.label!==false?`<span class="w-cb-t">${esc(o.label||'Label')}${o.desc?`<small>${esc(o.desc)}</small>`:''}</span>`:''}</button>`}
function SW(o){return `<button type="button" role="switch" aria-checked="${!!o.checked}" class="${cls('w-sw',o.layout=='Right'&&'right',o.checked&&'checked',o.state&&st(o))}" ${o.toggle?`data-toggle="${o.toggle}"`:''}><span class="w-sw-tr"><span class="w-sw-ind">${o.indicatorIcon?I(o.checked?'check':'close',12):''}</span>${o.inner?`<span class="w-sw-in">${o.innerIcon?I(o.checked?'sun':'moon',14):esc(o.checked?'ON':'OFF')}</span>`:''}</span>${o.label?`<span class="w-sw-t">${esc(o.label)}${o.desc?`<small>${esc(o.desc)}</small>`:''}</span>`:''}</button>`}
function SEG(items,on,size,key,o={}){return `<div class="${cls('w-seg',size=='sm'&&'sm',o.block&&'block',o.focus&&'focus')}" role="tablist">${items.map(t=>`<button type="button" role="tab" aria-selected="${t==on}" class="w-seg-i ${t==on?'on':''}" ${key?`data-set="${key}=${esc(t)}"`:''}>${o.icons?I(o.icons[items.indexOf(t)],16):''}${esc(t)}</button>`).join('')}</div>`}
function CHIP(o){return `<button type="button" aria-pressed="${!!o.checked}" class="${cls('w-chip','sz-'+(o.size||'md'),o.rounded&&'circle',o.checked&&'checked',o.state&&st(o))}" ${o.set?`data-set="${o.set}"`:o.toggle?`data-toggle="${o.toggle}"`:''}>${o.avatar?`<span class="av">SW</span>`:''}${o.icon?I(o.icon,20):''}<span>${esc(o.label)}</span>${o.closable?`<span class="x" ${o.closeAttr||''}>${I('close',16)}</span>`:''}</button>`}
function INPUT(o){const v=o.value??'';const val=slug(o.validation||'None');const s=o.size||'md';
 const fld=o.area?`<textarea data-bind="${o.bind||'value'}" placeholder="${esc(o.placeholder||'')}" ${o.state=='Disabled'?'disabled':''} maxlength="${o.max||200}">${esc(v)}</textarea>`:`<input data-bind="${o.bind||'value'}" value="${esc(v)}" placeholder="${esc(o.placeholder||'')}" ${o.state=='Disabled'?'disabled':''} ${o.type?`type="${o.type}"`:''} ${o.max?`maxlength="${o.max}"`:''} aria-label="${esc(o.label||o.placeholder||'Input')}">`;
 return `<div class="${cls('w-in','sz-'+s,o.area&&'area','v-'+val,st(o),v&&'filled')}" data-field ${o.style?`style="${o.style}"`:''}>
 ${o.header!==false&&o.label?`<div class="w-in-h"><span>${esc(o.label)}</span>${o.mandatory?'<span class="ast">*</span>':''}${o.optional?'<span class="opt">(optional)</span>':''}${o.info?I('info',14):''}</div>`:''}
 <div class="w-in-f">${o.addon?`<span class="add l">${esc(o.addon)}</span>`:''}${o.prefix?`<span class="pre">${o.flag?'<i class="flag"></i>':''}${o.prefixIcon?I(o.prefixIcon,16):''}${o.prefixText?`<b>${esc(o.prefixText)}</b>`:''}</span>`:''}${fld}
 <span class="suf">${o.counter?`<span class="cnt" data-count="${o.max||100}">${v.length}/${o.max||100}</span>`:''}${o.clear?`<button type="button" class="clr" aria-label="Clear" data-clear>${I('close',16)}</button>`:''}${o.suffixText?`<span>${esc(o.suffixText)}</span>`:''}${o.divider?'<i class="spl"></i>':''}${o.suffixIcon?I(o.suffixIcon,16):''}${o.arrow?`<span class="arw">${I('chevron-down',16)}</span>`:''}</span>${o.addon1?`<span class="add r">${esc(o.addon1)}</span>`:''}</div>
 ${o.helper?`<div class="w-in-ft">${o.helperIcon?I(val=='success'?'check-circle':val=='warning'?'alert-triangle':val=='error'?'alert-circle':'info',14):''}<span>${esc(o.helper)}</span></div>`:''}${o.requirement?o.requirement:''}</div>`}
function mountInput(el){$$('[data-clear]',el).forEach(b=>b.addEventListener('click',()=>{const f=b.closest('[data-field]'),i=f.querySelector('input,textarea');i.value='';i.dispatchEvent(new Event('input',{bubbles:true}));i.focus()}))}
/* ---- defs ---- */
reg({id:'input',name:'Input / TextArea',sig:'Input',group:'forms',figma:'8:24921',alias:'text field textarea form',
 desc:'Single- and multi-line text field with header, prefix/suffix slots, addons, counter and validation. Type in the preview.',
 props:[{n:'size',t:'enum',o:['sm','md','lg'],d:'md'},{n:'state',t:'enum',o:STATES5,d:'Default'},{n:'validation',t:'enum',o:['None','Success','Warning','Error'],d:'None',desc:'Colors border and footer.'},{n:'textArea',t:'bool',d:false,desc:'TextArea/Default — multi-line.'},
  {n:'header',t:'bool',d:true,desc:'Label row above the field.'},{n:'label',t:'text',d:'Email',when:p=>p.header},{n:'mandatory',t:'bool',d:true,when:p=>p.header},{n:'optional',t:'bool',d:false,when:p=>p.header},{n:'info',t:'bool',d:false,when:p=>p.header},
  {n:'placeholder',t:'text',d:'name@example.com'},{n:'value',t:'text',d:'',desc:'Typed value — also editable directly in the preview.'},
  {n:'prefix',t:'bool',d:true,desc:'Leading icon / flag / text.'},{n:'flag',t:'bool',d:false,when:p=>p.prefix},{n:'suffix',t:'bool',d:true,desc:'Trailing slot group.'},{n:'counter',t:'bool',d:false,when:p=>p.suffix},{n:'clear',t:'bool',d:true,when:p=>p.suffix},{n:'arrow',t:'bool',d:false,when:p=>p.suffix},
  {n:'addon',t:'bool',d:false,desc:'Left addon block (Input/Addon).'},{n:'addon1',t:'bool',d:false,desc:'Right addon block.'},{n:'helper',t:'bool',d:true,desc:'Helper text under the field.'},{n:'helperIcon',t:'bool',d:true,when:p=>p.helper},{n:'requirement',t:'bool',d:false,desc:'Input/Requirement checklist (password rules).'}],
 render:p=>{const pw=p.requirement,v=p.value||'';const rq=pw?`<ul class="w-req">${[['8+ characters',v.length>=8],['One number',/\d/.test(v)],['One capital letter',/[A-Z]/.test(v)]].map(([t,ok])=>`<li class="${v?ok?'ok':'bad':''}">${I(ok?'check':'minus',14)}${t}</li>`).join('')}</ul>`:'';
  return INPUT({size:p.size,state:p.state,validation:p.validation,area:p.textArea,label:p.header?p.label:'',mandatory:p.mandatory,optional:p.optional,info:p.info,placeholder:p.placeholder,value:p.value,prefix:p.prefix&&!p.textArea,flag:p.flag,prefixIcon:p.flag?null:'user',counter:p.counter||p.textArea,max:p.textArea?200:40,clear:p.clear&&!p.textArea,arrow:p.arrow,addon:p.addon?'https://':'',addon1:p.addon1?'.com':'',helper:p.helper?({None:'We never share your email.',Success:'Looks good.',Warning:'This email is used by another account.',Error:'Enter a valid email address.'})[p.validation]:'',helperIcon:p.helperIcon,requirement:rq})},
 mount:(el,p,set)=>{mountInput(el);if(p.requirement){const i=$('input,textarea',el);i.addEventListener('input',()=>{const pos=i.selectionStart;set({value:i.value});const n=$('input,textarea',$('#stage'));n.focus();n.setSelectionRange(pos,pos)})}},
 gallery:()=>['sm','md','lg'].map(s=>INPUT({size:s,label:'Size '+s,placeholder:'Placeholder',prefix:true,prefixIcon:'search',style:'width:240px'})).join('')+['Success','Warning','Error'].map(v=>INPUT({validation:v,label:v,value:'Value',helper:v+' helper',helperIcon:true,style:'width:240px'})).join('')+INPUT({label:'Amount',addon:'$',addon1:'USD',value:'250',style:'width:240px'})+INPUT({label:'Phone',prefix:true,flag:true,prefixText:'+380',placeholder:'00 000 0000',style:'width:240px'}),
 notes:['Validation colors: None = neutral, Success = green, Warning = yellow, Error = red; applied to border and footer.','Field sizes sm/md/lg = 32/40/48px. With header and helper the full component is 50/64/80px tall in Figma.','Surface uses the <b>emboss</b> effect (inset light + dark edge) — see Effects.','Placeholder and helper copy stay in English in product layouts.'],
 tokens:['input.size.*','input.bg.*','input.bg.error.*','input.br.*','input.outline.*','input.borderRadius.*','input.paddingH.*','input.gap.*','input.color.*','input.color.filled.*','input.label.default','input.asterix','input.labelOptional','input.helper.label.*','input.helper.icon.*','input.counter.*','input.addon.*','input.requirement.label.*','embossProps.*']});
reg({id:'checkbox',name:'Checkbox',group:'forms',figma:'8:23423',
 desc:'Binary or mixed selection with optional description. Click the preview to toggle.',
 props:[{n:'layout',t:'enum',o:['Left','Right'],d:'Left',desc:'Control position relative to the label.'},{n:'checked',t:'bool',d:true},{n:'indeterminate',t:'bool',d:false,desc:'Mixed state for parent checkboxes.'},{n:'state',t:'enum',o:STATES5,d:'Default'},{n:'block',t:'bool',d:true,desc:'Label + description block.'},{n:'label',t:'text',d:'I am over 18 and accept the Terms'},{n:'description1',t:'bool',d:true,when:p=>p.block},{n:'error',t:'bool',d:false,desc:'Validation error look.'}],
 render:p=>CB({layout:p.layout,checked:p.checked,indeterminate:p.indeterminate,state:p.state,label:p.label,desc:p.block&&p.description1?'You can withdraw consent at any time in Settings.':'',error:p.error,errText:'Required to continue.',toggle:'checked'}),
 gallery:()=>[CB({label:'Default'}),CB({label:'Checked',checked:true}),CB({label:'Indeterminate',indeterminate:true}),CB({label:'Error',error:true}),CB({label:'Disabled',state:'Disabled'}),CB({label:'Disabled checked',checked:true,state:'Disabled'})].map(x=>`<div class="gl">${x}</div>`).join(''),
 notes:['In Figma “checked” is a ready SVG asset — clone the instance, do not redraw the tick.','Error state uses <code>checkbox.error.bg</code> and <code>checkbox.br.error</code>.'],
 tokens:['checkbox.size','checkbox.borderRadius','checkbox.gap','checkbox.default.bg.*','checkbox.checked.bg.*','checkbox.checked.indicator.*','checkbox.indeterminate.indicator.*','checkbox.br.*','checkbox.error.bg.*','checkbox.label.*','checkbox.description.*','checkbox.outline.*']});
reg({id:'radio',name:'Radio',group:'forms',figma:'8:53714',alias:'radio card option',
 desc:'Single choice from a set. Default (circle) and Card (option tile with a built-in Radio). Click options to select.',
 props:[{n:'type',t:'enum',o:['Default','Card'],d:'Default',desc:'Radio/Default or Radio/Card.'},{n:'layout',t:'enum',o:['Left','Right'],d:'Left',when:p=>p.type=='Default'},{n:'state',t:'enum',o:STATES5,d:'Default'},{n:'description',t:'bool',d:true},{n:'selected',t:'enum',o:['Visa','Mastercard','Crypto'],d:'Visa',desc:'Selected option in the demo group.'}],
 stage:'col',render:p=>{const opts=[['Visa','Instant, no fee'],['Mastercard','Instant, no fee'],['Crypto','Up to 30 minutes']];
  return `<div role="radiogroup" style="display:flex;flex-direction:column;gap:var(--radio-card-borderRadius)">${opts.map(([l,d])=>p.type=='Card'?`<button type="button" role="radio" aria-checked="${p.selected==l}" class="${cls('w-rc',p.selected==l&&'checked',st(p))}" data-set="selected=${l}">${I(l=='Crypto'?'coin':'wallet',20)}<span class="w-cb-t">${l}${p.description?`<small>${d}</small>`:''}</span>${RADIO({checked:p.selected==l,label:false})}</button>`:RADIO({checked:p.selected==l,label:l,desc:p.description?d:'',layout:p.layout,state:p.state,attrs:`data-set="selected=${l}"`})).join('')}</div>`},
 notes:['Radio/Card embeds a real Radio/Default instance (composition, not a copy).','Description size differs: Default = 12px, Card = 10px — keep it.'],
 tokens:['radio.size','radio.indicatorSize','radio.default.bg.*','radio.checked.bg.*','radio.checked.indicator.*','radio.label.*','radio.card.*','radio.card.checked.*','radio.outline'],uses:['checkbox']});
reg({id:'switcher',name:'Switcher',group:'forms',figma:'8:41424',alias:'switch toggle',
 desc:'On/off slider for instant settings. Not the same as Toggle Button. Click the preview.',
 props:[{n:'checked',t:'bool',d:true},{n:'state',t:'enum',o:STATES5,d:'Default'},{n:'layout',t:'enum',o:['Left','Right'],d:'Left',desc:'⬅️ Left / Right ➡️ in Figma.'},{n:'block',t:'bool',d:true,desc:'Label + Description.'},{n:'label',t:'text',d:'Quick deposit'},{n:'indicatorIcon',t:'bool',d:false,desc:'12px icon inside the knob.'},{n:'innerLabel',t:'bool',d:false,desc:'ON/OFF text inside the track.'},{n:'innerIcon',t:'bool',d:false,desc:'Icon inside the track.'}],
 render:p=>SW({checked:p.checked,state:p.state,layout:p.layout,label:p.label,desc:p.block?'Top up in one tap from the header.':'',indicatorIcon:p.indicatorIcon,inner:p.innerLabel||p.innerIcon,innerIcon:p.innerIcon,toggle:'checked'}),
 gallery:()=>[SW({label:'Off'}),SW({label:'On',checked:true}),SW({label:'Inner label',inner:true,checked:true}),SW({label:'Indicator icon',indicatorIcon:true,checked:true}),SW({label:'Disabled',state:'Disabled'}),SW({label:'Disabled on',state:'Disabled',checked:true})].join(''),
 notes:['The inner wrapper sits inside the track next to the knob (native ON/OFF), it is not external text.','Press and hold: the knob stretches to 24px (<code>switcher.indicator.size.active</code>).'],
 tokens:['switcher.size','switcher.padding','switcher.borderRadius','switcher.borderRadiusIndicator','switcher.bg.*','switcher.checked.bg.*','switcher.indicator.*','switcher.inner.*','switcher.label.*','switcher.outline']});
reg({id:'segmented',name:'Segmented',group:'forms',figma:'8:54211',alias:'segment tabs switcher pill',
 desc:'Capsule tab switcher for 2–6 options. Active item is lifted with a small shadow; focus draws an outer pink ring.',
 props:[{n:'size',t:'enum',o:['md','sm'],d:'md'},{n:'block',t:'bool',d:false,desc:'Stretch to the container width.'},{n:'focus',t:'bool',d:false,desc:'Outer focus ring on the container.'},{n:'items',t:'range',min:2,max:6,d:3,desc:'Number of items (item1–item6).'},{n:'icons',t:'bool',d:false},{n:'active',t:'text',d:'Casino',ctl:false}],
 render:p=>{const all=['Casino','Live','Sport','Esports','Poker','Lottery'].slice(0,p.items);const on=all.includes(p.active)?p.active:all[0];return SEG(all,on,p.size,'active',{block:p.block,focus:p.focus,icons:p.icons?['casino','live','trophy','target','dice','ticket']:null})},
 notes:['Focus is an outer ring on the whole capsule — unique among DS components.','The same Segmented appears in the Card/Details header.'],
 tokens:['segmented.bg','segmented.padding','segmented.borderRadius.*','segmented.item.*','segmented.item.checked.*','segmented.outline.*','shadow.y.sm']});
reg({id:'chip',name:'Chip',group:'forms',figma:'8:13507',alias:'filter tag',
 desc:'Filter or selection pill with optional avatar, icon and close. Click chips to check them, × to remove.',
 props:[{n:'size',t:'enum',o:['md','sm'],d:'md'},{n:'state',t:'enum',o:STATES5,d:'Default'},{n:'rounded',t:'bool',d:false,desc:'Full pill radius.'},{n:'avatar',t:'bool',d:false},{n:'icon',t:'bool',d:true},{n:'closable',t:'bool',d:true},{n:'lable',t:'text',d:'Slots',desc:'Label (Figma spelling).'},{n:'sel',t:'text',d:'0',ctl:false},{n:'gone',t:'text',d:'',ctl:false}],
 render:p=>{const labels=[p.lable,'Megaways','Bonus buy','Drops & Wins'];const sel=String(p.sel).split(','),gone=String(p.gone).split(',');
  const html=labels.map((l,i)=>gone.includes(String(i))?'':CHIP({label:l,size:p.size,state:p.state,rounded:p.rounded,avatar:p.avatar&&i==0,icon:p.icon?['dice','flash','gift','trophy'][i]:null,closable:p.closable,checked:sel.includes(String(i)),set:`sel=${sel.includes(String(i))?sel.filter(x=>x!=i).join(','):[...sel,i].join(',')}`,closeAttr:`data-gone="${i}"`})).join('');
  return html||`<button type="button" class="w-btn v-text sz-sm" data-set="gone=">Restore chips</button>`},
 mount:(el,p,set)=>$$('[data-gone]',el).forEach(x=>x.addEventListener('click',e=>{e.stopPropagation();set({gone:[p.gone,x.dataset.gone].filter(Boolean).join(',')})})),
 notes:['Checked changes background, border and close color only — not the text color.','Disabled exists only with Checked = false (36 of 40 combinations).','Prop name is “lable” in Figma — a systemic spelling in the DS.'],
 tokens:['chip.size.*','chip.paddingH','chip.gap','chip.bg.*','chip.br.*','chip.checked.*','chip.close.*','chip.rounded.borderRadius.*','chip.circle.borderRadius.*','chip.outline.color'],uses:['avatar']});
const MON=['January','February','March','April','May','June','July','August','September','October','November','December'];
reg({id:'calendar',name:'Calendar',group:'forms',figma:'8:77398',alias:'date picker',
 desc:'Month grid built from Calendar/Item cells. Pick a day, switch months, collapse to one week.',
 props:[{n:'sIze',t:'enum',o:['md','lg'],d:'md',desc:'Cell 40 or 64px. Prop keeps the Figma spelling “sIze”.'},{n:'expanded',t:'bool',d:true,desc:'Full month vs. the selected week.'},{n:'indicator',t:'bool',d:true,desc:'Event dot under some dates.'},{n:'badge',t:'bool',d:true,desc:'Prize badge on some dates.'},{n:'y',t:'range',min:2024,max:2028,d:2026,ctl:false},{n:'m',t:'range',min:0,max:11,d:8,ctl:false},{n:'day',t:'range',min:1,max:31,d:21,ctl:false}],
 stage:'top',render:p=>{const first=new Date(p.y,p.m,1),start=(first.getDay()+6)%7,dim=new Date(p.y,p.m+1,0).getDate(),prevDim=new Date(p.y,p.m,0).getDate();const cells=[];
  for(let i=0;i<42;i++){const d=i-start+1;cells.push(d<1?{d:prevDim+d,ext:1}:d>dim?{d:d-dim,ext:1}:{d})}
  let rows=cells;if(!p.expanded){const idx=cells.findIndex(c=>!c.ext&&c.d==p.day),r=Math.floor(idx/7);rows=cells.slice(r*7,r*7+7)}else if(cells.slice(35).every(c=>c.ext))rows=cells.slice(0,35);
  const today=new Date();const isT=c=>!c.ext&&today.getFullYear()==p.y&&today.getMonth()==p.m&&today.getDate()==c.d;
  return `<div class="${cls('w-cal',p.sIze=='lg'&&'lg')}"><div class="w-cal-h"><button type="button" class="w-cal-m ${p.sIze=='lg'?'t4':'t5'}">${MON[p.m]} ${p.y}${I('chevron-down',20)}</button>${BTN({variant:'Text',size:'sm',icon:'chevron-left',iconOnly:true,attrs:'data-cal="-1"',aria:'Previous month'})}${BTN({variant:'Text',size:'sm',icon:'chevron-right',iconOnly:true,attrs:'data-cal="1"',aria:'Next month'})}<i class="w-cal-v"></i>${BTN({variant:'Text',size:'sm',icon:p.expanded?'chevron-up':'chevron-down',iconOnly:true,attrs:'data-toggle="expanded"',aria:'Collapse'})}</div>
  <div class="w-cal-g">${['Mo','Tu','We','Th','Fr','Sa','Su'].map(d=>`<span class="w-cal-d">${d}</span>`).join('')}${rows.map(c=>`<button type="button" class="${cls('w-cal-i',c.ext&&'ext',isT(c)&&'today',!c.ext&&c.d==p.day&&'on')}" ${c.ext?'':`data-set="day=${c.d}"`}>${String(c.d).padStart(2,'0')}${p.indicator&&!c.ext&&c.d%5==2?'<i class="dot"></i>':''}${p.badge&&!c.ext&&c.d%9==4?`<span class="bd">${I('gift',12)}</span>`:''}</button>`).join('')}</div></div>`},
 mount:(el,p,set)=>$$('[data-cal]',el).forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();let m=p.m+ +b.dataset.cal,y=p.y;if(m<0){m=11;y--}if(m>11){m=0;y++}set({m,y,day:Math.min(p.day,new Date(y,m+1,0).getDate())})})),
 notes:['Token name <code>calendar.item.default.bg.defalut</code> keeps the Figma typo “defalut” — match it exactly.','Month title is Bungee (t5 on md, t4 on lg).','In Figma the grid is a specimen with fixed numbers; this preview generates real months.'],
 tokens:['calendar.gap','calendar.item.size.*','calendar.item.borderRadius','calendar.item.default.bg.*','calendar.item.default.color.*','calendar.item.checked.*','calendar.item.today.*','calendar.item.external.color.*','calendar.item.badge.*','calendar.month.*'],uses:['btn','divider']});
