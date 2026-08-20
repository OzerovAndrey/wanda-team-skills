# Light / component / product

Джерело: `light/component/product.json` (Token Studio export). Автозгенеровано з JSON —
не редагувати вручну, а перегенерувати скриптом при новому експорті.

Колонки: **Raw** — значення як записано в цьому сеті (alias `{...}` або
літерал). **Resolved** — фінальне значення після проходу по стеку сетів
light/core → light/map → light/alias → light/styles → light/component/general → light/component/product → light/component/widget → light/component/betting (порядок з `$themes.json`/`$metadata.json`); порожньо, якщо Raw уже
літерал.


## accordion

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `accordion.block.bg` | color | {fill.default} | #798086 |  |
| `accordion.block.borderRadius` | borderRadius | {borderRadius.md} | 8 |  |
| `accordion.block.outline.borderRadius` | borderRadius | {accordion.block.borderRadius} + 1 | 8 + 1 |  |
| `accordion.block.paddingH.lg` | spacing | {accordion.block.paddingH.xl} | 24 |  |
| `accordion.block.paddingH.md` | spacing | 20 |  |  |
| `accordion.block.paddingH.sm` | spacing | 16 |  |  |
| `accordion.block.paddingH.xl` | spacing | 24 |  |  |
| `accordion.block.paddingV.lg` | spacing | {accordion.block.paddingV.xl} | 24 |  |
| `accordion.block.paddingV.md` | spacing | 16 |  |  |
| `accordion.block.paddingV.sm` | spacing | 16 |  |  |
| `accordion.block.paddingV.xl` | spacing | 24 |  |  |
| `accordion.color.active` | color | {accordion.color.default} | #2C2C2C |  |
| `accordion.color.default` | color | {tt.primary} | #2C2C2C |  |
| `accordion.color.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `accordion.color.focus` | color | {accordion.color.default} | #2C2C2C |  |
| `accordion.color.hover` | color | {accordion.color.default} | #2C2C2C |  |
| `accordion.gapH` | spacing | 12 |  |  |
| `accordion.gapV` | spacing | 8 |  |  |
| `accordion.image.borderRadius` | borderRadius | {borderRadius.md} | 8 |  |
| `accordion.image.maxWidth` | sizing | 328 |  |  |
| `accordion.outline.borderRadius` | borderRadius | {borderRadius.md} | 8 |  |
| `accordion.outline.borderWidth` | borderWidth | {borderWidth.outline.md} | 4 |  |
| `accordion.outline.color` | color | {outline.default} | #F40084 |  |
| `accordion.underline.active` | color | {accordion.underline.default} | #2C2C2C |  |
| `accordion.underline.default` | color | {tt.secondary} | #2C2C2C |  |
| `accordion.underline.disabled` | color | {accordion.color.disabled} | #2C2C2C |  |
| `accordion.underline.focus` | color | {accordion.underline.default} | #2C2C2C |  |
| `accordion.underline.hover` | color | {accordion.underline.default} | #2C2C2C |  |

## achievement

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `achievement.chain.gap` | spacing | 8 |  |  |
| `achievement.chain.paddingB` | spacing | 8 |  |  |
| `achievement.chain.paddingH` | spacing | 8 |  |  |
| `achievement.chain.paddingT` | spacing | 8 |  |  |

## actionBar

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `actionBar.btnMaxWidth` | sizing | 240 |  |  |
| `actionBar.gap` | spacing | 12 |  |  |

## announcer

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `announcer.bg` | color | {bg.popup.default} | #798086 |  |
| `announcer.color` | color | {tt.primary} | #2C2C2C |  |
| `announcer.content.gap.md` | spacing | 16 |  |  |
| `announcer.content.gap.sm` | spacing | 8 |  |  |
| `announcer.content.maxWidth` | sizing | 1224 |  |  |
| `announcer.gap` | spacing | 8 |  |  |
| `announcer.iconSize.md` | sizing | {icon.lg} | 24 |  |
| `announcer.iconSize.sm` | sizing | {icon.md} | 20 |  |
| `announcer.image.borderRadius` | borderRadius | {borderRadius.sm} | 8 / 2 |  |
| `announcer.image.height.md` | sizing | 36 |  |  |
| `announcer.image.height.sm` | sizing | 32 |  |  |
| `announcer.paddingH.md` | spacing | 12 |  |  |
| `announcer.paddingH.sm` | spacing | 8 |  |  |
| `announcer.paddingV.md` | spacing | 8 |  |  |
| `announcer.paddingV.sm` | spacing | 4 |  |  |

## appsBadge

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `appsBadge.bg` | color | {white} | #FFFFFF |  |
| `appsBadge.borderRadius` | borderRadius | 8 |  |  |
| `appsBadge.borderWidth` | borderWidth | 1 |  |  |
| `appsBadge.br` | color | {black} | #000000 |  |
| `appsBadge.color` | color | {black} | #000000 |  |
| `appsBadge.gap` | spacing | 8 |  |  |
| `appsBadge.paddingL` | spacing | 12 |  |  |
| `appsBadge.size` | sizing | 40 |  |  |

## award

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `award.color` | color | {tone.bg.vibrant} | #1D70E2 | ⚙alpha 0.64 (hsl) |
| `award.size.md` | sizing | 32 |  |  |
| `award.size.sm` | sizing | 24 |  |  |

## banner

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `banner.auth.borderRadius` | borderRadius | {borderRadius.lg} | 8 * 2 |  |
| `banner.auth.description` | color | {tt.secondary} | #2C2C2C |  |
| `banner.auth.front.height` | sizing | 108 |  |  |
| `banner.auth.gap` | spacing | 4 |  |  |
| `banner.auth.overline` | color | {tt.primary} | #2C2C2C |  |
| `banner.auth.paddingL` | spacing | 12 |  |  |
| `banner.auth.paddingR` | spacing | 124 |  |  |
| `banner.auth.paddingV` | spacing | 12 |  |  |
| `banner.auth.title` | color | {tt.primary} | #2C2C2C |  |
| `banner.borderRadius` | borderRadius | 8 |  |  |
| `banner.borderWidth` | borderWidth | 2 |  |  |
| `banner.br.default` | color | transparent |  |  |
| `banner.card.caption` | color | {tt.accent1} | #1D70E2 | ⚙lighten 0.7 (hsl) |
| `banner.card.corner.default` | color | transparent |  |  |
| `banner.card.gap.md` | spacing | 4 |  |  |
| `banner.card.height.md` | sizing | 208 |  |  |
| `banner.card.image` | sizing | 158 |  |  |
| `banner.card.maxWidth.md` | sizing | 600 |  |  |
| `banner.card.paddingH.md` | spacing | 16 |  |  |
| `banner.card.paddingV.md` | spacing | 16 |  |  |
| `banner.card.shift` | spacing | 120 |  |  |
| `banner.card.shiftTitle` | spacing | 80 |  |  |
| `banner.card.title` | color | {tt.white} | #FFFFFF |  |
| `banner.card.width.md` | sizing | 306 |  |  |
| `banner.contentBg` | color | {bg.neutral.primary} | #798086 | ⚙alpha 0.72 (hsl) |
| `banner.coverflow.content.maxWidth.md` | sizing | 400 |  |  |
| `banner.coverflow.gap.xs` | spacing | 12 |  |  |
| `banner.coverflow.node.minWidth.md` | sizing | 504 |  |  |
| `banner.coverflow.paddingH.md` | spacing | 24 |  |  |
| `banner.coverflow.paddingH.xs` | spacing | 16 |  |  |
| `banner.coverflow.paddingV` | spacing | 12 |  |  |
| `banner.overlayColor.end` | color | {toneStep.800} | #798086 | ⚙alpha 0.25 (hsl) |
| `banner.overlayColor.start` | color | {toneStep.800} | #798086 | ⚙alpha 0.85 (hsl) |
| `banner.showcase.back.height.md` | sizing | 264 |  |  |
| `banner.showcase.back.height.xs` | sizing | 248 |  |  |
| `banner.showcase.borderRadius.bottomLeft.md` | borderRadius | {baseBorderRadius} | 8 |  |
| `banner.showcase.borderRadius.bottomLeft.xs` | borderRadius | 0 |  |  |
| `banner.showcase.borderRadius.bottomRight.md` | borderRadius | {baseBorderRadius} | 8 |  |
| `banner.showcase.borderRadius.bottomRight.xs` | borderRadius | 0 |  |  |
| `banner.showcase.borderRadius.topLeft.md` | borderRadius | {baseBorderRadius} | 8 |  |
| `banner.showcase.borderRadius.topLeft.xs` | borderRadius | {baseBorderRadius} | 8 |  |
| `banner.showcase.borderRadius.topRight.md` | borderRadius | {baseBorderRadius} | 8 |  |
| `banner.showcase.borderRadius.topRight.xs` | borderRadius | {baseBorderRadius} | 8 |  |
| `banner.showcase.content.gap.md` | spacing | 16 |  |  |
| `banner.showcase.content.gap.xs` | spacing | 8 |  |  |
| `banner.showcase.content.height.xs` | sizing | 120 |  |  |
| `banner.showcase.content.maxWidth.md` | sizing | 480 |  |  |
| `banner.showcase.content.paddingH.md` | spacing | 24 |  |  |
| `banner.showcase.content.paddingH.xs` | spacing | 16 |  |  |
| `banner.showcase.content.paddingV.md` | spacing | 24 |  |  |
| `banner.showcase.content.paddingV.xs` | spacing | 16 |  |  |
| `banner.showcase.contentBg.end` | color | {tone.bg.neutral} | #798086 | ⚙darken 0.6 (hsl) |
| `banner.showcase.contentBg.start` | color | {tone.bg.neutral} | #798086 | ⚙darken 0.3 (hsl) |
| `banner.showcase.height.md` | sizing | 288 |  |  |
| `banner.showcase.height.xs` | sizing | 272 |  |  |
| `banner.showcase.image.md` | sizing | 288 |  |  |
| `banner.showcase.image.xs` | sizing | 180 |  |  |
| `banner.showcase.paddingH.md` | spacing | 24 |  |  |
| `banner.showcase.paddingH.xs` | spacing | 12 |  |  |
| `banner.showcase.title` | color | {tt.white} | #FFFFFF |  |
| `banner.sidebar.borderRadius` | borderRadius | {borderRadius.lg} | 8 * 2 |  |
| `banner.sidebar.front.height` | sizing | 108 |  |  |
| `banner.sidebar.gap` | spacing | 4 |  |  |
| `banner.sidebar.paddingL` | spacing | 12 |  |  |
| `banner.sidebar.paddingR` | spacing | 124 |  |  |
| `banner.sidebar.paddingV` | spacing | 12 |  |  |

## breadcrumbs

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `breadcrumbs.arrowColor` | color | {tt.quaternary} | #2C2C2C |  |
| `breadcrumbs.arrowSize` | sizing | 16 |  |  |
| `breadcrumbs.bg.hover` | color | {fill.default} | #798086 |  |
| `breadcrumbs.borderRadius` | borderRadius | {breadcrumbs.rounded} | 40 - 16 * 8 / 40 | rounded \|\| circle |
| `breadcrumbs.circle` | other | {breadcrumbs.size} / 2 | 40 - 16 / 2 |  |
| `breadcrumbs.color.default` | color | {tt.tertiary} | #2C2C2C |  |
| `breadcrumbs.color.hover` | color | {breadcrumbs.color.default} | #2C2C2C |  |
| `breadcrumbs.color.selected` | color | {tt.primary} | #2C2C2C |  |
| `breadcrumbs.gap` | spacing | 4 |  |  |
| `breadcrumbs.iconSize` | sizing | {icon.sm} | 16 |  |
| `breadcrumbs.itemGap` | spacing | {breadcrumbs.gap} | 4 |  |
| `breadcrumbs.paddingH` | spacing | 4 |  |  |
| `breadcrumbs.rounded` | other | {breadcrumbs.size} * {borderRadius.md} / {controlSize.md} | 40 - 16 * 8 / 40 |  |
| `breadcrumbs.separatorColor` | color | {tt.quaternary} | #2C2C2C |  |
| `breadcrumbs.size` | sizing | {controlSize.xs} | 40 - 16 |  |

## calendar

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `calendar.badge.borderRadius.lg` | borderRadius | 11 |  |  |
| `calendar.badge.borderRadius.md` | borderRadius | 9 |  |  |
| `calendar.badge.borderWidth` | borderWidth | {borderWidth.default} | 1 |  |
| `calendar.badge.padding.lg` | spacing | 4 |  |  |
| `calendar.badge.padding.md` | spacing | 3 |  |  |
| `calendar.day.color.default` | color | {tt.primary} | #2C2C2C |  |
| `calendar.day.lg` | sizing | {calendar.item.size.lg} | 64 |  |
| `calendar.day.md` | sizing | {calendar.item.size.md} | 40 |  |
| `calendar.gap` | spacing | 8 |  |  |
| `calendar.item.badge.bg.default` | color | {tt.white} | #FFFFFF |  |
| `calendar.item.badge.bg.icon` | color | {tt.tertiary} | #2C2C2C |  |
| `calendar.item.badge.br.default` | color | {br.primary} | #798086 |  |
| `calendar.item.badge.iconSize.lg` | sizing | 14 |  |  |
| `calendar.item.badge.iconSize.md` | sizing | 12 |  |  |
| `calendar.item.borderRadius` | borderRadius | {borderRadius.md} | 8 |  |
| `calendar.item.borderWidth` | borderWidth | {borderWidth.default} | 1 |  |
| `calendar.item.checked.bg` | color | {product1} | #1D70E2 |  |
| `calendar.item.checked.color` | color | {tt.white} | #FFFFFF |  |
| `calendar.item.default.bg.active` | color | {fill.darker} | #798086 |  |
| `calendar.item.default.bg.defalut` | color | {br.primary} | #798086 |  |
| `calendar.item.default.bg.hover` | color | {fill.lighter} | #798086 |  |
| `calendar.item.default.color.active` | color | {tt.primary} | #2C2C2C |  |
| `calendar.item.default.color.default` | color | {tt.primary} | #2C2C2C |  |
| `calendar.item.default.color.focus` | color | {calendar.item.default.color.default} | #2C2C2C |  |
| `calendar.item.default.color.hover` | color | {tt.primary} | #2C2C2C |  |
| `calendar.item.default.color.indicator` | color | {tt.accent1} | #1D70E2 |  |
| `calendar.item.external.bg.active` | color | {fill.darker} | #798086 |  |
| `calendar.item.external.bg.hover` | color | {fill.lighter} | #798086 |  |
| `calendar.item.external.color.active` | color | {tt.quaternary} | #2C2C2C |  |
| `calendar.item.external.color.default` | color | {tt.quaternary} | #2C2C2C |  |
| `calendar.item.external.color.focus` | color | {calendar.item.external.color.default} | #2C2C2C |  |
| `calendar.item.external.color.hover` | color | {tt.quaternary} | #2C2C2C |  |
| `calendar.item.external.color.indicator` | color | {tt.quaternary} | #2C2C2C |  |
| `calendar.item.outline` | color | {outline.default} | #F40084 |  |
| `calendar.item.outlineBorderRadius` | borderRadius | {calendar.item.borderRadius} + 1 | 8 + 1 |  |
| `calendar.item.outlineBorderWidth` | borderWidth | {borderWidth.outline.md} | 4 |  |
| `calendar.item.size.indicatorSize` | sizing | 4 |  |  |
| `calendar.item.size.lg` | sizing | 64 |  |  |
| `calendar.item.size.md` | sizing | 40 |  |  |
| `calendar.item.today.bg.active` | color | {product1} | #1D70E2 | ⚙alpha 0.16 (hsl) |
| `calendar.item.today.bg.default` | color | {product1} | #1D70E2 |  |
| `calendar.item.today.bg.hover` | color | {product1} | #1D70E2 | ⚙alpha 0.12 (hsl) |
| `calendar.item.today.br.active` | color | {calendar.item.today.bg.default} | #1D70E2 |  |
| `calendar.item.today.br.focus` | color | {calendar.item.today.bg.default} | #1D70E2 |  |
| `calendar.item.today.br.hover` | color | {calendar.item.today.bg.default} | #1D70E2 |  |
| `calendar.item.today.color.active` | color | {tt.primary} | #2C2C2C |  |
| `calendar.item.today.color.default` | color | {tt.primary} | #2C2C2C |  |
| `calendar.item.today.color.focus` | color | {calendar.item.today.color.default} | #2C2C2C |  |
| `calendar.item.today.color.hover` | color | {tt.primary} | #2C2C2C |  |
| `calendar.item.today.color.indicator` | color | {tt.accent1} | #1D70E2 |  |
| `calendar.month.color` | color | {tt.primary} | #2C2C2C |  |
| `calendar.month.gap.lg` | spacing | 4 |  |  |
| `calendar.month.gap.md` | spacing | 2 |  |  |
| `calendar.month.icon` | color | {tt.tertiary} | #2C2C2C |  |
| `calendar.month.iconSize` | sizing | 20 |  |  |

## card

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `card.achievement.contentHeight` | sizing | 80 |  |  |
| `card.achievement.image.maxWith` | sizing | 120 |  |  |
| `card.achievement.image.minWith` | sizing | 96 |  |  |
| `card.achievement.paddingH` | spacing | 12 |  |  |
| `card.achievement.paddingV` | spacing | 12 |  |  |
| `card.activity.bg` | color | {header.bg} | #798086 |  |
| `card.activity.default` | opacity | 0.8 |  |  |
| `card.activity.gap.md` | spacing | 12 |  |  |
| `card.activity.gap.sm` | spacing | 8 |  |  |
| `card.activity.height.md` | sizing | 176 |  |  |
| `card.activity.height.sm` | sizing | 84 |  |  |
| `card.activity.icon` | sizing | 80 |  |  |
| `card.activity.overlayColor.end` | color | {header.bg} | #798086 | ⚙alpha 0 (hsl) |
| `card.activity.overlayColor.start` | color | {header.bg} | #798086 |  |
| `card.activity.paddingH.sm` | spacing | 16 |  |  |
| `card.activity.paddingV.md` | spacing | 8 |  |  |
| `card.activity.paddingV.sm` | spacing | 2 |  |  |
| `card.auction.bgProps.end` | color | #222465 |  |  |
| `card.auction.bgProps.start` | color | #4448CB |  |  |
| `card.auction.front.opacity.default` | opacity | 1 |  |  |
| `card.auction.front.opacity.low` | opacity | 0.5 |  |  |
| `card.auction.frontSize` | sizing | 160 |  |  |
| `card.auction.gap` | spacing | 12 |  |  |
| `card.auction.overlayCompletedColor.end` | color | {card.auction.overlayCompletedColor.start} | #2C2E30 | ⚙alpha 0.15 (hsl) |
| `card.auction.overlayCompletedColor.start` | color | #2C2E30 |  | ⚙alpha 0.8 (hsl) |
| `card.auction.overlayDangerColor.end` | color | {card.auction.overlayDangerColor.start} | #FF0000 | ⚙alpha 0 (hsl) |
| `card.auction.overlayDangerColor.start` | color | #FF0000 |  |  |
| `card.auction.overlaySuccesColor.end` | color | {card.auction.overlaySuccesColor.start} | #12A741 | ⚙alpha 0 (hsl) |
| `card.auction.overlaySuccesColor.start` | color | #12A741 |  |  |
| `card.auction.overlayWarningColor.end` | color | {card.auction.overlayWarningColor.start} | #E69100 | ⚙alpha 0 (hsl) |
| `card.auction.overlayWarningColor.start` | color | #E69100 |  |  |
| `card.auction.padding` | spacing | 16 |  |  |
| `card.bg` | color | {bg.neutral.primary} | #798086 |  |
| `card.bonus.basic.front.size.md` | sizing | 120 |  |  |
| `card.bonus.basic.front.size.sm` | sizing | {card.bonus.basic.front.size.md} | 120 |  |
| `card.bonus.basic.gap` | spacing | 8 |  |  |
| `card.bonus.basic.minHeight.lg` | sizing | 320 |  |  |
| `card.bonus.basic.minHeight.md` | sizing | 194 |  |  |
| `card.bonus.basic.minWidth` | sizing | 312 |  |  |
| `card.bonus.basic.paddingB` | spacing | {card.bonus.basic.paddingH} | 16 |  |
| `card.bonus.basic.paddingH` | spacing | 16 |  |  |
| `card.bonus.basic.paddingT` | spacing | 24 |  |  |
| `card.bonus.basic.shiftTitle` | spacing | 40 |  |  |
| `card.bonus.bgProps.end` | color | #222465 |  |  |
| `card.bonus.bgProps.start` | color | #4448CB |  |  |
| `card.bonus.cashier.detailsGap` | spacing | 16 |  |  |
| `card.bonus.cashier.detailsHeight` | sizing | 452 |  |  |
| `card.bonus.cashier.frontSize` | sizing | {card.bonus.basic.front.size.md} | 120 |  |
| `card.bonus.cashier.height` | sizing | 160 |  |  |
| `card.bonus.cashier.minWidth` | sizing | 312 |  |  |
| `card.bonus.cashier.padding` | spacing | 16 |  |  |
| `card.bonus.front.opacity.default` | opacity | 1 |  |  |
| `card.bonus.front.opacity.low` | opacity | 0.15 |  |  |
| `card.bonus.overlayColor.center` | color | {product1Step.1000} | #1D70E2 | ⚙alpha 0.6 (hsl) |
| `card.bonus.overlayColor.end` | color | {card.overlayColor.start} | #1D70E2 | ⚙alpha 0.2 (hsl) |
| `card.bonus.overlayColor.start` | color | {product1Step.1000} | #1D70E2 | ⚙alpha 0.85 (hsl) |
| `card.bonus.welcome.back.opacity.default` | opacity | 1 |  |  |
| `card.bonus.welcome.back.opacity.low` | opacity | 0 |  |  |
| `card.bonus.welcome.bg` | color | #23267F |  |  |
| `card.bonus.welcome.content.opacity.default` | opacity | 1 |  |  |
| `card.bonus.welcome.content.opacity.low` | opacity | 0.5 |  |  |
| `card.bonus.welcome.divider.paddingB` | spacing | 65 |  |  |
| `card.bonus.welcome.ellipse.bordeRadius` | borderRadius | 40 |  |  |
| `card.bonus.welcome.focus.minHeight` | sizing | 184 |  |  |
| `card.bonus.welcome.front.opacity.default` | opacity | 1 |  |  |
| `card.bonus.welcome.front.opacity.low` | opacity | 0.5 |  |  |
| `card.bonus.welcome.frontSize` | sizing | 100 |  |  |
| `card.bonus.welcome.gap` | spacing | 4 |  |  |
| `card.bonus.welcome.minHeight` | sizing | 160 |  |  |
| `card.bonus.welcome.minWidth` | sizing | 288 |  |  |
| `card.bonus.welcome.overlayColor.center` | color | {card.bonus.welcome.bg} | #23267F | ⚙alpha 0.8 (hsl) |
| `card.bonus.welcome.overlayColor.end` | color | {card.bonus.welcome.bg} | #23267F | ⚙alpha 0.2 (hsl) |
| `card.bonus.welcome.overlayColor.start` | color | {card.bonus.welcome.bg} | #23267F |  |
| `card.bonus.welcome.paddingH` | spacing | 16 |  |  |
| `card.bonus.welcome.paddingV` | spacing | 16 |  |  |
| `card.borderRadius` | borderRadius | {borderRadius.lg} | 8 * 2 |  |
| `card.borderWidth` | borderWidth | 0 |  |  |
| `card.br.default` | color | {banner.br.default} | transparent |  |
| `card.daily.front.size` | sizing | 120 |  |  |
| `card.daily.height` | sizing | 184 |  |  |
| `card.daily.paddingH` | spacing | {card.paddingH.sm} | 16 |  |
| `card.daily.paddingV` | spacing | {card.paddingV.sm} | 16 |  |
| `card.daily.shift` | spacing | 112 |  |  |
| `card.daily.shiftTitle` | spacing | 40 |  |  |
| `card.duel.chip.br` | color | #FFC700 |  |  |
| `card.duel.chip.color` | color | {tt.primary} | #2C2C2C |  |
| `card.duel.gap` | spacing | 8 |  |  |
| `card.duel.height` | sizing | 400 |  |  |
| `card.duel.maxWidth` | sizing | 428 |  |  |
| `card.duel.padding` | spacing | 16 |  |  |
| `card.duel.prize.bg` | color | {fill.lighter} | #798086 |  |
| `card.duel.prize.chipList.gap` | spacing | 12 |  |  |
| `card.duel.prize.default.paddingB` | spacing | 8 |  |  |
| `card.duel.prize.default.paddingH` | spacing | 8 |  |  |
| `card.duel.prize.default.paddingT` | spacing | 4 |  |  |
| `card.duel.prize.expand.gap` | spacing | 24 |  |  |
| `card.duel.prize.expand.padding` | spacing | 16 |  |  |
| `card.duel.prize.gap` | spacing | 4 |  |  |
| `card.fab.borderRadius` | borderRadius | {btn.borderRadius.sm} + {card.fab.padding} | 40 - 8 / 2 + 4 |  |
| `card.fab.padding` | spacing | 4 |  |  |
| `card.fader.height.lg` | sizing | {card.paddingV.lg} | 32 |  |
| `card.fader.height.md` | sizing | {card.paddingV.md} | 24 |  |
| `card.fader.height.sm` | sizing | {card.paddingV.sm} | 16 |  |
| `card.fader.height.xs` | sizing | {card.paddingV.xs} | 12 |  |
| `card.freeSpins.minHeight` | sizing | {card.bonus.basic.minHeight.md} | 194 |  |
| `card.freeSpins.overlayColor.center` | color | {card.bonus.overlayColor.center} | #1D70E2 |  |
| `card.freeSpins.overlayColor.end` | color | {card.bonus.overlayColor.end} | #1D70E2 |  |
| `card.freeSpins.overlayColor.start` | color | {card.bonus.overlayColor.start} | #1D70E2 |  |
| `card.freeSpins.paddingB` | spacing | {card.bonus.basic.paddingB} | 16 |  |
| `card.freeSpins.paddingH` | spacing | {card.bonus.basic.paddingH} | 16 |  |
| `card.freeSpins.paddingT` | spacing | {card.bonus.basic.paddingT} | 24 |  |
| `card.gap.lg` | spacing | 24 |  |  |
| `card.gap.md` | spacing | 24 |  |  |
| `card.gap.sm` | spacing | 24 |  |  |
| `card.gap.xs` | spacing | 8 |  |  |
| `card.highlighter.borderRadius` | borderRadius | {card.borderRadius} | 8 * 2 |  |
| `card.highlighter.borderWidth` | borderWidth | {borderWidth.strong} | 1 + 1 |  |
| `card.highlighter.br` | color | {br.accent2} | #F40084 |  |
| `card.jackpot.content.borderRadius` | borderRadius | 12 |  |  |
| `card.jackpot.content.gap` | spacing | 4 |  |  |
| `card.jackpot.frontSize` | sizing | 80 |  |  |
| `card.jackpot.gap` | spacing | 8 |  |  |
| `card.jackpot.padding` | spacing | 12 |  |  |
| `card.lottery.content.gap` | spacing | 8 |  |  |
| `card.lottery.gap` | spacing | 8 |  |  |
| `card.lottery.height` | sizing | {card.tournament.height} | 420 |  |
| `card.lottery.padding` | spacing | 16 |  |  |
| `card.loyalty.giftBlock.gap` | spacing | 12 |  |  |
| `card.loyalty.giftBlock.minHeight` | sizing | 40 |  |  |
| `card.loyalty.image.size` | sizing | 92 |  |  |
| `card.loyalty.opacity.active` | opacity | 1 |  |  |
| `card.loyalty.opacity.blocked` | opacity | 0.5 |  |  |
| `card.mood.action.borderRadius` | borderRadius | {card.mood.action.size} / 2 | 72 / 2 |  |
| `card.mood.action.size` | sizing | 72 |  |  |
| `card.mood.bg.big-win-hunt` | color | {alt1} | #a04bc4 |  |
| `card.mood.bg.new-arrivals` | color | {success} | #0EA45B |  |
| `card.mood.bg.pure-adrenalin` | color | {warning} | #FFC700 |  |
| `card.mood.bg.relaxed-flow` | color | {alt3} | #BD9865 |  |
| `card.mood.bg.surprise-mode` | color | {product1} | #1D70E2 |  |
| `card.mood.bg.tactical-play` | color | {alt2} | #00BCD4 |  |
| `card.mood.gap` | spacing | 16 |  |  |
| `card.mood.image.borderRadius` | borderRadius | {borderRadius.lg} | 8 * 2 |  |
| `card.mood.padding` | spacing | 16 |  |  |
| `card.overlayColor.center` | color | {product1Step.1000} | #1D70E2 | ⚙alpha 0.6 (hsl) |
| `card.overlayColor.end` | color | {card.overlayColor.start} | #1D70E2 | ⚙alpha 0 (hsl) |
| `card.overlayColor.start` | color | {product1Step.1000} | #1D70E2 | ⚙alpha 0.85 (hsl) |
| `card.paddingH.lg` | spacing | 32 |  |  |
| `card.paddingH.md` | spacing | 24 |  |  |
| `card.paddingH.sm` | spacing | 16 |  |  |
| `card.paddingH.xs` | spacing | 12 |  |  |
| `card.paddingV.lg` | spacing | {card.paddingH.lg} | 32 |  |
| `card.paddingV.md` | spacing | {card.paddingH.md} | 24 |  |
| `card.paddingV.sm` | spacing | {card.paddingH.sm} | 16 |  |
| `card.paddingV.xs` | spacing | 12 |  |  |
| `card.popular.betting.bg` | color | #FFD642 |  |  |
| `card.popular.betting.overlayColor.end` | color | #C84402 |  | ⚙alpha 0 (hsl) |
| `card.popular.betting.overlayColor.start` | color | #C84402 |  |  |
| `card.popular.borderRadius` | borderRadius | {borderRadius.md} | 8 |  |
| `card.popular.casino.bg` | color | #00BBFF |  |  |
| `card.popular.casino.overlayColor.end` | color | #0028A1 |  | ⚙alpha 0 (hsl) |
| `card.popular.casino.overlayColor.start` | color | #0028A1 |  |  |
| `card.popular.height.md` | sizing | 64 |  |  |
| `card.popular.height.xs` | sizing | 90 |  |  |
| `card.popular.iconSize.md` | sizing | 88 |  |  |
| `card.popular.iconSize.xs` | sizing | 80 |  |  |
| `card.popular.live.bg` | color | #00E9EC |  |  |
| `card.popular.live.overlayColor.end` | color | #0068DF |  | ⚙alpha 0 (hsl) |
| `card.popular.live.overlayColor.start` | color | #0068DF |  |  |
| `card.popular.paddingB` | spacing | 8 |  |  |
| `card.popular.paddingH.md` | spacing | 16 |  |  |
| `card.popular.paddingH.xs` | spacing | 8 |  |  |
| `card.shadowProps.blur` | number | {shadow.blur.sm} | 3 |  |
| `card.shadowProps.color` | color | {shadow.default} | #000000 |  |
| `card.shadowProps.y` | number | {shadow.y.sm} | 2 |  |
| `card.tournament.game.gap` | spacing | 8 |  |  |
| `card.tournament.gap` | spacing | 8 |  |  |
| `card.tournament.height` | sizing | 420 |  |  |
| `card.tournament.padding` | spacing | 16 |  |  |

## carousel

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `carousel.centered.gap.lg` | spacing | 12 |  |  |
| `carousel.centered.gap.md` | spacing | 8 |  |  |
| `carousel.centered.gap.sm` | spacing | 8 |  |  |
| `carousel.centered.gap.xl` | spacing | 12 |  |  |
| `carousel.centered.gap.xs` | spacing | 8 |  |  |
| `carousel.gap` | spacing | 4 |  |  |

## chip

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `chip.bg.active` | color | {fill.darker} | #798086 |  |
| `chip.bg.default` | color | {tag.default.bg} | #798086 |  |
| `chip.bg.disabled` | color | {fill.disabled.default} | #000000 |  |
| `chip.bg.focus` | color | {chip.bg.default} | #798086 |  |
| `chip.bg.hover` | color | {fill.lighter} | #798086 |  |
| `chip.borderWidth` | borderWidth | {tag.borderWidth} | 1 |  |
| `chip.br.active` | color | {chip.br.default} | #798086 |  |
| `chip.br.default` | color | {tag.default.br} | #798086 |  |
| `chip.br.disabled` | color | {br.disabled.primary} | #000000 |  |
| `chip.br.focus` | color | {chip.br.default} | #798086 |  |
| `chip.br.hover` | color | {chip.br.default} | #798086 |  |
| `chip.checked.bg.active` | color | {product1} | #1D70E2 | ⚙alpha 0.16 (hsl) |
| `chip.checked.bg.default` | color | {product1} | #1D70E2 | ⚙alpha 0.08 (hsl) |
| `chip.checked.bg.focus` | color | {chip.checked.bg.default} | #1D70E2 |  |
| `chip.checked.bg.hover` | color | {product1} | #1D70E2 | ⚙alpha 0.12 (hsl) |
| `chip.checked.br.active` | color | {chip.checked.br.default} | #1D70E2 |  |
| `chip.checked.br.default` | color | {product1} | #1D70E2 |  |
| `chip.checked.br.focus` | color | {chip.checked.br.default} | #1D70E2 |  |
| `chip.checked.br.hover` | color | {chip.checked.br.default} | #1D70E2 |  |
| `chip.checked.close.active` | color | {chip.checked.close.default} | #1D70E2 |  |
| `chip.checked.close.default` | color | {tt.accent1} | #1D70E2 |  |
| `chip.checked.close.focus` | color | {chip.checked.close.default} | #1D70E2 |  |
| `chip.checked.close.hover` | color | {chip.checked.close.default} | #1D70E2 |  |
| `chip.checked.color.active` | color | {chip.checked.color.default} | #2C2C2C |  |
| `chip.checked.color.default` | color | {tag.default.color} | #2C2C2C |  |
| `chip.checked.color.focus` | color | {chip.checked.color.default} | #2C2C2C |  |
| `chip.checked.color.hover` | color | {chip.checked.color.default} | #2C2C2C |  |
| `chip.circle.borderRadius.md` | borderRadius | {tag.circle.borderRadius.md} | 40 - 8 / 2 |  |
| `chip.circle.borderRadius.sm` | borderRadius | {tag.circle.borderRadius.sm} | 40 - 16 / 2 |  |
| `chip.circle.outline.borderRadius.md` | borderRadius | {chip.circle.borderRadius.md} + 1 | 40 - 8 / 2 + 1 |  |
| `chip.circle.outline.borderRadius.sm` | borderRadius | {chip.circle.borderRadius.sm} + 1 | 40 - 16 / 2 + 1 |  |
| `chip.close.active` | color | {chip.close.hover} | #2C2C2C |  |
| `chip.close.default` | color | {tt.tertiary} | #2C2C2C |  |
| `chip.close.focus` | color | {chip.close.default} | #2C2C2C |  |
| `chip.close.hover` | color | {tt.primary} | #2C2C2C |  |
| `chip.color.active` | color | {chip.color.default} | #2C2C2C |  |
| `chip.color.default` | color | {tag.default.color} | #2C2C2C |  |
| `chip.color.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `chip.color.focus` | color | {chip.color.default} | #2C2C2C |  |
| `chip.color.hover` | color | {chip.color.default} | #2C2C2C |  |
| `chip.gap` | spacing | {tag.gap.md} | 4 |  |
| `chip.iconSize.md` | sizing | {tag.iconSize.md} | 20 |  |
| `chip.iconSize.sm` | sizing | {tag.iconSize.sm} | 16 |  |
| `chip.outline.color` | color | {outline.default} | #F40084 |  |
| `chip.outlineBorderWidth.md` | borderWidth | 3 |  |  |
| `chip.outlineBorderWidth.sm` | borderWidth | 2 |  |  |
| `chip.paddingH` | spacing | {tag.paddingH.md} | 12 |  |
| `chip.rounded.borderRadius.md` | borderRadius | {tag.rounded.borderRadius.md} | 8 |  |
| `chip.rounded.borderRadius.sm` | borderRadius | {tag.rounded.borderRadius.sm} | 6 |  |
| `chip.rounded.outline.borderRadius.md` | borderRadius | {chip.rounded.borderRadius.md} + 1 | 8 + 1 |  |
| `chip.rounded.outline.borderRadius.sm` | borderRadius | {chip.rounded.borderRadius.sm} + 1 | 6 + 1 |  |
| `chip.size.md` | sizing | {tag.size.md} | 40 - 8 |  |
| `chip.size.sm` | sizing | {tag.size.sm} | 40 - 16 |  |

## countdown

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `countdown.bg` | color | {fill.vibrant.default} | #1D70E2 |  |
| `countdown.borderRadius` | borderRadius | {borderRadius.md} | 8 |  |
| `countdown.digit.primary` | color | {tt.primary} | #2C2C2C |  |
| `countdown.digit.secondary` | color | {tt.secondary} | #2C2C2C |  |
| `countdown.gap.lg` | spacing | 8 |  |  |
| `countdown.gap.md` | spacing | {countdown.gap.lg} | 8 |  |
| `countdown.gap.sm` | spacing | 4 |  |  |
| `countdown.gap.xs` | spacing | {countdown.gap.sm} | 4 |  |
| `countdown.height.lg` | sizing | 64 |  |  |
| `countdown.height.md` | sizing | 48 |  |  |
| `countdown.height.sm` | sizing | 32 |  |  |
| `countdown.height.xs` | sizing | 24 |  |  |
| `countdown.label` | color | {tt.primary} | #2C2C2C |  |
| `countdown.textual.size.md` | sizing | 24 |  |  |
| `countdown.textual.size.sm` | sizing | 24 |  |  |
| `countdown.unit.primary` | color | {countdown.digit.primary} | #2C2C2C |  |
| `countdown.unit.secondary` | color | {countdown.digit.secondary} | #2C2C2C |  |
| `countdown.unit.tertiary` | color | {tt.tertiary} | #2C2C2C |  |
| `countdown.v2.bg` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.2 (hsl) |
| `countdown.v2.borderRadius` | borderRadius | {borderRadius.sm} | 8 / 2 |  |
| `countdown.v2.digit.primary` | color | {tt.primary} | #2C2C2C |  |
| `countdown.v2.digit.secondary` | color | {tt.secondary} | #2C2C2C |  |
| `countdown.v2.gap.primary` | spacing | 4 |  |  |
| `countdown.v2.gap.secondary` | spacing | 2 |  |  |
| `countdown.v2.label.primary` | color | {tt.primary} | #2C2C2C |  |
| `countdown.v2.label.secondary` | color | {tt.secondary} | #2C2C2C |  |
| `countdown.v2.textual.size.md` | sizing | 24 |  |  |
| `countdown.v2.textual.size.sm` | sizing | 24 |  |  |
| `countdown.v2.unit.primary` | color | {countdown.digit.primary} | #2C2C2C |  |
| `countdown.v2.unit.secondary` | color | {countdown.digit.secondary} | #2C2C2C |  |
| `countdown.v2.unit.tertiary` | color | {tt.tertiary} | #2C2C2C |  |
| `countdown.v2.width.lg` | sizing | 40 |  |  |
| `countdown.v2.width.md` | sizing | 36 |  |  |
| `countdown.v2.width.sm` | sizing | 32 |  |  |
| `countdown.v2.width.xs` | sizing | 28 |  |  |
| `countdown.width.lg` | sizing | {countdown.height.lg} | 64 |  |
| `countdown.width.md` | sizing | {countdown.height.md} | 48 |  |
| `countdown.width.sm` | sizing | {countdown.height.sm} | 32 |  |
| `countdown.width.xs` | sizing | 32 |  |  |

## daily

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `daily.itemTrack.default` | color | transparent |  |  |
| `daily.itemTrack.select` | color | {bg.glass.dark} | #000000 |  |

## divider

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `divider.borderWidth` | borderWidth | {borderWidth.default} | 1 |  |
| `divider.br` | color | {br.primary} | #798086 |  |
| `divider.color` | color | {tt.tertiary} | #2C2C2C |  |
| `divider.gapH` | spacing | 12 |  |  |
| `divider.gapV` | spacing | 8 |  |  |
| `divider.minSize` | sizing | {divider.borderWidth} | 1 |  |

## drawer

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `drawer.bg` | color | {bg.popup.default} | #798086 |  |
| `drawer.borderRadius` | borderRadius | {card.borderRadius} | 8 * 2 |  |
| `drawer.close.borderRadius` | borderRadius | {btn.borderRadius.md} + {drawer.close.padding} | 40 / 2 + 4 |  |
| `drawer.close.padding` | spacing | 4 |  |  |
| `drawer.description` | color | {tt.secondary} | #2C2C2C |  |
| `drawer.gap` | spacing | 24 |  |  |
| `drawer.header.gap` | spacing | 8 |  |  |
| `drawer.icon.color` | color | {tt.accent1} | #1D70E2 |  |
| `drawer.icon.size` | sizing | {icon.lg} | 24 |  |
| `drawer.image.borderRadius` | borderRadius | {modal.image.borderRadius} | 8 |  |
| `drawer.image.height` | sizing | {modal.image.height} | 160 |  |
| `drawer.mask` | color | {mask} | #000000 |  |
| `drawer.maxSize.md` | sizing | 640 |  |  |
| `drawer.maxSize.sm` | sizing | 400 |  |  |
| `drawer.offset` | spacing | 16 |  |  |
| `drawer.padding` | spacing | {modal.paddingH} | 16 |  |
| `drawer.swapIndicator.borderRadius` | borderRadius | {drawer.swapIndicator.thickness} / 2 | 6 / 2 |  |
| `drawer.swapIndicator.color` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.24 (hsl) |
| `drawer.swapIndicator.length` | sizing | 64 |  |  |
| `drawer.swapIndicator.padding` | spacing | 12 |  |  |
| `drawer.swapIndicator.size` | sizing | {controlSize.md} | 40 |  |
| `drawer.swapIndicator.thickness` | sizing | 6 |  |  |
| `drawer.tiitle.shift` | sizing | 32 |  |  |
| `drawer.title` | color | {tt.primary} | #2C2C2C |  |

## empty

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `empty.description` | color | {tt.tertiary} | #2C2C2C |  |
| `empty.gap` | spacing | 16 |  |  |
| `empty.icon` | color | {tt.quaternary} | #2C2C2C |  |
| `empty.iconSize` | sizing | 56 |  |  |
| `empty.imageBorderRadius` | borderRadius | {borderRadius.md} | 8 |  |
| `empty.maxWidth` | sizing | 600 |  |  |
| `empty.textGap` | spacing | 8 |  |  |
| `empty.title` | color | {tt.primary} | #2C2C2C |  |

## fader

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `fader.end.primary` | color | {bg.neutral.primary} | #798086 | ⚙alpha 0 (hsl) |
| `fader.end.quaternary` | color | {bg.neutral.quaternary} | #798086 | ⚙alpha 0 (hsl) |
| `fader.end.secondary` | color | {bg.neutral.secondary} | #798086 | ⚙alpha 0 (hsl) |
| `fader.end.tertiary` | color | {bg.neutral.tertiary} | #798086 | ⚙alpha 0 (hsl) |
| `fader.start.primary` | color | {bg.neutral.primary} | #798086 |  |
| `fader.start.quaternary` | color | {bg.neutral.quaternary} | #798086 |  |
| `fader.start.secondary` | color | {bg.neutral.secondary} | #798086 |  |
| `fader.start.tertiary` | color | {bg.neutral.tertiary} | #798086 |  |

## footer

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `footer.bg` | color | {header.bg} | #798086 |  |
| `footer.containerWidth.lg` | sizing | {layout.containerWidth.lg} | 1128 + 2 * 36 |  |
| `footer.containerWidth.xl` | sizing | {layout.containerWidth.xl} | 1224 + 2 * 36 |  |
| `footer.paddingH.lg` | spacing | {layout.paddingH.lg} | 36 |  |
| `footer.paddingH.md` | spacing | {layout.paddingH.md} | 40 |  |
| `footer.paddingH.sm` | spacing | {layout.paddingH.sm} | 40 |  |
| `footer.paddingH.xl` | spacing | {layout.paddingH.xl} | 36 |  |
| `footer.paddingH.xs` | spacing | {layout.paddingH.xs} | 16 |  |
| `footer.paddingV.lg` | spacing | 48 |  |  |
| `footer.paddingV.md` | spacing | 48 |  |  |
| `footer.paddingV.sm` | spacing | 48 |  |  |
| `footer.paddingV.xl` | spacing | 48 |  |  |
| `footer.paddingV.xs` | spacing | 48 |  |  |
| `footer.plate.height` | sizing | 54 |  |  |
| `footer.plate.logoSize.height` | sizing | 44 |  |  |
| `footer.plate.width` | sizing | 104 |  |  |

## gameMode

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `gameMode.duel` | color | {product2} | #F40084 | ⚙lighten 0.7 (hsl) |
| `gameMode.tournament` | color | {success} | #0EA45B | ⚙lighten 0.7 (hsl) |

## header

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `header.balance.arrowSize` | sizing | {icon.sm} | 16 |  |
| `header.balance.bg` | color | {header.bg} | #798086 | ⚙darken 0.35 (hsl) |
| `header.balance.borderRadius` | borderRadius | {btn.borderRadius.md} | 40 / 2 |  |
| `header.balance.color` | color | {tt.primary} | #2C2C2C |  |
| `header.balance.currencySize` | sizing | {icon.xxs} | 12 |  |
| `header.balance.gap` | spacing | 0 |  |  |
| `header.balance.paddingL` | spacing | 12 |  |  |
| `header.balance.paddingR` | spacing | 4 |  |  |
| `header.balanceDetails.gap` | spacing | 12 |  |  |
| `header.balanceDetails.gapList` | spacing | 8 |  |  |
| `header.balanceDetails.padding` | spacing | 12 |  |  |
| `header.balanceDetails.wager.gap` | spacing | 4 |  |  |
| `header.balanceDetails.wager.paddingH` | spacing | 12 |  |  |
| `header.balanceDetails.wager.paddingV` | spacing | 8 |  |  |
| `header.bg` | color | {bg.neutral.primary} | #798086 |  |
| `header.game.gapRightBlock` | spacing | 8 |  |  |
| `header.game.paddingL.lg` | spacing | {header.paddingRight.lg} | 20 |  |
| `header.game.paddingL.md` | spacing | {header.paddingRight.md} | 20 |  |
| `header.game.paddingL.sm` | spacing | {header.paddingRight.sm} | 12 |  |
| `header.game.paddingL.xl` | spacing | {header.paddingRight.xl} | 20 |  |
| `header.game.paddingL.xs` | spacing | {header.paddingRight.xs} | 12 |  |
| `header.game.paddingR.lg` | spacing | {header.paddingLeft.lg} | 20 |  |
| `header.game.paddingR.md` | spacing | {header.paddingLeft.md} | 20 |  |
| `header.game.paddingR.sm` | spacing | {header.paddingLeft.sm} | 12 |  |
| `header.game.paddingR.xl` | spacing | {header.paddingLeft.xl} | 20 |  |
| `header.game.paddingR.xs` | spacing | {header.paddingLeft.xs} | 4 |  |
| `header.gapBetweenBtnLogo.lg` | spacing | 24 |  |  |
| `header.gapBetweenBtnLogo.md` | spacing | 16 |  |  |
| `header.gapBetweenBtnLogo.sm` | spacing | 12 |  |  |
| `header.gapBetweenBtnLogo.xl` | spacing | 24 |  |  |
| `header.gapBetweenBtnLogo.xs` | spacing | 0 |  |  |
| `header.gapRightBlock.lg` | spacing | 16 |  |  |
| `header.gapRightBlock.md` | spacing | 16 |  |  |
| `header.gapRightBlock.sm` | spacing | 12 |  |  |
| `header.gapRightBlock.xl` | spacing | 16 |  |  |
| `header.gapRightBlock.xs` | spacing | 2 |  |  |
| `header.languageSelect.bg.active` | color | {btn.text.bg.active} | #798086 |  |
| `header.languageSelect.bg.default` | color | {btn.text.bg.default} | transparent |  |
| `header.languageSelect.bg.focus` | color | {btn.text.bg.focus} | transparent |  |
| `header.languageSelect.bg.hover` | color | {btn.text.bg.hover} | #798086 |  |
| `header.languageSelect.borderRadius` | borderRadius | {btn.borderRadius.md} | 40 / 2 |  |
| `header.languageSelect.color.active` | color | {header.languageSelect.color.default} | #2C2C2C |  |
| `header.languageSelect.color.default` | color | {btn.text.color.default} | #2C2C2C |  |
| `header.languageSelect.color.hover` | color | {header.languageSelect.color.default} | #2C2C2C |  |
| `header.languageSelect.color.pressed` | color | {header.languageSelect.color.default} | #2C2C2C |  |
| `header.languageSelect.outline.borderColor` | color | {outline.default} | #F40084 |  |
| `header.languageSelect.outline.borderRadius` | borderRadius | {header.languageSelect.borderRadius} + 1 | 40 / 2 + 1 |  |
| `header.languageSelect.outline.borderWidth` | borderWidth | {borderWidth.outline.md} | 4 |  |
| `header.languageSelect.size` | sizing | {btn.size.md} | 40 |  |
| `header.modeSelect.arrowSize` | sizing | {icon.sm} | 16 |  |
| `header.modeSelect.bg.active` | color | {btn.text.bg.active} | #798086 |  |
| `header.modeSelect.bg.default` | color | {btn.text.bg.default} | transparent |  |
| `header.modeSelect.bg.focus` | color | {btn.text.bg.focus} | transparent |  |
| `header.modeSelect.bg.hover` | color | {btn.text.bg.hover} | #798086 |  |
| `header.modeSelect.borderRadius` | borderRadius | {btn.borderRadius.md} | 40 / 2 |  |
| `header.modeSelect.color.active` | color | {header.modeSelect.color.default} | #2C2C2C |  |
| `header.modeSelect.color.default` | color | {btn.text.color.default} | #2C2C2C |  |
| `header.modeSelect.color.focus` | color | {header.modeSelect.color.default} | #2C2C2C |  |
| `header.modeSelect.color.hover` | color | {header.modeSelect.color.default} | #2C2C2C |  |
| `header.modeSelect.height` | sizing | {btn.size.md} | 40 |  |
| `header.modeSelect.iconSize` | sizing | {btn.iconSize.md} | 20 |  |
| `header.modeSelect.outline.borderColor` | color | {outline.default} | #F40084 |  |
| `header.modeSelect.outline.borderRadius` | borderRadius | {header.modeSelect.borderRadius} + 1 | 40 / 2 + 1 |  |
| `header.modeSelect.outline.borderWidth` | borderWidth | {borderWidth.outline.md} | 4 |  |
| `header.modeSelect.paddingH` | spacing | 12 |  |  |
| `header.paddingH.lg` | spacing | 20 |  |  |
| `header.paddingH.md` | spacing | 20 |  |  |
| `header.paddingH.sm` | spacing | 12 |  |  |
| `header.paddingH.xl` | spacing | 20 |  |  |
| `header.paddingH.xs` | spacing | 12 |  |  |
| `header.paddingLeft.lg` | spacing | 20 |  |  |
| `header.paddingLeft.md` | spacing | 20 |  |  |
| `header.paddingLeft.sm` | spacing | 12 |  |  |
| `header.paddingLeft.xl` | spacing | 20 |  |  |
| `header.paddingLeft.xs` | spacing | 4 |  |  |
| `header.paddingRight.lg` | spacing | 20 |  |  |
| `header.paddingRight.md` | spacing | 20 |  |  |
| `header.paddingRight.sm` | spacing | 12 |  |  |
| `header.paddingRight.xl` | spacing | 20 |  |  |
| `header.paddingRight.xs` | spacing | 12 |  |  |
| `header.size.lg` | sizing | 64 |  |  |
| `header.size.md` | sizing | 56 |  |  |
| `header.size.sm` | sizing | {header.size.md} | 56 |  |
| `header.size.xl` | sizing | {header.size.lg} | 64 |  |
| `header.size.xs` | sizing | {header.size.md} | 56 |  |

## heading

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `heading.color` | color | {tt.primary} | #2C2C2C |  |
| `heading.gapBetweenAction.lg` | spacing | {heading.gapBetweenAction.xs} | 8 |  |
| `heading.gapBetweenAction.md` | spacing | {heading.gapBetweenAction.xs} | 8 |  |
| `heading.gapBetweenAction.sm` | spacing | {heading.gapBetweenAction.xs} | 8 |  |
| `heading.gapBetweenAction.xl` | spacing | {heading.gapBetweenAction.xs} | 8 |  |
| `heading.gapBetweenAction.xs` | spacing | 8 |  |  |
| `heading.gapBetweenIcon.lg` | spacing | 4 |  |  |
| `heading.gapBetweenIcon.md` | spacing | 4 |  |  |
| `heading.gapBetweenIcon.sm` | spacing | 4 |  |  |
| `heading.gapBetweenIcon.xl` | spacing | 4 |  |  |
| `heading.gapBetweenIcon.xs` | spacing | 4 |  |  |
| `heading.height.lg` | sizing | 40 |  |  |
| `heading.height.md` | sizing | 32 |  |  |
| `heading.height.sm` | sizing | 32 |  |  |
| `heading.height.xl` | sizing | 40 |  |  |
| `heading.height.xs` | sizing | 32 |  |  |
| `heading.icon.color` | color | {product1} | #1D70E2 |  |
| `heading.icon.lg` | sizing | {icon.xl} | 32 |  |
| `heading.icon.md` | sizing | {icon.lg} | 24 |  |
| `heading.icon.sm` | sizing | {icon.lg} | 24 |  |
| `heading.icon.xl` | sizing | {icon.xl} | 32 |  |
| `heading.icon.xs` | sizing | {icon.lg} | 24 |  |

## hero

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `hero.bg.end` | color | {tt.accent1} | #1D70E2 | ⚙alpha 0 (hsl) |
| `hero.bg.start` | color | {tt.accent1} | #1D70E2 | ⚙alpha 0.6 (hsl) |
| `hero.gap.lg` | spacing | 16 |  |  |
| `hero.gap.md` | spacing | 12 |  |  |
| `hero.gap.sm` | spacing | 12 |  |  |
| `hero.gap.xl` | spacing | 16 |  |  |
| `hero.gap.xs` | spacing | 12 |  |  |
| `hero.paddingB.lg` | spacing | 0 |  |  |
| `hero.paddingB.md` | spacing | 0 |  |  |
| `hero.paddingB.sm` | spacing | 0 |  |  |
| `hero.paddingB.xl` | spacing | 0 |  |  |
| `hero.paddingB.xs` | spacing | 0 |  |  |
| `hero.paddingT.lg` | spacing | {hero.paddingT.xl} | 24 |  |
| `hero.paddingT.md` | spacing | 16 |  |  |
| `hero.paddingT.sm` | spacing | 16 |  |  |
| `hero.paddingT.xl` | spacing | 24 |  |  |
| `hero.paddingT.xs` | spacing | 16 |  |  |
| `hero.trustGap.lg` | spacing | {hero.trustGap.xl} | 24 |  |
| `hero.trustGap.md` | spacing | {hero.trustGap.xl} | 24 |  |
| `hero.trustGap.sm` | spacing | 16 |  |  |
| `hero.trustGap.xl` | spacing | 24 |  |  |
| `hero.trustGap.xs` | spacing | {hero.trustGap.sm} | 16 |  |
| `hero.trustPaddingB.lg` | spacing | {hero.trustPaddingB.xl} | 16 |  |
| `hero.trustPaddingB.md` | spacing | {hero.trustPaddingB.xl} | 16 |  |
| `hero.trustPaddingB.sm` | spacing | 12 |  |  |
| `hero.trustPaddingB.xl` | spacing | 16 |  |  |
| `hero.trustPaddingB.xs` | spacing | 12 |  |  |

## layout

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `layout.bg` | color | {bg.neutral.secondary} | #798086 |  |
| `layout.containerWidth.lg` | sizing | {layout.contentWidth.lg} + 2 * {layout.paddingH.lg} | 1128 + 2 * 36 |  |
| `layout.containerWidth.xl` | sizing | {layout.contentWidth.xl} + 2 * {layout.paddingH.xl} | 1224 + 2 * 36 |  |
| `layout.contentWidth.lg` | sizing | 1128 |  |  |
| `layout.contentWidth.xl` | sizing | 1224 |  |  |
| `layout.gap.primary.lg` | spacing | 24 |  |  |
| `layout.gap.primary.md` | spacing | 16 |  |  |
| `layout.gap.primary.sm` | spacing | 16 |  |  |
| `layout.gap.primary.xl` | spacing | 24 |  |  |
| `layout.gap.primary.xs` | spacing | 16 |  |  |
| `layout.gap.row.lg` | spacing | 8 |  |  |
| `layout.gap.row.md` | spacing | 8 |  |  |
| `layout.gap.row.sm` | spacing | 8 |  |  |
| `layout.gap.row.xl` | spacing | 8 |  |  |
| `layout.gap.row.xs` | spacing | 8 |  |  |
| `layout.gap.secondary.lg` | spacing | 12 |  |  |
| `layout.gap.secondary.md` | spacing | 8 |  |  |
| `layout.gap.secondary.sm` | spacing | 8 |  |  |
| `layout.gap.secondary.xl` | spacing | 12 |  |  |
| `layout.gap.secondary.xs` | spacing | 8 |  |  |
| `layout.main.paddingB.lg` | spacing | {layout.paddingV.md} | 32 |  |
| `layout.main.paddingB.md` | spacing | {layout.paddingV.md} | 32 |  |
| `layout.main.paddingB.sm` | spacing | {layout.paddingV.sm} | 24 |  |
| `layout.main.paddingB.xl` | spacing | {layout.paddingV.md} | 32 |  |
| `layout.main.paddingB.xs` | spacing | {layout.paddingV.xs} | 24 |  |
| `layout.main.paddingT.lg` | spacing | 16 |  |  |
| `layout.main.paddingT.md` | spacing | 16 |  |  |
| `layout.main.paddingT.sm` | spacing | 8 |  |  |
| `layout.main.paddingT.xl` | spacing | 16 |  |  |
| `layout.main.paddingT.xs` | spacing | 4 |  |  |
| `layout.maxWidth.lg` | sizing | {layout.minWidth.xl} - 1 | 1440 - 1 |  |
| `layout.maxWidth.md` | sizing | {layout.minWidth.lg} - 1 | 1280 - 1 |  |
| `layout.maxWidth.sm` | sizing | {layout.minWidth.md} - 1 | 1024 - 1 |  |
| `layout.maxWidth.xs` | sizing | {layout.minWidth.sm} - 1 | 768 - 1 |  |
| `layout.minWidth.lg` | sizing | 1280 |  |  |
| `layout.minWidth.md` | sizing | 1024 |  |  |
| `layout.minWidth.sm` | sizing | 768 |  |  |
| `layout.minWidth.xl` | sizing | 1440 |  |  |
| `layout.minWidth.xs` | sizing | 360 |  |  |
| `layout.paddingH.lg` | spacing | 36 |  |  |
| `layout.paddingH.md` | spacing | 40 |  |  |
| `layout.paddingH.sm` | spacing | 40 |  |  |
| `layout.paddingH.xl` | spacing | 36 |  |  |
| `layout.paddingH.xs` | spacing | 16 |  |  |
| `layout.paddingV.lg` | spacing | 32 |  |  |
| `layout.paddingV.md` | spacing | 32 |  |  |
| `layout.paddingV.sm` | spacing | 24 |  |  |
| `layout.paddingV.xl` | spacing | 32 |  |  |
| `layout.paddingV.xs` | spacing | 24 |  |  |

## loyaltyProgram

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `loyaltyProgram.avatar.br` | color | {white} | #FFFFFF |  |

## menu

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `menu.borderWidth` | borderWidth | {baseBorderWidth} | 1 |  |
| `menu.boxShadow.glow.blur.md` | number | 16 |  |  |
| `menu.boxShadow.glow.y.md` | number | 0 |  |  |
| `menu.gap` | spacing | 6 |  |  |
| `menu.item.bg.active` | color | {tone.bg.vibrant} | #1D70E2 | ⚙alpha 0.4 (hsl) |
| `menu.item.bg.default` | color | {tone.bg.vibrant} | #1D70E2 | ⚙alpha 0.16 (hsl) |
| `menu.item.bg.focus` | color | {menu.item.bg.hover} | #1D70E2 |  |
| `menu.item.bg.hover` | color | {tone.bg.vibrant} | #1D70E2 | ⚙alpha 0.08 (hsl) |
| `menu.item.borderRadius` | borderRadius | {borderRadius.md} | 8 |  |
| `menu.item.br.active` | color | {menu.item.br.default} | transparent |  |
| `menu.item.br.default` | color | transparent |  |  |
| `menu.item.br.disabled` | color | {menu.item.br.default} | transparent |  |
| `menu.item.br.focus` | color | {menu.item.br.default} | transparent |  |
| `menu.item.br.hover` | color | {menu.item.br.default} | transparent |  |
| `menu.item.checked.bg.active` | color | {tone.bg.vibrant} | #1D70E2 | ⚙alpha 0.9 (hsl) |
| `menu.item.checked.bg.default` | color | {tone.bg.vibrant} | #1D70E2 | ⚙alpha 0.6 (hsl) |
| `menu.item.checked.bg.focus` | color | {menu.item.checked.bg.default} | #1D70E2 |  |
| `menu.item.checked.bg.hover` | color | {tone.bg.vibrant} | #1D70E2 | ⚙alpha 0.4 (hsl) |
| `menu.item.checked.br.active` | color | {menu.item.checked.br.default} | transparent |  |
| `menu.item.checked.br.default` | color | transparent |  |  |
| `menu.item.checked.br.focus` | color | {menu.item.checked.br.default} | transparent |  |
| `menu.item.checked.br.hover` | color | {menu.item.checked.br.default} | transparent |  |
| `menu.item.checked.color.active` | color | {menu.item.checked.color.default} | #FFFFFF |  |
| `menu.item.checked.color.default` | color | {tt.white} | #FFFFFF |  |
| `menu.item.checked.color.focus` | color | {menu.item.checked.color.default} | #FFFFFF |  |
| `menu.item.checked.color.hover` | color | {menu.item.checked.color.default} | #FFFFFF |  |
| `menu.item.color.active` | color | {menu.item.color.default} | #2C2C2C |  |
| `menu.item.color.default` | color | {tt.primary} | #2C2C2C |  |
| `menu.item.color.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `menu.item.color.focus` | color | {menu.item.color.default} | #2C2C2C |  |
| `menu.item.color.hover` | color | {menu.item.color.default} | #2C2C2C |  |
| `menu.item.fill.gap` | spacing | 20 |  |  |
| `menu.item.gap` | spacing | 4 |  |  |
| `menu.item.icon.active` | color | {menu.item.icon.default} | #1D70E2 |  |
| `menu.item.icon.default` | color | {tt.accent1} | #1D70E2 |  |
| `menu.item.icon.disabled` | color | {menu.item.color.disabled} | #2C2C2C |  |
| `menu.item.icon.focus` | color | {menu.item.icon.default} | #1D70E2 |  |
| `menu.item.icon.hover` | color | {menu.item.icon.default} | #1D70E2 |  |
| `menu.item.iconSize` | sizing | {icon.xl} | 32 |  |
| `menu.item.outline` | color | {outline.default} | #F40084 |  |
| `menu.item.outlineBorderRadius` | borderRadius | {menu.item.borderRadius} + 1 | 8 + 1 |  |
| `menu.item.outlineBorderWidth` | borderWidth | {borderWidth.outline.md} | 4 |  |
| `menu.item.outlineSize` | sizing | {menu.item.size} + 2 | 58 + 2 |  |
| `menu.item.paddingH` | spacing | 12 |  |  |
| `menu.item.size` | sizing | 58 |  |  |

## modal

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `modal.bg` | color | {bg.popup.default} | #798086 |  |
| `modal.borderRadius` | borderRadius | {borderRadius.lg} | 8 * 2 |  |
| `modal.close.borderRadius` | borderRadius | {btn.borderRadius.sm} + {modal.close.padding} | 40 - 8 / 2 + 4 |  |
| `modal.close.default` | color | {tt.tertiary} | #2C2C2C |  |
| `modal.close.hover` | color | {tt.secondary} | #2C2C2C |  |
| `modal.close.padding` | spacing | 4 |  |  |
| `modal.gap` | spacing | 24 |  |  |
| `modal.header.gap` | spacing | 4 |  |  |
| `modal.icon.color` | color | {tt.accent1} | #1D70E2 |  |
| `modal.icon.size` | sizing | {icon.lg} | 24 |  |
| `modal.image.borderRadius` | borderRadius | {borderRadius.md} | 8 |  |
| `modal.image.height` | sizing | 160 |  |  |
| `modal.marginH` | spacing | 16 |  |  |
| `modal.marginV` | spacing | 48 |  |  |
| `modal.mask` | color | {mask} | #000000 |  |
| `modal.paddingH` | spacing | 16 |  |  |
| `modal.paddingV` | spacing | {modal.paddingH} | 16 |  |
| `modal.size.lg` | sizing | 880 |  |  |
| `modal.size.md` | sizing | 640 |  |  |
| `modal.size.sm` | sizing | 400 |  |  |
| `modal.title.shift` | number | 24 |  |  |

## navigator

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `navigator.active` | color | {tt.accent1} | #1D70E2 |  |
| `navigator.dash.gap.md` | spacing | 8 |  |  |
| `navigator.dash.gap.sm` | spacing | 4 |  |  |
| `navigator.dash.height` | sizing | 4 |  |  |
| `navigator.dash.padding` | spacing | {navigator.dash.gap.md} / 2 | 8 / 2 |  |
| `navigator.dash.primary.width.md` | sizing | 48 |  |  |
| `navigator.dash.primary.width.sm` | sizing | 16 |  |  |
| `navigator.dash.secondary.width.md` | sizing | 16 |  |  |
| `navigator.dash.secondary.width.sm` | sizing | 8 |  |  |
| `navigator.dash.tertiary.width.md` | sizing | 8 |  |  |
| `navigator.dash.tertiary.width.sm` | sizing | 4 |  |  |
| `navigator.dash.width.md` | sizing | 184 |  |  |
| `navigator.dash.width.sm` | sizing | 56 |  |  |
| `navigator.default` | color | {tone.bg.vibrant} | #1D70E2 | ⚙alpha 0.25 (hsl) |
| `navigator.dot.gap.md` | spacing | 10 |  |  |
| `navigator.dot.gap.sm` | spacing | 4 |  |  |
| `navigator.dot.padding` | spacing | {navigator.dot.gap.md} / 2 | 10 / 2 |  |
| `navigator.dot.primary.size.md` | sizing | 8 |  |  |
| `navigator.dot.primary.size.sm` | sizing | 4 |  |  |
| `navigator.dot.secondary.size.md` | sizing | 6 |  |  |
| `navigator.dot.secondary.size.sm` | sizing | 4 |  |  |
| `navigator.dot.tertiary.size.md` | sizing | 4 |  |  |
| `navigator.dot.tertiary.size.sm` | sizing | 3 |  |  |
| `navigator.dot.width.md` | sizing | 126 |  |  |
| `navigator.dot.width.sm` | sizing | 34 |  |  |
| `navigator.gap` | spacing | 16 |  |  |

## notification

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `notification.edge.backgroundBlur` | number | 20 |  |  |
| `notification.edge.bg` | color | {white} | #FFFFFF | ⚙alpha 0.32 (hsl) |
| `notification.gap` | spacing | 16 |  |  |
| `notification.global.bg` | color | {bg.popup.strong} | #798086 |  |
| `notification.global.borderRadius` | borderRadius | {borderRadius.lg} | 8 * 2 |  |
| `notification.global.iconSize` | sizing | {icon.xl} | 32 |  |
| `notification.global.image.borderRadius` | borderRadius | {borderRadius.md} | 8 |  |
| `notification.global.image.size` | sizing | 40 |  |  |
| `notification.global.maxWidth` | sizing | 400 |  |  |
| `notification.global.minWidth` | sizing | 280 |  |  |
| `notification.indicator.danger.bg` | color | {danger} | #D83232 |  |
| `notification.indicator.danger.br` | color | {danger} | #D83232 | ⚙alpha 0.3 (hsl) |
| `notification.indicator.danger.color` | color | {tt.white} | #FFFFFF |  |
| `notification.indicator.iconSize` | sizing | {icon.lg} | 24 |  |
| `notification.indicator.info.bg` | color | {info} | #1D70E2 |  |
| `notification.indicator.info.br` | color | {info} | #1D70E2 | ⚙alpha 0.3 (hsl) |
| `notification.indicator.info.color` | color | {tt.white} | #FFFFFF |  |
| `notification.indicator.size` | sizing | 32 |  |  |
| `notification.indicator.success.bg` | color | {success} | #0EA45B |  |
| `notification.indicator.success.br` | color | {success} | #0EA45B | ⚙alpha 0.3 (hsl) |
| `notification.indicator.success.color` | color | {tt.white} | #FFFFFF |  |
| `notification.indicator.warning.bg` | color | {warning} | #FFC700 |  |
| `notification.indicator.warning.br` | color | {warning} | #FFC700 | ⚙alpha 0.35 (hsl) |
| `notification.indicator.warning.color` | color | {tt.primary} | #2C2C2C |  |
| `notification.item.gap` | spacing | 12 |  |  |
| `notification.item.paddingL` | spacing | 16 |  |  |
| `notification.item.paddingR` | spacing | 44 |  |  |
| `notification.item.paddingV` | spacing | {notification.item.paddingL} | 16 |  |
| `notification.local.bg` | color | {bg.glass.light} | #FFFFFF |  |
| `notification.local.borderRadius` | borderRadius | {borderRadius.lg} | 8 * 2 |  |
| `notification.local.countdown` | color | {tt.tertiary} | #2C2C2C |  |
| `notification.local.gap` | spacing | 16 |  |  |
| `notification.local.padding` | spacing | 16 |  |  |
| `notification.local.titleShift` | spacing | 48 |  |  |
| `notification.marginB` | spacing | 28 |  |  |
| `notification.marginH` | spacing | 8 |  |  |
| `notification.marginT` | spacing | 64 |  |  |
| `notification.message` | color | {tt.secondary} | #2C2C2C |  |
| `notification.progressBorderWidth` | borderWidth | 4 |  |  |
| `notification.title` | color | {tt.primary} | #2C2C2C |  |

## paginator

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `paginator.color` | color | {tt.primary} | #2C2C2C |  |
| `paginator.gap` | spacing | 8 |  |  |
| `paginator.gapItem.color` | color | {paginator.item.default.color.disabled} | #2C2C2C |  |
| `paginator.item.borderRadius` | borderRadius | {paginator.item.size} / 2 | 40 / 2 |  |
| `paginator.item.borderRadiusOutline` | borderRadius | {paginator.item.borderRadius} + 1 | 40 / 2 + 1 |  |
| `paginator.item.checked.bg.active` | color | {paginator.item.checked.bg.default} | #1D70E2 | ⚙darken 0.2 (hsl) |
| `paginator.item.checked.bg.default` | color | {product1} | #1D70E2 |  |
| `paginator.item.checked.bg.disabled` | color | {paginator.item.checked.bg.default} | #1D70E2 | ⚙alpha 0.25 (hsl) |
| `paginator.item.checked.bg.focus` | color | {paginator.item.checked.bg.default} | #1D70E2 |  |
| `paginator.item.checked.bg.hover` | color | {paginator.item.checked.bg.default} | #1D70E2 | ⚙lighten 0.12 (hsl) |
| `paginator.item.checked.color.active` | color | {paginator.item.checked.color.default} | #FFFFFF |  |
| `paginator.item.checked.color.default` | color | {tt.white} | #FFFFFF |  |
| `paginator.item.checked.color.disabled` | color | {paginator.item.checked.color.default} | #FFFFFF |  |
| `paginator.item.checked.color.focus` | color | {paginator.item.checked.color.default} | #FFFFFF |  |
| `paginator.item.checked.color.hover` | color | {paginator.item.checked.color.default} | #FFFFFF |  |
| `paginator.item.default.bg.active` | color | {fill.darker} | #798086 |  |
| `paginator.item.default.bg.hover` | color | {fill.default} | #798086 |  |
| `paginator.item.default.color.active` | color | {paginator.item.default.color.hover} | #2C2C2C |  |
| `paginator.item.default.color.default` | color | {tt.secondary} | #2C2C2C |  |
| `paginator.item.default.color.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `paginator.item.default.color.focus` | color | {paginator.item.default.color.default} | #2C2C2C |  |
| `paginator.item.default.color.hover` | color | {tt.primary} | #2C2C2C |  |
| `paginator.item.outline` | color | {outline.default} | #F40084 |  |
| `paginator.item.outlineBorderWidth` | borderWidth | {borderWidth.outline.md} | 4 |  |
| `paginator.item.outlineSize` | sizing | {paginator.item.size} + 2 | 40 + 2 |  |
| `paginator.item.size` | sizing | {btn.size.md} | 40 |  |

## progress

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `progress.boxShadow.indicator.darkEdge.blur.md` | number | 2 |  |  |
| `progress.boxShadow.indicator.darkEdge.color.default` | color | {white} | #FFFFFF | ⚙alpha 0.25 (hsl) |
| `progress.boxShadow.indicator.darkEdge.color.error` | color | {white} | #FFFFFF | ⚙alpha 0.25 (hsl) |
| `progress.boxShadow.indicator.darkEdge.color.success` | color | {white} | #FFFFFF | ⚙alpha 0.25 (hsl) |
| `progress.boxShadow.indicator.darkEdge.y.md` | number | -2 |  |  |
| `progress.boxShadow.indicator.glow.blur.md` | number | 6 |  |  |
| `progress.boxShadow.indicator.glow.color.default` | color | {success} | #0EA45B | ⚙alpha 0 (hsl) |
| `progress.boxShadow.indicator.glow.color.error` | color | {danger} | #D83232 | ⚙alpha 0 (hsl) |
| `progress.boxShadow.indicator.glow.color.success` | color | {success} | #0EA45B | ⚙alpha 0 (hsl) |
| `progress.boxShadow.indicator.glow.y.md` | number | 0 |  |  |
| `progress.boxShadow.indicator.lightEdge.blur.md` | number | 2 |  |  |
| `progress.boxShadow.indicator.lightEdge.color.default` | color | #fff |  | ⚙alpha 0.8 (hsl) |
| `progress.boxShadow.indicator.lightEdge.color.error` | color | #fff |  | ⚙alpha 0.8 (hsl) |
| `progress.boxShadow.indicator.lightEdge.color.sussess` | color | #fff |  | ⚙alpha 0.8 (hsl) |
| `progress.boxShadow.indicator.lightEdge.y.md` | number | 1 |  |  |
| `progress.boxShadow.track.blur.md` | number | 4 |  |  |
| `progress.boxShadow.track.color` | color | {black} | #000000 | ⚙alpha 0.1 (hsl) |
| `progress.boxShadow.track.y.md` | number | 2 |  |  |
| `progress.circle.borderWidth.lg` | borderWidth | 6 |  |  |
| `progress.circle.borderWidth.md` | borderWidth | 3 |  |  |
| `progress.circle.borderWidth.sm` | borderWidth | 3 |  |  |
| `progress.circle.borderWidth.xl` | borderWidth | 8 |  |  |
| `progress.circle.borderWidth.xs` | borderWidth | 3 |  |  |
| `progress.circle.indicator.default` | color | {success} | #0EA45B |  |
| `progress.circle.indicator.error` | color | {danger} | #D83232 |  |
| `progress.circle.indicator.success` | color | {success} | #0EA45B |  |
| `progress.circle.size.lg` | sizing | 72 |  |  |
| `progress.circle.size.md` | sizing | 48 |  |  |
| `progress.circle.size.sm` | sizing | 40 |  |  |
| `progress.circle.size.xl` | sizing | 108 |  |  |
| `progress.circle.size.xs` | sizing | 16 |  |  |
| `progress.color.default` | color | {tt.primary} | #2C2C2C |  |
| `progress.color.error` | color | {tt.danger} | #D83232 |  |
| `progress.color.success` | color | {tt.success} | #0EA45B |  |
| `progress.extremes.color` | color | {tt.tertiary} | #2C2C2C |  |
| `progress.indicator.end.default` | color | #18AEF4 |  |  |
| `progress.indicator.end.error` | color | {danger} | #D83232 |  |
| `progress.indicator.end.success` | color | {success} | #0EA45B |  |
| `progress.indicator.start.default` | color | {success} | #0EA45B |  |
| `progress.indicator.start.error` | color | {danger} | #D83232 |  |
| `progress.indicator.start.success` | color | {success} | #0EA45B |  |
| `progress.info.color` | color | {tt.quaternary} | #2C2C2C |  |
| `progress.linear.borderRadius.lg` | borderRadius | {progress.linear.lineSize.lg} / 2 | 12 / 2 |  |
| `progress.linear.borderRadius.md` | borderRadius | {progress.linear.lineSize.md} / 2 | 8 / 2 |  |
| `progress.linear.borderRadius.sm` | borderRadius | {progress.linear.lineSize.sm} / 2 | 4 / 2 |  |
| `progress.linear.lineSize.lg` | sizing | 12 |  |  |
| `progress.linear.lineSize.md` | sizing | 8 |  |  |
| `progress.linear.lineSize.sm` | sizing | 4 |  |  |
| `progress.linear.lineSize.xs` | sizing | 3 |  |  |
| `progress.steps.borderRadius.lg` | borderRadius | 4 |  |  |
| `progress.steps.borderRadius.md` | borderRadius | {progress.steps.borderRadius.lg} | 4 |  |
| `progress.steps.borderRadius.sm` | borderRadius | {progress.steps.borderRadius.lg} | 4 |  |
| `progress.steps.borderRadius.xs` | borderRadius | {progress.steps.borderRadius.lg} - 2 | 4 - 2 |  |
| `progress.steps.gapH` | spacing | 4 |  |  |
| `progress.steps.height.lg` | sizing | 24 |  |  |
| `progress.steps.height.md` | sizing | 16 |  |  |
| `progress.steps.height.sm` | sizing | 8 |  |  |
| `progress.steps.height.xs` | sizing | {progress.steps.height.sm} | 8 |  |
| `progress.steps.width.lg` | sizing | {progress.steps.width.md} | 16 |  |
| `progress.steps.width.md` | sizing | 16 |  |  |
| `progress.steps.width.sm` | sizing | {progress.steps.width.md} | 16 |  |
| `progress.steps.width.xs` | sizing | 2 |  |  |
| `progress.track.color` | color | {fill.vibrant.default} | #1D70E2 |  |

## promoWidget

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `promoWidget.accent.animation.bg` | color | {product2} | #F40084 | alpha 0.15 - додається вручну програмістами на анімації |
| `promoWidget.accent.bg.end.active` | color | {product2} | #F40084 | ⚙darken 0.3 (hsl) |
| `promoWidget.accent.bg.end.default` | color | {btn.accent.bg.end.default} | #F40084 |  |
| `promoWidget.accent.bg.end.hover` | color | {product2} | #F40084 | ⚙lighten 0.2 (hsl) |
| `promoWidget.accent.bg.start.active` | color | {product2} | #F40084 |  |
| `promoWidget.accent.bg.start.default` | color | {btn.accent.bg.start.default} | #F40084 |  |
| `promoWidget.accent.bg.start.hover` | color | {product2} | #F40084 | ⚙lighten 0.5 (hsl) |
| `promoWidget.accent.icon.active` | color | {btn.accent.color.active} | #FFFFFF |  |
| `promoWidget.accent.icon.default` | color | {btn.accent.color.default} | #FFFFFF |  |
| `promoWidget.accent.icon.hover` | color | {btn.accent.color.hover} | #FFFFFF |  |
| `promoWidget.borderRadius` | borderRadius | {btn.borderRadius.lg} | 40 + 8 / 2 |  |
| `promoWidget.countdown.bg` | color | {white} | #FFFFFF |  |
| `promoWidget.countdown.borderRadius` | borderRadius | 2 |  |  |
| `promoWidget.iconSize` | sizing | {icon.lg} | 24 |  |
| `promoWidget.imageSize` | sizing | {icon.lg} | 24 |  |
| `promoWidget.primary.animation.bg` | color | {product1} | #1D70E2 | alpha 0.15 - додається вручну програмістами на анімації |
| `promoWidget.primary.bg.end.active` | color | {product1} | #1D70E2 | ⚙darken 0.3 (hsl) |
| `promoWidget.primary.bg.end.default` | color | {btn.primary.bg.end.default} | #1D70E2 |  |
| `promoWidget.primary.bg.end.hover` | color | {product1} | #1D70E2 | ⚙lighten 0.2 (hsl) |
| `promoWidget.primary.bg.start.active` | color | {product1} | #1D70E2 |  |
| `promoWidget.primary.bg.start.default` | color | {btn.primary.bg.start.default} | #1D70E2 |  |
| `promoWidget.primary.bg.start.hover` | color | {product1} | #1D70E2 | ⚙lighten 0.5 (hsl) |
| `promoWidget.primary.icon.active` | color | {btn.primary.color.active} | #FFFFFF |  |
| `promoWidget.primary.icon.default` | color | {btn.primary.color.default} | #FFFFFF |  |
| `promoWidget.primary.icon.hover` | color | {btn.primary.color.hover} | #FFFFFF |  |
| `promoWidget.size` | sizing | {btn.size.lg} | 40 + 8 |  |

## propser

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `propser.gap` | spacing | 8 |  |  |
| `propser.item.color` | color | {tt.primary} | #2C2C2C |  |
| `propser.item.gap` | spacing | 4 |  |  |
| `propser.item.icon.accent1` | color | {tt.accent1} | #1D70E2 |  |
| `propser.item.icon.accent2` | color | {tt.accent2} | #F40084 |  |
| `propser.item.icon.default` | color | {tt.secondary} | #2C2C2C |  |
| `propser.item.iconSize.md` | sizing | {icon.md} | 20 |  |
| `propser.item.iconSize.sm` | sizing | {icon.sm} | 16 |  |
| `propser.splitter` | color | {tt.quaternary} | #2C2C2C |  |

## qdw

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `qdw.bg.end` | color | #1a254a |  |  |
| `qdw.bg.start` | color | #763882 |  |  |
| `qdw.borderRadius` | borderRadius | {banner.borderRadius} | 8 |  |
| `qdw.borderWidth` | borderWidth | 0 |  |  |
| `qdw.br` | color | {banner.br.default} | transparent |  |
| `qdw.caption` | color | {tt.primary} | #2C2C2C |  |
| `qdw.gap.md` | spacing | 4 |  |  |
| `qdw.gapBtn.md` | spacing | 8 |  |  |
| `qdw.height.md` | sizing | {banner.card.height.md} | 208 |  |
| `qdw.image.size` | sizing | 110 |  |  |
| `qdw.maxWidth.md` | sizing | {banner.card.maxWidth.md} | 600 |  |
| `qdw.paddingH.md` | spacing | {banner.card.paddingH.md} | 16 |  |
| `qdw.paddingV.md` | spacing | {banner.card.paddingV.md} | 16 |  |
| `qdw.showcase.contentWidth.md` | sizing | 360 |  |  |
| `qdw.showcase.contentWidth.xs` | sizing | 274 |  |  |
| `qdw.showcase.height.md` | sizing | 262 |  |  |
| `qdw.showcase.height.xs` | sizing | 238 |  |  |
| `qdw.showcase.inputWidth` | sizing | 200 |  |  |
| `qdw.title` | color | {tt.primary} | #2C2C2C |  |
| `qdw.width.md` | sizing | {banner.card.width.md} | 306 |  |

## randomizer

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `randomizer.frame.borderRadius` | borderRadius | 12 |  |  |
| `randomizer.frame.borderWidth` | borderWidth | 4 |  |  |
| `randomizer.frame.br` | color | {product1} | #1D70E2 |  |
| `randomizer.frame.color` | color | {product1} | #1D70E2 |  |
| `randomizer.frame.size.md` | sizing | {thumb.size.md} + 8 | 130 + 8 |  |
| `randomizer.frame.size.sm` | sizing | {thumb.size.sm} + 8 | 94 + 8 |  |
| `randomizer.gap` | spacing | 16 |  |  |
| `randomizer.gradient.center` | color | {bg.neutral.secondary} | #798086 | ⚙alpha 0 (hsl) |
| `randomizer.gradient.end` | color | {bg.neutral.secondary} | #798086 |  |
| `randomizer.gradient.start` | color | {bg.neutral.secondary} | #798086 |  |
| `randomizer.paddingH` | spacing | 16 |  |  |
| `randomizer.paddingV` | spacing | 40 |  |  |
| `randomizer.selector.borderRadius` | borderRadius | 16 |  |  |
| `randomizer.selector.color` | color | {bg.neutral.secondary} | #798086 |  |
| `randomizer.selector.gap` | spacing | 8 |  |  |
| `randomizer.selector.paddingV` | spacing | 16 |  |  |

## scratch

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `scratch.bg.clear` | color | {white} | #FFFFFF |  |
| `scratch.bg.fill` | color | {product1} | #1D70E2 |  |
| `scratch.borderRadius` | borderRadius | {borderRadius.md} | 8 |  |
| `scratch.color` | color | {tt.primary} | #2C2C2C |  |
| `scratch.height.md` | sizing | 230 |  |  |
| `scratch.height.sm` | sizing | 120 |  |  |
| `scratch.width.md` | sizing | 492 |  |  |
| `scratch.width.sm` | sizing | 260 |  |  |

## section

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `section.block.gap.md` | spacing | 12 |  |  |
| `section.block.gap.xs` | spacing | 8 |  |  |
| `section.block.paddingH.md` | spacing | 24 |  |  |
| `section.block.paddingH.xs` | spacing | 16 |  |  |
| `section.block.paddingV.md` | spacing | 24 |  |  |
| `section.block.paddingV.xs` | spacing | 16 |  |  |
| `section.borderRadius.bottomLeft` | borderRadius | 0 |  |  |
| `section.borderRadius.bottomRight` | borderRadius | 0 |  |  |
| `section.borderRadius.topLeft` | borderRadius | 0 |  |  |
| `section.borderRadius.topRight` | borderRadius | 0 |  |  |
| `section.borderWidth.bottom` | borderWidth | {section.borderWidth.top} | 2 |  |
| `section.borderWidth.left` | borderWidth | 0 |  |  |
| `section.borderWidth.right` | borderWidth | 0 |  |  |
| `section.borderWidth.top` | borderWidth | 2 |  |  |
| `section.br.primary` | color | {br.accent1} | #1D70E2 | ⚙alpha 0 (hsl) |
| `section.br.secondary` | color | {br.accent2} | #F40084 | ⚙alpha 0 (hsl) |
| `section.gradientFill.blockProps.end` | color | {gradientProps.primary.end} | #BACAFE |  |
| `section.gradientFill.blockProps.start` | color | {gradientProps.primary.start} | #F6CFFE |  |
| `section.gradientFill.primary.end` | color | {gradientProps.primary.end} | #BACAFE |  |
| `section.gradientFill.primary.start` | color | {gradientProps.primary.start} | #F6CFFE |  |
| `section.gradientFill.secondary.end` | color | {gradientProps.secondary.end} | #FFF9D8 |  |
| `section.gradientFill.secondary.start` | color | {gradientProps.secondary.start} | #FFD9B1 |  |
| `section.gradientSegment.primary.center` | color | {product1} | #1D70E2 | ⚙alpha 0 (hsl) |
| `section.gradientSegment.primary.start` | color | {product1} | #1D70E2 | ⚙alpha 0 (hsl) |
| `section.gradientSegment.secondary.center` | color | {product2} | #F40084 | ⚙alpha 0 (hsl) |
| `section.gradientSegment.secondary.start` | color | {product2} | #F40084 | ⚙alpha 0 (hsl) |
| `section.iconSize` | sizing | {icon.lg} | 24 |  |
| `section.image.lg` | sizing | 266 |  |  |
| `section.image.md` | sizing | 224 |  |  |
| `section.image.sm` | sizing | 142 |  |  |
| `section.paddingB.lg` | spacing | 16 |  |  |
| `section.paddingB.md` | spacing | 12 |  |  |
| `section.paddingB.sm` | spacing | 12 |  |  |
| `section.paddingB.xl` | spacing | 16 |  |  |
| `section.paddingB.xs` | spacing | 12 |  |  |
| `section.paddingH.lg` | spacing | {layout.paddingH.lg} | 36 |  |
| `section.paddingH.md` | spacing | {layout.paddingH.md} | 40 |  |
| `section.paddingH.sm` | spacing | {layout.paddingH.sm} | 40 |  |
| `section.paddingH.xl` | spacing | {layout.paddingH.xl} | 36 |  |
| `section.paddingH.xs` | spacing | {layout.paddingH.xs} | 16 |  |
| `section.paddingT.lg` | spacing | 16 |  |  |
| `section.paddingT.md` | spacing | 12 |  |  |
| `section.paddingT.sm` | spacing | 12 |  |  |
| `section.paddingT.xl` | spacing | 16 |  |  |
| `section.paddingT.xs` | spacing | 12 |  |  |

## segmented

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `segmented.bg` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.2 (hsl) |
| `segmented.borderRadius.md` | borderRadius | {segmented.size.md} / 2 | 40 / 2 |  |
| `segmented.borderRadius.sm` | borderRadius | {segmented.size.sm} / 2 | 40 - 8 / 2 |  |
| `segmented.item.bg` | color | transparent |  |  |
| `segmented.item.borderRadius.md` | borderRadius | {segmented.borderRadius.md} - {segmented.padding} | 40 / 2 - 3 |  |
| `segmented.item.borderRadius.sm` | borderRadius | {segmented.borderRadius.sm} - {segmented.padding} | 40 - 8 / 2 - 3 |  |
| `segmented.item.checked.bg` | color | {bg.neutral.primary} | #798086 |  |
| `segmented.item.checked.label` | color | {tt.primary} | #2C2C2C |  |
| `segmented.item.gap.md` | spacing | 6 |  |  |
| `segmented.item.gap.sm` | spacing | 4 |  |  |
| `segmented.item.iconSize.md` | sizing | {icon.md} | 20 |  |
| `segmented.item.iconSize.sm` | sizing | {icon.xs} | 14 |  |
| `segmented.item.label.active` | color | {segmented.item.label.hover} | #2C2C2C |  |
| `segmented.item.label.default` | color | {tt.secondary} | #2C2C2C |  |
| `segmented.item.label.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `segmented.item.label.focus` | color | {segmented.item.label.default} | #2C2C2C |  |
| `segmented.item.label.hover` | color | {tt.primary} | #2C2C2C |  |
| `segmented.item.paddingH.md` | spacing | 16 |  |  |
| `segmented.item.paddingH.sm` | spacing | 12 |  |  |
| `segmented.item.size.md` | sizing | {segmented.size.md} - 2 * {segmented.padding} | 40 - 2 * 3 |  |
| `segmented.item.size.sm` | sizing | {segmented.size.sm} - 2 * {segmented.padding} | 40 - 8 - 2 * 3 |  |
| `segmented.outline.borderRadius.md` | borderRadius | {segmented.borderRadius.md} + 1 | 40 / 2 + 1 |  |
| `segmented.outline.borderRadius.sm` | borderRadius | {segmented.borderRadius.sm} + 1 | 40 - 8 / 2 + 1 |  |
| `segmented.outline.borderWidth` | borderWidth | {borderWidth.outline.md} | 4 |  |
| `segmented.outline.color` | color | {outline.default} | #F40084 |  |
| `segmented.padding` | spacing | 3 |  |  |
| `segmented.size.md` | sizing | {controlSize.md} | 40 |  |
| `segmented.size.sm` | sizing | {controlSize.sm} | 40 - 8 |  |

## sidebar

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `sidebar.bg` | color | {header.bg} | #798086 | ⚙darken 0.1 (hsl) |
| `sidebar.collapse.gap` | spacing | 16 |  |  |
| `sidebar.collapse.paddingH` | spacing | 12 |  |  |
| `sidebar.collapse.paddingV` | spacing | 24 |  |  |
| `sidebar.collapse.width` | sizing | 80 |  |  |
| `sidebar.color` | color | {tt.primary} | #2C2C2C |  |
| `sidebar.event.gap` | spacing | 12 |  |  |
| `sidebar.event.gapTitle` | spacing | 4 |  |  |
| `sidebar.event.height` | sizing | 40 |  |  |
| `sidebar.event.padding` | spacing | 12 |  |  |
| `sidebar.event.width` | sizing | 40 |  |  |
| `sidebar.expand.gap` | spacing | 16 |  |  |
| `sidebar.expand.paddingH` | spacing | 12 |  |  |
| `sidebar.expand.paddingV` | spacing | 24 |  |  |
| `sidebar.expand.width` | sizing | 336 |  |  |
| `sidebar.mask` | color | {mask} | #000000 |  |
| `sidebar.menu.bg` | color | {bg.neutral.tertiary} | #798086 |  |
| `sidebar.menu.flyout` | color | {bg.neutral.tertiary} | #798086 |  |
| `sidebar.menu.gap` | spacing | 2 |  |  |
| `sidebar.menu.header.bg.default` | color | {bg.neutral.secondary} | #798086 | ⚙darken 0.1 (hsl) |
| `sidebar.menu.header.color.default` | color | {tt.primary} | #2C2C2C |  |
| `sidebar.menu.header.paddingL` | spacing | 16 |  |  |
| `sidebar.menu.header.paddingR` | spacing | 8 |  |  |
| `sidebar.menu.iconSize` | sizing | {icon.md} | 20 |  |
| `sidebar.menu.item.bg.active` | color | {bg.neutral.primary} | #798086 | ⚙darken 0.3 (hsl) |
| `sidebar.menu.item.bg.default` | color | transparent |  |  |
| `sidebar.menu.item.bg.disabled` | color | transparent |  |  |
| `sidebar.menu.item.bg.focus` | color | transparent |  |  |
| `sidebar.menu.item.bg.hover` | color | {bg.neutral.primary} | #798086 | ⚙darken 0.1 (hsl) |
| `sidebar.menu.item.checked.bg.active` | color | {sidebar.menu.item.checked.bg.default} | #798086 |  |
| `sidebar.menu.item.checked.bg.default` | color | {bg.neutral.primary} | #798086 | ⚙darken 0.15 (hsl) |
| `sidebar.menu.item.checked.bg.disabled` | color | transparent |  |  |
| `sidebar.menu.item.checked.bg.focus` | color | {sidebar.menu.item.checked.bg.default} | #798086 |  |
| `sidebar.menu.item.checked.bg.hover` | color | {bg.neutral.primary} | #798086 | ⚙darken 0.3 (hsl) |
| `sidebar.menu.item.checked.color.active` | color | {sidebar.menu.item.checked.color.default} | #2C2C2C |  |
| `sidebar.menu.item.checked.color.default` | color | {tt.primary} | #2C2C2C |  |
| `sidebar.menu.item.checked.color.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `sidebar.menu.item.checked.color.focus` | color | {sidebar.menu.item.checked.color.default} | #2C2C2C |  |
| `sidebar.menu.item.checked.color.hover` | color | {sidebar.menu.item.checked.color.default} | #2C2C2C |  |
| `sidebar.menu.item.checked.icon.active` | color | {sidebar.menu.item.checked.icon.default} | #2C2C2C |  |
| `sidebar.menu.item.checked.icon.default` | color | {tt.primary} | #2C2C2C |  |
| `sidebar.menu.item.checked.icon.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `sidebar.menu.item.checked.icon.focus` | color | {sidebar.menu.item.checked.icon.default} | #2C2C2C |  |
| `sidebar.menu.item.checked.icon.hover` | color | {sidebar.menu.item.checked.icon.default} | #2C2C2C |  |
| `sidebar.menu.item.color.active` | color | {sidebar.menu.item.color.default} | #2C2C2C |  |
| `sidebar.menu.item.color.default` | color | {tt.secondary} | #2C2C2C |  |
| `sidebar.menu.item.color.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `sidebar.menu.item.color.focus` | color | {sidebar.menu.item.color.default} | #2C2C2C |  |
| `sidebar.menu.item.color.hover` | color | {sidebar.menu.item.color.default} | #2C2C2C |  |
| `sidebar.menu.item.gap` | spacing | 16 |  |  |
| `sidebar.menu.item.icon.active` | color | {sidebar.menu.item.color.default} | #2C2C2C |  |
| `sidebar.menu.item.icon.default` | color | {tt.secondary} | #2C2C2C |  |
| `sidebar.menu.item.icon.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `sidebar.menu.item.icon.focus` | color | {sidebar.menu.item.color.default} | #2C2C2C |  |
| `sidebar.menu.item.icon.hover` | color | {sidebar.menu.item.color.default} | #2C2C2C |  |
| `sidebar.menu.item.padding` | spacing | 24 |  |  |
| `sidebar.menu.outline` | color | {outline.default} | #F40084 |  |
| `sidebar.menu.outlineSize` | sizing | {sidebar.menu.size} + 2 | 40 + 2 |  |
| `sidebar.menu.paddingV` | spacing | 4 |  |  |
| `sidebar.menu.size` | sizing | {btn.size.md} | 40 |  |
| `sidebar.menu.title.bg.active` | color | {bg.neutral.primary} | #798086 | ⚙darken 0.15 (hsl) |
| `sidebar.menu.title.bg.default` | color | transparent |  |  |
| `sidebar.menu.title.bg.disabled` | color | transparent |  |  |
| `sidebar.menu.title.bg.focus` | color | transparent |  |  |
| `sidebar.menu.title.bg.hover` | color | {bg.neutral.primary} | #798086 | ⚙darken 0.05 (hsl) |
| `sidebar.menu.title.checked.bg.active` | color | {bg.neutral.primary} | #798086 | ⚙darken 0.1 (hsl) |
| `sidebar.menu.title.checked.bg.default` | color | {bg.neutral.primary} | #798086 | ⚙darken 0.2 (hsl) |
| `sidebar.menu.title.checked.bg.disabled` | color | transparent |  |  |
| `sidebar.menu.title.checked.bg.focus` | color | {sidebar.menu.title.checked.bg.default} | #798086 |  |
| `sidebar.menu.title.checked.bg.hover` | color | {bg.neutral.primary} | #798086 | ⚙darken 0.25 (hsl) |
| `sidebar.menu.title.checked.color.active` | color | {sidebar.menu.title.checked.color.default} | #2C2C2C |  |
| `sidebar.menu.title.checked.color.default` | color | {tt.primary} | #2C2C2C |  |
| `sidebar.menu.title.checked.color.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `sidebar.menu.title.checked.color.focus` | color | {sidebar.menu.title.checked.color.default} | #2C2C2C |  |
| `sidebar.menu.title.checked.color.hover` | color | {sidebar.menu.title.checked.color.default} | #2C2C2C |  |
| `sidebar.menu.title.checked.icon.active` | color | {sidebar.menu.title.checked.icon.default} | #2C2C2C |  |
| `sidebar.menu.title.checked.icon.default` | color | {tt.primary} | #2C2C2C |  |
| `sidebar.menu.title.checked.icon.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `sidebar.menu.title.checked.icon.focus` | color | {sidebar.menu.title.checked.icon.default} | #2C2C2C |  |
| `sidebar.menu.title.checked.icon.hover` | color | {sidebar.menu.title.checked.icon.default} | #2C2C2C |  |
| `sidebar.menu.title.color.active` | color | {sidebar.menu.title.color.default} | #2C2C2C |  |
| `sidebar.menu.title.color.default` | color | {tt.primary} | #2C2C2C |  |
| `sidebar.menu.title.color.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `sidebar.menu.title.color.focus` | color | {sidebar.menu.title.color.default} | #2C2C2C |  |
| `sidebar.menu.title.color.hover` | color | {sidebar.menu.title.color.default} | #2C2C2C |  |
| `sidebar.menu.title.gap` | spacing | 16 |  |  |
| `sidebar.menu.title.icon.active` | color | {sidebar.menu.title.color.default} | #2C2C2C |  |
| `sidebar.menu.title.icon.default` | color | {tt.primary} | #2C2C2C |  |
| `sidebar.menu.title.icon.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `sidebar.menu.title.icon.focus` | color | {sidebar.menu.title.color.default} | #2C2C2C |  |
| `sidebar.menu.title.icon.hover` | color | {sidebar.menu.title.color.default} | #2C2C2C |  |
| `sidebar.menu.title.paddingL` | spacing | 16 |  |  |
| `sidebar.menu.title.paddingR` | spacing | 8 |  |  |
| `sidebar.outlineBorderWidth` | borderWidth | 4 |  |  |
| `sidebar.potion.gap` | spacing | 12 |  |  |
| `sidebar.potion.gapTitle` | spacing | 4 |  |  |
| `sidebar.potion.height` | sizing | 40 |  |  |
| `sidebar.potion.padding` | spacing | 12 |  |  |
| `sidebar.potion.width` | sizing | 40 |  |  |
| `sidebar.profileBlock.shifted` | spacing | 44 |  |  |
| `sidebar.quicklinks.animation.color` | color | {product1} | #1D70E2 | ⚙alpha 0.5 (hsl) |
| `sidebar.quicklinks.animation.transparency` | color | {product1} | #1D70E2 | ⚙alpha 0 (hsl) |
| `sidebar.quicklinks.bg` | color | {sidebar.menu.bg} | #798086 |  |
| `sidebar.quicklinks.collapse.height` | sizing | 48 |  |  |
| `sidebar.quicklinks.collapse.width` | sizing | 40 |  |  |
| `sidebar.quicklinks.expand.height` | sizing | 48 |  |  |
| `sidebar.quicklinks.gap` | spacing | 4 |  |  |
| `sidebar.quicklinks.paddingL` | spacing | 2 |  |  |
| `sidebar.quicklinks.paddingR` | spacing | 8 |  |  |

## skeleton

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `skeleton.borderRadius` | borderRadius | {borderRadius.md} | 8 |  |
| `skeleton.end` | color | {fill.darker} | #798086 |  |
| `skeleton.start` | color | {fill.default} | #798086 |  |

## spinner

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `spinner.borderWidth.lg` | borderWidth | 2.5 |  |  |
| `spinner.borderWidth.md` | borderWidth | 2 |  |  |
| `spinner.borderWidth.sm` | borderWidth | 2 |  |  |
| `spinner.borderWidth.xs` | borderWidth | 1.5 |  |  |
| `spinner.size.lg` | sizing | 24 |  |  |
| `spinner.size.md` | sizing | 20 |  |  |
| `spinner.size.sm` | sizing | 16 |  |  |
| `spinner.size.xs` | sizing | 12 |  |  |
| `spinner.thumb.accent1` | color | {product1} | #1D70E2 |  |
| `spinner.thumb.default` | color | {tt.primary} | #2C2C2C |  |
| `spinner.track` | color | {black} | #000000 | ⚙alpha 0.14 (hsl) |

## stats

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `stats.bg` | color | {fill.default} | #798086 |  |
| `stats.borderRadius` | borderRadius | {borderRadius.md} | 8 |  |
| `stats.description` | color | {tt.secondary} | #2C2C2C |  |
| `stats.gap` | spacing | 4 |  |  |
| `stats.height` | sizing | 68 |  |  |
| `stats.paddingH` | spacing | 8 |  |  |
| `stats.raitingIconSize` | sizing | {icon.lg} | 24 |  |
| `stats.rating` | color | {tt.secondary} | #2C2C2C |  |
| `stats.title` | color | {tt.primary} | #2C2C2C |  |
| `stats.width` | sizing | 204 |  |  |

## status

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `status.bg.accent1` | color | {product2} | #F40084 | ⚙alpha 0.08 (hsl) |
| `status.bg.accent2` | color | {product1} | #1D70E2 | ⚙alpha 0.08 (hsl) |
| `status.bg.danger` | color | {danger} | #D83232 | ⚙alpha 0.08 (hsl) |
| `status.bg.default` | color | {fill.default} | #798086 |  |
| `status.bg.success` | color | {fill.success.default} | #0EA45B |  |
| `status.bg.warning` | color | {warning} | #FFC700 | ⚙alpha 0.12 (hsl) |
| `status.boxShadow.base.blur.md` | number | {btn.boxShadow.base.blur.md} | 2 |  |
| `status.boxShadow.base.color` | color | {black} | #000000 | 0.25 — ⚙alpha 0 (hsl) |
| `status.boxShadow.base.y.md` | number | {btn.boxShadow.base.y.md} | 2 |  |
| `status.boxShadow.darkEdge.blur.md` | number | {btn.boxShadow.darkEdge.blur.md} | 6 |  |
| `status.boxShadow.darkEdge.md` | color | {black} | #000000 | ⚙alpha 0.02 (hsl) |
| `status.boxShadow.darkEdge.y.md` | number | {btn.boxShadow.darkEdge.y.md} | -3 |  |
| `status.boxShadow.lightEdge.blur.md` | number | {btn.boxShadow.lightEdge.blur.md} | 6 |  |
| `status.boxShadow.lightEdge.md` | color | #ffffff |  | ⚙alpha 0.2 (hsl) |
| `status.boxShadow.lightEdge.y.md` | number | {btn.boxShadow.lightEdge.y.md} | 3 |  |
| `status.br.accent1` | color | {product2} | #F40084 | ⚙alpha 0.16 (hsl) |
| `status.br.accent2` | color | {product1} | #1D70E2 | ⚙alpha 0.16 (hsl) |
| `status.br.danger` | color | {danger} | #D83232 | ⚙alpha 0.16 (hsl) |
| `status.br.default` | color | {br.primary} | #798086 |  |
| `status.br.success` | color | {success} | #0EA45B | ⚙alpha 0.2 (hsl) |
| `status.br.warning` | color | {warning} | #FFC700 | ⚙alpha 0.28 (hsl) |
| `status.btn.borderRadius.lg` | borderRadius | {btn.borderRadius.lg} | 40 + 8 / 2 |  |
| `status.btn.borderRadius.md` | borderRadius | {btn.borderRadius.md} | 40 / 2 |  |
| `status.btn.borderRadius.sm` | borderRadius | {btn.borderRadius.sm} | 40 - 8 / 2 |  |
| `status.btn.borderRadius.xl` | borderRadius | {btn.borderRadius.xl} | 40 + 16 / 2 |  |
| `status.btn.borderRadius.xs` | borderRadius | {btn.borderRadius.xs} | 40 - 16 / 2 |  |
| `status.btn.gap.lg` | spacing | {btn.gap.lg} | 10 |  |
| `status.btn.gap.md` | spacing | {btn.gap.md} | 8 |  |
| `status.btn.gap.sm` | spacing | {btn.gap.sm} | 6 |  |
| `status.btn.gap.xl` | spacing | {btn.gap.xl} | 12 |  |
| `status.btn.gap.xs` | spacing | {btn.gap.xs} | 4 |  |
| `status.btn.iconSize.lg` | sizing | {btn.iconSize.lg} | 24 |  |
| `status.btn.iconSize.md` | sizing | {btn.iconSize.md} | 20 |  |
| `status.btn.iconSize.sm` | sizing | {btn.iconSize.sm} | 16 |  |
| `status.btn.iconSize.xl` | sizing | {btn.iconSize.xl} | 32 |  |
| `status.btn.iconSize.xs` | sizing | {btn.iconSize.xs} | 12 |  |
| `status.btn.paddingH.lg` | spacing | {btn.paddingH.lg} | 32 |  |
| `status.btn.paddingH.md` | spacing | {btn.paddingH.md} | 24 |  |
| `status.btn.paddingH.sm` | spacing | {btn.paddingH.sm} | 12 |  |
| `status.btn.paddingH.xl` | spacing | {btn.paddingH.xl} | 40 |  |
| `status.btn.paddingH.xs` | spacing | {btn.paddingH.xs} | 12 |  |
| `status.btn.size.lg` | sizing | {btn.size.lg} | 40 + 8 |  |
| `status.btn.size.md` | sizing | {btn.size.md} | 40 |  |
| `status.btn.size.sm` | sizing | {btn.size.sm} | 40 - 8 |  |
| `status.btn.size.xl` | sizing | {btn.size.xl} | 40 + 16 |  |
| `status.btn.size.xs` | sizing | {btn.size.xs} | 40 - 16 |  |
| `status.iconSize.sm` | sizing | {tag.iconSize.md} | 20 |  |
| `status.iconSize.xs` | sizing | {tag.iconSize.sm} | 16 |  |
| `status.indicator.accent1` | color | {tt.accent2} | #F40084 |  |
| `status.indicator.accent2` | color | {tt.accent1} | #1D70E2 |  |
| `status.indicator.danger` | color | {tt.danger} | #D83232 |  |
| `status.indicator.default` | color | {tt.quaternary} | #2C2C2C |  |
| `status.indicator.success` | color | {tt.success} | #0EA45B |  |
| `status.indicator.warning` | color | {tt.warning} | #FFC700 |  |
| `status.indicatorBorderRadius` | borderRadius | {status.indicatorSize} / 2 | 8 / 2 |  |
| `status.indicatorSize` | sizing | 8 |  |  |
| `status.label` | color | {tt.primary} | #2C2C2C |  |
| `status.tag.borderWidth` | borderWidth | {tag.borderWidth} | 1 |  |
| `status.tag.circle.borderRadius.sm` | borderRadius | {tag.circle.borderRadius.md} | 40 - 8 / 2 |  |
| `status.tag.circle.borderRadius.xs` | borderRadius | {tag.circle.borderRadius.sm} | 40 - 16 / 2 |  |
| `status.tag.gap.sm` | spacing | 8 |  |  |
| `status.tag.gap.xs` | spacing | 6 |  |  |
| `status.tag.paddingH.sm` | spacing | {tag.paddingH.md} | 12 |  |
| `status.tag.paddingH.xs` | spacing | 10 |  |  |
| `status.tag.rounded.borderRadius.sm` | borderRadius | {tag.rounded.borderRadius.md} | 8 |  |
| `status.tag.rounded.borderRadius.xs` | borderRadius | {tag.rounded.borderRadius.sm} | 6 |  |
| `status.tag.size.sm` | sizing | {tag.size.md} | 40 - 8 |  |
| `status.tag.size.xs` | sizing | {tag.size.sm} | 40 - 16 |  |

## stepper

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `stepper.description.active` | color | {stepper.title.active} | #2C2C2C |  |
| `stepper.description.default` | color | {stepper.title.default} | #2C2C2C |  |
| `stepper.description.done` | color | {stepper.description.default} | #2C2C2C |  |
| `stepper.description.error` | color | {stepper.title.error} | #D83232 |  |
| `stepper.gap` | spacing | 16 |  |  |
| `stepper.indicator.bg.active` | color | {product1} | #1D70E2 |  |
| `stepper.indicator.bg.default` | color | {fill.default} | #798086 |  |
| `stepper.indicator.bg.done` | color | {fill.success.default} | #0EA45B |  |
| `stepper.indicator.bg.error` | color | {danger} | #D83232 |  |
| `stepper.indicator.color.active` | color | {tt.white} | #FFFFFF |  |
| `stepper.indicator.color.default` | color | {tt.tertiary} | #2C2C2C |  |
| `stepper.indicator.color.done` | color | {tt.success} | #0EA45B |  |
| `stepper.indicator.color.error` | color | {tt.white} | #FFFFFF |  |
| `stepper.indicatorBorderRadius` | borderRadius | {stepper.indicatorSize} / 2 | 32 / 2 |  |
| `stepper.indicatorSize` | sizing | 32 |  |  |
| `stepper.item.descriptionShift` | spacing | {stepper.indicatorSize} + {stepper.item.gap} | 32 + 8 |  |
| `stepper.item.gap` | spacing | 8 |  |  |
| `stepper.line.active` | color | {stepper.line.default} | #798086 |  |
| `stepper.line.default` | color | {br.primary} | #798086 |  |
| `stepper.line.done` | color | {br.success} | #0EA45B |  |
| `stepper.line.error` | color | {stepper.line.default} | #798086 |  |
| `stepper.lineBorderWidth` | borderWidth | {borderWidth.default} | 1 |  |
| `stepper.subtitle.active` | color | {stepper.subtitle.default} | #2C2C2C |  |
| `stepper.subtitle.default` | color | {stepper.title.default} | #2C2C2C |  |
| `stepper.subtitle.done` | color | {stepper.subtitle.default} | #2C2C2C |  |
| `stepper.subtitle.error` | color | {stepper.subtitle.default} | #2C2C2C |  |
| `stepper.title.active` | color | {tt.primary} | #2C2C2C |  |
| `stepper.title.default` | color | {tt.tertiary} | #2C2C2C |  |
| `stepper.title.done` | color | {stepper.title.active} | #2C2C2C |  |
| `stepper.title.error` | color | {tt.danger} | #D83232 |  |

## switcher

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `switcher.bg.active` | color | {fill.vibrant.lighter} | #1D70E2 |  |
| `switcher.bg.default` | color | {fill.vibrant.default} | #1D70E2 | ⚙alpha 0.14 (hsl) |
| `switcher.bg.disabled` | color | {fill.disabled.default} | #000000 |  |
| `switcher.bg.focus` | color | {switcher.bg.default} | #1D70E2 |  |
| `switcher.bg.hover` | color | {fill.vibrant.darker} | #1D70E2 |  |
| `switcher.borderRadius` | borderRadius | {switcher.size} / 2 | 22 / 2 |  |
| `switcher.borderRadiusIndicator` | borderRadius | ({switcher.size} - 2 * {switcher.padding}) / 2 | (22 - 2 * 2) / 2 |  |
| `switcher.borderRadiusOutline` | borderRadius | {switcher.outlineSize} / 2 | 22 + 2 / 2 |  |
| `switcher.borderWidth` | borderWidth | {baseBorderWidth} | 1 |  |
| `switcher.br.active` | color | {switcher.br.default} | transparent |  |
| `switcher.br.default` | color | transparent |  |  |
| `switcher.br.focus` | color | {switcher.br.default} | transparent |  |
| `switcher.br.hover` | color | {switcher.br.default} | transparent |  |
| `switcher.checked.bg.active` | color | {switcher.checked.bg.hover} | #1D70E2 |  |
| `switcher.checked.bg.default` | color | {product1} | #1D70E2 |  |
| `switcher.checked.bg.disabled` | color | {product1} | #1D70E2 | ⚙alpha 0.25 (hsl) |
| `switcher.checked.bg.focus` | color | {switcher.checked.bg.default} | #1D70E2 |  |
| `switcher.checked.bg.hover` | color | {product1} | #1D70E2 | ⚙lighten 0.12 (hsl) |
| `switcher.checked.br.active` | color | {switcher.checked.br.default} | transparent |  |
| `switcher.checked.br.default` | color | transparent |  |  |
| `switcher.checked.br.focus` | color | {switcher.checked.br.default} | transparent |  |
| `switcher.checked.br.hover` | color | {switcher.checked.br.default} | transparent |  |
| `switcher.checked.indicator.color.active` | color | {switcher.checked.indicator.color.default} | #1D70E2 |  |
| `switcher.checked.indicator.color.default` | color | {tt.accent1} | #1D70E2 |  |
| `switcher.checked.indicator.color.disabled` | color | {switcher.checked.indicator.color.default} | #1D70E2 | ⚙darken 0.4 (hsl) |
| `switcher.checked.indicator.color.focus` | color | {switcher.checked.indicator.color.default} | #1D70E2 |  |
| `switcher.checked.indicator.color.hover` | color | {switcher.checked.indicator.color.default} | #1D70E2 |  |
| `switcher.checked.inner.color.active` | color | {switcher.checked.inner.color.default} | #FFFFFF |  |
| `switcher.checked.inner.color.default` | color | {tt.white} | #FFFFFF |  |
| `switcher.checked.inner.color.disabled` | color | {switcher.checked.inner.color.default} | #FFFFFF |  |
| `switcher.checked.inner.color.focus` | color | {switcher.checked.inner.color.default} | #FFFFFF |  |
| `switcher.checked.inner.color.hover` | color | {switcher.checked.inner.color.default} | #FFFFFF |  |
| `switcher.description.active` | color | {switcher.description.default} | #2C2C2C |  |
| `switcher.description.default` | color | {switcher.label.default} | #2C2C2C |  |
| `switcher.description.disabled` | color | {switcher.label.disabled} | #2C2C2C |  |
| `switcher.description.focus` | color | {switcher.description.default} | #2C2C2C |  |
| `switcher.description.hover` | color | {switcher.description.default} | #2C2C2C |  |
| `switcher.gap.active` | spacing | 2 |  |  |
| `switcher.gap.default` | spacing | 4 |  |  |
| `switcher.indicator.bg.default` | color | {tt.white} | #FFFFFF |  |
| `switcher.indicator.bg.disabled` | color | {switcher.indicator.bg.default} | #FFFFFF |  |
| `switcher.indicator.color.active` | color | {switcher.indicator.color.default} | #2C2C2C |  |
| `switcher.indicator.color.default` | color | {tt.primary} | #2C2C2C |  |
| `switcher.indicator.color.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `switcher.indicator.color.focus` | color | {switcher.indicator.color.default} | #2C2C2C |  |
| `switcher.indicator.color.hover` | color | {switcher.indicator.color.default} | #2C2C2C |  |
| `switcher.indicator.iconSize` | sizing | {icon.xxs} | 12 |  |
| `switcher.indicator.size.active` | sizing | {switcher.indicator.size.default} + 6 | 22 - 2 * 2 + 6 |  |
| `switcher.indicator.size.default` | sizing | {switcher.size} - 2 * {switcher.padding} | 22 - 2 * 2 |  |
| `switcher.inner.color.active` | color | {switcher.inner.color.default} | #2C2C2C |  |
| `switcher.inner.color.default` | color | {tt.secondary} | #2C2C2C |  |
| `switcher.inner.color.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `switcher.inner.color.focus` | color | {switcher.inner.color.default} | #2C2C2C |  |
| `switcher.inner.color.hover` | color | {switcher.inner.color.default} | #2C2C2C |  |
| `switcher.inner.iconSize` | sizing | {icon.xs} | 14 |  |
| `switcher.inner.minWidth` | sizing | 12 |  |  |
| `switcher.label.active` | color | {switcher.label.default} | #2C2C2C |  |
| `switcher.label.default` | color | {tt.primary} | #2C2C2C |  |
| `switcher.label.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `switcher.label.focus` | color | {switcher.label.default} | #2C2C2C |  |
| `switcher.label.hover` | color | {switcher.label.default} | #2C2C2C |  |
| `switcher.outline` | color | {outline.default} | #F40084 |  |
| `switcher.outlineBorderWidth` | borderWidth | {borderWidth.outline.md} | 4 |  |
| `switcher.outlineSize` | sizing | {switcher.size} + 2 | 22 + 2 |  |
| `switcher.padding` | spacing | 2 |  |  |
| `switcher.shift.active` | spacing | 4 |  |  |
| `switcher.shift.default` | spacing | 8 |  |  |
| `switcher.size` | sizing | 22 |  |  |

## tab

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `tab.actions.paddingH` | spacing | {tab.item.left.paddingH} | 24 |  |
| `tab.actions.paddingV` | spacing | 16 |  |  |
| `tab.borderWidth` | borderWidth | {borderWidth.default} | 1 |  |
| `tab.br` | color | {br.primary} | #798086 |  |
| `tab.gapH` | spacing | 24 |  |  |
| `tab.gapV` | spacing | 8 |  |  |
| `tab.item.accent.color.default` | color | {tt.accent2} | #F40084 |  |
| `tab.item.accent.color.hover` | color | {product2} | #F40084 | ⚙lighten 0.12 (hsl) |
| `tab.item.accent.indicator.default` | color | {br.accent1} | #1D70E2 |  |
| `tab.item.accent.indicator.hover` | color | {product1} | #1D70E2 | ⚙lighten 0.12 (hsl) |
| `tab.item.checked.color.default` | color | {tt.accent1} | #1D70E2 |  |
| `tab.item.checked.color.hover` | color | {product1} | #1D70E2 | ⚙lighten 0.12 (hsl) |
| `tab.item.checked.indicator.default` | color | {br.accent1} | #1D70E2 |  |
| `tab.item.checked.indicator.hover` | color | {product1} | #1D70E2 | ⚙lighten 0.12 (hsl) |
| `tab.item.color.default` | color | {tt.tertiary} | #2C2C2C |  |
| `tab.item.color.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `tab.item.color.hover` | color | {tt.secondary} | #2C2C2C |  |
| `tab.item.gap.md` | spacing | 8 |  |  |
| `tab.item.gap.sm` | spacing | 6 |  |  |
| `tab.item.iconSize.md` | sizing | {icon.md} | 20 |  |
| `tab.item.iconSize.sm` | sizing | {icon.sm} | 16 |  |
| `tab.item.indicatorBorderWidth` | borderWidth | {borderWidth.strong} | 1 + 1 |  |
| `tab.item.left.paddingH` | spacing | 24 |  |  |
| `tab.item.right.paddingH` | spacing | {tab.item.left.paddingH} | 24 |  |
| `tab.item.size.md` | sizing | {controlSize.md} | 40 |  |
| `tab.item.size.sm` | sizing | {controlSize.sm} | 40 - 8 |  |
| `tab.more.color` | color | {tt.tertiary} | #2C2C2C |  |
| `tab.more.iconSize.md` | sizing | {tab.item.iconSize.md} | 20 |  |
| `tab.more.iconSize.sm` | sizing | {tab.item.iconSize.sm} | 16 |  |
| `tab.more.size.md` | sizing | {tab.item.size.md} | 40 |  |
| `tab.more.size.sm` | sizing | {tab.item.size.sm} | 40 - 8 |  |
| `tab.shadow.blur` | number | 16 |  |  |
| `tab.shadow.color` | color | {shadow.default} | #000000 |  |
| `tab.shadow.spread` | number | -24 |  |  |
| `tab.shadow.xLeft` | number | 24 |  |  |
| `tab.shadow.xRight` | number | -24 |  |  |
| `tab.shadow.yBottom` | number | -24 |  |  |
| `tab.shadow.yTop` | number | 24 |  |  |

## tabbar

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `tabbar.bg` | color | {bg.popup.default} | #798086 | ⚙alpha 0.8 (hsl) |
| `tabbar.borderRadius` | borderRadius | 0 |  |  |
| `tabbar.item.accent.bg.end` | color | {btn.accent.bg.end.default} | #F40084 |  |
| `tabbar.item.accent.bg.start` | color | {btn.accent.bg.start.default} | #F40084 |  |
| `tabbar.item.accent.borderRadius` | borderRadius | {btn.borderRadius.md} | 40 / 2 |  |
| `tabbar.item.accent.icon` | color | {btn.accent.color.default} | #FFFFFF |  |
| `tabbar.item.active` | color | {tt.secondary} | #2C2C2C |  |
| `tabbar.item.checked.accent.active` | color | {tt.accent2} | #F40084 | ⚙darken 0.2 (hsl) |
| `tabbar.item.checked.accent.default` | color | {tt.accent2} | #F40084 |  |
| `tabbar.item.checked.active` | color | {tt.accent1} | #1D70E2 | ⚙darken 0.2 (hsl) |
| `tabbar.item.checked.bg` | color | {bg.neutral.primary} | #798086 | ⚙alpha 0.8 (hsl) |
| `tabbar.item.checked.default` | color | {tt.accent1} | #1D70E2 |  |
| `tabbar.item.default` | color | {tt.tertiary} | #2C2C2C |  |
| `tabbar.item.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `tabbar.item.gap` | spacing | 4 |  |  |
| `tabbar.item.iconSize` | sizing | {icon.lg} | 24 |  |
| `tabbar.item.paddingB` | spacing | 22 |  |  |
| `tabbar.item.paddingH` | spacing | 4 |  |  |
| `tabbar.item.paddingT` | spacing | 6 |  |  |
| `tabbar.paddingB` | spacing | 20 |  |  |
| `tabbar.paddingH` | spacing | 8 |  |  |
| `tabbar.paddingT` | spacing | {tabbar.paddingH} | 8 |  |
| `tabbar.size` | sizing | 68 |  |  |

## table

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `table.cell.bg.expanded` | color | {fill.default} | #798086 |  |
| `table.cell.bg.hover` | color | {fill.default} | #798086 |  |
| `table.cell.bg.striped` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.03 (hsl) |
| `table.cell.borderWidth` | borderWidth | {borderWidth.default} | 1 |  |
| `table.cell.br` | color | {br.primary} | #798086 |  |
| `table.cell.checked.bg.default` | color | {product1} | #1D70E2 | ⚙alpha 0.08 (hsl) |
| `table.cell.checked.bg.hover` | color | {product1} | #1D70E2 | ⚙alpha 0.16 (hsl) |
| `table.cell.color.arrow` | color | {table.header.color.arrow} | #2C2C2C |  |
| `table.cell.color.default` | color | {tt.primary} | #2C2C2C |  |
| `table.cell.color.description` | color | {table.cell.color.underline} | #2C2C2C |  |
| `table.cell.color.indicator` | color | {tt.tertiary} | #2C2C2C |  |
| `table.cell.color.negative` | color | {tt.danger} | #D83232 |  |
| `table.cell.color.positive` | color | {tt.info} | #1D70E2 |  |
| `table.cell.color.received` | color | {tt.success} | #0EA45B |  |
| `table.cell.color.underline` | color | {tt.secondary} | #2C2C2C |  |
| `table.cell.color.winner` | color | {tt.accent1} | #1D70E2 |  |
| `table.cell.highlighted.bg.default` | color | {product1} | #1D70E2 | ⚙alpha 0.16 (hsl) |
| `table.cell.iconSize` | sizing | {icon.md} | 20 |  |
| `table.cell.paddingH` | spacing | 16 |  |  |
| `table.cell.paddingV` | spacing | 12 |  |  |
| `table.cell.score.bg.default` | color | {fill.default} | #798086 |  |
| `table.cell.score.bg.winner` | color | {product1} | #1D70E2 | ⚙alpha 0.12 (hsl) |
| `table.cell.scoreBorderRadius` | borderRadius | 4 |  |  |
| `table.cell.scoreWidth` | sizing | 24 |  |  |
| `table.cell.size` | sizing | 64 |  |  |
| `table.header.action.color.active` | color | {table.header.action.color.hover} | #2C2C2C |  |
| `table.header.action.color.checked` | color | {tt.accent1} | #1D70E2 |  |
| `table.header.action.color.default` | color | {tt.quaternary} | #2C2C2C |  |
| `table.header.action.color.focus` | color | {table.header.action.color.default} | #2C2C2C |  |
| `table.header.action.color.hover` | color | {tt.primary} | #2C2C2C |  |
| `table.header.actionSize` | sizing | 20 |  |  |
| `table.header.bg` | color | {fill.lighter} | #798086 |  |
| `table.header.color.arrow` | color | {tt.tertiary} | #2C2C2C |  |
| `table.header.color.default` | color | {tt.primary} | #2C2C2C |  |
| `table.header.splitterHeight` | sizing | 20 |  |  |
| `table.header.splitterWidth` | sizing | {table.cell.borderWidth} | 1 |  |

## tag

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `tag.accent1.bg` | color | {product1} | #1D70E2 | {product1} |
| `tag.accent1.color` | color | {tt.white} | #FFFFFF |  |
| `tag.accent2.bg` | color | {product2} | #F40084 | {product2} |
| `tag.accent2.color` | color | {tt.white} | #FFFFFF |  |
| `tag.alt1.bg` | color | {alt1} | #a04bc4 | ⚙darken 0.1 (hsl) |
| `tag.alt1.color` | color | {tt.white} | #FFFFFF |  |
| `tag.alt2.bg` | color | {alt2} | #00BCD4 | ⚙darken 0.15 (hsl) |
| `tag.alt2.color` | color | {tt.white} | #FFFFFF |  |
| `tag.alt3.bg` | color | {alt3} | #BD9865 | ⚙darken 0.15 (hsl) |
| `tag.alt3.color` | color | {tt.white} | #FFFFFF |  |
| `tag.alt4.bg` | color | {fill.disabled.default} | #000000 |  |
| `tag.alt4.br` | color | {br.primary} | #798086 |  |
| `tag.alt4.color` | color | {tt.primary} | #2C2C2C |  |
| `tag.alt5.bg` | color | {white} | #FFFFFF |  |
| `tag.alt5.br` | color | {br.primary} | #798086 |  |
| `tag.alt5.color` | color | {tt.black} | #000000 |  |
| `tag.borderWidth` | borderWidth | {borderWidth.default} | 1 |  |
| `tag.circle.borderRadius.lg` | borderRadius | {tag.size.lg} / 2 | 40 / 2 |  |
| `tag.circle.borderRadius.md` | borderRadius | {tag.size.md} / 2 | 40 - 8 / 2 |  |
| `tag.circle.borderRadius.sm` | borderRadius | {tag.size.sm} / 2 | 40 - 16 / 2 |  |
| `tag.circle.borderRadius.xs` | borderRadius | {tag.size.xs} / 2 | 20 / 2 |  |
| `tag.danger.bg` | color | #BC0000 |  | {danger} |
| `tag.danger.color` | color | {tt.white} | #FFFFFF |  |
| `tag.default.bg` | color | {fill.default} | #798086 |  |
| `tag.default.br` | color | {br.primary} | #798086 |  |
| `tag.default.color` | color | {tt.primary} | #2C2C2C |  |
| `tag.gap.lg` | spacing | 8 |  |  |
| `tag.gap.md` | spacing | 4 |  |  |
| `tag.gap.sm` | spacing | {tag.gap.md} | 4 |  |
| `tag.gap.xs` | spacing | {tag.gap.md} | 4 |  |
| `tag.iconSize.lg` | sizing | {icon.md} | 20 |  |
| `tag.iconSize.md` | sizing | {tag.iconSize.lg} | 20 |  |
| `tag.iconSize.sm` | sizing | {icon.sm} | 16 |  |
| `tag.iconSize.xs` | sizing | {icon.xxs} | 12 |  |
| `tag.paddingH.lg` | spacing | 16 |  |  |
| `tag.paddingH.md` | spacing | 12 |  |  |
| `tag.paddingH.sm` | spacing | {tag.paddingH.md} | 12 |  |
| `tag.paddingH.xs` | spacing | 8 |  |  |
| `tag.rounded.borderRadius.lg` | borderRadius | {borderRadius.md} | 8 |  |
| `tag.rounded.borderRadius.md` | borderRadius | {tag.rounded.borderRadius.lg} | 8 |  |
| `tag.rounded.borderRadius.sm` | borderRadius | 6 |  |  |
| `tag.rounded.borderRadius.xs` | borderRadius | 5 |  |  |
| `tag.size.lg` | sizing | {controlSize.md} | 40 |  |
| `tag.size.md` | sizing | {controlSize.sm} | 40 - 8 |  |
| `tag.size.sm` | sizing | {controlSize.xs} | 40 - 16 |  |
| `tag.size.xs` | sizing | 20 |  |  |
| `tag.success.bg` | color | #1B9252 |  | {success} |
| `tag.success.color` | color | {tt.white} | #FFFFFF |  |
| `tag.warning.bg` | color | #E69100 |  | {warning} |
| `tag.warning.color` | color | {tt.white} | #FFFFFF |  |

## thumb

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `thumb.borderRadius` | borderRadius | {borderRadius.md} | 8 |  |
| `thumb.borderWidth` | borderWidth | 0 |  |  |
| `thumb.br.default` | color | transparent |  |  |
| `thumb.btn.bg.disabled` | color | {fill.disabled.default} | #000000 |  |
| `thumb.btn.bg.end.active` | color | {btn.secondary.bg.start.active} | #1D70E2 | ⚙darken 0.5 (hsl) |
| `thumb.btn.bg.end.default` | color | {btn.secondary.bg.start.default} | #1D70E2 |  |
| `thumb.btn.bg.end.focus` | color | {btn.secondary.bg.end.default} | #1D70E2 |  |
| `thumb.btn.bg.end.hover` | color | {btn.secondary.bg.start.hover} | #1D70E2 | ⚙lighten 0.5 (hsl) |
| `thumb.btn.bg.start.active` | color | {fill.vibrant.default} | #1D70E2 | ⚙darken 0.5 (hsl) |
| `thumb.btn.bg.start.default` | color | {fill.vibrant.default} | #1D70E2 |  |
| `thumb.btn.bg.start.focus` | color | {btn.secondary.bg.start.default} | #1D70E2 |  |
| `thumb.btn.bg.start.hover` | color | {fill.vibrant.default} | #1D70E2 | ⚙lighten 0.5 (hsl) |
| `thumb.btn.br.active` | color | {thumb.btn.br.default} | #1D70E2 |  |
| `thumb.btn.br.default` | color | {br.accent1} | #1D70E2 |  |
| `thumb.btn.br.disabled` | color | {btn.secondary.br.default} | transparent |  |
| `thumb.btn.br.focus` | color | {thumb.btn.br.default} | #1D70E2 |  |
| `thumb.btn.br.hover` | color | {thumb.btn.br.default} | #1D70E2 |  |
| `thumb.btn.color.active` | color | {thumb.btn.color.default} | #2C2C2C |  |
| `thumb.btn.color.default` | color | {tt.primary} | #2C2C2C |  |
| `thumb.btn.color.disabled` | color | {btn.primary.color.disabled} | #FFFFFF |  |
| `thumb.btn.color.focus` | color | {thumb.btn.color.default} | #2C2C2C |  |
| `thumb.btn.color.hover` | color | {thumb.btn.color.default} | #2C2C2C |  |
| `thumb.description` | color | {product1} | #1D70E2 |  |
| `thumb.gap` | spacing | 4 |  |  |
| `thumb.outer.description` | color | {thumb.outer.title} | #FFFFFF |  |
| `thumb.outer.title` | color | {tt.white} | #FFFFFF |  |
| `thumb.outline.borderRadius` | borderRadius | {thumb.borderRadius} + 1 | 8 + 1 |  |
| `thumb.outline.borderWidth` | borderWidth | {borderWidth.outline.md} | 4 |  |
| `thumb.outline.color` | color | {outline.default} | #F40084 |  |
| `thumb.size.lg` | sizing | 190 |  |  |
| `thumb.size.md` | sizing | 130 |  |  |
| `thumb.size.sm` | sizing | 94 |  |  |
| `thumb.title` | color | {tt.primary} | #2C2C2C |  |
| `thumb.withCounter.bg` | color | {bg.neutral.tertiary} | #798086 |  |

## time

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `time.base.borderRadius` | borderRadius | {time.base.size} / 2 | 40 / 2 |  |
| `time.base.paddingH` | spacing | 16 |  |  |
| `time.base.size` | sizing | 40 |  |  |
| `time.scoped.iconWrapper.borderRadius` | borderRadius | {time.scoped.iconWrapper.size} / 2 | 40 / 2 |  |
| `time.scoped.iconWrapper.size` | sizing | 40 |  |  |
| `time.scoped.paddingR` | spacing | 12 |  |  |

## tooltip

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `tooltip.arrowShift` | spacing | {dropdown.arrowShift} | 10 |  |
| `tooltip.bg` | color | {bg.popup.default} | #798086 |  |
| `tooltip.borderRadius` | borderRadius | {dropdown.borderRadius} | 8 |  |
| `tooltip.boxShadowColor` | color | {black} | #000000 | ⚙alpha 0.15 (hsl) |
| `tooltip.color` | color | {tt.primary} | #2C2C2C |  |
| `tooltip.gap` | spacing | {dropdown.gap} | 4 |  |
| `tooltip.maxWidth` | sizing | 320 |  |  |
| `tooltip.paddingH` | spacing | 16 |  |  |
| `tooltip.paddingV` | spacing | 8 |  |  |

## vip

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `vip.first.end` | color | {vip.first.start} | #664B2C | ⚙alpha 0 (hsl) |
| `vip.first.start` | color | #664B2C |  |  |
| `vip.initial.end` | color | {vip.initial.start} | #32A071 | ⚙alpha 0 (hsl) |
| `vip.initial.start` | color | #32A071 |  |  |
| `vip.second.end` | color | {vip.second.start} | #0080FF | ⚙alpha 0 (hsl) |
| `vip.second.start` | color | #0080FF |  |  |
| `vip.third.end` | color | {vip.third.start} | #7D1515 | ⚙alpha 0 (hsl) |
| `vip.third.start` | color | #7D1515 |  |  |

## widget

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `widget.message.addon.bg.featuredIcon` | color | {fill.default} | #798086 |  |
| `widget.message.addon.bg.uploading` | color | {widget.message.bg.sender} | #1D70E2 |  |
| `widget.message.addon.size` | sizing | 48 |  |  |
| `widget.message.addon.uploading.borderRadius` | borderRadius | {widget.message.document.addon.featuredIcon.borderRadius} | 48 / 2 |  |
| `widget.message.addon.uploading.fileSize.borderRadius` | borderRadius | {widget.message.media.addon.uploading.fileSize.height} / 2 | 24 / 2 |  |
| `widget.message.bg.recipient` | color | {fill.default} | #798086 |  |
| `widget.message.bg.sender` | color | {product1} | #1D70E2 | ⚙darken 0.5 (hsl) |
| `widget.message.borderRadius` | borderRadius | {borderRadius.lg} | 8 * 2 |  |
| `widget.message.bubble.actions.gap` | spacing | 8 |  |  |
| `widget.message.bubble.gap` | spacing | 12 |  |  |
| `widget.message.bubble.maxWidth` | sizing | 224 |  |  |
| `widget.message.bubble.padding` | spacing | 16 |  |  |
| `widget.message.bubble.reactions.gap` | spacing | 8 |  |  |
| `widget.message.description` | color | {tt.secondary} | #2C2C2C |  |
| `widget.message.document.addon.cover.borderRadius` | borderRadius | {borderRadius.md} | 8 |  |
| `widget.message.document.addon.featuredIcon.borderRadius` | borderRadius | {widget.message.addon.size} / 2 | 48 / 2 |  |
| `widget.message.document.addon.featuredIcon.iconSize` | sizing | {icon.lg} | 24 |  |
| `widget.message.gap` | spacing | 4 |  |  |
| `widget.message.media.addon.uploading.fileSize.height` | sizing | 24 |  |  |
| `widget.message.media.addon.uploading.fileSize.paddingH` | spacing | 8 |  |  |
| `widget.message.paddingV` | spacing | 4 |  |  |
| `widget.message.text` | color | {tt.primary} | #2C2C2C |  |
| `widget.reply.borderWidth` | borderWidth | {borderWidth.strong} | 1 + 1 |  |
| `widget.reply.br` | color | {br.accent1} | #1D70E2 |  |
| `widget.reply.cover.borderRadius.md` | borderRadius | {borderRadius.md} | 8 |  |
| `widget.reply.cover.borderRadius.sm` | borderRadius | {borderRadius.sm} | 8 / 2 |  |
| `widget.reply.cover.height.md` | sizing | 40 |  |  |
| `widget.reply.cover.height.sm` | sizing | 32 |  |  |
| `widget.reply.description` | color | {tt.primary} | #2C2C2C |  |
| `widget.reply.gap` | spacing | 8 |  |  |
| `widget.reply.minWidth.md` | sizing | 96 |  |  |
| `widget.reply.minWidth.sm` | sizing | 80 |  |  |
| `widget.reply.paddingL` | spacing | 8 |  |  |
| `widget.reply.paddingV` | spacing | 2 |  |  |
| `widget.reply.title.accent1` | color | {tt.accent1} | #1D70E2 |  |
| `widget.reply.title.default` | color | {tt.primary} | #2C2C2C |  |

## wof

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `wof.br.width` | borderWidth | 1 |  |  |
| `wof.btn.default.center` | color | #C12828 |  |  |
| `wof.btn.default.start` | color | #FE8686 |  |  |
| `wof.btn.dropShadow.blur` | number | 8 |  |  |
| `wof.btn.dropShadow.color` | color | #000000 |  | ⚙alpha 0.75 (hsl) |
| `wof.btn.dropShadow.y` | number | 4 |  |  |
| `wof.btn.hover.center` | color | #E65252 |  |  |
| `wof.btn.hover.start` | color | #FFB6B6 |  |  |
| `wof.btn.innerShadow.blur` | number | 10 |  |  |
| `wof.btn.innerShadow.color` | color | #ffffff |  | ⚙alpha 0.50 (hsl) |
| `wof.sector.br.color` | color | #A1FFF9 |  |  |
| `wof.sector.primary.color` | color | #ffffff |  |  |
| `wof.sector.primary.end` | color | #3B88E5 |  |  |
| `wof.sector.primary.start` | color | #AFE2FF |  |  |
| `wof.sector.secondary.color` | color | #ffffff |  |  |
| `wof.sector.secondary.end` | color | #3DA94A |  |  |
| `wof.sector.secondary.start` | color | #F7FFC3 |  |  |
| `wof.sector.tertiary.color` | color | #ffffff |  |  |
| `wof.sector.tertiary.end` | color | #BB6AFA |  |  |
| `wof.sector.tertiary.start` | color | #FDE6FF |  |  |

## wom

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `wom.borderWidth` | borderWidth | {borderWidth.default} | 1 |  |
| `wom.pointer.arrow.end` | color | #F7A604 |  |  |
| `wom.pointer.arrow.start` | color | {warning} | #FFC700 |  |
| `wom.pointer.bg` | color | {warning} | #FFC700 |  |
| `wom.pointer.btn.color` | color | {tt.white} | #FFFFFF |  |
| `wom.sector.border.1` | color | {warning} | #FFC700 |  |
| `wom.sector.border.2` | color | {product1} | #1D70E2 |  |
| `wom.sector.border.3` | color | {alt1} | #a04bc4 |  |
| `wom.sector.border.4` | color | {alt2} | #00BCD4 |  |
| `wom.sector.border.5` | color | {product2} | #F40084 |  |
| `wom.sector.border.6` | color | {success} | #0EA45B |  |
| `wom.sector.color.text` | color | {tt.white} | #FFFFFF |  |
| `wom.sector.color.title` | color | {tt.secondary} | #2C2C2C |  |
| `wom.sector.shape.br` | color | {br.primary} | #798086 |  |
| `wom.sector.shape.end` | color | #FFF9D8 |  |  |
| `wom.sector.shape.start` | color | #FFD9B1 |  |  |
| `wom.thumb.height.md` | sizing | 75 |  |  |
| `wom.thumb.height.sm` | sizing | 37.5 |  |  |
| `wom.thumb.width.md` | sizing | 100 |  |  |
| `wom.thumb.width.sm` | sizing | 50 |  |  |
