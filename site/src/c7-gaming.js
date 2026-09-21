/* ===== Gaming & promo: WoF, WoM, Randomizer, Scratch, Achievement, QDW, Announcer, Banner, Support widget, Award, Certificates, Onboarding ===== */
CSS+=`
.tsh{text-shadow:0 var(--shadow-y-md) var(--shadow-blur-md) var(--shadow-default)}
/* WoF */
.w-wof{position:relative;width:var(--wf,320px);height:var(--wf,320px);flex:none}
.w-wof.sm{--wf:240px}
.w-wof .whl{position:absolute;inset:0;border-radius:50%;box-shadow:0 var(--shadow-y-lg) var(--shadow-blur-lg) var(--shadow-default);transition:transform 4.2s cubic-bezier(.12,.7,.12,1)}
.w-wof .whl svg{display:block;width:100%;height:100%}
.w-wof .whl text{font-family:var(--fontFamilyTitle);fill:var(--wof-sector-primary-color);filter:drop-shadow(0 2px 3px rgba(0,0,0,.35))}
.w-wof .ptr{position:absolute;left:50%;top:-10px;width:28px;height:36px;transform:translateX(-50%);z-index:2;filter:drop-shadow(0 var(--shadow-y-md) var(--shadow-blur-md) var(--shadow-default))}
.w-wofb{position:absolute;left:50%;top:50%;display:grid;place-items:center;width:var(--wb,88px);height:var(--wb,88px);margin:calc(var(--wb,88px)/-2) 0 0 calc(var(--wb,88px)/-2);border:0;border-radius:50%;background:var(--wof-btn-default-bg);box-shadow:var(--wof-btn-boxShadow);color:#fff;cursor:pointer;z-index:2;font-family:var(--fontFamilyTitle);font-size:var(--fontSizeT3);line-height:1;transition:transform .12s}
.w-wof.sm .w-wofb{--wb:64px;font-size:var(--fontSizeT5)}
.w-wofb:hover,.w-wofb.is-hover{background:var(--wof-btn-hover-bg)}.w-wofb:active{transform:scale(.96)}.w-wofb[disabled]{cursor:wait;filter:saturate(.6)}
.w-res{min-height:24px;color:var(--tt-secondary);font-size:14px;text-align:center}.w-res b{color:var(--tt-accent3)}
/* WoM */
.w-wom{position:relative;width:var(--wm,380px);height:var(--wm,380px);flex:none}.w-wom.sm{--wm:280px}
.w-wom .whl{position:absolute;inset:0;transition:transform 4.6s cubic-bezier(.12,.7,.12,1)}
.w-wom .whl svg{position:absolute;inset:0;width:100%;height:100%}
.w-wom .lab{position:absolute;left:50%;top:50%;display:flex;flex-direction:column;align-items:center;gap:4px;width:110px;margin-left:-55px;transform-origin:50% 0;text-align:center}
.w-wom .lab small{font-family:var(--fontFamilyTitle);font-size:10px;line-height:12px;color:var(--wom-sector-color-title);text-shadow:0 var(--shadow-y-sm) var(--shadow-blur-sm) var(--shadow-default)}
.w-wom .lab b{font-family:var(--fontFamilyTitle);font-weight:400;font-size:var(--fontSizeT5);line-height:1;color:var(--wom-sector-color-text);text-shadow:0 var(--shadow-y-sm) var(--shadow-blur-sm) var(--shadow-default)}
.w-wom .lab i{display:block;width:calc(var(--wom-thumb-height-md) * .75);height:calc(var(--wom-thumb-width-md) * .75);border-radius:8px;box-shadow:0 var(--shadow-y-sm) var(--shadow-blur-sm) var(--shadow-default)}
.w-wom.sm .lab i{width:calc(var(--wom-thumb-height-md) * .5);height:calc(var(--wom-thumb-width-md) * .5)}.w-wom.sm .lab{width:84px;margin-left:-42px}
.w-womp{position:absolute;left:50%;top:50%;width:96px;height:96px;margin:-48px 0 0 -48px;z-index:2}.w-wom.sm .w-womp{transform:scale(.8)}
.w-womp .arr{position:absolute;left:50%;top:-22px;width:28px;height:30px;margin-left:-14px;background:var(--wom-pointer-arrow-gradient);clip-path:polygon(50% 0,100% 100%,0 100%)}
.w-womp .cir{position:absolute;inset:0;border-radius:50%;background:var(--wom-pointer-circle);box-shadow:0 var(--shadow-y-lg) var(--shadow-blur-lg) var(--shadow-default)}
.w-womp button{position:absolute;inset:8px;border:0;border-radius:50%;background:var(--wom-pointer-btn-bg-primary);color:var(--wom-pointer-btn-color);font-family:var(--fontFamilyTitle);font-size:var(--fontSizeT4);cursor:pointer;box-shadow:inset 0 2px 6px rgba(255,255,255,.35)}
.w-womp.sec button{background:var(--wom-pointer-btn-bg-secondary)}.w-womp button:active{transform:scale(.96)}
/* randomizer */
.w-rnd{--ts:94px;position:relative;display:flex;flex-direction:column;align-items:center;gap:var(--randomizer-gap);width:min(640px,100%);padding:var(--randomizer-selector-paddingV) 0;border-radius:var(--randomizer-selector-borderRadius);background:var(--randomizer-selector-color);box-shadow:0 var(--shadow-y-md) var(--shadow-blur-md) var(--shadow-default);overflow:hidden}
.w-rnd.md{--ts:130px}
.w-rnd .vp{position:relative;width:100%;height:calc(var(--ts) + 32px);overflow:hidden}
.w-rnd .strip{position:absolute;left:50%;top:16px;display:flex;gap:var(--randomizer-selector-gap);will-change:transform}
.w-rnd .gm{flex:none;display:flex;align-items:flex-end;width:var(--ts);height:var(--ts);padding:8px;border-radius:var(--thumb-borderRadius);box-sizing:border-box;color:#fff;font:600 11px/14px var(--fontFamilyMain);opacity:.5;transition:opacity .2s}
.w-rnd .gm.hit{opacity:1}
.w-rnd .fade{position:absolute;inset:0;background:var(--randomizer-gradient-bg);pointer-events:none}
.w-rnd .frm{position:absolute;left:50%;top:calc(16px - (var(--fs) - var(--ts))/2);--fs:var(--randomizer-frame-size-sm);width:var(--fs);height:var(--fs);margin-left:calc(var(--fs)/-2);border:var(--randomizer-frame-borderWidth) solid var(--randomizer-frame-br);border-radius:var(--randomizer-frame-borderRadius);box-sizing:border-box;pointer-events:none}
.w-rnd.md .frm{--fs:var(--randomizer-frame-size-md)}.w-rnd.glow .frm{box-shadow:var(--randomizer-frameGlow),inset var(--randomizer-frameGlow)}
.w-rnd .frm::before{content:"";position:absolute;left:50%;top:-14px;width:12px;height:24px;margin-left:-6px;background:var(--randomizer-frame-color);clip-path:polygon(0 0,100% 0,50% 60%)}
/* scratch */
.w-scx{position:relative;width:var(--scratch-width-sm);height:var(--scratch-height-sm);border-radius:var(--scratch-borderRadius);overflow:hidden;touch-action:none;user-select:none}
.w-scx.md{width:var(--scratch-width-md);height:var(--scratch-height-md);max-width:100%}
.w-scx .prz{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;background:var(--scratch-bg-clear);color:var(--tt-black)}
.w-scx .prz small{font-size:12px;color:rgba(0,0,0,.5)}
.w-scx canvas{position:absolute;inset:0;width:100%;height:100%;cursor:crosshair;transition:opacity .5s}.w-scx canvas.gone{opacity:0;pointer-events:none}
.w-scx .cov{position:absolute;inset:0;background:var(--scratch-bg-fill)}
/* achievement */
.w-ach{display:flex;flex-direction:column;align-items:center;gap:var(--achievement-chain-gap);padding:var(--achievement-chain-paddingT) var(--achievement-chain-paddingH) var(--achievement-chain-paddingB);width:min(420px,100%)}
.w-ach .row{display:flex;align-items:center;gap:8px;width:100%}.w-ach .row i{flex:1;height:2px;border-radius:1px;background:var(--br-secondary)}.w-ach .row i.on{background:var(--br-success)}
.w-ach .st{display:flex;flex-direction:column;align-items:center;gap:6px;border:0;background:none;padding:0;cursor:pointer;color:var(--tt-tertiary);font:400 10px/14px var(--fontFamilyMain);width:88px}
.w-ach .st.on{color:var(--tt-secondary)}
/* qdw */
.w-qdw{position:relative;display:flex;flex-direction:column;gap:var(--qdw-gap-md);width:var(--qdw-width-md);max-width:100%;min-height:var(--qdw-height-md);padding:var(--qdw-paddingV-md) var(--qdw-paddingH-md);border-radius:var(--qdw-borderRadius);background:var(--qdw-bg-default);box-sizing:border-box;color:var(--qdw-title)}
.w-qdw::before{content:"";position:absolute;inset:0;border-radius:inherit;background:repeating-linear-gradient(45deg,var(--fill-lighter) 0 1px,transparent 1px 14px);opacity:.5;pointer-events:none}
.w-qdw>*{position:relative}
.w-qdw .hd{display:flex;align-items:center;gap:6px;padding-right:96px}.w-qdw .hd .ic{color:var(--tt-secondary)}
.w-qdw .cp{display:flex;align-items:center;justify-content:space-between;gap:8px;padding-right:96px;color:var(--qdw-caption);font-size:14px;line-height:20px}
.w-qdw .fm{display:flex;flex-direction:column;gap:var(--qdw-gapBtn-md);margin-top:auto;width:calc(100% - 100px)}
.w-qdw .fm .w-in{width:100%}.w-qdw .fr{position:absolute;right:-16px;top:16px;width:var(--qdw-image-size);height:var(--qdw-image-size);border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle at 35% 30%,var(--tt-accent3),var(--dangerStep-700,#9c1e1e));box-shadow:0 var(--shadow-y-lg) var(--shadow-blur-lg) var(--shadow-default);color:#fff}
.w-qdw .pan{position:absolute;left:8px;right:8px;bottom:8px;display:flex;flex-direction:column;gap:12px;padding:var(--notification-local-padding);border-radius:var(--notification-local-borderRadius);background:var(--notification-local-bg);-webkit-backdrop-filter:blur(var(--glass-blur-sm));backdrop-filter:blur(var(--glass-blur-sm));font-size:14px;line-height:20px;z-index:2;animation:w-nin .2s}
.w-qdw .pan .w-ab .w-btn{flex:1}
/* announcer */
.w-ann{display:flex;align-items:center;justify-content:space-between;gap:var(--announcer-gap);width:100%;padding:var(--announcer-paddingV-md) var(--announcer-paddingH-md);color:var(--announcer-color);box-sizing:border-box;font:600 14px/20px var(--fontFamilyMain)}
.w-ann.sm{padding:var(--announcer-paddingV-sm) var(--announcer-paddingH-sm);font-size:12px;line-height:16px}
.w-ann.primary{background:linear-gradient(172deg,var(--gradientProps-primary-start),var(--gradientProps-primary-end))}.w-ann.secondary{background:linear-gradient(172deg,var(--gradientProps-secondary-start),var(--gradientProps-secondary-end))}.w-ann.neutral{background:var(--announcer-bg)}
.w-ann .ct{display:flex;align-items:center;gap:var(--announcer-content-gap-md);flex:1;max-width:var(--announcer-content-maxWidth);min-width:0}.w-ann.sm .ct{gap:var(--announcer-content-gap-sm)}
.w-ann.cen .ct{justify-content:center;margin:0 auto}
.w-ann .ct>.ic{width:var(--announcer-iconSize-md);height:var(--announcer-iconSize-md);color:var(--tt-accent3);flex:none}.w-ann.sm .ct>.ic{width:var(--announcer-iconSize-sm);height:var(--announcer-iconSize-sm)}
.w-ann .im{flex:none;height:var(--announcer-image-height-md);width:calc(var(--announcer-image-height-md) * 1.6);border-radius:var(--announcer-image-borderRadius)}.w-ann.sm .im{height:var(--announcer-image-height-sm);width:calc(var(--announcer-image-height-sm) * 1.6)}
.w-ann .ct span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.frame-top{width:100%;border-radius:var(--borderRadius-lg,16px);overflow:hidden;background:var(--layout-bg);box-shadow:inset 0 0 0 1px var(--br-secondary)}
.frame-top .fpg{display:flex;flex-direction:column;gap:12px;padding:24px}.frame-top .fpg i{display:block;height:12px;border-radius:6px;background:var(--fill-default)}
/* banner */
.w-bn{position:relative;overflow:hidden;color:#fff}
.w-bn .bk{position:absolute;inset:0;width:100%;height:100%;border-radius:0}
.w-bn.card{display:flex;flex-direction:column;gap:var(--banner-card-gap-md);width:var(--banner-card-width-md);max-width:var(--banner-card-maxWidth-md);min-height:var(--banner-card-height-md);padding:var(--banner-card-paddingV-md) var(--banner-card-paddingH-md);border-radius:var(--banner-borderRadius);box-sizing:border-box}
.w-bn.card.brd{box-shadow:inset 0 0 0 var(--banner-borderWidth) var(--br-accent1)}
.w-bn .ov{position:absolute;inset:0;background:var(--banner-overlayLeft)}
.w-bn>*:not(.bk):not(.ov):not(.fr){position:relative}
.w-bn.card .t2{padding-right:var(--banner-card-shiftTitle);color:var(--banner-card-title)}.w-bn.card p{margin:0;padding-right:var(--banner-card-shift);color:var(--banner-card-caption);font-size:14px;line-height:20px}
.w-bn .fr{position:absolute;right:-8px;bottom:-8px;width:var(--banner-card-image);height:var(--banner-card-image);display:grid;place-items:center;border-radius:50%;background:radial-gradient(circle at 35% 30%,var(--tt-accent2),var(--product1Step-900,#002f86));color:#fff;opacity:.95}
.w-bn .fr .ic{width:56px;height:56px}
.w-bn.card .bt{display:flex;align-items:center;gap:8px;margin-top:auto;padding-top:12px}
.w-bn.card .inf{position:absolute;top:8px;right:8px}
.w-bn.auth,.w-bn.side{display:flex;flex-direction:column;gap:var(--banner-auth-gap);width:240px;padding:var(--banner-auth-paddingV) var(--banner-auth-paddingR) var(--banner-auth-paddingV) var(--banner-auth-paddingL);border-radius:var(--banner-auth-borderRadius);background:var(--gradient-secondary);box-sizing:border-box;overflow:visible}
.w-bn.side{width:312px;border-radius:var(--banner-sidebar-borderRadius);background:var(--gradient-primary)}
.w-bn.auth .ol{font:600 12px/16px var(--fontFamilyMain);letter-spacing:var(--letterSpacingOverline);text-transform:uppercase;color:var(--banner-auth-overline)}.w-bn.auth .t4,.w-bn.side .t4{color:var(--banner-auth-title)}
.w-bn.auth small,.w-bn.side small{color:var(--banner-auth-description);font-size:10px;line-height:14px}
.w-bn.auth .fr,.w-bn.side .fr{width:var(--banner-auth-front-height);height:var(--banner-auth-front-height);right:-12px;bottom:-4px}
.w-bn.show{display:flex;align-items:flex-end;width:min(760px,100%);height:var(--banner-showcase-height-md);padding:0 var(--banner-showcase-paddingH-md) var(--banner-showcase-paddingH-md);border-radius:var(--banner-showcase-borderRadius-topLeft-md);background:var(--banner-showcase-bg);box-sizing:border-box}
.w-bn.show .ct{display:flex;flex-direction:column;gap:var(--banner-showcase-content-gap-md);max-width:var(--banner-showcase-content-maxWidth-md);padding:var(--banner-showcase-content-paddingV-md) var(--banner-showcase-content-paddingH-md);border-radius:12px;background:var(--banner-contentBg);-webkit-backdrop-filter:blur(var(--glass-blur-sm));backdrop-filter:blur(var(--glass-blur-sm))}
.w-bn.show .ct .t2{color:var(--banner-showcase-title)}.w-bn.show .ct p{margin:0;color:var(--tt-secondary)}
.w-bn.show .fr{width:var(--banner-showcase-image-md);height:var(--banner-showcase-image-md);right:24px;bottom:auto;top:-24px}.w-bn.show .fr .ic{width:96px;height:96px}
.w-cf{display:flex;flex-direction:column;align-items:center;gap:16px;width:100%}
.w-cf .tr{position:relative;width:100%;height:230px;perspective:900px}
.w-cf .it{position:absolute;left:50%;top:0;width:306px;margin-left:-153px;transition:transform .45s cubic-bezier(.2,.8,.2,1),opacity .45s,filter .45s;cursor:pointer}
/* support widget */
.w-fab{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;width:var(--widget-fab-vertical-size);height:var(--widget-fab-vertical-size);padding:var(--widget-fab-vertical-padding);border:0;border-radius:var(--widget-fab-borderRadius);background:var(--widget-fab-bg);color:var(--widget-fab-color);box-shadow:0 var(--shadow-y-lg) var(--shadow-blur-lg) var(--shadow-default);font:600 10px/14px var(--fontFamilyMain);cursor:pointer;box-sizing:border-box;flex:none}
.w-fab.hz{flex-direction:row;gap:var(--widget-fab-horizontal-gap);width:auto;height:var(--widget-fab-horizontal-height);padding:var(--widget-fab-horizontal-paddingV) var(--widget-fab-horizontal-paddingH)}
.w-fab .lg{display:grid;place-items:center;width:28px;height:28px;border-radius:9px;background:var(--btn-primary-bg-default);color:#fff}.w-fab.hz .lg{width:24px;height:24px}
.w-fab .bd{position:absolute;top:-4px;right:-4px}.w-fab:hover{filter:brightness(1.1)}
.w-wdg{display:flex;flex-direction:column;width:var(--widget-width);max-width:100%;height:var(--widget-height);border-radius:var(--widget-borderRadius);background:var(--widget-bg);box-shadow:0 var(--shadow-y-lg) var(--shadow-blur-lg) var(--shadow-default);overflow:hidden;animation:w-pop .22s}
.w-wdg .hd{display:flex;align-items:center;gap:var(--widget-header-gap);padding:var(--widget-header-paddingV) var(--widget-header-paddingH);background:var(--widget-header-bg);border-bottom:var(--widget-header-borderWidth) solid var(--widget-header-br)}
.w-wdg .ag{display:flex;align-items:center;gap:var(--widget-header-agent-gap);flex:1;min-width:0}.w-wdg .ag b{display:block;color:var(--widget-header-agent-name);font-size:14px;line-height:20px}.w-wdg .ag small{color:var(--widget-header-agent-position);font-size:12px;line-height:16px}
.w-wdg .hd .acts{display:flex;gap:var(--widget-header-actionGap)}
.w-wdg .bd{flex:1;display:flex;flex-direction:column;gap:12px;padding:var(--widget-body-paddingV) var(--widget-body-paddingH);overflow:auto;scrollbar-width:thin}
.w-msg{display:flex;align-items:flex-end;gap:8px;max-width:100%}.w-msg.me{flex-direction:row-reverse}
.w-msg .bb{display:flex;flex-direction:column;gap:var(--widget-message-bubble-gap);max-width:var(--widget-message-bubble-maxWidth);padding:10px 14px;border-radius:var(--widget-message-borderRadius) var(--widget-message-borderRadius) var(--widget-message-borderRadius) 4px;background:var(--widget-message-bg-recipient);color:var(--widget-message-text);font-size:14px;line-height:20px;word-wrap:break-word}
.w-msg.me .bb{border-radius:var(--widget-message-borderRadius) var(--widget-message-borderRadius) 4px var(--widget-message-borderRadius);background:var(--widget-message-bg-sender)}
.w-msg .rp{display:flex;flex-direction:column;padding:var(--widget-reply-paddingV) 0 var(--widget-reply-paddingV) var(--widget-reply-paddingL);border-left:var(--widget-reply-borderWidth) solid var(--widget-reply-br);font-size:12px;line-height:16px}.w-msg .rp b{color:var(--widget-reply-title-accent1)}.w-msg .rp span{color:var(--widget-reply-description)}
.w-msg .tm{font-size:10px;line-height:14px;color:var(--tt-tertiary);white-space:nowrap}
.w-msg .w-av.sz-xs{flex:none}
.w-typ{display:inline-flex;gap:4px;padding:14px}.w-typ i{width:6px;height:6px;border-radius:50%;background:var(--tt-tertiary);animation:w-typ 1s infinite}.w-typ i:nth-child(2){animation-delay:.15s}.w-typ i:nth-child(3){animation-delay:.3s}
@keyframes w-typ{50%{transform:translateY(-4px);opacity:.5}}
.w-cats{display:flex;flex-wrap:wrap;gap:var(--widget-caterories-item-gap)}
.w-cat{display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 12px;border:0;border-radius:var(--widget-categories-item-outline-borderRadius);background:var(--widget-categories-shape-default);color:var(--widget-categories-color-default);font:600 12px/16px var(--fontFamilyMain);cursor:pointer}
.w-cat:hover{background:var(--widget-categories-shape-hover)}.w-cat:active{background:var(--widget-categories-shape-active)}.w-cat:focus-visible{outline:var(--widget-categories-item-outline-borderWidth) solid var(--widget-categories-item-outline-color)}
.w-wdg .ft{display:flex;align-items:flex-end;gap:var(--widget-footer-gapH);padding:var(--widget-footer-paddingV) var(--widget-footer-paddingH);border-top:var(--widget-footer-borderWidth) solid var(--widget-footer-br)}
.w-wdg .ft textarea{flex:1;min-height:40px;max-height:96px;padding:10px 12px;border:0;border-radius:var(--input-borderRadius-md);background:var(--input-bg-default);color:var(--input-color-filled-default);font:400 14px/20px var(--fontFamilyMain);resize:none;box-sizing:border-box}
.w-wdg .ft textarea:focus{outline:var(--input-borderWidth-outline) solid var(--input-outline-default)}
.sw-scene{display:flex;flex-direction:column;align-items:flex-end;gap:16px}
/* award / certificates */
.w-awd{display:inline-flex;align-items:center;gap:8px;height:var(--award-size-md);padding:0 10px 0 6px;border-radius:6px;color:var(--award-color);font:600 11px/13px var(--fontFamilyMain);white-space:nowrap;box-shadow:inset 0 0 0 1px var(--br-vibrant-secondary)}
.w-awd.sm{height:var(--award-size-sm);font-size:9px;line-height:11px;gap:6px}
.w-awd .ic{width:20px;height:20px}.w-awd.sm .ic{width:16px;height:16px}.w-awd em{display:block;font-style:normal;font-weight:400;opacity:.8}
.w-cert{display:inline-flex;align-items:center;gap:8px;height:32px;padding:0 10px;border-radius:6px;font:700 12px/14px var(--fontFamilyMain);letter-spacing:.02em;white-space:nowrap;box-sizing:border-box}
.w-cert.dark{background:var(--bg-neutral-primary);color:var(--tt-secondary);box-shadow:inset 0 0 0 1px var(--br-secondary)}.w-cert.light{background:#fff;color:#2c2e30;box-shadow:inset 0 0 0 1px rgba(0,0,0,.08)}
.w-cert .ic{width:18px;height:18px}
/* onboarding */
.w-onb{display:flex;flex-direction:column;align-items:center;gap:16px;width:312px;max-width:100%}
.w-onb p{margin:0;min-height:40px;color:var(--drawer-description);font-size:14px;line-height:20px;text-align:center}
.w-onb .sl{position:relative;width:312px;height:400px;max-width:100%;border-radius:var(--image-borderRadius);overflow:hidden}.w-onb.app .sl{width:192px;height:336px}
.w-onb .sl .w-ph{position:absolute;inset:0;width:100%;height:100%}
.w-onb .sl .cap{position:absolute;left:16px;right:16px;bottom:16px;display:flex;flex-direction:column;gap:4px;color:#fff}
.w-onb .sl .ico{position:absolute;left:50%;top:40%;transform:translate(-50%,-50%);display:grid;place-items:center;width:96px;height:96px;border-radius:50%;background:var(--bg-glass-light);-webkit-backdrop-filter:blur(var(--glass-blur-sm));backdrop-filter:blur(var(--glass-blur-sm));color:#fff}
.w-onb .sl .ico .ic{width:48px;height:48px}
`;
/* ---- shared ---- */
const GAMES=[['Book of Gold','var(--gradient-primary)'],['Crystal Rush','var(--gradient-secondary)'],['Sweet Bonanza','var(--wof-sector-tertiary-bg)'],['Fire Joker','var(--wof-btn-default-bg)'],['Aztec Gems','var(--wof-sector-secondary-bg)'],['Big Bass','var(--wof-sector-primary-bg)'],['Wolf Gold','var(--banner-showcase-bg)'],['Mega Moolah','var(--qdw-bg-default)']];
const tile=(g,c='')=>`<span class="${c}" style="background:${g[1]}">${esc(g[0])}</span>`;
function spinTo(el,cur,n,idx,extra=5){const seg=360/n;const target=360-(idx*seg+seg/2);const base=cur-(cur%360);return base+extra*360+target}
/* ---- WoF ---- */
let WOFROT=0;
const WOFP=['x2','50 FS','$10','x5','100 FS','$50','Bonus','$25','x3','Jackpot','20 FS','$5'];
function WOF(p){const n=+p.sectors,R=160,seg=360/n,C=['primary','secondary','tertiary'];const pt=a=>[R+R*Math.sin(a*Math.PI/180),R-R*Math.cos(a*Math.PI/180)];
 const defs=C.map(c=>`<linearGradient id="wg-${c}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--wof-sector-${c}-end)"/><stop offset="1" style="stop-color:var(--wof-sector-${c}-start)"/></linearGradient>`).join('');
 const secs=range(n).map(i=>{const a0=i*seg,a1=a0+seg,[x0,y0]=pt(a0),[x1,y1]=pt(a1);const c=C[n%3==1&&i==n-1?1:i%3];const mid=a0+seg/2;
  return `<path d="M${R},${R} L${x0},${y0} A${R},${R} 0 0,1 ${x1},${y1} Z" fill="url(#wg-${c})" style="stroke:var(--wof-sector-br-color);stroke-width:var(--wof-br-width)"/><text transform="rotate(${mid} ${R} ${R})" x="${R}" y="${n>8?34:40}" text-anchor="middle" font-size="${n>8?16:20}">${WOFP[i%WOFP.length]}</text>`}).join('');
 return `<div class="${cls('w-wof',p.size)}"><svg class="ptr" viewBox="0 0 28 36"><defs><linearGradient id="wp" x1="0" x2="0" y1="0" y2="1"><stop offset="0" style="stop-color:var(--wof-btn-hover-start)"/><stop offset="1" style="stop-color:var(--wof-btn-default-center)"/></linearGradient></defs><path d="M14 36L1 8a13 13 0 1 1 26 0z" fill="url(#wp)" stroke="#fff" stroke-width="2"/></svg><div class="whl" style="transform:rotate(${WOFROT}deg)"><svg viewBox="0 0 320 320"><defs>${defs}</defs><circle cx="160" cy="160" r="159" style="fill:var(--wof-sector-primary-end)"/>${secs}</svg></div><button type="button" class="${cls('w-wofb tsh',p.btnState=='Hover'&&'is-hover')}" data-spin>Spin</button></div><div class="w-res" aria-live="polite">Press <b>Spin</b> to play</div>`}
reg({id:'wof',name:'WoF (Wheel of Fortune)',sig:'WoF',group:'gaming',figma:'8:69300',alias:'wheel of fortune spin prize',
 desc:'Prize wheel: gradient sectors (Primary / Secondary / Tertiary) with Bungee labels and the central Spin button. Press Spin — it really spins.',
 props:[{n:'size',t:'enum',o:['sm','md'],d:'md',desc:'WoF/Sector and WoF/Btn sizes.'},{n:'sectors',t:'enum',o:['6','8','12'],d:'8',desc:'Sector count; colours cycle Primary → Secondary → Tertiary.'},{n:'btnState',t:'enum',o:['Default','Hover'],d:'Default',desc:'WoF/Btn state (preview also reacts to real hover).'}],
 stage:'tall col',render:WOF,
 mount:(el,p)=>{const b=$('[data-spin]',el),w=$('.whl',el),r=$('.w-res',el);b.addEventListener('click',()=>{const n=+p.sectors,idx=Math.floor(Math.random()*n);WOFROT=spinTo(w,WOFROT,n,idx);b.disabled=true;r.innerHTML='Spinning…';w.style.transform=`rotate(${WOFROT}deg)`;setTimeout(()=>{b.disabled=false;r.innerHTML=`You won <b>${WOFP[idx%WOFP.length]}</b>`;toast('Prize: '+WOFP[idx%WOFP.length])},4300)})},
 notes:['In Figma the Sector and Btn shapes are baked SVG assets; here they are rebuilt from wof.sector.* / wof.btn.* gradient tokens.','Labels are Bungee (t1 on md sector, t2 on the button) with the shadow/md text shadow.','The result is decided before the animation — the wheel always lands in the middle of the winning sector.'],
 tokens:['wof.*']});
/* ---- WoM ---- */
let WOMROT=0;
reg({id:'wom',name:'WoM (Wheel of Mystery)',sig:'WoM',group:'gaming',figma:'8:100334',alias:'wheel of mystery game wheel',
 desc:'Six-sector wheel where each sector holds a real game Thumb, a muted title and a prize. Coloured dividers separate sectors; the Pointer holds Spin.',
 props:[{n:'size',t:'enum',o:['sm','md'],d:'md'},{n:'pointer',t:'enum',o:['Primary','Secondary'],d:'Primary',desc:'WoM/Pointer variant.'},{n:'title',t:'text',d:'Free spins'}],
 stage:'tall col',render:p=>{const R=190,n=6,seg=60;const pt=(a,r=R)=>[R+r*Math.sin(a*Math.PI/180),R-r*Math.cos(a*Math.PI/180)];const PR=['50 FS','$100','20 FS','x3','$25','100 FS'];const md=p.size!='sm';
  const svg=`<svg viewBox="0 0 380 380"><defs><linearGradient id="wmg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--wom-sector-shape-start)"/><stop offset="1" style="stop-color:var(--wom-sector-shape-end)"/></linearGradient><radialGradient id="wmo"><stop offset=".3" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".28"/></radialGradient></defs><circle cx="190" cy="190" r="189" fill="url(#wmg)" style="stroke:var(--wom-sector-shape-br)"/><circle cx="190" cy="190" r="189" fill="url(#wmo)"/>${range(n).map(i=>{const [x,y]=pt(i*seg-30);return `<line x1="190" y1="190" x2="${x}" y2="${y}" stroke-width="4" stroke-linecap="round" style="stroke:var(--wom-sector-border-${i+1})"/>`}).join('')}<circle cx="190" cy="190" r="186" fill="none" stroke-width="6" style="stroke:var(--wom-pointer-bg)"/></svg>`;
  const labs=range(n).map(i=>`<div class="lab" style="transform:rotate(${i*seg}deg) translateY(-${md?186:136}px)"><small>${esc(p.title)}</small>${tile(GAMES[i],'').replace('<span','<i').replace(/>[^<]*<\/span>$/,'></i>')}<b>${PR[i]}</b></div>`).join('');
  return `<div class="${cls('w-wom',p.size)}"><div class="whl" style="transform:rotate(${WOMROT}deg)">${svg}${labs}</div><div class="${cls('w-womp',p.pointer=='Secondary'&&'sec')}"><span class="arr"></span><span class="cir"></span><button type="button" class="tsh" data-spin>Spin</button></div></div><div class="w-res" aria-live="polite">Each sector is a game + prize</div>`},
 mount:(el,p)=>{const b=$('[data-spin]',el),w=$('.whl',el),r=$('.w-res',el);const PR=['50 FS','$100','20 FS','x3','$25','100 FS'];b.addEventListener('click',()=>{const idx=Math.floor(Math.random()*6);const tgt=360-idx*60;WOMROT=WOMROT-(WOMROT%360)+6*360+tgt;w.style.transform=`rotate(${WOMROT}deg)`;b.disabled=true;r.textContent='Spinning…';setTimeout(()=>{b.disabled=false;r.innerHTML=`<b>${PR[idx]}</b> on ${GAMES[idx][0]}`;toast(`${PR[idx]} · ${GAMES[idx][0]}`)},4700)})},
 notes:['Each sector embeds a real Thumb (thumb.width/height tokens, rotated 90° in Figma) — not a flat image.','Sector rotation in Figma uses container queries (100cqw/100cqh) — the same trick as the rotating gradient in Card/Jackpot.','Title uses wom.sector.color.title (white 60%) with a shadow/sm text shadow for contrast on the light shape.'],
 tokens:['wom.*'],uses:['thumb']});
/* ---- Randomizer ---- */
let RNDI=12;
reg({id:'randomizer',name:'Randomizer',group:'gaming',figma:'8:107710',alias:'random game slot picker',
 desc:'“Random game” picker: a strip of game thumbs spins like a reel and stops under the Frame. Side items are dimmed (opacity 50%).',
 props:[{n:'size',t:'enum',o:['sm','md'],d:'sm',desc:'Frame 102 / 138px.'},{n:'glow',t:'bool',d:true,desc:'Frame glow (randomizer.frameGlow).'}],
 stage:'col',render:p=>{const L=range(60).map(i=>GAMES[i%GAMES.length]);return `<div class="${cls('w-rnd',p.size,p.glow&&'glow')}"><div class="vp"><div class="strip" data-strip>${L.map((g,i)=>tile(g,cls('gm',i==RNDI&&'hit'))).join('')}</div><div class="fade"></div><div class="frm"></div></div>${BTN({variant:'Primary',size:'sm',label:'Spin & Play',icon:'dice',attrs:'data-spin'})}</div><div class="w-res" aria-live="polite">Can’t decide? Let the reel pick.</div>`},
 mount:(el,p)=>{const s=$('[data-strip]',el),b=$('[data-spin]',el),r=$('.w-res',el);const ts=p.size=='md'?130:94,g=8;const pos=i=>-(i*(ts+g)+ts/2);s.style.transform=`translateX(${pos(RNDI)}px)`;
  b.addEventListener('click',()=>{if(b.dataset.busy)return;b.dataset.busy=1;$$('.gm',s).forEach(x=>x.classList.remove('hit'));const from=8+RNDI%8;RNDI=from;s.style.transition='none';s.style.transform=`translateX(${pos(from)}px)`;s.offsetWidth;const to=from+32+Math.floor(Math.random()*8);s.style.transition='transform 3.4s cubic-bezier(.1,.75,.12,1)';s.style.transform=`translateX(${pos(to)}px)`;r.textContent='Spinning…';
   setTimeout(()=>{RNDI=to;s.children[to].classList.add('hit');delete b.dataset.busy;const n=GAMES[to%8][0];r.innerHTML=`Launching <b>${n}</b>`;toast('Launching '+n)},3500)})},
 notes:['Frame uses randomizer.frame.* (4px Accent 1 border, radius 12) with the arrow pointer shared with WoM.','Edge fade = randomizer.gradient.bg. Only the item under the frame is at full opacity.','The reel always decelerates (ease-out) — never stop abruptly, it reads as broken.'],
 tokens:['randomizer.*'],uses:['thumb','btn']});
/* ---- Scratch ---- */
reg({id:'scratch',name:'Scratch',group:'gaming',figma:'8:41418',alias:'scratch card lottery',
 desc:'Scratch-card surface. Rub it with the mouse or finger — past ~50% the cover dissolves and the prize is revealed.',
 props:[{n:'breakpoint',t:'enum',o:['xs','md'],d:'xs',desc:'260×120 / 492×230.'},{n:'cleared',t:'bool',d:false,desc:'Static “after” state.'},{n:'text',t:'text',d:'100 FREE SPINS'}],
 stage:'col',render:p=>`<div class="${cls('w-scx',p.breakpoint=='md'&&'md')}"><div class="prz"><span class="${p.breakpoint=='md'?'t3':'t5'}">${esc(p.text)}</span><small>Credited to your account</small></div>${p.cleared?'':'<canvas data-scx></canvas>'}</div><div style="display:flex;gap:8px;align-items:center"><span class="bodySm" style="color:var(--tt-tertiary)" data-pct>${p.cleared?'Revealed':'Scratch to reveal'}</span>${BTN({variant:'Secondary',size:'sm',label:'New card',icon:'arrow-left',attrs:'data-set="cleared=false" data-new'})}</div>`,
 mount:(el,p,set)=>{const c=$('[data-scx]',el);if(!c)return;const box=c.parentNode,r=box.getBoundingClientRect(),dpr=window.devicePixelRatio||1;c.width=r.width*dpr;c.height=r.height*dpr;const x=c.getContext('2d');x.scale(dpr,dpr);
  const fill=getComputedStyle(document.documentElement).getPropertyValue('--scratch-bg-fill').trim()||'#4f8dff';x.fillStyle=fill;x.fillRect(0,0,r.width,r.height);x.globalAlpha=.18;x.fillStyle='#fff';for(let i=-r.height;i<r.width;i+=18){x.fillRect(i,0,6,r.height*3);}x.globalAlpha=1;x.save();x.translate(0,0);x.fillStyle='rgba(255,255,255,.9)';x.font=`400 ${r.width>300?24:16}px Bungee, system-ui`;x.textAlign='center';x.textBaseline='middle';x.fillText('SCRATCH HERE',r.width/2,r.height/2);x.restore();
  x.globalCompositeOperation='destination-out';let down=false,last=null,cnt=0;const pc=$('[data-pct]',el);
  const pos=e=>{const b=c.getBoundingClientRect();return [e.clientX-b.left,e.clientY-b.top]};
  const draw=e=>{const [a,b]=pos(e);x.lineWidth=36;x.lineCap='round';x.beginPath();x.moveTo(...(last||[a,b]));x.lineTo(a,b);x.stroke();last=[a,b];if(++cnt%8==0)check()};
  const check=()=>{const d=x.getImageData(0,0,c.width,c.height).data;let clear=0,tot=0;for(let i=3;i<d.length;i+=64){tot++;if(d[i]==0)clear++}const pr=Math.round(clear/tot*100);pc.textContent=pr+'% scratched';if(pr>50){c.classList.add('gone');pc.textContent='Revealed';toast('You won '+p.text);setTimeout(()=>{S('scratch').cleared=true},500)}};
  c.addEventListener('pointerdown',e=>{down=true;last=null;c.setPointerCapture(e.pointerId);draw(e)});c.addEventListener('pointermove',e=>down&&draw(e));c.addEventListener('pointerup',()=>{down=false;check()})},
 notes:['Figma only shows before/after; the rub interaction is canvas <code>destination-out</code> in code.','⚠ Token conflict: scratch.color is white 90% while scratch.bg.clear is #fff — white on white. The preview uses tt.black for the prize until the token is fixed.','Prize text is Bungee (t5 on xs, t3 on md).'],
 tokens:['scratch.*']});
/* ---- Achievement ---- */
reg({id:'achievement',name:'Achievement',sig:'AhievementChain',group:'gaming',figma:'1784:9206',alias:'chain steps reward quest',
 desc:'Achievement chain: numbered steps (Tag) and a locked reward button. Complete all steps to unlock the reward — click the steps.',
 props:[{n:'breakpoint',t:'enum',o:['md-xl','xs-sm'],d:'md-xl'},{n:'done',t:'range',min:0,max:3,d:1,desc:'Completed steps.'},{n:'reward',t:'text',d:'300 FS'},{n:'claimed',t:'bool',d:false,ctl:false}],
 render:p=>{const L=['Deposit $20','Play 50 spins','Win 3 times'];const ok=p.done>=3;
  return `<div class="w-ach" ${p.breakpoint=='xs-sm'?'style="width:260px"':''}><div class="row">${L.map((l,i)=>`<button type="button" class="${cls('st',i<p.done&&'on')}" data-set="done=${i<p.done?i:i+1}">${TAG({variant:i<p.done?'Success':'Default',size:'xs',label:i<p.done?'✓':String(i+1)})}${p.breakpoint=='md-xl'?`<span>${l}</span>`:''}</button>${i<2?`<i class="${i<p.done-1?'on':''}"></i>`:''}`).join('')}</div>${p.claimed?BTN({variant:'Secondary',size:'md',label:'Claimed',icon:'check',state:'Disabled',block:true}):ok?BTN({variant:'Primary',size:'md',label:`Claim ${p.reward}`,icon:'gift',block:true,attrs:'data-set="claimed=true"'}):BTN({variant:'Primary',size:'md',label:p.reward,icon:'lock',state:'Disabled',block:true})}</div>${p.claimed?`<div>${BTN({variant:'Text',size:'sm',label:'Reset chain',attrs:'data-reset'})}</div>`:''}`},
 stage:'col',mount:(el,p,set)=>{const r=$('[data-reset]',el);r&&r.addEventListener('click',()=>set({done:0,claimed:false}));if(p.claimed&&!el._t){toast(`${p.reward} credited`)}},
 notes:['Figma canvas and symbol are spelled “Ahievement” — search Figma with the typo.','Locked reward = Btn Primary Disabled (alpha .4) with a lock icon, not a separate component.'],
 tokens:['achievement.*','tag.*'],uses:['tag','btn']});
/* ---- QDW ---- */
reg({id:'qdw',name:'QDW (Quick Deposit Widget)',sig:'QDW',group:'gaming',figma:'8:100328',alias:'quick deposit widget',
 desc:'Promo widget for a one-tap deposit: real Switcher, Input and Btn Accent. Deposit opens the Notification/Local confirmation.',
 props:[{n:'notification',t:'bool',d:false,desc:'Notification/Local confirmation overlay (Variant = Confirmation).'},{n:'autoBonus',t:'bool',d:true,ctl:false},{n:'amount',t:'text',d:'50'}],
 render:p=>`<div class="w-qdw"><div class="hd"><span class="t4">💰 Quick deposit</span>${I('info',16)}</div><div class="cp"><span>Add welcome bonus</span>${SW({checked:p.autoBonus,toggle:'autoBonus'})}</div><div class="fm">${INPUT({size:'sm',value:p.amount,bind:'amount',prefix:true,prefixText:'$',placeholder:'Amount',type:'text'})}${BTN({variant:'Accent',size:'md',label:'Deposit',block:true,attrs:'data-set="notification=true"'})}</div><span class="fr">${I('coin',56)}</span>${p.notification?`<div class="pan"><span>Deposit <b>$${esc(p.amount||'0')}</b>${p.autoBonus?' + 100% bonus':''} with Visa •••• 4417?</span><div class="w-ab">${BTN({variant:'Secondary',size:'sm',label:'Cancel',attrs:'data-set="notification=false"'})}${BTN({variant:'Accent',size:'sm',label:'Confirm',attrs:'data-qconf'})}</div></div>`:''}</div>`,
 mount:(el,p,set)=>{mountInput(el);const i=$('input',el);i&&i.addEventListener('input',()=>{i.value=i.value.replace(/[^\d.]/g,'')});const c=$('[data-qconf]',el);c&&c.addEventListener('click',()=>{set({notification:false});toast(`Deposited $${S('qdw').amount||0}`)})},
 notes:['One of the richest composites: embeds real Switcher, Input (emboss), Btn Accent and Notification/Local — never redraw them.','The front decor sticks out of the card (right −16, top 16) — let it overflow.','Title keeps the 💰 emoji from the Figma symbol.'],
 tokens:['qdw.*','notification.local.*'],uses:['switcher','input','btn','notification']});
/* ---- Announcer ---- */
reg({id:'announcer',name:'Announcer',group:'gaming',figma:'3334:6914',alias:'top bar announcement strip',
 desc:'Thin announcement strip at the very top of the site. Gradient styles, optional image / icon, embedded ActionBar and Close.',
 props:[{n:'size',t:'enum',o:['sm','md'],d:'md'},{n:'style',t:'enum',o:['Primary','Secondary','Neutral'],d:'Primary'},{n:'centered',t:'bool',d:false},{n:'image',t:'bool',d:false},{n:'icon',t:'bool',d:true},{n:'title',t:'text',d:'Weekend reload: +50% up to $200 — ends Sunday'},{n:'actionBar',t:'bool',d:true,desc:'Btn Primary sm “Confirm”.'},{n:'closable',t:'bool',d:true},{n:'hidden',t:'bool',d:false,ctl:false}],
 stage:'top',render:p=>`<div class="frame-top">${p.hidden?'':`<div class="${cls('w-ann',p.size,slug(p.style),p.centered&&'cen')}" role="region" aria-label="Announcement"><div class="ct">${p.image?PH(null,null,'im cover'):''}${p.icon?I('gift',24):''}<span>${esc(p.title)}</span>${p.actionBar?BTN({variant:'Primary',size:'sm',label:'Claim',attrs:'data-ann'}):''}</div>${p.closable?BTN({variant:'Text',size:'sm',icon:'close',iconOnly:true,aria:'Close',attrs:'data-set="hidden=true"'}):''}</div>`}<div class="fpg"><i style="width:40%"></i><i></i><i style="width:80%"></i>${p.hidden?`<div>${BTN({variant:'Secondary',size:'sm',label:'Show announcer',attrs:'data-set="hidden=false"'})}</div>`:''}</div></div>`,
 mount:el=>{const b=$('[data-ann]',el);b&&b.addEventListener('click',()=>toast('Bonus claimed'))},
 notes:['Background is a 172° diagonal from gradientProps.{style}.start → end; Neutral uses announcer.bg.','Content is capped at announcer.content.maxWidth (1224) and centred on wide screens.'],
 tokens:['announcer.*','gradientProps.*'],uses:['actionbar','btn','image']});
/* ---- Banner ---- */
function BCARD(o={}){return `<div class="${cls('w-bn card',o.border&&'brd')}">${PH(null,null,'bk cover')}<span class="ov"></span><span class="fr">${I(o.icon||'gift',56)}</span><span class="t2 tsh">${esc(o.title||'Welcome pack')}</span>${o.description!==false?`<p>${esc(o.text||'Up to $1,500 + 150 free spins on your first 3 deposits.')}</p>`:''}<div class="bt">${BTN({variant:'Accent',size:'md',label:o.cta||'Get bonus',attrs:o.ctaAttr||''})}${o.deactiv?BTN({variant:'Neutral',size:'md',label:'Deactivate'}):''}${o.timer!==false?TIMEBASE({text:'Time left'}):''}</div>${o.info?`<span class="inf">${BTN({variant:'Secondary',size:'sm',icon:'info',iconOnly:true,aria:'Terms'})}</span>`:''}</div>`}
reg({id:'banner',name:'Banner',group:'gaming',figma:'8:69445',alias:'promo banner showcase coverflow auth sidebar',
 desc:'Promo banner family: Card, Showcase, Coverflow, Auth and Sidebar. Card combines back image, left overlay, front decor, Bungee t2 title and an Accent CTA.',
 props:[{n:'type',t:'enum',o:['Card','Showcase','Coverflow','Auth','Sidebar'],d:'Card'},{n:'title',t:'bool',d:true,when:p=>p.type=='Card'},{n:'discription',t:'bool',d:true,desc:'Figma spelling.',when:p=>p.type=='Card'},{n:'timer',t:'bool',d:true,when:p=>p.type=='Card'},{n:'info',t:'bool',d:true,when:p=>p.type=='Card'},{n:'deactiv',t:'bool',d:false,desc:'Neutral “Deactivate” button.',when:p=>p.type=='Card'},{n:'border',t:'bool',d:false,when:p=>p.type=='Card'},{n:'slide',t:'range',min:0,max:4,d:1,ctl:false}],
 stage:'col',render:p=>{
  if(p.type=='Card')return BCARD({description:p.discription,timer:p.timer,info:p.info,deactiv:p.deactiv,border:p.border,title:p.title?'Welcome pack':'',ctaAttr:'data-bcta'});
  if(p.type=='Showcase')return `<div class="w-bn show">${PH(null,null,'bk cover')}<span class="fr">${I('crown',96)}</span><div class="ct"><span class="t2 tsh">VIP Club</span><p>Personal manager, faster withdrawals and weekly cashback up to 15%.</p><div style="display:flex;gap:8px">${BTN({variant:'Accent',size:'md',label:'Join VIP',attrs:'data-bcta'})}${BTN({variant:'Secondary',size:'md',label:'Learn more'})}</div></div></div>`;
  if(p.type=='Coverflow'){const T=[['Welcome pack','gift'],['Weekly race','trophy'],['Cashback 15%','coin'],['Drops & Wins','sparkle'],['Live bonus','live']];return `<div class="w-cf"><div class="tr">${T.map((t,i)=>{const d=i-p.slide;const tr=`translateX(${d*62}%) translateZ(${-Math.abs(d)*120}px) rotateY(${-d*18}deg)`;return `<div class="it" style="transform:${tr};opacity:${Math.abs(d)>2?0:1};filter:brightness(${d?0.6:1});z-index:${10-Math.abs(d)}" data-set="slide=${i}">${BCARD({title:t[0],icon:t[1],timer:false,description:false,cta:'Open'})}</div>`}).join('')}</div>${NAV({count:5,active:p.slide,key:'slide',actions:true})}</div>`}
  if(p.type=='Auth')return `<div class="w-bn auth"><span class="ol">Welcome offer</span><span class="t4">+100% bonus</span><small>On your first deposit. T&amp;Cs apply.</small><span class="fr">${I('gift',48)}</span></div>`;
  return `<div class="w-bn side"><span class="t4">Daily drop</span><small>Win a share of $5,000 today</small><span class="fr">${I('trophy',48)}</span></div>`},
 mount:el=>$$('[data-bcta]',el).forEach(b=>b.addEventListener('click',()=>toast('Opening promo…'))),
 notes:['Card title is Bungee t2 with shiftTitle 80px so it never runs under the front decor; description shifts 120px.','Overlay = banner.overlayLeft (dark left → transparent right) keeps text readable on any artwork.','Auth and Sidebar are the compact 240 / 312px formats with the decor sticking out of the corner.'],
 tokens:['banner.*'],uses:['btn','time','navigator','image']});
/* ---- Support widget ---- */
let CHAT=null;
reg({id:'support-widget',name:'Support widget',sig:'Widget',group:'gaming',figma:'5:2641',alias:'chat live chat help fab message',
 desc:'Live-chat widget: FAB launcher with unread Badge, header with agent, message bubbles (recipient / sender, reply quote), quick-reply Categories and a composer. Type a message and send it.',
 props:[{n:'fab',t:'enum',o:['Vertical','Horizontal'],d:'Vertical',desc:'Widget/FAB horizontal prop.'},{n:'badge',t:'bool',d:true,desc:'Unread counter on the FAB.'},{n:'open',t:'bool',d:true}],
 stage:'tall',render:p=>{CHAT=CHAT||[{me:0,t:'Hi! I’m Anna from support. How can I help?'},{me:1,t:'My withdrawal is still pending',reply:['Anna','Withdrawal #48213 · $300']},{me:0,t:'It’s in review — usually under 2 hours. I’ll ping you once it’s approved.'}];
  const fab=`<button type="button" class="${cls('w-fab',p.fab=='Horizontal'&&'hz')}" data-toggle="open" aria-label="${p.open?'Close chat':'Open chat'}"><span class="lg">${I(p.open?'close':'chat',16)}</span>CHAT${p.badge&&!p.open?`<span class="bd">${BADGE_C({variant:'Important',size:'sm',label:'2'})}</span>`:''}</button>`;
  return `<div class="sw-scene">${p.open?`<div class="w-wdg" role="dialog" aria-label="Support chat"><div class="hd"><div class="ag">${AVATAR({size:'sm',label:'AN'})}<div><b>Anna</b><small>Support · online</small></div></div><div class="acts">${BTN({variant:'Text',size:'sm',icon:'more',iconOnly:true,aria:'More'})}${BTN({variant:'Text',size:'sm',icon:'minus',iconOnly:true,aria:'Minimise',attrs:'data-set="open=false"'})}</div></div><div class="bd" data-chat>${CHAT.map(MSGH).join('')}<div class="w-cats">${['Deposits','Withdrawals','Bonuses','Verification'].map(c=>`<button type="button" class="w-cat" data-cat="${c}">${c}</button>`).join('')}</div></div><div class="ft"><textarea rows="1" placeholder="Write a message…" aria-label="Message" data-msg></textarea>${BTN({variant:'Primary',size:'md',icon:'send',iconOnly:true,aria:'Send',attrs:'data-send'})}</div></div>`:''}${fab}</div>`},
 mount:(el,p)=>{const box=$('[data-chat]',el);if(!box)return;box.scrollTop=box.scrollHeight;const ta=$('[data-msg]',el),cats=$('.w-cats',el);
  const reply=q=>{const typ=document.createElement('div');typ.className='w-msg';typ.innerHTML=AVATAR({size:'sm',label:'AN'})+'<span class="bb" style="padding:0"><span class="w-typ"><i></i><i></i><i></i></span></span>';box.insertBefore(typ,cats);box.scrollTop=box.scrollHeight;
   setTimeout(()=>{typ.remove();const m={me:0,t:/deposit/i.test(q)?'Deposits are instant for cards and e-wallets. Minimum is $20.':/withdraw/i.test(q)?'Withdrawals are reviewed within 2 hours, then paid out to the same method.':/bonus/i.test(q)?'You have 3 active bonuses — check Wallet → Bonuses for wagering progress.':/verif/i.test(q)?'Upload a photo ID and a proof of address in Profile → Verification.':'Got it! Let me check that for you.'};CHAT.push(m);box.insertAdjacentHTML('beforeend','');cats.insertAdjacentHTML('beforebegin',MSGH(m));box.scrollTop=box.scrollHeight},1100)};
  const send=t=>{t=t.trim();if(!t)return;const m={me:1,t};CHAT.push(m);cats.insertAdjacentHTML('beforebegin',MSGH(m));ta.value='';box.scrollTop=box.scrollHeight;reply(t)};
  $('[data-send]',el).addEventListener('click',()=>send(ta.value));ta.addEventListener('keydown',e=>{if(e.key=='Enter'&&!e.shiftKey){e.preventDefault();send(ta.value)}});$$('[data-cat]',el).forEach(b=>b.addEventListener('click',()=>send(b.dataset.cat)))},
 notes:['Bubble corners: the corner next to the sender is squared (4px); sender bubbles use widget.message.bg.sender.','Reply quote = 2px Accent 1 left border (widget.reply.*). Press Enter to send, Shift+Enter for a new line.','The FAB carries a real Badge/Counter (Important).'],
 tokens:['widget.fab.*','widget.header.*','widget.message.*','widget.reply.*','widget.categories.*','widget.footer.*','widget.bg','widget.width','widget.height'],uses:['avatar','badge','btn','input','spinner']});
function MSGH(m){const now=new Date();const tm=`${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;return `<div class="${cls('w-msg',m.me&&'me')}">${m.me?'':AVATAR({size:'sm',label:'AN'})}<span class="bb">${m.reply?`<span class="rp"><b>${esc(m.reply[0])}</b><span>${esc(m.reply[1])}</span></span>`:''}<span>${esc(m.t)}</span></span><span class="tm">${tm}</span></div>`}
/* ---- Award ---- */
const AWARDS=['Guru Casino','Gam Stop','Casino Near You','Best Support 2020 Casinomeister','Gam Care','Trustpilot','Askgamblers','Slotozilla','Best Support 2020 Casino org','Best New Casino 2019 Askgamblers','Great Slots Portfolio','Best Support 2024 Casino org','Best Support 2025 Casinomeister','Casino Innovation Awards 2025','Rising Star In Casino 2024','Best Bonus Policy 2025'];
function AWARD(v,s){const m=v.match(/^(.*?)(\s(19|20)\d\d)?(\s.*)?$/);const yr=(v.match(/(19|20)\d\d/)||[])[0];const nm=v.replace(/\s(19|20)\d\d/,'');return `<span class="${cls('w-awd',s=='sm'&&'sm')}" title="${esc(v)}">${I(yr?'trophy':'star-o',20)}<span>${esc(nm)}${yr?`<em>${yr}</em>`:''}</span></span>`}
reg({id:'award',name:'Award',group:'gaming',figma:'5:2649',alias:'trust logos ratings awards',
 desc:'Award and rating-site logos for the Trust block (Hero, Footer). 16 variants × 2 sizes.',
 props:[{n:'variant',t:'enum',o:AWARDS,d:'Best Support 2025 Casinomeister'},{n:'size',t:'enum',o:['md','sm'],d:'md',desc:'Height 32 / 24px (award.size.*).'}],
 render:p=>AWARD(p.variant,p.size),
 gallery:()=>`<div class="gr">${AWARDS.map(a=>AWARD(a,'md')).join('')}</div>`,galCls:'rows',
 notes:['Previews are neutral name plates tinted with award.color. Production uses the brand SVG assets from Figma — never redraw third-party logos.','New yearly awards are new variants, not updates of old ones.'],tokens:['award.*'],uses:['hero','footer']});
/* ---- Certificates ---- */
const CERTS=[['DMCA Protection','lock'],['AskGamblers Certificate','check-circle'],['Slotozilla','star'],['SSL','lock'],['GamCare','heart']];
function CERT(n,t){const c=CERTS.find(x=>x[0]==n)||CERTS[0];return `<span class="w-cert ${n=='Slotozilla'?'dark':slug(t)}">${I(c[1],18)}${esc(n=='SSL'?'SSL Secure':n)}</span>`}
reg({id:'certificates',name:'Certificates',sig:'Certificate',group:'gaming',figma:'5:2648',alias:'trust badges dmca ssl gamcare regulator',
 desc:'Trust and regulator badges: DMCA, AskGamblers, Slotozilla, SSL, GamCare — each with a Light / Dark theme (Slotozilla has one).',
 props:[{n:'certificate',t:'enum',o:CERTS.map(c=>c[0]),d:'SSL'},{n:'theme',t:'enum',o:['Dark','Light'],d:'Dark',when:p=>p.certificate!='Slotozilla',desc:'Match the section background.'}],
 render:p=>CERT(p.certificate,p.theme),
 gallery:()=>['Dark','Light'].map(t=>`<div class="gr">${CERTS.map(c=>CERT(c[0],t)).join('')}</div>`).join(''),galCls:'rows',
 notes:['Static logo assets — pick the theme by the section, not by the site theme.','Preview plates stand in for the real SVGs from Figma.'],tokens:[],uses:['footer','hero']});
/* ---- Onboarding ---- */
const ONB=[['Welcome to the lobby','Thousands of slots and live tables in one place.','casino'],['Claim your bonus','Your welcome pack is waiting in Wallet → Bonuses.','gift'],['Join tournaments','Climb the leaderboard and win real prizes.','trophy'],['Play responsibly','Set deposit limits any time in your profile.','lock']];
reg({id:'onboarding',name:'Onboarding',sig:'Ondoarding',group:'gaming',figma:'8:107711',alias:'welcome tour slides intro',
 desc:'Welcome-tour slide: description, cover image and a Navigator with Prev / Next actions. Use the arrows or dots.',
 props:[{n:'type',t:'enum',o:['Default','App'],d:'Default',desc:'App = mobile app, smaller image and no description.'},{n:'slide',t:'range',min:0,max:3,d:0,desc:'Current slide.'}],
 render:p=>{const s=ONB[p.slide];return `<div class="${cls('w-onb',p.type=='App'&&'app')}">${p.type=='Default'?`<p>${esc(s[1])}</p>`:''}<div class="sl">${PH(null,null,p.slide%2?'warm':'cover')}<span class="ico">${I(s[2],48)}</span><div class="cap"><span class="t4 tsh">${esc(s[0])}</span></div></div>${NAV({count:4,active:p.slide,key:'slide',actions:true})}${p.slide==3?BTN({variant:'Primary',size:'md',label:'Start playing',attrs:'data-onb'}):''}</div>`},
 mount:el=>{const b=$('[data-onb]',el);b&&b.addEventListener('click',()=>toast('Tour complete'))},
 notes:['Figma spells it “Ondoarding” and the prop “dscription”.','Description reuses drawer.description; the pager is Navigator with actions = true.'],tokens:['drawer.description','navigator.*'],uses:['navigator','image']});
