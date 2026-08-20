# Light / styles

Джерело: `light/styles.json` (Token Studio export). Автозгенеровано з JSON —
не редагувати вручну, а перегенерувати скриптом при новому експорті.

Колонки: **Raw** — значення як записано в цьому сеті (alias `{...}` або
літерал). **Resolved** — фінальне значення після проходу по стеку сетів
light/core → light/map → light/alias → light/styles → light/component/general → light/component/product → light/component/widget → light/component/betting (порядок з `$themes.json`/`$metadata.json`); порожньо, якщо Raw уже
літерал.


## banner

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `banner.overlayLeft` | color | linear-gradient(90deg, {banner.overlayColor.start} 20%, {banner.overlayColor.end} 100%) | linear-gradient(90deg, #798086 20%, #798086 100%) |  |
| `banner.showcase.bg` | color | linear-gradient(135deg, {banner.showcase.contentBg.start} 0%, {banner.showcase.contentBg.end} 100%) | linear-gradient(135deg, #798086 0%, #798086 100%) |  |

## bevel

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `bevel` | boxShadow | x:0 y:{bevelProps.lightEdge.y.md} blur:{bevelProps.lightEdge.blur.md} spread:0 color:{bevelProps.lightEdge.color.md}; x:0 y:{bevelProps.darkEdge.y.md} blur:{bevelProps.darkEdge.blur.md} spread:0 color:{bevelProps.darkEdge.color.md}; x:0 y:{bevelProps.shadow.y.md} blur:{bevelProps.shadow.blur.md} spread:0 color:{bevelProps.shadow.color.md} | x:0 y:2 blur:3 spread:0 color:transparent; x:0 y:-2 blur:3 spread:0 color:transparent; x:0 y:1 blur:2 spread:0 color:transparent |  |

## body2Xl

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `body2Xl` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{fontWeightDefault}", "fontSize": "{fontSizeBody2Xl}", "lineHeight": "{lineHeightBody2Xl}"} | {"fontFamily": "Open Sans", "fontWeight": "400", "fontSize": "24", "lineHeight": "32px"} |  |

## body2XlStrong

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `body2XlStrong` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{fontWeightStrong}", "fontSize": "{fontSizeBody2Xl}", "lineHeight": "{lineHeightBody2Xl}"} | {"fontFamily": "Open Sans", "fontWeight": "600", "fontSize": "24", "lineHeight": "32px"} |  |

## bodyLg

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `bodyLg` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{fontWeightDefault}", "fontSize": "{fontSizeBodyLg}", "lineHeight": "{lineHeightBodyLg}"} | {"fontFamily": "Open Sans", "fontWeight": "400", "fontSize": "16", "lineHeight": "24px"} |  |

## bodyLgStrong

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `bodyLgStrong` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{fontWeightStrong}", "fontSize": "{fontSizeBodyLg}", "lineHeight": "{lineHeightBodyLg}"} | {"fontFamily": "Open Sans", "fontWeight": "600", "fontSize": "16", "lineHeight": "24px"} |  |

## bodyMd

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `bodyMd` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{fontWeightDefault}", "fontSize": "{fontSizeBodyMd}", "lineHeight": "{lineHeightBodyMd}"} | {"fontFamily": "Open Sans", "fontWeight": "400", "fontSize": "14", "lineHeight": "20px"} | body1 |

## bodyMdStrong

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `bodyMdStrong` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{fontWeightStrong}", "fontSize": "{fontSizeBodyMd}", "lineHeight": "{lineHeightBodyMd}"} | {"fontFamily": "Open Sans", "fontWeight": "600", "fontSize": "14", "lineHeight": "20px"} | body1Strong |

## bodySm

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `bodySm` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{fontWeightDefault}", "fontSize": "{fontSizeBodySm}", "lineHeight": "{lineHeightBodySm}"} | {"fontFamily": "Open Sans", "fontWeight": "400", "fontSize": "12", "lineHeight": "16px"} | body2 |

## bodySmStrong

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `bodySmStrong` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{fontWeightStrong}", "fontSize": "{fontSizeBodySm}", "lineHeight": "{lineHeightBodySm}"} | {"fontFamily": "Open Sans", "fontWeight": "600", "fontSize": "12", "lineHeight": "16px"} | body2Strong |

## bodyXl

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `bodyXl` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{fontWeightDefault}", "fontSize": "{fontSizeBodyXl}", "lineHeight": "{lineHeightBodyXl}"} | {"fontFamily": "Open Sans", "fontWeight": "400", "fontSize": "20", "lineHeight": "28px"} |  |

## bodyXlStrong

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `bodyXlStrong` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{fontWeightStrong}", "fontSize": "{fontSizeBodyXl}", "lineHeight": "{lineHeightBodyXl}"} | {"fontFamily": "Open Sans", "fontWeight": "600", "fontSize": "20", "lineHeight": "28px"} |  |

## bodyXs

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `bodyXs` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{fontWeightDefault}", "fontSize": "{fontSizeBodyXs}", "lineHeight": "{lineHeightBodyXs}"} | {"fontFamily": "Open Sans", "fontWeight": "400", "fontSize": "10", "lineHeight": "14px"} | caption1 |

## bodyXsStrong

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `bodyXsStrong` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{fontWeightStrong}", "fontSize": "{fontSizeBodyXs}", "lineHeight": "{lineHeightBodyXs}"} | {"fontFamily": "Open Sans", "fontWeight": "600", "fontSize": "10", "lineHeight": "14px"} | caption1Strong |

## btn

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `btn.accent.bg.active` | color | linear-gradient(180deg, {btn.accent.bg.start.active} 0%, {btn.accent.bg.end.active} 100%) | linear-gradient(180deg, #F40084 0%, #F40084 100%) |  |
| `btn.accent.bg.default` | color | linear-gradient(180deg, {btn.accent.bg.start.default} 0%, {btn.accent.bg.end.default} 100%) | linear-gradient(180deg, #F40084 0%, #F40084 100%) |  |
| `btn.accent.bg.disabled` | color | linear-gradient(180deg, {btn.accent.bg.start.disabled} 0%, {btn.accent.bg.end.disabled} 100%) | linear-gradient(180deg, #F40084 0%, #F40084 100%) |  |
| `btn.accent.bg.focus` | color | linear-gradient(180deg, {btn.accent.bg.start.focus} 0%, {btn.accent.bg.end.focus} 100%) | linear-gradient(180deg, #F40084 0%, #F40084 100%) |  |
| `btn.accent.bg.hover` | color | linear-gradient(180deg, {btn.accent.bg.start.hover} 0%, {btn.accent.bg.end.hover} 100%) | linear-gradient(180deg, #F40084 0%, #F40084 100%) |  |
| `btn.accent.bg.loading` | color | linear-gradient(180deg, {btn.accent.bg.start.loading} 0%, {btn.accent.bg.end.loading} 100%) | linear-gradient(180deg, #F40084 0%, #F40084 100%) |  |
| `btn.accent.boxShadow` | boxShadow | x:0 y:{btn.boxShadow.lightEdge.y.md} blur:{btn.boxShadow.lightEdge.blur.md} spread:0 color:{btn.boxShadow.lightEdge.color.accent}; x:0 y:{btn.boxShadow.darkEdge.y.md} blur:{btn.boxShadow.darkEdge.blur.md} spread:0 color:{btn.boxShadow.darkEdge.color.accent}; x:0 y:{btn.boxShadow.base.y.md} blur:{btn.boxShadow.base.blur.md} spread:0 color:{btn.boxShadow.base.color.accent}; x:0 y:{btn.boxShadow.glow.y.md} blur:{btn.boxShadow.glow.blur.md} spread:0 color:{btn.boxShadow.glow.color.accent} | x:0 y:3 blur:6 spread:0 color:#FFFFFF; x:0 y:-3 blur:6 spread:0 color:#FFFFFF; x:0 y:2 blur:2 spread:0 color:#F40084; x:0 y:4 blur:16 spread:0 color:#F40084 |  |
| `btn.accent.textShadow` | boxShadow | x:0 y:{btn.textShadow.y.md} blur:{btn.textShadow.blur.md} spread:0 color:{btn.textShadow.color.accent} | x:0 y:2 blur:3 spread:0 color:#F40084 |  |
| `btn.danger.bg.active` | color | linear-gradient(180deg, {btn.danger.bg.start.active} 0%, {btn.danger.bg.end.active} 100%) | linear-gradient(180deg, #D83232 0%, #D83232 100%) |  |
| `btn.danger.bg.default` | color | linear-gradient(180deg, {btn.danger.bg.start.default} 0%, {btn.danger.bg.end.default} 100%) | linear-gradient(180deg, #D83232 0%, #D83232 100%) |  |
| `btn.danger.bg.focus` | color | linear-gradient(180deg, {btn.danger.bg.start.focus} 0%, {btn.danger.bg.end.focus} 100%) | linear-gradient(180deg, #D83232 0%, #D83232 100%) |  |
| `btn.danger.bg.hover` | color | linear-gradient(180deg, {btn.danger.bg.start.hover} 0%, {btn.danger.bg.end.hover} 100%) | linear-gradient(180deg, #D83232 0%, #D83232 100%) |  |
| `btn.danger.bg.loading` | color | linear-gradient(180deg, {btn.danger.bg.start.loading} 0%, {btn.danger.bg.end.loading} 100%) | linear-gradient(180deg, #D83232 0%, #D83232 100%) |  |
| `btn.danger.boxShadow` | boxShadow | x:0 y:{btn.boxShadow.lightEdge.y.md} blur:{btn.boxShadow.lightEdge.blur.md} spread:0 color:{btn.boxShadow.lightEdge.color.danger}; x:0 y:{btn.boxShadow.darkEdge.y.md} blur:{btn.boxShadow.darkEdge.blur.md} spread:0 color:{btn.boxShadow.darkEdge.color.danger}; x:0 y:{btn.boxShadow.base.y.md} blur:{btn.boxShadow.base.blur.md} spread:0 color:{btn.boxShadow.base.color.danger}; x:0 y:{btn.boxShadow.glow.y.md} blur:{btn.boxShadow.glow.blur.md} spread:0 color:{btn.boxShadow.glow.color.danger} | x:0 y:3 blur:6 spread:0 color:#FFFFFF; x:0 y:-3 blur:6 spread:0 color:#FFFFFF; x:0 y:2 blur:2 spread:0 color:#D83232; x:0 y:4 blur:16 spread:0 color:#D83232 |  |
| `btn.danger.textShadow` | boxShadow | x:0 y:{btn.textShadow.y.md} blur:{btn.textShadow.blur.md} spread:0 color:{btn.textShadow.color.danger} | x:0 y:2 blur:3 spread:0 color:#D83232 |  |
| `btn.primary.bg.active` | color | linear-gradient(180deg, {btn.primary.bg.start.active} 0%, {btn.primary.bg.end.active} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `btn.primary.bg.default` | color | linear-gradient(180deg, {btn.primary.bg.start.default} 0%, {btn.primary.bg.end.default} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `btn.primary.bg.disabled` | color | linear-gradient(180deg, {btn.primary.bg.start.disabled} 0%, {btn.primary.bg.end.disabled} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `btn.primary.bg.focus` | color | linear-gradient(180deg, {btn.primary.bg.start.focus} 0%, {btn.primary.bg.end.focus} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `btn.primary.bg.hover` | color | linear-gradient(180deg, {btn.primary.bg.start.hover} 0%, {btn.primary.bg.end.hover} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `btn.primary.bg.loading` | color | linear-gradient(180deg, {btn.primary.bg.start.loading} 0%, {btn.primary.bg.end.loading} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `btn.primary.boxShadow` | boxShadow | x:0 y:{btn.boxShadow.lightEdge.y.md} blur:{btn.boxShadow.lightEdge.blur.md} spread:0 color:{btn.boxShadow.lightEdge.color.primary}; x:0 y:{btn.boxShadow.darkEdge.y.md} blur:{btn.boxShadow.darkEdge.blur.md} spread:0 color:{btn.boxShadow.darkEdge.color.primary}; x:0 y:{btn.boxShadow.base.y.md} blur:{btn.boxShadow.base.blur.md} spread:0 color:{btn.boxShadow.base.color.primary}; x:0 y:{btn.boxShadow.glow.y.md} blur:{btn.boxShadow.glow.blur.md} spread:0 color:{btn.boxShadow.glow.color.primary} | x:0 y:3 blur:6 spread:0 color:#FFFFFF; x:0 y:-3 blur:6 spread:0 color:#FFFFFF; x:0 y:2 blur:2 spread:0 color:#1D70E2; x:0 y:4 blur:16 spread:0 color:#1D70E2 |  |
| `btn.primary.textShadow` | boxShadow | x:0 y:{btn.textShadow.y.md} blur:{btn.textShadow.blur.md} spread:0 color:{btn.textShadow.color.primary} | x:0 y:2 blur:3 spread:0 color:#1D70E2 |  |
| `btn.secondary.bg.active` | color | linear-gradient(180deg, {btn.secondary.bg.start.active} 0%, {btn.secondary.bg.end.active} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `btn.secondary.bg.default` | color | linear-gradient(180deg, {btn.secondary.bg.start.default} 0%, {btn.secondary.bg.end.default} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `btn.secondary.bg.focus` | color | linear-gradient(180deg, {btn.secondary.bg.start.focus} 0%, {btn.secondary.bg.end.focus} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `btn.secondary.bg.hover` | color | linear-gradient(180deg, {btn.secondary.bg.start.hover} 0%, {btn.secondary.bg.end.hover} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `btn.secondary.bg.loading` | color | linear-gradient(180deg, {btn.secondary.bg.start.loading} 0%, {btn.secondary.bg.end.loading} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `btn.secondary.boxShadow` | boxShadow | x:0 y:{btn.boxShadow.lightEdge.y.md} blur:{btn.boxShadow.lightEdge.blur.md} spread:0 color:{btn.boxShadow.lightEdge.color.secondary}; x:0 y:{btn.boxShadow.darkEdge.y.md} blur:{btn.boxShadow.darkEdge.blur.md} spread:0 color:{btn.boxShadow.darkEdge.color.secondary}; x:0 y:{btn.boxShadow.base.y.md} blur:{btn.boxShadow.base.blur.md} spread:0 color:{btn.boxShadow.base.color.secondary}; x:0 y:{btn.boxShadow.glow.y.md} blur:{btn.boxShadow.glow.blur.md} spread:0 color:{btn.boxShadow.glow.color.secondary} | x:0 y:3 blur:6 spread:0 color:transparent; x:0 y:-3 blur:6 spread:0 color:transparent; x:0 y:2 blur:2 spread:0 color:transparent; x:0 y:4 blur:16 spread:0 color:transparent |  |
| `btn.secondary.textShadow` | boxShadow | x:0 y:{btn.textShadow.y.md} blur:{btn.textShadow.blur.md} spread:0 color:{btn.textShadow.color.secondary} | x:0 y:2 blur:3 spread:0 color:#798086 |  |

## caption2

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `caption2` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{fontWeightDefault}", "fontSize": "{fontSizeCaption2}", "lineHeight": "{lineHeightCaption2}"} | {"fontFamily": "Open Sans", "fontWeight": "400", "fontSize": "8", "lineHeight": "12px"} |  |

## caption2Strong

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `caption2Strong` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{fontWeightStrong}", "fontSize": "{fontSizeCaption2}", "lineHeight": "{lineHeightCaption2}"} | {"fontFamily": "Open Sans", "fontWeight": "600", "fontSize": "8", "lineHeight": "12px"} |  |

## card

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `card.activity.overlayBottom` | color | linear-gradient(180deg, {card.activity.overlayColor.start} 40%, {card.activity.overlayColor.end} 100%) | linear-gradient(180deg, #798086 40%, #798086 100%) |  |
| `card.activity.overlayLeft` | color | linear-gradient(-90deg, {card.activity.overlayColor.start} 40%, {card.activity.overlayColor.end} 100%) | linear-gradient(-90deg, #798086 40%, #798086 100%) |  |
| `card.activity.overlayRight` | color | linear-gradient(90deg, {card.activity.overlayColor.start} 40%, {card.activity.overlayColor.end} 100%) | linear-gradient(90deg, #798086 40%, #798086 100%) |  |
| `card.activity.overlayTop` | color | linear-gradient(0deg, {card.activity.overlayColor.start} 40%, {card.activity.overlayColor.end} 100%) | linear-gradient(0deg, #798086 40%, #798086 100%) |  |
| `card.auction.bg` | color | linear-gradient(180deg, {card.auction.bgProps.start} 0%, {card.auction.bgProps.end} 100%) | linear-gradient(180deg, #4448CB 0%, #222465 100%) |  |
| `card.auction.overlayCompleted` | color | linear-gradient(135deg, {card.auction.overlayCompletedColor.start} 0%, {card.auction.overlayCompletedColor.end} 100%) | linear-gradient(135deg, #2C2E30 0%, #2C2E30 100%) |  |
| `card.auction.overlayDanger` | color | linear-gradient(135deg, {card.auction.overlayDangerColor.start} 0%, {card.auction.overlayDangerColor.end} 100%) | linear-gradient(135deg, #FF0000 0%, #FF0000 100%) |  |
| `card.auction.overlaySuccess` | color | linear-gradient(135deg, {card.auction.overlaySuccesColor.start} 0%, {card.auction.overlaySuccesColor.end} 100%) | linear-gradient(135deg, #12A741 0%, #12A741 100%) |  |
| `card.auction.overlayWarning` | color | linear-gradient(135deg, {card.auction.overlayWarningColor.start} 0%, {card.auction.overlayWarningColor.end} 100%) | linear-gradient(135deg, #E69100 0%, #E69100 100%) |  |
| `card.bonus.bg` | color | linear-gradient(180deg, {card.bonus.bgProps.start} 0%, {card.bonus.bgProps.end} 100%) | linear-gradient(180deg, #4448CB 0%, #222465 100%) |  |
| `card.bonus.overlayBottom` | color | linear-gradient(0deg, {card.bonus.overlayColor.start} 0%, {card.bonus.overlayColor.center} 40%, {card.bonus.overlayColor.end} 100%) | linear-gradient(0deg, #1D70E2 0%, #1D70E2 40%, #1D70E2 100%) |  |
| `card.bonus.overlayLeft` | color | linear-gradient(90deg, {card.bonus.overlayColor.start} 20%, {card.bonus.overlayColor.center} 60%, {card.bonus.overlayColor.end} 100%) | linear-gradient(90deg, #1D70E2 20%, #1D70E2 60%, #1D70E2 100%) |  |
| `card.bonus.welcome.overlayLeft` | color | linear-gradient(90deg, {card.bonus.welcome.overlayColor.start} 20%, {card.bonus.welcome.overlayColor.center} 60%, {card.bonus.welcome.overlayColor.end} 100%) | linear-gradient(90deg, #23267F 20%, #23267F 60%, #23267F 100%) |  |
| `card.daily.overlayLeft` | color | linear-gradient(90deg, {card.bonus.overlayColor.start} 20%, {card.bonus.overlayColor.center} 60%, {card.bonus.overlayColor.end} 100%) | linear-gradient(90deg, #1D70E2 20%, #1D70E2 60%, #1D70E2 100%) |  |
| `card.freeSpins.overlay` | color | linear-gradient(90deg, {card.freeSpins.overlayColor.start} 20%, {card.freeSpins.overlayColor.center} 60%, {card.freeSpins.overlayColor.end} 100%) | linear-gradient(90deg, #1D70E2 20%, #1D70E2 60%, #1D70E2 100%) |  |
| `card.overlay` | color | linear-gradient(0deg, {card.overlayColor.start} 0%, {card.overlayColor.center} 53%, {card.overlayColor.end} 90%) | linear-gradient(0deg, #1D70E2 0%, #1D70E2 53%, #1D70E2 90%) |  |
| `card.overlayRight` | color | linear-gradient(90deg, {card.overlayColor.start} 0%, {card.overlayColor.center} 45%, {card.overlayColor.end} 100%) | linear-gradient(90deg, #1D70E2 0%, #1D70E2 45%, #1D70E2 100%) |  |
| `card.popular.betting.overlayLeft` | color | linear-gradient(90deg, {card.popular.betting.overlayColor.start} 0%, {card.popular.betting.overlayColor.end} 100%) | linear-gradient(90deg, #C84402 0%, #C84402 100%) |  |
| `card.popular.betting.overlayTop` | color | linear-gradient(0deg, {card.popular.betting.overlayColor.start} 15%, {card.popular.betting.overlayColor.end} 80%) | linear-gradient(0deg, #C84402 15%, #C84402 80%) |  |
| `card.popular.casino.overlayLeft` | color | linear-gradient(90deg, {card.popular.casino.overlayColor.start} 0%, {card.popular.casino.overlayColor.end} 100%) | linear-gradient(90deg, #0028A1 0%, #0028A1 100%) |  |
| `card.popular.casino.overlayTop` | color | linear-gradient(0deg, {card.popular.casino.overlayColor.start} 15%, {card.popular.casino.overlayColor.end} 80%) | linear-gradient(0deg, #0028A1 15%, #0028A1 80%) |  |
| `card.popular.live.overlayLeft` | color | linear-gradient(90deg, {card.popular.live.overlayColor.start} 0%, {card.popular.live.overlayColor.end} 100%) | linear-gradient(90deg, #0068DF 0%, #0068DF 100%) |  |
| `card.popular.live.overlayTop` | color | linear-gradient(0deg, {card.popular.live.overlayColor.start} 15%, {card.popular.live.overlayColor.end} 80%) | linear-gradient(0deg, #0068DF 15%, #0068DF 80%) |  |
| `card.shadow` | boxShadow | x:0 y:{card.shadowProps.y} blur:{card.shadowProps.blur} spread:0 color:{card.shadowProps.color} | x:0 y:2 blur:3 spread:0 color:#000000 |  |

## component

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `component.btn.lg` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{btn.fontWeight}", "fontSize": "{fontSizeSubtitle2}", "lineHeight": "{lineHeightSubtitle2}", "letterSpacing": "{btn.letterSpacing}", "textCase": "{btn.textCase}"} | {"fontFamily": "Open Sans", "fontWeight": "600", "fontSize": "18", "lineHeight": "24px", "letterSpacing": "0%", "textCase": "none"} |  |
| `component.btn.md` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{btn.fontWeight}", "fontSize": "{fontSizeBodyMd}", "lineHeight": "{lineHeightBodyMd}", "letterSpacing": "{btn.letterSpacing}", "textCase": "{btn.textCase}"} | {"fontFamily": "Open Sans", "fontWeight": "600", "fontSize": "14", "lineHeight": "20px", "letterSpacing": "0%", "textCase": "none"} |  |
| `component.btn.sm` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{btn.fontWeight}", "fontSize": "{fontSizeBodySm}", "lineHeight": "{lineHeightBodySm}", "letterSpacing": "{btn.letterSpacing}", "textCase": "{btn.textCase}"} | {"fontFamily": "Open Sans", "fontWeight": "600", "fontSize": "12", "lineHeight": "16px", "letterSpacing": "0%", "textCase": "none"} |  |
| `component.btn.xl` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{btn.fontWeight}", "fontSize": "{fontSizeSubtitle1}", "lineHeight": "{lineHeightSubtitle1}", "letterSpacing": "{btn.letterSpacing}", "textCase": "{btn.textCase}"} | {"fontFamily": "Open Sans", "fontWeight": "600", "fontSize": "22", "lineHeight": "28px", "letterSpacing": "0%", "textCase": "none"} |  |
| `component.btn.xs` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{btn.fontWeight}", "fontSize": "{fontSizeBodyXs}", "lineHeight": "{lineHeightBodyXs}", "letterSpacing": "{btn.letterSpacing}", "textCase": "{btn.textCase}"} | {"fontFamily": "Open Sans", "fontWeight": "600", "fontSize": "10", "lineHeight": "14px", "letterSpacing": "0%", "textCase": "none"} |  |
| `component.input.lg` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{fontWeightDefault}", "fontSize": "{fontSizeSubtitle2}", "lineHeight": "{lineHeightSubtitle2}"} | {"fontFamily": "Open Sans", "fontWeight": "400", "fontSize": "18", "lineHeight": "24px"} |  |
| `component.input.md` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{fontWeightDefault}", "fontSize": "{fontSizeBodyMd}", "lineHeight": "{lineHeightBodyMd}"} | {"fontFamily": "Open Sans", "fontWeight": "400", "fontSize": "14", "lineHeight": "20px"} |  |
| `component.input.sm` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{fontWeightDefault}", "fontSize": "{fontSizeBodySm}", "lineHeight": "{lineHeightBodySm}"} | {"fontFamily": "Open Sans", "fontWeight": "400", "fontSize": "12", "lineHeight": "16px"} |  |

## d1

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `d1` | typography | {"fontFamily": "{fontFamilyTitle}", "fontWeight": "{fontWeightTitle}", "fontSize": "{fontSizeD1}", "lineHeight": "{lineHeightD1}", "letterSpacing": "{letterSpacingTitle}"} | {"fontFamily": "Bungee", "fontWeight": "400", "fontSize": "84", "lineHeight": "88px", "letterSpacing": "2%"} |  |

## d2

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `d2` | typography | {"fontFamily": "{fontFamilyTitle}", "fontWeight": "{fontWeightTitle}", "fontSize": "{fontSizeD2}", "lineHeight": "{lineHeightD2}", "letterSpacing": "{letterSpacingTitle}"} | {"fontFamily": "Bungee", "fontWeight": "400", "fontSize": "64", "lineHeight": "68px", "letterSpacing": "2%"} |  |

## d3

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `d3` | typography | {"fontFamily": "{fontFamilyTitle}", "fontWeight": "{fontWeightTitle}", "fontSize": "{fontSizeD3}", "lineHeight": "{lineHeightD3}", "letterSpacing": "{letterSpacingTitle}"} | {"fontFamily": "Bungee", "fontWeight": "400", "fontSize": "34", "lineHeight": "38px", "letterSpacing": "2%"} |  |

## emboss

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `emboss` | boxShadow | x:0 y:{embossProps.lightEdge.y} blur:{embossProps.lightEdge.blur} spread:0 color:{embossProps.lightEdge.color}; x:0 y:{embossProps.darkEdge.y} blur:{embossProps.darkEdge.blur} spread:0 color:{embossProps.darkEdge.color} | x:0 y:-1.5 blur:4 spread:0 color:transparent; x:0 y:2 blur:4 spread:0 color:transparent |  |

## fader

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `fader.bottom.primary` | color | linear-gradient(0deg, {fader.start.primary} 0%, {fader.end.primary} 100%) | linear-gradient(0deg, #798086 0%, #798086 100%) |  |
| `fader.bottom.quaternary` | color | linear-gradient(0deg, {fader.start.quaternary} 0%, {fader.end.quaternary} 100%) | linear-gradient(0deg, #798086 0%, #798086 100%) |  |
| `fader.bottom.secondary` | color | linear-gradient(0deg, {fader.start.secondary} 0%, {fader.end.secondary} 100%) | linear-gradient(0deg, #798086 0%, #798086 100%) |  |
| `fader.bottom.tertiary` | color | linear-gradient(0deg, {fader.start.tertiary} 0%, {fader.end.tertiary} 100%) | linear-gradient(0deg, #798086 0%, #798086 100%) |  |
| `fader.left.primary` | color | linear-gradient(90deg, {fader.start.primary} 0%, {fader.end.primary} 100%) | linear-gradient(90deg, #798086 0%, #798086 100%) |  |
| `fader.left.quaternary` | color | linear-gradient(90deg, {fader.start.quaternary} 0%, {fader.end.quaternary} 100%) | linear-gradient(90deg, #798086 0%, #798086 100%) |  |
| `fader.left.secondary` | color | linear-gradient(90deg, {fader.start.secondary} 0%, {fader.end.secondary} 100%) | linear-gradient(90deg, #798086 0%, #798086 100%) |  |
| `fader.left.tertiary` | color | linear-gradient(90deg, {fader.start.tertiary} 0%, {fader.end.tertiary} 100%) | linear-gradient(90deg, #798086 0%, #798086 100%) |  |
| `fader.right.primary` | color | linear-gradient(270deg, {fader.start.primary} 0%, {fader.end.primary} 100%) | linear-gradient(270deg, #798086 0%, #798086 100%) |  |
| `fader.right.quaternary` | color | linear-gradient(270deg, {fader.start.quaternary} 0%, {fader.end.quaternary} 100%) | linear-gradient(270deg, #798086 0%, #798086 100%) |  |
| `fader.right.secondary` | color | linear-gradient(270deg, {fader.start.secondary} 0%, {fader.end.secondary} 100%) | linear-gradient(270deg, #798086 0%, #798086 100%) |  |
| `fader.right.tertiary` | color | linear-gradient(270deg, {fader.start.tertiary} 0%, {fader.end.tertiary} 100%) | linear-gradient(270deg, #798086 0%, #798086 100%) |  |
| `fader.top.primary` | color | linear-gradient(180deg, {fader.start.primary} 0%, {fader.end.primary} 100%) | linear-gradient(180deg, #798086 0%, #798086 100%) |  |
| `fader.top.quaternary` | color | linear-gradient(180deg, {fader.start.quaternary} 0%, {fader.end.quaternary} 100%) | linear-gradient(180deg, #798086 0%, #798086 100%) |  |
| `fader.top.secondary` | color | linear-gradient(180deg, {fader.start.secondary} 0%, {fader.end.secondary} 100%) | linear-gradient(180deg, #798086 0%, #798086 100%) |  |
| `fader.top.tertiary` | color | linear-gradient(180deg, {fader.start.tertiary} 0%, {fader.end.tertiary} 100%) | linear-gradient(180deg, #798086 0%, #798086 100%) |  |

## glowAccent1

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `glowAccent1` | boxShadow | x:0 y:0 blur:{glow.blur} spread:0 color:{glow.accent1.color} | x:0 y:0 blur:10 spread:0 color:#1D70E2 |  |

## gradient

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `gradient.accent1` | color | linear-gradient(90deg, rgba({product1}, 0) 16%, rgba({product1}, 0.25) 100%) | linear-gradient(90deg, rgba(#1D70E2, 0) 16%, rgba(#1D70E2, 0.25) 100%) |  |
| `gradient.accent2` | color | linear-gradient(90deg, rgba({product2}, 0) 16%, rgba({product2}, 0.25) 100%) | linear-gradient(90deg, rgba(#F40084, 0) 16%, rgba(#F40084, 0.25) 100%) |  |
| `gradient.alt1` | color | linear-gradient(90deg, rgba({alt1}, 0) 16%, rgba({alt1}, 0.25) 100%) | linear-gradient(90deg, rgba(#a04bc4, 0) 16%, rgba(#a04bc4, 0.25) 100%) |  |
| `gradient.alt2` | color | linear-gradient(90deg, rgba({alt2}, 0) 16%, rgba({alt2}, 0.25) 100%) | linear-gradient(90deg, rgba(#00BCD4, 0) 16%, rgba(#00BCD4, 0.25) 100%) |  |
| `gradient.alt3` | color | linear-gradient(90deg, rgba({alt3}, 0) 16%, rgba({alt3}, 0.25) 100%) | linear-gradient(90deg, rgba(#BD9865, 0) 16%, rgba(#BD9865, 0.25) 100%) |  |
| `gradient.alt4` | color | linear-gradient(0deg, rgba({product1}, 0) 16%, rgba({product1}, 0.25) 100%) | linear-gradient(0deg, rgba(#1D70E2, 0) 16%, rgba(#1D70E2, 0.25) 100%) |  |
| `gradient.alt5` | color | linear-gradient(0deg, rgba({product2}, 0) 16%, rgba({product2}, 0.25) 100%) | linear-gradient(0deg, rgba(#F40084, 0) 16%, rgba(#F40084, 0.25) 100%) |  |
| `gradient.bronze` | color | linear-gradient(90deg, rgba( {bronze} , 0.24) 16%, rgba( {bronze} , 1) 100%) | linear-gradient(90deg, rgba( #F4C5C3 , 0.24) 16%, rgba( #F4C5C3 , 1) 100%) |  |
| `gradient.danger` | color | linear-gradient(90deg, rgba({danger}, 0) 16%, rgba({danger}, 0.25) 100%) | linear-gradient(90deg, rgba(#D83232, 0) 16%, rgba(#D83232, 0.25) 100%) |  |
| `gradient.disable` | color | linear-gradient(90deg, rgba( {disabled} , 0.0) 0%, rgba( {disabled} , 0.15) 100%) | linear-gradient(90deg, rgba( #070707 , 0.0) 0%, rgba( #070707 , 0.15) 100%) |  |
| `gradient.gold` | color | linear-gradient(90deg, rgba( {gold} , 0.24) 16%, rgba( {gold} , 1) 100%) | linear-gradient(90deg, rgba( #F3EB7C , 0.24) 16%, rgba( #F3EB7C , 1) 100%) |  |
| `gradient.primary` | color | linear-gradient(135deg, {gradientProps.primary.start} 0%, {gradientProps.primary.end} 100%) | linear-gradient(135deg, #F6CFFE 0%, #BACAFE 100%) |  |
| `gradient.secondary` | color | linear-gradient(135deg, {gradientProps.secondary.start} 0%, {gradientProps.secondary.end} 100%) | linear-gradient(135deg, #FFD9B1 0%, #FFF9D8 100%) |  |
| `gradient.silver` | color | linear-gradient(90deg, rgba( {silver} , 0.24) 16%, rgba( {silver} , 1) 100%) | linear-gradient(90deg, rgba( #C3D9F9 , 0.24) 16%, rgba( #C3D9F9 , 1) 100%) |  |
| `gradient.success` | color | linear-gradient(90deg, rgba({success}, 0) 16%, rgba({success}, 0.25) 100%) | linear-gradient(90deg, rgba(#0EA45B, 0) 16%, rgba(#0EA45B, 0.25) 100%) |  |
| `gradient.warning` | color | linear-gradient(90deg, rgba({warning}, 0) 16%, rgba({warning}, 0.25) 100%) | linear-gradient(90deg, rgba(#FFC700, 0) 16%, rgba(#FFC700, 0.25) 100%) |  |

## hero

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `hero.bg.default` | color | linear-gradient(180deg, {hero.bg.start} 0%, {hero.bg.end} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |

## image

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `image.mask` | color | linear-gradient(180deg, {image.maskStart} 0%, {image.maskEnd} 100%) | linear-gradient(180deg, #000000 0%, #000000 100%) |  |

## notification

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `notification.edge.backgroundBlur` | number | 20 |  |  |
| `notification.edge.shadow` | boxShadow | x:0 y:3 blur:8 spread:0 color:rgba({black}, 0.12) | x:0 y:3 blur:8 spread:0 color:rgba(#000000, 0.12) |  |
| `notification.shadow` | boxShadow | x:0 y:3 blur:8 spread:0 color:rgba({black}, 0.12); x:0 y:8 blur:48 spread:16 color:rgba({black}, 0.12) | x:0 y:3 blur:8 spread:0 color:rgba(#000000, 0.12); x:0 y:8 blur:48 spread:16 color:rgba(#000000, 0.12) |  |

## overlay

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `overlay.bottom` | color | linear-gradient(0deg, {overlay.start} 0%, {overlay.end} 100%) | linear-gradient(0deg, #000000 0%, #000000 100%) |  |
| `overlay.left` | color | linear-gradient(90deg, {overlay.start} 0%, {overlay.end} 100%) | linear-gradient(90deg, #000000 0%, #000000 100%) |  |
| `overlay.right` | color | linear-gradient(270deg, {overlay.start} 0%, {overlay.end} 100%) | linear-gradient(270deg, #000000 0%, #000000 100%) |  |
| `overlay.top` | color | linear-gradient(180deg, {overlay.start} 0%, {overlay.end} 100%) | linear-gradient(180deg, #000000 0%, #000000 100%) |  |

## overline

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `overline` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{fontWeightStrong}", "fontSize": "{fontSizeOverline}", "lineHeight": "{lineHeightOverline}", "letterSpacing": "{letterSpacingOverline}", "textCase": "UpperCase"} | {"fontFamily": "Open Sans", "fontWeight": "600", "fontSize": "12", "lineHeight": "16px", "letterSpacing": "4%", "textCase": "UpperCase"} |  |

## progress

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `progress.indicator.boxShadow.default` | boxShadow | x:0 y:{progress.boxShadow.indicator.lightEdge.y.md} blur:{progress.boxShadow.indicator.lightEdge.blur.md} spread:0 color:{progress.boxShadow.indicator.lightEdge.color.default}; x:0 y:{progress.boxShadow.indicator.darkEdge.y.md} blur:{progress.boxShadow.indicator.darkEdge.blur.md} spread:0 color:{progress.boxShadow.indicator.darkEdge.color.default}; x:0 y:{progress.boxShadow.indicator.glow.y.md} blur:{progress.boxShadow.indicator.glow.blur.md} spread:0 color:{progress.boxShadow.indicator.glow.color.default} | x:0 y:1 blur:2 spread:0 color:#fff; x:0 y:-2 blur:2 spread:0 color:#FFFFFF; x:0 y:0 blur:6 spread:0 color:#0EA45B |  |
| `progress.indicator.boxShadow.error` | boxShadow | x:0 y:{progress.boxShadow.indicator.lightEdge.y.md} blur:{progress.boxShadow.indicator.lightEdge.blur.md} spread:0 color:{progress.boxShadow.indicator.lightEdge.color.error}; x:0 y:{progress.boxShadow.indicator.darkEdge.y.md} blur:{progress.boxShadow.indicator.darkEdge.blur.md} spread:0 color:{progress.boxShadow.indicator.darkEdge.color.error}; x:0 y:{progress.boxShadow.indicator.glow.y.md} blur:{progress.boxShadow.indicator.glow.blur.md} spread:0 color:{progress.boxShadow.indicator.glow.color.error} | x:0 y:1 blur:2 spread:0 color:#fff; x:0 y:-2 blur:2 spread:0 color:#FFFFFF; x:0 y:0 blur:6 spread:0 color:#D83232 |  |
| `progress.indicator.boxShadow.succes` | boxShadow | x:0 y:{progress.boxShadow.indicator.lightEdge.y.md} blur:{progress.boxShadow.indicator.lightEdge.blur.md} spread:0 color:{progress.boxShadow.indicator.lightEdge.color.sussess}; x:0 y:{progress.boxShadow.indicator.darkEdge.y.md} blur:{progress.boxShadow.indicator.darkEdge.blur.md} spread:0 color:{progress.boxShadow.indicator.darkEdge.color.success}; x:0 y:{progress.boxShadow.indicator.glow.y.md} blur:{progress.boxShadow.indicator.glow.blur.md} spread:0 color:{progress.boxShadow.indicator.glow.color.success} | x:0 y:1 blur:2 spread:0 color:#fff; x:0 y:-2 blur:2 spread:0 color:#FFFFFF; x:0 y:0 blur:6 spread:0 color:#0EA45B |  |
| `progress.linear.indicator.default` | color | linear-gradient(90deg, {progress.indicator.start.default} 0%, {progress.indicator.end.default} 100%) | linear-gradient(90deg, #0EA45B 0%, #18AEF4 100%) |  |
| `progress.linear.indicator.error` | color | linear-gradient(90deg, {progress.indicator.start.error} 0%, {progress.indicator.end.error} 100%) | linear-gradient(90deg, #D83232 0%, #D83232 100%) |  |
| `progress.linear.indicator.success` | color | linear-gradient(90deg, {progress.indicator.start.success} 0%, {progress.indicator.end.success} 100%) | linear-gradient(90deg, #0EA45B 0%, #0EA45B 100%) |  |
| `progress.track.boxShadow` | boxShadow | x:0 y:{progress.boxShadow.track.y.md} blur:{progress.boxShadow.track.blur.md} spread:0 color:{progress.boxShadow.track.color} | x:0 y:2 blur:4 spread:0 color:#000000 |  |

## promoWidget

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `promoWidget.accent.bg.active` | color | linear-gradient(180deg, {promoWidget.accent.bg.start.active} 0%, {promoWidget.accent.bg.end.active} 100%) | linear-gradient(180deg, #F40084 0%, #F40084 100%) |  |
| `promoWidget.accent.bg.default` | color | linear-gradient(180deg, {promoWidget.accent.bg.start.default} 0%, {promoWidget.accent.bg.end.default} 100%) | linear-gradient(180deg, #F40084 0%, #F40084 100%) |  |
| `promoWidget.accent.bg.hover` | color | linear-gradient(180deg, {promoWidget.accent.bg.start.hover} 0%, {promoWidget.accent.bg.end.hover} 100%) | linear-gradient(180deg, #F40084 0%, #F40084 100%) |  |
| `promoWidget.boxShadow.accent` | boxShadow | x:0 y:{btn.boxShadow.lightEdge.y.md} blur:{btn.boxShadow.lightEdge.blur.md} spread:0 color:{btn.boxShadow.lightEdge.color.accent}; x:0 y:{btn.boxShadow.darkEdge.y.md} blur:{btn.boxShadow.darkEdge.blur.md} spread:0 color:{btn.boxShadow.darkEdge.color.accent}; x:0 y:{btn.boxShadow.base.y.md} blur:{btn.boxShadow.base.blur.md} spread:0 color:{btn.boxShadow.base.color.accent}; x:0 y:{btn.boxShadow.glow.y.md} blur:{btn.boxShadow.glow.blur.md} spread:0 color:{btn.boxShadow.glow.color.accent} | x:0 y:3 blur:6 spread:0 color:#FFFFFF; x:0 y:-3 blur:6 spread:0 color:#FFFFFF; x:0 y:2 blur:2 spread:0 color:#F40084; x:0 y:4 blur:16 spread:0 color:#F40084 |  |
| `promoWidget.boxShadow.primary` | boxShadow | x:0 y:{btn.boxShadow.lightEdge.y.md} blur:{btn.boxShadow.lightEdge.blur.md} spread:0 color:{btn.boxShadow.lightEdge.color.primary}; x:0 y:{btn.boxShadow.darkEdge.y.md} blur:{btn.boxShadow.darkEdge.blur.md} spread:0 color:{btn.boxShadow.darkEdge.color.primary}; x:0 y:{btn.boxShadow.base.y.md} blur:{btn.boxShadow.base.blur.md} spread:0 color:{btn.boxShadow.base.color.primary}; x:0 y:{btn.boxShadow.glow.y.md} blur:{btn.boxShadow.glow.blur.md} spread:0 color:{btn.boxShadow.glow.color.primary} | x:0 y:3 blur:6 spread:0 color:#FFFFFF; x:0 y:-3 blur:6 spread:0 color:#FFFFFF; x:0 y:2 blur:2 spread:0 color:#1D70E2; x:0 y:4 blur:16 spread:0 color:#1D70E2 |  |
| `promoWidget.primary.bg.active` | color | linear-gradient(180deg, {promoWidget.primary.bg.start.active} 0%, {promoWidget.primary.bg.end.active} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `promoWidget.primary.bg.default` | color | linear-gradient(180deg, {promoWidget.primary.bg.start.default} 0%, {promoWidget.primary.bg.end.default} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `promoWidget.primary.bg.hover` | color | linear-gradient(180deg, {promoWidget.primary.bg.start.hover} 0%, {promoWidget.primary.bg.end.hover} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |

## qdw

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `qdw.bg.default` | color | linear-gradient(135deg, {qdw.bg.start} 0%, {qdw.bg.end} 100%) | linear-gradient(135deg, #763882 0%, #1a254a 100%) |  |

## randomizer

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `randomizer.frameGlow` | boxShadow | x:0 y:0 blur:{randomizer.frame.blur} spread:0 color:{glow.accent1.color} | x:0 y:0 blur:8 spread:0 color:#1D70E2 |  |
| `randomizer.gradient.bg` | color | linear-gradient(90deg, {randomizer.gradient.start} 0%,  {randomizer.gradient.center} 50%, {randomizer.gradient.end} 100%) | linear-gradient(90deg, #798086 0%,  #798086 50%, #798086 100%) |  |

## section

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `section.gradientFill.block` | color | linear-gradient(135deg, {section.gradientFill.blockProps.start} 0%, {section.gradientFill.blockProps.end} 100%) | linear-gradient(135deg, #F6CFFE 0%, #BACAFE 100%) |  |
| `section.gradientFill.primary.default` | color | linear-gradient(135deg, {section.gradientFill.primary.start} 0%, {section.gradientFill.primary.end} 100%) | linear-gradient(135deg, #F6CFFE 0%, #BACAFE 100%) |  |
| `section.gradientFill.secondary.default` | color | linear-gradient(135deg, {section.gradientFill.secondary.start} 0%, {section.gradientFill.secondary.end} 100%) | linear-gradient(135deg, #FFD9B1 0%, #FFF9D8 100%) |  |
| `section.gradientSegment.primary.default` | color | linear-gradient(-3deg, {section.gradientSegment.primary.start} 0%, {section.gradientSegment.primary.center} 30%, {section.gradientSegment.primary.center} 70%, {section.gradientSegment.primary.start} 100%) | linear-gradient(-3deg, #1D70E2 0%, #1D70E2 30%, #1D70E2 70%, #1D70E2 100%) |  |
| `section.gradientSegment.secondary.default` | color | linear-gradient(-3deg, {section.gradientSegment.secondary.start} 0%, {section.gradientSegment.secondary.center} 30%, {section.gradientSegment.secondary.center} 70%, {section.gradientSegment.secondary.start} 100%) | linear-gradient(-3deg, #F40084 0%, #F40084 30%, #F40084 70%, #F40084 100%) |  |

## shadowLg

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `shadowLg` | boxShadow | x:0 y:{shadow.y.lg} blur:{shadow.blur.lg} spread:0 color:{shadow.default} | x:0 y:2 * 2 * 2 blur:3 * 2 * 2 spread:0 color:#000000 |  |

## shadowMd

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `shadowMd` | boxShadow | x:0 y:{shadow.y.md} blur:{shadow.blur.md} spread:0 color:{shadow.default} | x:0 y:2 * 2 blur:3 * 2 spread:0 color:#000000 |  |

## shadowSm

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `shadowSm` | boxShadow | x:0 y:{shadow.y.sm} blur:{shadow.blur.sm} spread:0 color:{shadow.default} | x:0 y:2 blur:3 spread:0 color:#000000 |  |

## status

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `status.btn.boxShadow` | boxShadow | x:0 y:{status.boxShadow.lightEdge.y.md} blur:{status.boxShadow.lightEdge.blur.md} spread:0 color:{status.boxShadow.lightEdge.md}; x:0 y:{status.boxShadow.darkEdge.y.md} blur:{status.boxShadow.darkEdge.blur.md} spread:0 color:{status.boxShadow.darkEdge.md}; x:0 y:{status.boxShadow.base.y.md} blur:{status.boxShadow.base.blur.md} spread:0 color:{status.boxShadow.base.color} | x:0 y:3 blur:6 spread:0 color:#ffffff; x:0 y:-3 blur:6 spread:0 color:#000000; x:0 y:2 blur:2 spread:0 color:#000000 |  |

## subtitle1

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `subtitle1` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{fontWeightCursive}", "fontSize": "{fontSizeSubtitle1}", "lineHeight": "{lineHeightSubtitle1}"} | {"fontFamily": "Open Sans", "fontWeight": "Italic", "fontSize": "22", "lineHeight": "28px"} |  |

## subtitle2

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `subtitle2` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{fontWeightCursive}", "fontSize": "{fontSizeSubtitle2}", "lineHeight": "{lineHeightSubtitle2}"} | {"fontFamily": "Open Sans", "fontWeight": "Italic", "fontSize": "18", "lineHeight": "24px"} |  |

## subtitle3

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `subtitle3` | typography | {"fontFamily": "{fontFamilyMain}", "fontWeight": "{fontWeightCursive}", "fontSize": "{fontSizeSubtitle3}", "lineHeight": "{lineHeightSubtitle3}"} | {"fontFamily": "Open Sans", "fontWeight": "Italic", "fontSize": "14", "lineHeight": "20px"} |  |

## t1

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `t1` | typography | {"fontFamily": "{fontFamilyTitle}", "fontWeight": "{fontWeightTitle}", "fontSize": "{fontSizeT1}", "lineHeight": "{lineHeightT1}", "letterSpacing": "{letterSpacingTitle}"} | {"fontFamily": "Bungee", "fontWeight": "400", "fontSize": "28", "lineHeight": "32px", "letterSpacing": "2%"} |  |

## t2

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `t2` | typography | {"fontFamily": "{fontFamilyTitle}", "fontWeight": "{fontWeightTitle}", "fontSize": "{fontSizeT2}", "lineHeight": "{lineHeightT2}", "letterSpacing": "{letterSpacingTitle}"} | {"fontFamily": "Bungee", "fontWeight": "400", "fontSize": "24", "lineHeight": "28px", "letterSpacing": "2%"} |  |

## t3

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `t3` | typography | {"fontFamily": "{fontFamilyTitle}", "fontWeight": "{fontWeightTitle}", "fontSize": "{fontSizeT3}", "lineHeight": "{lineHeightT3}", "letterSpacing": "{letterSpacingTitle}"} | {"fontFamily": "Bungee", "fontWeight": "400", "fontSize": "20", "lineHeight": "24px", "letterSpacing": "2%"} |  |

## t4

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `t4` | typography | {"fontFamily": "{fontFamilyTitle}", "fontWeight": "{fontWeightTitle}", "fontSize": "{fontSizeT4}", "lineHeight": "{lineHeightT4}", "letterSpacing": "{letterSpacingTitle}"} | {"fontFamily": "Bungee", "fontWeight": "400", "fontSize": "18", "lineHeight": "22px", "letterSpacing": "2%"} |  |

## t5

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `t5` | typography | {"fontFamily": "{fontFamilyTitle}", "fontWeight": "{fontWeightTitle}", "fontSize": "{fontSizeT5}", "lineHeight": "{lineHeightT5}", "letterSpacing": "{letterSpacingTitle}"} | {"fontFamily": "Bungee", "fontWeight": "400", "fontSize": "16", "lineHeight": "20px", "letterSpacing": "2%"} |  |

## tab

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `tab.bottom` | boxShadow | x:0 y:{tab.shadow.yBottom} blur:{tab.shadow.blur} spread:{tab.shadow.spread} color:{tab.shadow.color} | x:0 y:-24 blur:16 spread:-24 color:#000000 |  |
| `tab.left` | boxShadow | x:{tab.shadow.xLeft} y:0 blur:{tab.shadow.blur} spread:{tab.shadow.spread} color:{tab.shadow.color} | x:24 y:0 blur:16 spread:-24 color:#000000 |  |
| `tab.right` | boxShadow | x:{tab.shadow.xRight} y:0 blur:{tab.shadow.blur} spread:{tab.shadow.spread} color:{tab.shadow.color} | x:-24 y:0 blur:16 spread:-24 color:#000000 |  |
| `tab.top` | boxShadow | x:0 y:{tab.shadow.yTop} blur:{tab.shadow.blur} spread:{tab.shadow.spread} color:{tab.shadow.color} | x:0 y:24 blur:16 spread:-24 color:#000000 |  |

## tabbar

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `tabbar.accent.bg.default` | color | linear-gradient(180deg, {tabbar.item.accent.bg.start} 0%, {tabbar.item.accent.bg.end} 100%) | linear-gradient(180deg, #F40084 0%, #F40084 100%) |  |
| `tabbar.accent.boxShadow` | boxShadow | x:0 y:{btn.boxShadow.lightEdge.y.md} blur:{btn.boxShadow.lightEdge.blur.md} spread:0 color:{btn.boxShadow.lightEdge.color.accent}; x:0 y:{btn.boxShadow.darkEdge.y.md} blur:{btn.boxShadow.darkEdge.blur.md} spread:0 color:{btn.boxShadow.darkEdge.color.accent}; x:0 y:{btn.boxShadow.base.y.md} blur:{btn.boxShadow.base.blur.md} spread:0 color:{btn.boxShadow.base.color.accent}; x:0 y:{btn.boxShadow.glow.y.md} blur:{btn.boxShadow.glow.blur.md} spread:0 color:{btn.boxShadow.glow.color.accent} | x:0 y:3 blur:6 spread:0 color:#FFFFFF; x:0 y:-3 blur:6 spread:0 color:#FFFFFF; x:0 y:2 blur:2 spread:0 color:#F40084; x:0 y:4 blur:16 spread:0 color:#F40084 |  |

## thumb

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `thumb.btn.bg.active` | color | linear-gradient(180deg, {thumb.btn.bg.start.active} 0%, {thumb.btn.bg.end.active} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `thumb.btn.bg.default` | color | linear-gradient(180deg, {thumb.btn.bg.start.default} 0%, {thumb.btn.bg.end.default} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `thumb.btn.bg.focus` | color | linear-gradient(180deg, {thumb.btn.bg.start.focus} 0%, {thumb.btn.bg.end.focus} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `thumb.btn.bg.hover` | color | linear-gradient(180deg, {thumb.btn.bg.start.hover} 0%, {thumb.btn.bg.end.hover} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `thumb.btn.textShadow` | boxShadow | {btn.secondary.textShadow} | x:0 y:2 blur:3 spread:0 color:#798086 |  |

## toggleBtn

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `toggleBtn.primary.bg.active` | color | linear-gradient(180deg, {toggleBtn.primary.bg.start.active} 0%, {toggleBtn.primary.bg.end.active} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `toggleBtn.primary.bg.default` | color | linear-gradient(180deg, {toggleBtn.primary.bg.start.default} 0%, {toggleBtn.primary.bg.end.default} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `toggleBtn.primary.bg.disabled` | color | linear-gradient(180deg, {toggleBtn.primary.bg.start.disabled} 0%, {toggleBtn.primary.bg.end.disabled} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `toggleBtn.primary.bg.focus` | color | linear-gradient(180deg, {toggleBtn.primary.bg.start.focus} 0%, {toggleBtn.primary.bg.end.focus} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `toggleBtn.primary.bg.hover` | color | linear-gradient(180deg, {toggleBtn.primary.bg.start.hover} 0%, {toggleBtn.primary.bg.end.hover} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `toggleBtn.primary.boxShadow` | boxShadow | x:0 y:{btn.boxShadow.lightEdge.y.md} blur:{btn.boxShadow.lightEdge.blur.md} spread:0 color:{btn.boxShadow.lightEdge.color.primary}; x:0 y:{btn.boxShadow.darkEdge.y.md} blur:{btn.boxShadow.darkEdge.blur.md} spread:0 color:{btn.boxShadow.darkEdge.color.primary}; x:0 y:{btn.boxShadow.base.y.md} blur:{btn.boxShadow.base.blur.md} spread:0 color:{btn.boxShadow.base.color.primary}; x:0 y:{btn.boxShadow.glow.y.md} blur:{btn.boxShadow.glow.blur.md} spread:0 color:{btn.boxShadow.glow.color.primary} | x:0 y:3 blur:6 spread:0 color:#FFFFFF; x:0 y:-3 blur:6 spread:0 color:#FFFFFF; x:0 y:2 blur:2 spread:0 color:#1D70E2; x:0 y:4 blur:16 spread:0 color:#1D70E2 |  |
| `toggleBtn.secondary.bg.active` | color | linear-gradient(180deg, {toggleBtn.secondary.bg.start.active} 0%, {toggleBtn.secondary.bg.end.active} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `toggleBtn.secondary.bg.default` | color | linear-gradient(180deg, {toggleBtn.secondary.bg.start.default} 0%, {toggleBtn.secondary.bg.end.default} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `toggleBtn.secondary.bg.focus` | color | linear-gradient(180deg, {toggleBtn.secondary.bg.start.focus} 0%, {toggleBtn.secondary.bg.end.focus} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `toggleBtn.secondary.bg.hover` | color | linear-gradient(180deg, {toggleBtn.secondary.bg.start.hover} 0%, {toggleBtn.secondary.bg.end.hover} 100%) | linear-gradient(180deg, #1D70E2 0%, #1D70E2 100%) |  |
| `toggleBtn.secondary.boxShadow` | boxShadow | x:0 y:{btn.boxShadow.lightEdge.y.md} blur:{btn.boxShadow.lightEdge.blur.md} spread:0 color:{btn.boxShadow.lightEdge.color.secondary}; x:0 y:{btn.boxShadow.darkEdge.y.md} blur:{btn.boxShadow.darkEdge.blur.md} spread:0 color:{btn.boxShadow.darkEdge.color.secondary}; x:0 y:{btn.boxShadow.base.y.md} blur:{btn.boxShadow.base.blur.md} spread:0 color:{btn.boxShadow.base.color.secondary}; x:0 y:{btn.boxShadow.glow.y.md} blur:{btn.boxShadow.glow.blur.md} spread:0 color:{btn.boxShadow.glow.color.secondary} | x:0 y:3 blur:6 spread:0 color:transparent; x:0 y:-3 blur:6 spread:0 color:transparent; x:0 y:2 blur:2 spread:0 color:transparent; x:0 y:4 blur:16 spread:0 color:transparent |  |

## tooltip

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `tooltip.boxShadow` | boxShadow | x:0 y:4 blur:16 spread:0 color:{tooltip.boxShadowColor} | x:0 y:4 blur:16 spread:0 color:#000000 |  |

## wof

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `wof.btn.boxShadow` | boxShadow | x:0 y:{wof.btn.dropShadow.y} blur:{wof.btn.dropShadow.blur} spread:0 color:{wof.btn.dropShadow.color}; x:0 y:0 blur:{wof.btn.innerShadow.blur} spread:0 color:{wof.btn.innerShadow.color} | x:0 y:4 blur:8 spread:0 color:#000000; x:0 y:0 blur:10 spread:0 color:#ffffff |  |
| `wof.btn.default.bg` | color | linear-gradient(-45deg, {wof.btn.default.start} 0%, {wof.btn.default.center} 50%, {wof.btn.default.start} 100%) | linear-gradient(-45deg, #FE8686 0%, #C12828 50%, #FE8686 100%) |  |
| `wof.btn.hover.bg` | color | linear-gradient(-45deg, {wof.btn.hover.start} 0%, {wof.btn.hover.center} 50%, {wof.btn.hover.start} 100%) | linear-gradient(-45deg, #FFB6B6 0%, #E65252 50%, #FFB6B6 100%) |  |
| `wof.sector.primary.bg` | color | linear-gradient(90deg, {wof.sector.primary.start} 0%, {wof.sector.primary.end} 100%) | linear-gradient(90deg, #AFE2FF 0%, #3B88E5 100%) |  |
| `wof.sector.secondary.bg` | color | linear-gradient(90deg, {wof.sector.secondary.start} 0%, {wof.sector.secondary.end} 100%) | linear-gradient(90deg, #F7FFC3 0%, #3DA94A 100%) |  |
| `wof.sector.tertiary.bg` | color | linear-gradient(90deg, {wof.sector.tertiary.start} 0%, {wof.sector.tertiary.end} 100%) | linear-gradient(90deg, #FDE6FF 0%, #BB6AFA 100%) |  |

## wom

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `wom.pointer.arrow.gradient` | color | linear-gradient(90deg, {wom.pointer.arrow.start} 16%, {wom.pointer.arrow.end} 100%) | linear-gradient(90deg, #FFC700 16%, #F7A604 100%) |  |
| `wom.pointer.btn.bg.primary` | color | linear-gradient(0deg, #B55046 0%, {product2} 100%) | linear-gradient(0deg, #B55046 0%, #F40084 100%) |  |
| `wom.pointer.btn.bg.secondary` | color | linear-gradient(0deg, #41668C 0%, {product1} 100%) | linear-gradient(0deg, #41668C 0%, #1D70E2 100%) |  |
| `wom.pointer.circle` | color | linear-gradient(0deg, #F7A704 0%, {warning} 100%) | linear-gradient(0deg, #F7A704 0%, #FFC700 100%) |  |
| `wom.sector.border.gradient` | color | {gradient.accent1} | linear-gradient(90deg, rgba(#1D70E2, 0) 16%, rgba(#1D70E2, 0.25) 100%) |  |
| `wom.sector.shape.bg` | color | linear-gradient(135deg, {wom.sector.shape.start} 0%, {wom.sector.shape.end} 100%) | linear-gradient(135deg, #FFD9B1 0%, #FFF9D8 100%) |  |
