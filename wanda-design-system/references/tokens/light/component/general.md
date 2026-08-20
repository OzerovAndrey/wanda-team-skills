# Light / component / general

Джерело: `light/component/general.json` (Token Studio export). Автозгенеровано з JSON —
не редагувати вручну, а перегенерувати скриптом при новому експорті.

Колонки: **Raw** — значення як записано в цьому сеті (alias `{...}` або
літерал). **Resolved** — фінальне значення після проходу по стеку сетів
light/core → light/map → light/alias → light/styles → light/component/general → light/component/product → light/component/widget → light/component/betting (порядок з `$themes.json`/`$metadata.json`); порожньо, якщо Raw уже
літерал.


## alert

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `alert.bg.error` | color | {danger} | #D83232 | ⚙alpha 0.1 (hsl) |
| `alert.bg.info` | color | {info} | #1D70E2 | ⚙alpha 0.1 (hsl) |
| `alert.bg.success` | color | {success} | #0EA45B | ⚙alpha 0.1 (hsl) |
| `alert.bg.tip` | color | {fill.default} | #798086 |  |
| `alert.bg.warning` | color | {warning} | #FFC700 | ⚙alpha 0.1 (hsl) |
| `alert.borderRadius` | borderRadius | {borderRadius.md} | 8 |  |
| `alert.borderWidth` | borderWidth | {borderWidth.default} | 1 |  |
| `alert.br.error` | color | {danger} | #D83232 |  |
| `alert.br.info` | color | {info} | #1D70E2 |  |
| `alert.br.success` | color | {success} | #0EA45B |  |
| `alert.br.tip` | color | {br.primary} | #798086 |  |
| `alert.br.warning` | color | {warning} | #FFC700 |  |
| `alert.collapse.padding` | spacing | 8 |  |  |
| `alert.color` | color | {tt.primary} | #2C2C2C |  |
| `alert.gap` | spacing | 8 |  |  |
| `alert.icon.error` | color | {tt.danger} | #D83232 |  |
| `alert.icon.info` | color | {tt.info} | #1D70E2 |  |
| `alert.icon.success` | color | {tt.success} | #0EA45B |  |
| `alert.icon.tip` | color | {tt.tertiary} | #2C2C2C |  |
| `alert.icon.warning` | color | {tt.warning} | #FFC700 |  |
| `alert.iconSize` | sizing | {icon.md} | 20 |  |
| `alert.padding` | spacing | 8 |  |  |
| `alert.shift` | sizing | 40 |  |  |

## avatar

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `avatar.add.bg` | color | {bg.neutral.primary} | #798086 |  |
| `avatar.bg` | color | {fill.default} | #798086 |  |
| `avatar.borderRadius.lg` | borderRadius | {avatar.size.lg} / 2 | 48 / 2 |  |
| `avatar.borderRadius.md` | borderRadius | {avatar.size.md} / 2 | 40 / 2 |  |
| `avatar.borderRadius.sm` | borderRadius | {avatar.size.sm} / 2 | 24 / 2 |  |
| `avatar.borderRadius.xl` | borderRadius | {avatar.size.xl} / 2 | 72 / 2 |  |
| `avatar.borderWidth` | borderWidth | {borderWidth.default} | 1 |  |
| `avatar.br` | color | {br.secondary} | #798086 |  |
| `avatar.color` | color | {tt.tertiary} | #2C2C2C |  |
| `avatar.iconSize.lg` | sizing | {avatar.iconSize.md} | 24 |  |
| `avatar.iconSize.md` | sizing | {icon.lg} | 24 |  |
| `avatar.iconSize.sm` | sizing | {icon.sm} | 16 |  |
| `avatar.iconSize.xl` | sizing | {icon.xl} | 32 |  |
| `avatar.size.addSize` | sizing | 28 |  |  |
| `avatar.size.lg` | sizing | 48 |  |  |
| `avatar.size.md` | sizing | 40 |  |  |
| `avatar.size.sm` | sizing | 24 |  |  |
| `avatar.size.xl` | sizing | 72 |  |  |

## badge

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `badge.bg.accent1` | color | {product2} | #F40084 |  |
| `badge.bg.accent2` | color | {product1} | #1D70E2 |  |
| `badge.bg.default` | color | {fill.default} | #798086 |  |
| `badge.bg.important` | color | {danger} | #D83232 |  |
| `badge.bg.success` | color | {success} | #0EA45B |  |
| `badge.bookmark.bg` | color | {bg.neutral.quaternary} | #798086 |  |
| `badge.bookmark.borderRadius` | borderRadius | {borderRadius.md} - 4 | 8 - 4 |  |
| `badge.bookmark.color` | color | {tt.primary} | #2C2C2C |  |
| `badge.bookmark.gap` | spacing | 8 |  |  |
| `badge.bookmark.height` | sizing | {controlSize.sm} | 40 - 8 |  |
| `badge.bookmark.iconSize` | sizing | {icon.sm} | 16 |  |
| `badge.bookmark.paddingH` | spacing | 8 |  |  |
| `badge.circle.borderRadius.md` | other | {badge.counter.size.md} / 2 | 20 / 2 |  |
| `badge.circle.borderRadius.sm` | other | {badge.counter.size.sm} / 2 | 16 / 2 |  |
| `badge.counter.borderRadius.md` | borderRadius | {badge.circle.borderRadius.md} | 20 / 2 |  |
| `badge.counter.borderRadius.sm` | borderRadius | {badge.circle.borderRadius.sm} | 16 / 2 |  |
| `badge.counter.color.accent1` | color | {tt.white} | #FFFFFF |  |
| `badge.counter.color.accent2` | color | {tt.white} | #FFFFFF |  |
| `badge.counter.color.default` | color | {tt.secondary} | #2C2C2C |  |
| `badge.counter.color.important` | color | {tt.white} | #FFFFFF |  |
| `badge.counter.color.success` | color | {tt.white} | #FFFFFF |  |
| `badge.counter.paddingH.md` | spacing | 6.5 |  |  |
| `badge.counter.paddingH.sm` | spacing | 5 |  |  |
| `badge.counter.size.md` | sizing | 20 |  |  |
| `badge.counter.size.sm` | sizing | 16 |  |  |
| `badge.notifier.borderRadius` | borderRadius | {badge.notifier.size} / 2 | 6 / 2 |  |
| `badge.notifier.size` | sizing | 6 |  |  |
| `badge.ripple.opacity.end` | opacity | 0 |  |  |
| `badge.ripple.opacity.start` | opacity | 0.64 |  |  |
| `badge.rounded.borderRadius.md` | other | {badge.counter.size.md} * {borderRadius.md} / {controlSize.md} | 20 * 8 / 40 |  |
| `badge.rounded.borderRadius.sm` | other | {badge.counter.size.sm} * {borderRadius.md} / {controlSize.md} | 16 * 8 / 40 |  |

## btn

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `btn.accent.bg.end.active` | color | {product2} | #F40084 | ⚙darken 0.3 (hsl) |
| `btn.accent.bg.end.default` | color | {product2} | #F40084 | ⚙darken 0.1 (hsl) |
| `btn.accent.bg.end.disabled` | color | {btn.accent.bg.end.default} | #F40084 | ⚙alpha 0.4 (hsl) |
| `btn.accent.bg.end.focus` | color | {btn.accent.bg.end.default} | #F40084 |  |
| `btn.accent.bg.end.hover` | color | {product2} | #F40084 | ⚙lighten 0.2 (hsl) |
| `btn.accent.bg.end.loading` | color | {btn.accent.bg.end.default} | #F40084 |  |
| `btn.accent.bg.start.active` | color | {product2} | #F40084 |  |
| `btn.accent.bg.start.default` | color | {product2} | #F40084 | ⚙lighten 0.2 (hsl) |
| `btn.accent.bg.start.disabled` | color | {btn.accent.bg.start.default} | #F40084 | ⚙alpha 0.4 (hsl) |
| `btn.accent.bg.start.focus` | color | {btn.accent.bg.start.default} | #F40084 |  |
| `btn.accent.bg.start.hover` | color | {product2} | #F40084 | ⚙lighten 0.5 (hsl) |
| `btn.accent.bg.start.loading` | color | {btn.accent.bg.start.default} | #F40084 |  |
| `btn.accent.br.active` | color | {btn.accent.br.default} | transparent |  |
| `btn.accent.br.default` | color | transparent |  |  |
| `btn.accent.br.disabled` | color | {btn.accent.br.default} | transparent |  |
| `btn.accent.br.focus` | color | {btn.accent.br.default} | transparent |  |
| `btn.accent.br.hover` | color | {btn.accent.br.default} | transparent |  |
| `btn.accent.br.loading` | color | {btn.accent.br.default} | transparent |  |
| `btn.accent.color.active` | color | {btn.accent.color.default} | #FFFFFF |  |
| `btn.accent.color.default` | color | {tt.white} | #FFFFFF |  |
| `btn.accent.color.disabled` | color | {btn.accent.color.default} | #FFFFFF |  |
| `btn.accent.color.focus` | color | {btn.accent.color.default} | #FFFFFF |  |
| `btn.accent.color.hover` | color | {btn.accent.color.default} | #FFFFFF |  |
| `btn.borderRadius.lg` | borderRadius | {btn.circle.borderRadius.lg} | 40 + 8 / 2 |  |
| `btn.borderRadius.md` | borderRadius | {btn.circle.borderRadius.md} | 40 / 2 |  |
| `btn.borderRadius.sm` | borderRadius | {btn.circle.borderRadius.sm} | 40 - 8 / 2 |  |
| `btn.borderRadius.xl` | borderRadius | {btn.circle.borderRadius.xl} | 40 + 16 / 2 |  |
| `btn.borderRadius.xs` | borderRadius | {btn.circle.borderRadius.xs} | 40 - 16 / 2 |  |
| `btn.borderWidth.accent` | borderWidth | {borderWidthNone} | 0 |  |
| `btn.borderWidth.danger` | borderWidth | {borderWidthNone} | 0 |  |
| `btn.borderWidth.neutral` | borderWidth | {borderWidthNone} | 0 |  |
| `btn.borderWidth.outline` | borderWidth | {borderWidth.outline.md} | 4 |  |
| `btn.borderWidth.primary` | borderWidth | {borderWidthNone} | 0 |  |
| `btn.borderWidth.secondary` | borderWidth | {borderWidthNone} | 0 |  |
| `btn.borderWidth.text` | borderWidth | {borderWidth.strong} | 1 + 1 |  |
| `btn.boxShadow.base.blur.md` | number | 2 |  |  |
| `btn.boxShadow.base.color.accent` | color | {product2Step.900} | #F40084 | ⚙alpha 0.3 (hsl) |
| `btn.boxShadow.base.color.danger` | color | {dangerStep.900} | #D83232 | ⚙alpha 0.3 (hsl) |
| `btn.boxShadow.base.color.primary` | color | {product1Step.900} | #1D70E2 | ⚙alpha 0.3 (hsl) |
| `btn.boxShadow.base.color.secondary` | color | transparent |  |  |
| `btn.boxShadow.base.y.md` | number | 2 |  |  |
| `btn.boxShadow.darkEdge.blur.md` | number | 6 |  |  |
| `btn.boxShadow.darkEdge.color.accent` | color | {white} | #FFFFFF | ⚙alpha 0 (hsl) |
| `btn.boxShadow.darkEdge.color.danger` | color | {white} | #FFFFFF | ⚙alpha 0 (hsl) |
| `btn.boxShadow.darkEdge.color.primary` | color | {white} | #FFFFFF | ⚙alpha 0 (hsl) |
| `btn.boxShadow.darkEdge.color.secondary` | color | transparent |  |  |
| `btn.boxShadow.darkEdge.y.md` | number | -3 |  |  |
| `btn.boxShadow.glow.blur.md` | number | 16 |  |  |
| `btn.boxShadow.glow.color.accent` | color | {product2} | #F40084 | ⚙alpha 0 (hsl) |
| `btn.boxShadow.glow.color.danger` | color | {danger} | #D83232 | ⚙alpha 0 (hsl) |
| `btn.boxShadow.glow.color.primary` | color | {product1Step.500} | #1D70E2 | ⚙alpha 0 (hsl) |
| `btn.boxShadow.glow.color.secondary` | color | transparent |  |  |
| `btn.boxShadow.glow.y.md` | number | 4 |  |  |
| `btn.boxShadow.lightEdge.blur.md` | number | 6 |  |  |
| `btn.boxShadow.lightEdge.color.accent` | color | {white} | #FFFFFF | ⚙alpha 0.4 (hsl) |
| `btn.boxShadow.lightEdge.color.danger` | color | {white} | #FFFFFF | ⚙alpha 0.4 (hsl) |
| `btn.boxShadow.lightEdge.color.primary` | color | {white} | #FFFFFF | ⚙alpha 0.4 (hsl) |
| `btn.boxShadow.lightEdge.color.secondary` | color | transparent |  |  |
| `btn.boxShadow.lightEdge.y.md` | number | 3 |  |  |
| `btn.circle.borderRadius.lg` | other | {btn.size.lg} / 2 | 40 + 8 / 2 |  |
| `btn.circle.borderRadius.md` | other | {btn.size.md} / 2 | 40 / 2 |  |
| `btn.circle.borderRadius.sm` | other | {btn.size.sm} / 2 | 40 - 8 / 2 |  |
| `btn.circle.borderRadius.xl` | other | {btn.size.xl} / 2 | 40 + 16 / 2 |  |
| `btn.circle.borderRadius.xs` | other | {btn.size.xs} / 2 | 40 - 16 / 2 |  |
| `btn.danger.bg.disabled` | color | {fill.disabled.default} | #000000 |  |
| `btn.danger.bg.end.active` | color | {danger} | #D83232 | ⚙darken 0.3 (hsl) |
| `btn.danger.bg.end.default` | color | {danger} | #D83232 | ⚙darken 0.1 (hsl) |
| `btn.danger.bg.end.focus` | color | {danger} | #D83232 | ⚙darken 0.1 (hsl) |
| `btn.danger.bg.end.hover` | color | {danger} | #D83232 | ⚙darken 0.03 (hsl) |
| `btn.danger.bg.end.loading` | color | {btn.danger.bg.end.default} | #D83232 |  |
| `btn.danger.bg.start.active` | color | {danger} | #D83232 | ⚙darken 0.05 (hsl) |
| `btn.danger.bg.start.default` | color | {danger} | #D83232 | ⚙lighten 0.15 (hsl) |
| `btn.danger.bg.start.focus` | color | {danger} | #D83232 | ⚙lighten 0.15 (hsl) |
| `btn.danger.bg.start.hover` | color | {danger} | #D83232 | ⚙lighten 0.27 (hsl) |
| `btn.danger.bg.start.loading` | color | {btn.danger.bg.start.default} | #D83232 |  |
| `btn.danger.br.active` | color | {btn.danger.br.default} | transparent |  |
| `btn.danger.br.default` | color | transparent |  |  |
| `btn.danger.br.disabled` | color | {btn.danger.br.default} | transparent |  |
| `btn.danger.br.focus` | color | {btn.danger.br.default} | transparent |  |
| `btn.danger.br.hover` | color | {btn.danger.br.default} | transparent |  |
| `btn.danger.br.loading` | color | {btn.danger.br.default} | transparent |  |
| `btn.danger.color.active` | color | {btn.danger.color.default} | #FFFFFF |  |
| `btn.danger.color.default` | color | {tt.white} | #FFFFFF |  |
| `btn.danger.color.disabled` | color | {btn.primary.color.disabled} | #FFFFFF |  |
| `btn.danger.color.focus` | color | {btn.danger.color.default} | #FFFFFF |  |
| `btn.danger.color.hover` | color | {btn.danger.color.default} | #FFFFFF |  |
| `btn.fontWeight` | fontWeights | {fontWeightStrong} | 600 |  |
| `btn.gap.lg` | spacing | 10 |  |  |
| `btn.gap.md` | spacing | 8 |  |  |
| `btn.gap.sm` | spacing | 6 |  |  |
| `btn.gap.xl` | spacing | 12 |  |  |
| `btn.gap.xs` | spacing | 4 |  |  |
| `btn.iconSize.lg` | sizing | {icon.lg} | 24 |  |
| `btn.iconSize.md` | sizing | {icon.md} | 20 |  |
| `btn.iconSize.sm` | sizing | {icon.sm} | 16 |  |
| `btn.iconSize.xl` | sizing | {icon.xl} | 32 |  |
| `btn.iconSize.xs` | sizing | {icon.xxs} | 12 |  |
| `btn.letterSpacing` | letterSpacing | 0% |  |  |
| `btn.link.color.active` | color | {product1} | #1D70E2 | ⚙darken 0.2 (hsl) |
| `btn.link.color.default` | color | {product1} | #1D70E2 |  |
| `btn.link.color.disabled` | color | {btn.secondary.color.disabled} | #2C2C2C |  |
| `btn.link.color.focus` | color | {btn.link.color.default} | #1D70E2 |  |
| `btn.link.color.hover` | color | {product1} | #1D70E2 | ⚙lighten 0.12 (hsl) |
| `btn.neutral.bg.active` | color | {btn.neutral.bg.default} | #798086 |  |
| `btn.neutral.bg.default` | color | {bg.neutral.primary} | #798086 |  |
| `btn.neutral.bg.disabled` | color | {btn.neutral.bg.default} | #798086 |  |
| `btn.neutral.bg.focus` | color | {btn.neutral.bg.default} | #798086 |  |
| `btn.neutral.bg.hover` | color | {btn.neutral.bg.default} | #798086 |  |
| `btn.neutral.bg.loading` | color | {btn.neutral.bg.default} | #798086 |  |
| `btn.neutral.br.active` | color | {btn.accent.br.default} | transparent |  |
| `btn.neutral.br.default` | color | transparent |  |  |
| `btn.neutral.br.disabled` | color | {btn.accent.br.default} | transparent |  |
| `btn.neutral.br.focus` | color | {btn.accent.br.default} | transparent |  |
| `btn.neutral.br.hover` | color | {btn.accent.br.default} | transparent |  |
| `btn.neutral.br.loading` | color | {btn.neutral.br.default} | transparent |  |
| `btn.neutral.color.active` | color | {btn.neutral.color.hover} | #2C2C2C |  |
| `btn.neutral.color.default` | color | {tt.primary} | #2C2C2C |  |
| `btn.neutral.color.disabled` | color | {btn.secondary.color.disabled} | #2C2C2C |  |
| `btn.neutral.color.focus` | color | {btn.neutral.color.default} | #2C2C2C |  |
| `btn.neutral.color.hover` | color | {tt.primary} | #2C2C2C |  |
| `btn.outline.borderRadius.lg` | borderRadius | {btn.borderRadius.lg} + 1 | 40 + 8 / 2 + 1 |  |
| `btn.outline.borderRadius.md` | borderRadius | {btn.borderRadius.md} + 1 | 40 / 2 + 1 |  |
| `btn.outline.borderRadius.sm` | borderRadius | {btn.borderRadius.sm} + 1 | 40 - 8 / 2 + 1 |  |
| `btn.outline.borderRadius.xl` | borderRadius | {btn.borderRadius.xl} + 1 | 40 + 16 / 2 + 1 |  |
| `btn.outline.borderRadius.xs` | borderRadius | {btn.borderRadius.xs} + 1 | 40 - 16 / 2 + 1 |  |
| `btn.outline.color` | color | {outline.default} | #F40084 |  |
| `btn.outlineSize.lg` | sizing | {controlSize.lg} + 2 | 40 + 8 + 2 |  |
| `btn.outlineSize.md` | sizing | {controlSize.md} + 2 | 40 + 2 |  |
| `btn.outlineSize.sm` | sizing | {controlSize.sm} + 2 | 40 - 8 + 2 |  |
| `btn.outlineSize.xl` | sizing | {controlSize.xl} + 2 | 40 + 16 + 2 |  |
| `btn.outlineSize.xs` | sizing | {controlSize.xs} + 2 | 40 - 16 + 2 |  |
| `btn.paddingH.lg` | spacing | 32 |  |  |
| `btn.paddingH.md` | spacing | 24 |  |  |
| `btn.paddingH.sm` | spacing | 12 |  |  |
| `btn.paddingH.xl` | spacing | 40 |  |  |
| `btn.paddingH.xs` | spacing | 12 |  |  |
| `btn.primary.bg.end.active` | color | {product1} | #1D70E2 | ⚙darken 0.3 (hsl) |
| `btn.primary.bg.end.default` | color | {product1} | #1D70E2 | ⚙darken 0.1 (hsl) |
| `btn.primary.bg.end.disabled` | color | {btn.primary.bg.end.default} | #1D70E2 | ⚙alpha 0.4 (hsl) |
| `btn.primary.bg.end.focus` | color | {btn.primary.bg.end.default} | #1D70E2 |  |
| `btn.primary.bg.end.hover` | color | {product1} | #1D70E2 | ⚙lighten 0.2 (hsl) |
| `btn.primary.bg.end.loading` | color | {btn.primary.bg.end.default} | #1D70E2 |  |
| `btn.primary.bg.start.active` | color | {product1} | #1D70E2 |  |
| `btn.primary.bg.start.default` | color | {product1} | #1D70E2 | ⚙lighten 0.2 (hsl) |
| `btn.primary.bg.start.disabled` | color | {btn.primary.bg.start.default} | #1D70E2 | ⚙alpha 0.4 (hsl) |
| `btn.primary.bg.start.focus` | color | {btn.primary.bg.start.default} | #1D70E2 |  |
| `btn.primary.bg.start.hover` | color | {product1} | #1D70E2 | ⚙lighten 0.5 (hsl) |
| `btn.primary.bg.start.loading` | color | {btn.primary.bg.start.default} | #1D70E2 |  |
| `btn.primary.br.active` | color | {btn.primary.br.default} | transparent |  |
| `btn.primary.br.default` | color | transparent |  |  |
| `btn.primary.br.disabled` | color | {btn.primary.br.default} | transparent |  |
| `btn.primary.br.focus` | color | {btn.primary.br.default} | transparent |  |
| `btn.primary.br.hover` | color | {btn.primary.br.default} | transparent |  |
| `btn.primary.br.loading` | color | {btn.primary.br.default} | transparent |  |
| `btn.primary.color.active` | color | {btn.primary.color.default} | #FFFFFF |  |
| `btn.primary.color.default` | color | {tt.white} | #FFFFFF |  |
| `btn.primary.color.disabled` | color | {btn.primary.color.default} | #FFFFFF |  |
| `btn.primary.color.focus` | color | {btn.primary.color.default} | #FFFFFF |  |
| `btn.primary.color.hover` | color | {btn.primary.color.default} | #FFFFFF |  |
| `btn.rounded.borderRadius.lg` | other | {btn.borderRadius.md} * {btn.size.lg} / {controlSize.md} | 40 / 2 * 40 + 8 / 40 |  |
| `btn.rounded.borderRadius.md` | other | {borderRadius.md} * {btn.size.md} / {controlSize.md} | 8 * 40 / 40 |  |
| `btn.rounded.borderRadius.sm` | other | {btn.borderRadius.md} * {btn.size.sm} / {controlSize.md} | 40 / 2 * 40 - 8 / 40 |  |
| `btn.rounded.borderRadius.xl` | other | {btn.borderRadius.md} * {btn.size.xl} / {controlSize.md} | 40 / 2 * 40 + 16 / 40 |  |
| `btn.rounded.borderRadius.xs` | other | {btn.borderRadius.md} * {btn.size.xs} / {controlSize.md} | 40 / 2 * 40 - 16 / 40 |  |
| `btn.secondary.bg.disabled` | color | {fill.disabled.default} | #000000 |  |
| `btn.secondary.bg.end.active` | color | {btn.secondary.bg.start.active} | #1D70E2 |  |
| `btn.secondary.bg.end.default` | color | {btn.secondary.bg.start.default} | #1D70E2 |  |
| `btn.secondary.bg.end.focus` | color | {btn.secondary.bg.end.default} | #1D70E2 |  |
| `btn.secondary.bg.end.hover` | color | {btn.secondary.bg.start.hover} | #1D70E2 |  |
| `btn.secondary.bg.end.loading` | color | {btn.secondary.bg.end.default} | #1D70E2 |  |
| `btn.secondary.bg.start.active` | color | {btn.secondary.bg.start.default} | #1D70E2 | ⚙darken 0.5 (hsl) |
| `btn.secondary.bg.start.default` | color | {tone.bg.vibrant} | #1D70E2 | ⚙alpha 0.16 (hsl) |
| `btn.secondary.bg.start.focus` | color | {btn.secondary.bg.start.default} | #1D70E2 |  |
| `btn.secondary.bg.start.hover` | color | {btn.secondary.bg.start.default} | #1D70E2 | ⚙lighten 0.6 (hsl) |
| `btn.secondary.bg.start.loading` | color | {btn.secondary.bg.start.default} | #1D70E2 |  |
| `btn.secondary.br.active` | color | {btn.secondary.br.default} | transparent |  |
| `btn.secondary.br.default` | color | transparent |  |  |
| `btn.secondary.br.disabled` | color | {btn.secondary.br.default} | transparent |  |
| `btn.secondary.br.focus` | color | {btn.secondary.br.default} | transparent |  |
| `btn.secondary.br.hover` | color | {btn.secondary.br.default} | transparent |  |
| `btn.secondary.br.loading` | color | {btn.secondary.br.default} | transparent |  |
| `btn.secondary.color.active` | color | {btn.secondary.color.default} | #2C2C2C |  |
| `btn.secondary.color.default` | color | {tt.primary} | #2C2C2C |  |
| `btn.secondary.color.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `btn.secondary.color.focus` | color | {btn.secondary.color.default} | #2C2C2C |  |
| `btn.secondary.color.hover` | color | {btn.secondary.color.default} | #2C2C2C |  |
| `btn.size.lg` | sizing | {controlSize.lg} | 40 + 8 |  |
| `btn.size.md` | sizing | {controlSize.md} | 40 |  |
| `btn.size.sm` | sizing | {controlSize.sm} | 40 - 8 |  |
| `btn.size.xl` | sizing | {controlSize.xl} | 40 + 16 |  |
| `btn.size.xs` | sizing | {controlSize.xs} | 40 - 16 |  |
| `btn.text.bg.active` | color | {fill.darker} | #798086 |  |
| `btn.text.bg.default` | color | transparent |  |  |
| `btn.text.bg.disabled` | color | transparent |  |  |
| `btn.text.bg.focus` | color | {btn.text.bg.default} | transparent |  |
| `btn.text.bg.hover` | color | {fill.lighter} | #798086 |  |
| `btn.text.bg.loading` | color | {btn.text.bg.default} | transparent |  |
| `btn.text.br.active` | color | {btn.text.br.default} | transparent |  |
| `btn.text.br.default` | color | transparent |  |  |
| `btn.text.br.disabled` | color | {btn.text.br.default} | transparent |  |
| `btn.text.br.focus` | color | {btn.text.br.default} | transparent |  |
| `btn.text.br.hover` | color | {btn.text.br.default} | transparent |  |
| `btn.text.br.loading` | color | {btn.text.br.default} | transparent |  |
| `btn.text.color.active` | color | {btn.secondary.color.active} | #2C2C2C |  |
| `btn.text.color.default` | color | {btn.secondary.color.default} | #2C2C2C |  |
| `btn.text.color.disabled` | color | {btn.secondary.color.disabled} | #2C2C2C |  |
| `btn.text.color.focus` | color | {btn.secondary.color.focus} | #2C2C2C |  |
| `btn.text.color.hover` | color | {btn.secondary.color.hover} | #2C2C2C |  |
| `btn.textCase` | textCase | none |  |  |
| `btn.textShadow.blur.md` | number | 3 |  |  |
| `btn.textShadow.color.accent` | color | {product2Step.900} | #F40084 | ⚙alpha 0.3 (hsl) |
| `btn.textShadow.color.danger` | color | {dangerStep.900} | #D83232 | ⚙alpha 0.3 (hsl) |
| `btn.textShadow.color.primary` | color | {product1Step.900} | #1D70E2 | ⚙alpha 0.2 (hsl) |
| `btn.textShadow.color.secondary` | color | {fill.default} | #798086 | ⚙alpha 0 (hsl) |
| `btn.textShadow.y.md` | number | 2 |  |  |

## checkbox

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `checkbox.borderRadius` | borderRadius | {checkbox.size} * {borderRadius.md} / {controlSize.md} | 20 * 8 / 40 |  |
| `checkbox.borderWidth.default` | borderWidth | 0 |  |  |
| `checkbox.borderWidth.outline` | borderWidth | {borderWidth.outline.md} | 4 |  |
| `checkbox.borderWidth.validation` | borderWidth | {borderWidth.default} | 1 |  |
| `checkbox.br.active` | color | {checkbox.br.default} | #1D70E2 |  |
| `checkbox.br.default` | color | {br.vibrant.primary} | #1D70E2 |  |
| `checkbox.br.disabled` | color | {br.disabled.primary} | #000000 |  |
| `checkbox.br.error.active` | color | {checkbox.br.error.default} | #D83232 |  |
| `checkbox.br.error.default` | color | {input.br.error.default} | #D83232 |  |
| `checkbox.br.error.focus` | color | {checkbox.br.error.default} | #D83232 |  |
| `checkbox.br.error.hover` | color | {checkbox.br.error.default} | #D83232 |  |
| `checkbox.br.focus` | color | {checkbox.br.default} | #1D70E2 |  |
| `checkbox.br.hover` | color | {checkbox.br.default} | #1D70E2 |  |
| `checkbox.checked.bg.active` | color | {product1} | #1D70E2 | ⚙darken 0.2 (hsl) |
| `checkbox.checked.bg.default` | color | {product1} | #1D70E2 |  |
| `checkbox.checked.bg.disabled` | color | {product1} | #1D70E2 | ⚙alpha 0.25 (hsl) |
| `checkbox.checked.bg.focus` | color | {checkbox.checked.bg.default} | #1D70E2 |  |
| `checkbox.checked.bg.hover` | color | {product1} | #1D70E2 | ⚙lighten 0.12 (hsl) |
| `checkbox.checked.indicator.active` | color | {checkbox.checked.indicator.default} | #FFFFFF |  |
| `checkbox.checked.indicator.default` | color | {tt.white} | #FFFFFF |  |
| `checkbox.checked.indicator.disabled` | color | {checkbox.checked.indicator.default} | #FFFFFF |  |
| `checkbox.checked.indicator.focus` | color | {checkbox.checked.indicator.default} | #FFFFFF |  |
| `checkbox.checked.indicator.hover` | color | {checkbox.checked.indicator.default} | #FFFFFF |  |
| `checkbox.default.bg.active` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.28 (hsl) |
| `checkbox.default.bg.default` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.2 (hsl) |
| `checkbox.default.bg.disabled` | color | {fill.disabled.default} | #000000 |  |
| `checkbox.default.bg.focus` | color | {checkbox.default.bg.default} | #798086 |  |
| `checkbox.default.bg.hover` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.12 (hsl) |
| `checkbox.description.default` | color | {tt.secondary} | #2C2C2C |  |
| `checkbox.description.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `checkbox.error.bg.active` | color | {checkbox.error.bg.hover} | #D83232 |  |
| `checkbox.error.bg.default` | color | {input.bg.error.default} | #D83232 |  |
| `checkbox.error.bg.focus` | color | {checkbox.error.bg.default} | #D83232 |  |
| `checkbox.error.bg.hover` | color | {input.bg.error.hover} | #D83232 |  |
| `checkbox.gap` | spacing | 12 |  |  |
| `checkbox.helper.error` | color | {input.helper.label.error} | #D83232 |  |
| `checkbox.iconSize` | sizing | {input.iconSize.md} | 16 |  |
| `checkbox.indeterminate.bg.active` | color | {checkbox.default.bg.active} | #798086 |  |
| `checkbox.indeterminate.bg.default` | color | {checkbox.default.bg.default} | #798086 |  |
| `checkbox.indeterminate.bg.disabled` | color | {checkbox.default.bg.disabled} | #000000 |  |
| `checkbox.indeterminate.bg.focus` | color | {checkbox.default.bg.focus} | #798086 |  |
| `checkbox.indeterminate.bg.hover` | color | {checkbox.default.bg.hover} | #798086 |  |
| `checkbox.indeterminate.indicator.active` | color | {product1} | #1D70E2 | ⚙darken 0.2 (hsl) |
| `checkbox.indeterminate.indicator.default` | color | {product1} | #1D70E2 |  |
| `checkbox.indeterminate.indicator.disabled` | color | {product1} | #1D70E2 | ⚙alpha 0.25 (hsl) |
| `checkbox.indeterminate.indicator.focus` | color | {checkbox.indeterminate.indicator.default} | #1D70E2 |  |
| `checkbox.indeterminate.indicator.hover` | color | {product1} | #1D70E2 | ⚙lighten 0.12 (hsl) |
| `checkbox.indicatorBorderRadius` | borderRadius | {checkbox.indicatorSize} * {borderRadius.md} / {controlSize.md} | 12 * 8 / 40 |  |
| `checkbox.indicatorSize` | sizing | 12 |  |  |
| `checkbox.label.active` | color | {checkbox.label.default} | #2C2C2C |  |
| `checkbox.label.default` | color | {tt.primary} | #2C2C2C |  |
| `checkbox.label.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `checkbox.label.focus` | color | {checkbox.label.default} | #2C2C2C |  |
| `checkbox.label.hover` | color | {checkbox.label.default} | #2C2C2C |  |
| `checkbox.outline.default` | color | {input.outline.default} | #F40084 |  |
| `checkbox.outline.error` | color | {input.outline.error} | #D83232 |  |
| `checkbox.outlineBorderRadius` | borderRadius | {checkbox.borderRadius} + 1 | 20 * 8 / 40 + 1 |  |
| `checkbox.size` | sizing | 20 |  |  |

## dropdown

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `dropdown.arrowShift` | spacing | 10 |  |  |
| `dropdown.bg` | color | {bg.popup.default} | #798086 |  |
| `dropdown.borderRadius` | borderRadius | {borderRadius.md} | 8 |  |
| `dropdown.divider.paddingV` | spacing | 4 |  |  |
| `dropdown.gap` | spacing | 4 |  |  |
| `dropdown.group.header.color` | color | {tt.tertiary} | #2C2C2C |  |
| `dropdown.group.header.paddingH` | spacing | 20 |  |  |
| `dropdown.group.headerSize` | sizing | {dropdown.item.size} | 40 |  |
| `dropdown.item.arrow.default` | color | {tt.quaternary} | #2C2C2C |  |
| `dropdown.item.arrow.hover` | color | {tt.tertiary} | #2C2C2C |  |
| `dropdown.item.arrowSize` | sizing | 16 |  |  |
| `dropdown.item.bg.active` | color | {fill.darker} | #798086 |  |
| `dropdown.item.bg.hover` | color | {fill.default} | #798086 |  |
| `dropdown.item.captionGap` | spacing | 8 |  |  |
| `dropdown.item.checked.bg.default` | color | {product1} | #1D70E2 | ⚙alpha 0.08 (hsl) |
| `dropdown.item.checked.bg.hover` | color | {product1} | #1D70E2 | ⚙alpha 0.16 (hsl) |
| `dropdown.item.checked.color.default` | color | {tt.accent1} | #1D70E2 |  |
| `dropdown.item.checked.color.hover` | color | {dropdown.item.checked.color.default} | #1D70E2 |  |
| `dropdown.item.color.caption` | color | {tt.tertiary} | #2C2C2C |  |
| `dropdown.item.color.default` | color | {tt.secondary} | #2C2C2C |  |
| `dropdown.item.color.hover` | color | {tt.primary} | #2C2C2C |  |
| `dropdown.item.danger.bg.hover` | color | {danger} | #D83232 | ⚙alpha 0.08 (hsl) |
| `dropdown.item.danger.color.default` | color | {tt.danger} | #D83232 |  |
| `dropdown.item.danger.color.hover` | color | {dropdown.item.danger.color.default} | #D83232 |  |
| `dropdown.item.disabled.color.caption` | color | {tt.quaternary} | #2C2C2C |  |
| `dropdown.item.disabled.color.default` | color | {tt.quaternary} | #2C2C2C |  |
| `dropdown.item.flagHeight` | sizing | 16 |  |  |
| `dropdown.item.flagWidth` | sizing | 24 |  |  |
| `dropdown.item.gap` | spacing | 16 |  |  |
| `dropdown.item.iconSize` | sizing | {icon.md} | 20 |  |
| `dropdown.item.indicatorPadding` | spacing | 16 |  |  |
| `dropdown.item.indicatorSize` | sizing | 20 |  |  |
| `dropdown.item.paddingH` | spacing | 20 |  |  |
| `dropdown.item.paddingV` | spacing | 8 |  |  |
| `dropdown.item.rounded.paddingH` | spacing | 12 |  |  |
| `dropdown.item.size` | sizing | {controlSize.md} | 40 |  |
| `dropdown.paddingV` | spacing | 8 |  |  |

## image

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `image.blur.md` | number | 16 |  |  |
| `image.blur.sm` | number | 4 |  |  |
| `image.borderRadius` | borderRadius | {borderRadius.md} | 8 |  |
| `image.maskEnd` | color | {black} | #000000 | ⚙alpha 0.72 (hsl) |
| `image.maskStart` | color | {black} | #000000 | ⚙alpha 0 (hsl) |

## input

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `input.addon.bg.default` | color | {fill.vibrant.lighter} | #1D70E2 |  |
| `input.addon.bg.disabled` | color | {fill.disabled.lighter} | #000000 |  |
| `input.addon.br.default` | color | {br.vibrant.secondary} | #1D70E2 |  |
| `input.addon.br.disabled` | color | {br.disabled.secondary} | #000000 |  |
| `input.addon.color.default` | color | {input.color.focus} | #2C2C2C |  |
| `input.addon.color.disabled` | color | {input.color.disabled} | #2C2C2C |  |
| `input.addon.splitterHeight.lg` | sizing | 28 |  | input.sizeLG \|\| custom |
| `input.addon.splitterHeight.md` | sizing | 20 |  | input.sizeMD \|\| custom |
| `input.addon.splitterHeight.sm` | sizing | 16 |  | input.sizeSM \|\| custom |
| `input.addon.splitterWidth` | sizing | {input.borderWidth.splitter} | 1 |  |
| `input.arrow.active` | color | {input.arrow.hover} | #2C2C2C |  |
| `input.arrow.default` | color | {input.clear.default} | #2C2C2C |  |
| `input.arrow.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `input.arrow.focus` | color | {input.arrow.default} | #2C2C2C |  |
| `input.arrow.hover` | color | {input.clear.hover} | #2C2C2C |  |
| `input.asterix` | color | {tt.danger} | #D83232 |  |
| `input.bg.active` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.28 (hsl) |
| `input.bg.default` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.2 (hsl) |
| `input.bg.disabled` | color | {fill.disabled.default} | #000000 |  |
| `input.bg.error.active` | color | {input.bg.error.hover} | #D83232 |  |
| `input.bg.error.default` | color | {fill.danger.default} | #D83232 |  |
| `input.bg.error.focus` | color | {input.bg.error.default} | #D83232 |  |
| `input.bg.error.hover` | color | {fill.danger.darker} | #D83232 |  |
| `input.bg.focus` | color | {input.bg.default} | #798086 |  |
| `input.bg.hover` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.12 (hsl) |
| `input.borderRadius.lg` | borderRadius | {borderRadius.md} | 8 | Default reference: input.rounded.borderRadiusLG |
| `input.borderRadius.md` | borderRadius | {borderRadius.md} | 8 | Default reference: input.rounded.borderRadiusMD |
| `input.borderRadius.sm` | borderRadius | {borderRadius.md} | 8 | Default reference: input.rounded.borderRadiusSM |
| `input.borderWidth.active` | borderWidth | {borderWidth.default} | 1 |  |
| `input.borderWidth.default` | borderWidth | {borderWidth.default} | 1 |  |
| `input.borderWidth.disabled` | borderWidth | {input.borderWidth.default} | 1 |  |
| `input.borderWidth.error.active` | borderWidth | {input.borderWidth.error.default} | 1 |  |
| `input.borderWidth.error.default` | borderWidth | {borderWidth.default} | 1 |  |
| `input.borderWidth.error.focus` | borderWidth | {input.borderWidth.error.default} | 1 |  |
| `input.borderWidth.error.hover` | borderWidth | {input.borderWidth.error.default} | 1 |  |
| `input.borderWidth.focus` | borderWidth | {borderWidth.default} | 1 |  |
| `input.borderWidth.hover` | borderWidth | {borderWidth.default} | 1 |  |
| `input.borderWidth.outline` | borderWidth | {borderWidth.outline.sm} | 3 |  |
| `input.borderWidth.splitter` | borderWidth | {borderWidth.default} | 1 |  |
| `input.borderWidth.success.active` | borderWidth | {input.borderWidth.success.default} | 1 |  |
| `input.borderWidth.success.default` | borderWidth | {borderWidth.default} | 1 |  |
| `input.borderWidth.success.focus` | borderWidth | {input.borderWidth.success.default} | 1 |  |
| `input.borderWidth.success.hover` | borderWidth | {input.borderWidth.success.default} | 1 |  |
| `input.borderWidth.warning.active` | borderWidth | {input.borderWidth.warning.default} | 1 |  |
| `input.borderWidth.warning.default` | borderWidth | {borderWidth.default} | 1 |  |
| `input.borderWidth.warning.focus` | borderWidth | {input.borderWidth.warning.default} | 1 |  |
| `input.borderWidth.warning.hover` | borderWidth | {input.borderWidth.warning.default} | 1 |  |
| `input.br.active` | color | transparent |  |  |
| `input.br.default` | color | transparent |  |  |
| `input.br.disabled` | color | {input.br.default} | transparent |  |
| `input.br.error.default` | color | {br.danger} | #D83232 |  |
| `input.br.focus` | color | transparent |  |  |
| `input.br.hover` | color | {input.br.default} | transparent |  |
| `input.br.success.default` | color | {br.success} | #0EA45B |  |
| `input.br.warning.default` | color | {br.warning} | #FFC700 |  |
| `input.centerGap.lg` | spacing | 8 |  |  |
| `input.centerGap.md` | spacing | 4 |  |  |
| `input.centerGap.sm` | spacing | 2 |  |  |
| `input.circle.borderRadius.lg` | other | {input.size.lg} / 2 | 40 + 8 / 2 |  |
| `input.circle.borderRadius.md` | other | {input.size.md} / 2 | 40 / 2 |  |
| `input.circle.borderRadius.sm` | other | {input.size.sm} / 2 | 40 - 8 / 2 |  |
| `input.clear.active` | color | {input.clear.hover} | #2C2C2C |  |
| `input.clear.default` | color | {tt.tertiary} | #2C2C2C |  |
| `input.clear.focus` | color | {input.clear.default} | #2C2C2C |  |
| `input.clear.hover` | color | {tt.primary} | #2C2C2C |  |
| `input.color.active` | color | {input.color.default} | #2C2C2C |  |
| `input.color.default` | color | {tt.tertiary} | #2C2C2C |  |
| `input.color.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `input.color.filled.active` | color | {input.color.filled.default} | #2C2C2C |  |
| `input.color.filled.default` | color | {input.color.focus} | #2C2C2C |  |
| `input.color.filled.disabled` | color | {tt.tertiary} | #2C2C2C |  |
| `input.color.filled.focus` | color | {input.color.filled.default} | #2C2C2C |  |
| `input.color.filled.hover` | color | {input.color.filled.default} | #2C2C2C |  |
| `input.color.focus` | color | {tt.primary} | #2C2C2C |  |
| `input.color.hover` | color | {input.color.default} | #2C2C2C |  |
| `input.counter.default` | color | {tt.tertiary} | #2C2C2C |  |
| `input.counter.error` | color | {tt.danger} | #D83232 |  |
| `input.counter.success` | color | {tt.success} | #0EA45B |  |
| `input.flagHeight.lg` | sizing | {input.iconSize.lg} | 20 |  |
| `input.flagHeight.md` | sizing | {input.iconSize.md} | 16 |  |
| `input.flagHeight.sm` | sizing | {input.iconSize.sm} | 14 |  |
| `input.flagWidth.lg` | sizing | 30 |  |  |
| `input.flagWidth.md` | sizing | 24 |  |  |
| `input.flagWidth.sm` | sizing | 22 |  |  |
| `input.gap.lg` | spacing | 12 |  |  |
| `input.gap.md` | spacing | 8 |  |  |
| `input.gap.sm` | spacing | {input.gap.md} | 8 |  |
| `input.header.gap` | spacing | 4 |  |  |
| `input.helper.icon.default` | color | {input.helper.label.default} | #2C2C2C |  |
| `input.helper.icon.error` | color | {input.helper.label.error} | #D83232 |  |
| `input.helper.icon.success` | color | {input.helper.label.success} | #0EA45B |  |
| `input.helper.icon.warning` | color | {tt.warning} | #FFC700 |  |
| `input.helper.label.default` | color | {tt.secondary} | #2C2C2C |  |
| `input.helper.label.error` | color | {tt.danger} | #D83232 |  |
| `input.helper.label.success` | color | {tt.success} | #0EA45B |  |
| `input.helper.label.warning` | color | {input.helper.label.default} | #2C2C2C |  |
| `input.iconInfo` | color | {tt.quaternary} | #2C2C2C |  |
| `input.iconSize.lg` | sizing | {icon.md} | 20 |  |
| `input.iconSize.md` | sizing | {icon.sm} | 16 |  |
| `input.iconSize.sm` | sizing | {icon.xs} | 14 |  |
| `input.label.default` | color | {tt.secondary} | #2C2C2C |  |
| `input.label.error` | color | {input.label.default} | #2C2C2C |  |
| `input.labelOptional` | color | {tt.tertiary} | #2C2C2C |  |
| `input.outline.default` | color | {outline.default} | #F40084 |  |
| `input.outline.error` | color | {outline.error} | #D83232 |  |
| `input.paddingH.lg` | spacing | {input.paddingH.md} | 12 |  |
| `input.paddingH.md` | spacing | 12 |  |  |
| `input.paddingH.sm` | spacing | {input.paddingH.md} | 12 |  |
| `input.paddingV.lg` | spacing | 12 |  |  |
| `input.paddingV.md` | spacing | 8 |  |  |
| `input.paddingV.sm` | spacing | 6 |  |  |
| `input.prefix.icon.default` | color | {input.color.focus} | #2C2C2C |  |
| `input.prefix.icon.disabled` | color | {input.color.disabled} | #2C2C2C |  |
| `input.prefix.label.default` | color | {input.color.focus} | #2C2C2C |  |
| `input.prefix.label.disabled` | color | {input.color.disabled} | #2C2C2C |  |
| `input.prefixGap.lg` | spacing | {input.suffixGap.lg} | 10 |  |
| `input.prefixGap.md` | spacing | {input.suffixGap.md} | 8 |  |
| `input.prefixGap.sm` | spacing | {input.suffixGap.sm} | 8 |  |
| `input.requirement.label.default` | color | {tt.secondary} | #2C2C2C |  |
| `input.requirement.label.error` | color | {tt.danger} | #D83232 |  |
| `input.requirement.label.success` | color | {tt.success} | #0EA45B |  |
| `input.resizer` | color | {tt.tertiary} | #2C2C2C |  |
| `input.rounded.borderRadius.lg` | other | {input.borderRadius.md} * {input.size.lg} / {controlSize.md} | 8 * 40 + 8 / 40 |  |
| `input.rounded.borderRadius.md` | other | {input.size.md} * {borderRadius.md} / {controlSize.md} | 40 * 8 / 40 |  |
| `input.rounded.borderRadius.sm` | other | {input.borderRadius.md} * {input.size.sm} / {controlSize.md} | 8 * 40 - 8 / 40 |  |
| `input.size.lg` | sizing | {controlSize.lg} | 40 + 8 |  |
| `input.size.md` | sizing | {controlSize.md} | 40 |  |
| `input.size.sm` | sizing | {controlSize.sm} | 40 - 8 |  |
| `input.suffix.icon.default` | color | {input.color.focus} | #2C2C2C |  |
| `input.suffix.icon.disabled` | color | {input.color.disabled} | #2C2C2C |  |
| `input.suffix.label.default` | color | {input.color.focus} | #2C2C2C |  |
| `input.suffix.label.disabled` | color | {input.color.disabled} | #2C2C2C |  |
| `input.suffix.splitterHeight.lg` | sizing | 24 |  |  |
| `input.suffix.splitterHeight.md` | sizing | 20 |  |  |
| `input.suffix.splitterHeight.sm` | sizing | 16 |  |  |
| `input.suffixGap.lg` | spacing | 10 |  |  |
| `input.suffixGap.md` | spacing | 8 |  |  |
| `input.suffixGap.sm` | spacing | {input.suffixGap.md} | 8 |  |

## link

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `link.accent.color.active` | color | {link.accent.color.default} | #1D70E2 | ⚙darken 0.2 (hsl) |
| `link.accent.color.default` | color | {tt.accent1} | #1D70E2 |  |
| `link.accent.color.focus` | color | {link.accent.color.default} | #1D70E2 |  |
| `link.accent.color.hover` | color | {link.accent.color.default} | #1D70E2 | ⚙lighten 0.12 (hsl) |
| `link.borderRadius.md` | borderRadius | {link.outlineSize.md} * {borderRadius.md} / {controlSize.md} | 20px * 8 / 40 |  |
| `link.borderRadius.sm` | borderRadius | {link.outlineSize.sm} * {borderRadius.md} / {controlSize.md} | 16px * 8 / 40 |  |
| `link.borderRadius.xs` | borderRadius | {link.outlineSize.xs} * {borderRadius.md} / {controlSize.md} | 14px * 8 / 40 |  |
| `link.gapBetweenIconLeft` | spacing | 4 |  |  |
| `link.gapBetweenIconRight` | spacing | 2 |  |  |
| `link.iconSize.md` | sizing | {icon.sm} | 16 |  |
| `link.iconSize.sm` | sizing | {icon.xs} | 14 |  |
| `link.iconSize.xs` | sizing | {icon.xxs} | 12 |  |
| `link.outline` | color | {outline.default} | #F40084 |  |
| `link.outlineBorderWidth` | borderWidth | {borderWidth.outline.xs} | 2 |  |
| `link.outlineSize.md` | sizing | {lineHeightBodyMd} | 20px |  |
| `link.outlineSize.sm` | sizing | {lineHeightBodySm} | 16px |  |
| `link.outlineSize.xs` | sizing | {lineHeightBodyXs} | 14px |  |
| `link.secondary.color.active` | color | {link.secondary.color.hover} | #2C2C2C |  |
| `link.secondary.color.default` | color | {tt.secondary} | #2C2C2C |  |
| `link.secondary.color.focus` | color | {link.secondary.color.default} | #2C2C2C |  |
| `link.secondary.color.hover` | color | {tt.primary} | #2C2C2C |  |

## list

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `list.fadeable.fader.width.lg` | sizing | {layout.paddingH.lg} | 36 |  |
| `list.item.addon.label.width` | sizing | 40 |  |  |
| `list.item.arrow` | color | {tt.quaternary} | #2C2C2C |  |
| `list.item.arrowSize` | sizing | 20 |  |  |
| `list.item.bg.active` | color | {fill.darker} | #798086 |  |
| `list.item.bg.hover` | color | {fill.default} | #798086 |  |
| `list.item.color.accent1` | color | {tt.accent1} | #1D70E2 |  |
| `list.item.color.default` | color | {tt.primary} | #2C2C2C |  |
| `list.item.color.disabled` | color | {tt.tertiary} | #2C2C2C |  |
| `list.item.color.icon.default` | color | {tt.secondary} | #2C2C2C |  |
| `list.item.color.icon.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `list.item.color.overline.default` | color | {tt.secondary} | #2C2C2C |  |
| `list.item.color.overline.disabled` | color | {list.item.color.disabled} | #2C2C2C |  |
| `list.item.color.subtitle.default` | color | {tt.secondary} | #2C2C2C |  |
| `list.item.color.subtitle.disabled` | color | {list.item.color.disabled} | #2C2C2C |  |
| `list.item.gapH` | spacing | 12 |  |  |
| `list.item.gapV` | spacing | 16 |  |  |
| `list.item.height` | sizing | 56 |  |  |
| `list.item.highlighted.bg.active` | color | {product2} | #F40084 | ⚙alpha 0.2 (hsl) |
| `list.item.highlighted.bg.default` | color | {fill.accent2.default} | #F40084 |  |
| `list.item.highlighted.bg.focus` | color | {list.item.highlighted.bg.default} | #F40084 |  |
| `list.item.highlighted.bg.hover` | color | {product2} | #F40084 | ⚙alpha 0.16 (hsl) |
| `list.item.iconSize` | sizing | {icon.lg} | 24 |  |
| `list.item.inline.iconSize` | sizing | {icon.md} | 20 |  |
| `list.item.outline.color` | color | {outline.default} | #F40084 |  |
| `list.item.paddingH` | spacing | 8 |  |  |
| `list.item.paddingV` | spacing | 8 |  |  |
| `list.item.shifted.bg.active` | color | linear-gradient(90deg, rgba({fill.darker}, 0) 0%, {fill.darker} 100%) | linear-gradient(90deg, rgba(#798086, 0) 0%, #798086 100%) |  |
| `list.item.shifted.bg.hover` | color | linear-gradient(90deg, rgba({fill.default}, 0) 0%, {fill.default} 100%) | linear-gradient(90deg, rgba(#798086, 0) 0%, #798086 100%) |  |
| `list.item.shifted.highlighted.bg.active` | color | linear-gradient(90deg, rgba({list.item.highlighted.bg.active}, 0) 0%, {list.item.highlighted.bg.active} 100%) | linear-gradient(90deg, rgba(#F40084, 0) 0%, #F40084 100%) |  |
| `list.item.shifted.highlighted.bg.default` | color | linear-gradient(90deg, rgba({list.item.highlighted.bg.default}, 0) 0%, {list.item.highlighted.bg.default} 100%) | linear-gradient(90deg, rgba(#F40084, 0) 0%, #F40084 100%) |  |
| `list.item.shifted.highlighted.bg.focus` | color | {list.item.shifted.highlighted.bg.default} | linear-gradient(90deg, rgba(#F40084, 0) 0%, #F40084 100%) |  |
| `list.item.shifted.highlighted.bg.hover` | color | linear-gradient(90deg, rgba({list.item.highlighted.bg.hover}, 0) 0%, {list.item.highlighted.bg.hover} 100%) | linear-gradient(90deg, rgba(#F40084, 0) 0%, #F40084 100%) |  |
| `list.item.statusGap` | spacing | 4 |  |  |
| `list.item.track.color` | color | {tt.tertiary} | #2C2C2C |  |
| `list.item.track.gap` | spacing | 8 |  |  |
| `list.outline.borderWidth` | borderWidth | {borderWidth.outline.md} | 4 |  |

## overlay

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `overlay.end` | color | {black} | #000000 | ⚙alpha 0 (hsl) |
| `overlay.start` | color | {black} | #000000 | ⚙alpha 0.75 (hsl) |

## radio

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `radio.borderRadius` | borderRadius | {radio.size} / 2 | 20 / 2 |  |
| `radio.borderRadiusOutline` | borderRadius | {radio.borderRadius} + 1 | 20 / 2 + 1 |  |
| `radio.borderWidth` | borderWidth | {borderWidth.default} | 1 |  |
| `radio.borderWidthOutline` | borderWidth | {borderWidth.outline.md} | 4 |  |
| `radio.card.bg.active` | color | {radio.card.bg.default} | #798086 |  |
| `radio.card.bg.default` | color | {bg.neutral.primary} | #798086 |  |
| `radio.card.bg.disabled` | color | {radio.card.bg.default} | #798086 |  |
| `radio.card.bg.focus` | color | {radio.card.bg.default} | #798086 |  |
| `radio.card.bg.hover` | color | {radio.card.bg.default} | #798086 |  |
| `radio.card.borderRadius` | borderRadius | {borderRadius.md} | 8 |  |
| `radio.card.borderRadiusOutline` | borderRadius | {radio.card.borderRadius} + 1 | 8 + 1 |  |
| `radio.card.br.active` | color | {radio.card.br.hover} | #798086 |  |
| `radio.card.br.default` | color | {br.secondary} | #798086 |  |
| `radio.card.br.disabled` | color | {radio.card.br.default} | #798086 |  |
| `radio.card.br.focus` | color | {radio.card.br.default} | #798086 |  |
| `radio.card.br.hover` | color | {br.primary} | #798086 |  |
| `radio.card.checked.br.active` | color | {radio.card.checked.br.default} | #1D70E2 | ⚙darken 0.2 (hsl) |
| `radio.card.checked.br.default` | color | {br.accent1} | #1D70E2 |  |
| `radio.card.checked.br.disabled` | color | {product1} | #1D70E2 | ⚙alpha 0.25 (hsl) |
| `radio.card.checked.br.focus` | color | {radio.card.checked.br.default} | #1D70E2 |  |
| `radio.card.checked.br.hover` | color | {radio.card.checked.br.default} | #1D70E2 | ⚙lighten 0.12 (hsl) |
| `radio.card.checked.icon.active` | color | {tt.accent1} | #1D70E2 |  |
| `radio.card.checked.icon.default` | color | {tt.accent1} | #1D70E2 |  |
| `radio.card.checked.icon.disabled` | color | {product1} | #1D70E2 | ⚙alpha 0.25 (hsl) |
| `radio.card.checked.icon.focus` | color | {tt.accent1} | #1D70E2 |  |
| `radio.card.checked.icon.hover` | color | {tt.accent1} | #1D70E2 |  |
| `radio.card.checked.label.active` | color | {tt.accent1} | #1D70E2 |  |
| `radio.card.checked.label.default` | color | {tt.accent1} | #1D70E2 |  |
| `radio.card.checked.label.disabled` | color | {product1} | #1D70E2 | ⚙alpha 0.25 (hsl) |
| `radio.card.checked.label.focus` | color | {tt.accent1} | #1D70E2 |  |
| `radio.card.checked.label.hover` | color | {tt.accent1} | #1D70E2 |  |
| `radio.card.icon.active` | color | {tt.primary} | #2C2C2C |  |
| `radio.card.icon.default` | color | {tt.primary} | #2C2C2C |  |
| `radio.card.icon.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `radio.card.icon.focus` | color | {tt.primary} | #2C2C2C |  |
| `radio.card.icon.hover` | color | {tt.primary} | #2C2C2C |  |
| `radio.card.iconSize` | sizing | {icon.md} | 20 |  |
| `radio.card.imageSize` | sizing | 40 |  |  |
| `radio.card.minHeight` | sizing | 48 |  |  |
| `radio.card.paddingH` | spacing | 12 |  |  |
| `radio.card.paddingV` | spacing | 8 |  |  |
| `radio.checked.bg.active` | color | {product1} | #1D70E2 | ⚙darken 0.2 (hsl) |
| `radio.checked.bg.default` | color | {product1} | #1D70E2 |  |
| `radio.checked.bg.disabled` | color | {product1} | #1D70E2 | ⚙alpha 0.25 (hsl) |
| `radio.checked.bg.focus` | color | {radio.checked.bg.default} | #1D70E2 |  |
| `radio.checked.bg.hover` | color | {product1} | #1D70E2 | ⚙lighten 0.12 (hsl) |
| `radio.checked.indicator.active` | color | {radio.checked.indicator.default} | #FFFFFF |  |
| `radio.checked.indicator.default` | color | {tt.white} | #FFFFFF |  |
| `radio.checked.indicator.disabled` | color | {radio.checked.indicator.default} | #FFFFFF |  |
| `radio.checked.indicator.focus` | color | {radio.checked.indicator.default} | #FFFFFF |  |
| `radio.checked.indicator.hover` | color | {radio.checked.indicator.default} | #FFFFFF |  |
| `radio.default.bg.active` | color | {checkbox.default.bg.active} | #798086 |  |
| `radio.default.bg.default` | color | {checkbox.default.bg.default} | #798086 |  |
| `radio.default.bg.disabled` | color | {checkbox.default.bg.disabled} | #000000 |  |
| `radio.default.bg.focus` | color | {checkbox.default.bg.focus} | #798086 |  |
| `radio.default.bg.hover` | color | {checkbox.default.bg.hover} | #798086 |  |
| `radio.default.br.active` | color | {radio.default.br.default} | transparent |  |
| `radio.default.br.default` | color | transparent |  |  |
| `radio.default.br.disabled` | color | {radio.default.br.default} | transparent |  |
| `radio.default.br.focus` | color | {radio.default.br.default} | transparent |  |
| `radio.default.br.hover` | color | {radio.default.br.default} | transparent |  |
| `radio.description.default` | color | {tt.secondary} | #2C2C2C |  |
| `radio.description.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `radio.gap` | spacing | 12 |  |  |
| `radio.group.gap` | spacing | 8 |  |  |
| `radio.indicatorSize` | sizing | 8 |  |  |
| `radio.label.active` | color | {radio.label.default} | #2C2C2C |  |
| `radio.label.default` | color | {tt.primary} | #2C2C2C |  |
| `radio.label.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `radio.label.focus` | color | {radio.label.default} | #2C2C2C |  |
| `radio.label.hover` | color | {radio.label.default} | #2C2C2C |  |
| `radio.outline` | color | {outline.default} | #F40084 |  |
| `radio.size` | sizing | 20 |  |  |

## scrollbar

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `scrollbar.borderRadius.default` | borderRadius | {scrollbar.size.default} / 2 | 6 / 2 |  |
| `scrollbar.borderRadius.hover` | borderRadius | {scrollbar.size.hover} / 2 | 8 / 2 |  |
| `scrollbar.size.default` | sizing | 6 |  |  |
| `scrollbar.size.hover` | sizing | 8 |  |  |
| `scrollbar.thumb.default` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.64 (hsl) |
| `scrollbar.thumb.hover` | color | {tone.bg.neutral} | #798086 |  |
| `scrollbar.track.default` | color | transparent |  |  |
| `scrollbar.track.hover` | color | {fill.darker} | #798086 |  |

## splitBtn

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `splitBtn.left.paddingH.lg` | spacing | {btn.paddingH.lg} | 32 |  |
| `splitBtn.left.paddingH.md` | spacing | {btn.paddingH.md} | 24 |  |
| `splitBtn.left.paddingH.xl` | spacing | {btn.paddingH.xl} | 40 |  |
| `splitBtn.right.paddingH.lg` | spacing | 12 |  |  |
| `splitBtn.right.paddingH.md` | spacing | 8 |  |  |
| `splitBtn.right.paddingH.xl` | spacing | 16 |  |  |

## toggleBtn

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `toggleBtn.borderRadius.lg` | borderRadius | {btn.borderRadius.lg} | 40 + 8 / 2 |  |
| `toggleBtn.borderRadius.md` | borderRadius | {btn.borderRadius.md} | 40 / 2 |  |
| `toggleBtn.borderRadius.sm` | borderRadius | {btn.borderRadius.sm} | 40 - 8 / 2 |  |
| `toggleBtn.borderRadius.xl` | borderRadius | {btn.borderRadius.xl} | 40 + 16 / 2 |  |
| `toggleBtn.borderRadius.xs` | borderRadius | {btn.borderRadius.xs} | 40 - 16 / 2 |  |
| `toggleBtn.borderWidth.neutral` | borderWidth | {borderWidthNone} | 0 |  |
| `toggleBtn.borderWidth.outline` | borderWidth | {borderWidth.outline.md} | 4 |  |
| `toggleBtn.borderWidth.text` | borderWidth | {borderWidth.strong} | 1 + 1 |  |
| `toggleBtn.iconSize.lg` | sizing | {icon.lg} | 24 |  |
| `toggleBtn.iconSize.md` | sizing | {icon.md} | 20 |  |
| `toggleBtn.iconSize.sm` | sizing | {icon.sm} | 16 |  |
| `toggleBtn.iconSize.xl` | sizing | {icon.xl} | 32 |  |
| `toggleBtn.iconSize.xs` | sizing | {icon.xxs} | 12 |  |
| `toggleBtn.neutral.bg.active` | color | {btn.neutral.bg.active} | #798086 |  |
| `toggleBtn.neutral.bg.default` | color | {btn.neutral.bg.default} | #798086 |  |
| `toggleBtn.neutral.bg.disabled` | color | {btn.neutral.bg.disabled} | #798086 |  |
| `toggleBtn.neutral.bg.focus` | color | {btn.neutral.bg.focus} | #798086 |  |
| `toggleBtn.neutral.bg.hover` | color | {btn.neutral.bg.hover} | #798086 |  |
| `toggleBtn.neutral.br.active` | color | {toggleBtn.neutral.br.default} | transparent |  |
| `toggleBtn.neutral.br.default` | color | transparent |  |  |
| `toggleBtn.neutral.br.disabled` | color | {toggleBtn.neutral.br.default} | transparent |  |
| `toggleBtn.neutral.br.focus` | color | {toggleBtn.neutral.br.default} | transparent |  |
| `toggleBtn.neutral.br.hover` | color | {toggleBtn.neutral.br.default} | transparent |  |
| `toggleBtn.neutral.checked.bg.active` | color | {btn.neutral.bg.active} | #798086 |  |
| `toggleBtn.neutral.checked.bg.default` | color | {btn.neutral.bg.default} | #798086 |  |
| `toggleBtn.neutral.checked.bg.disabled` | color | {btn.neutral.bg.disabled} | #798086 |  |
| `toggleBtn.neutral.checked.bg.focus` | color | {btn.neutral.bg.focus} | #798086 |  |
| `toggleBtn.neutral.checked.bg.hover` | color | {btn.neutral.bg.hover} | #798086 |  |
| `toggleBtn.neutral.checked.br.active` | color | {toggleBtn.neutral.br.default} | transparent |  |
| `toggleBtn.neutral.checked.br.default` | color | transparent |  |  |
| `toggleBtn.neutral.checked.br.disabled` | color | {toggleBtn.neutral.br.default} | transparent |  |
| `toggleBtn.neutral.checked.br.focus` | color | {toggleBtn.neutral.br.default} | transparent |  |
| `toggleBtn.neutral.checked.br.hover` | color | {toggleBtn.neutral.br.default} | transparent |  |
| `toggleBtn.neutral.checked.color.active` | color | {toggleBtn.neutral.checked.color.default} | #2C2C2C |  |
| `toggleBtn.neutral.checked.color.default` | color | {btn.neutral.color.default} | #2C2C2C |  |
| `toggleBtn.neutral.checked.color.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `toggleBtn.neutral.checked.color.focus` | color | {toggleBtn.neutral.checked.color.default} | #2C2C2C |  |
| `toggleBtn.neutral.checked.color.hover` | color | {toggleBtn.neutral.checked.color.default} | #2C2C2C |  |
| `toggleBtn.neutral.color.active` | color | {toggleBtn.neutral.color.default} | #2C2C2C |  |
| `toggleBtn.neutral.color.default` | color | {tt.tertiary} | #2C2C2C |  |
| `toggleBtn.neutral.color.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `toggleBtn.neutral.color.focus` | color | {toggleBtn.neutral.color.default} | #2C2C2C |  |
| `toggleBtn.neutral.color.hover` | color | {toggleBtn.neutral.color.default} | #2C2C2C |  |
| `toggleBtn.outline.borderRadius.lg` | borderRadius | {btn.borderRadius.lg} + 1 | 40 + 8 / 2 + 1 |  |
| `toggleBtn.outline.borderRadius.md` | borderRadius | {btn.borderRadius.md} + 1 | 40 / 2 + 1 |  |
| `toggleBtn.outline.borderRadius.sm` | borderRadius | {btn.borderRadius.sm} + 1 | 40 - 8 / 2 + 1 |  |
| `toggleBtn.outline.borderRadius.xl` | borderRadius | {btn.borderRadius.xl} + 1 | 40 + 16 / 2 + 1 |  |
| `toggleBtn.outline.borderRadius.xs` | borderRadius | {btn.borderRadius.xs} + 1 | 40 - 16 / 2 + 1 |  |
| `toggleBtn.outlineSize.lg` | sizing | {controlSize.lg} + 2 | 40 + 8 + 2 |  |
| `toggleBtn.outlineSize.md` | sizing | {controlSize.md} + 2 | 40 + 2 |  |
| `toggleBtn.outlineSize.sm` | sizing | {controlSize.sm} + 2 | 40 - 8 + 2 |  |
| `toggleBtn.outlineSize.xl` | sizing | {controlSize.xl} + 2 | 40 + 16 + 2 |  |
| `toggleBtn.outlineSize.xs` | sizing | {controlSize.xs} + 2 | 40 - 16 + 2 |  |
| `toggleBtn.primary.bg.end.active` | color | {product1} | #1D70E2 | ⚙darken 0.3 (hsl) |
| `toggleBtn.primary.bg.end.default` | color | {product1} | #1D70E2 | ⚙darken 0.1 (hsl) |
| `toggleBtn.primary.bg.end.disabled` | color | {toggleBtn.primary.bg.end.default} | #1D70E2 | ⚙alpha 0.4 (hsl) |
| `toggleBtn.primary.bg.end.focus` | color | {toggleBtn.primary.bg.end.default} | #1D70E2 |  |
| `toggleBtn.primary.bg.end.hover` | color | {product1} | #1D70E2 | ⚙lighten 0.2 (hsl) |
| `toggleBtn.primary.bg.start.active` | color | {product1} | #1D70E2 |  |
| `toggleBtn.primary.bg.start.default` | color | {product1} | #1D70E2 | ⚙lighten 0.2 (hsl) |
| `toggleBtn.primary.bg.start.disabled` | color | {toggleBtn.primary.bg.start.default} | #1D70E2 | ⚙alpha 0.4 (hsl) |
| `toggleBtn.primary.bg.start.focus` | color | {toggleBtn.primary.bg.start.default} | #1D70E2 |  |
| `toggleBtn.primary.bg.start.hover` | color | {product1} | #1D70E2 | ⚙lighten 0.5 (hsl) |
| `toggleBtn.primary.br.active` | color | {toggleBtn.primary.br.default} | transparent |  |
| `toggleBtn.primary.br.default` | color | transparent |  |  |
| `toggleBtn.primary.br.disabled` | color | {toggleBtn.primary.br.default} | transparent |  |
| `toggleBtn.primary.br.focus` | color | {toggleBtn.primary.br.default} | transparent |  |
| `toggleBtn.primary.br.hover` | color | {toggleBtn.primary.br.default} | transparent |  |
| `toggleBtn.primary.checked.br.active` | color | {toggleBtn.primary.br.default} | transparent |  |
| `toggleBtn.primary.checked.br.default` | color | transparent |  |  |
| `toggleBtn.primary.checked.br.disabled` | color | {toggleBtn.primary.br.default} | transparent |  |
| `toggleBtn.primary.checked.br.focus` | color | {toggleBtn.primary.br.default} | transparent |  |
| `toggleBtn.primary.checked.br.hover` | color | {toggleBtn.primary.br.default} | transparent |  |
| `toggleBtn.primary.checked.color.active` | color | {toggleBtn.primary.color.default} | #FFFFFF |  |
| `toggleBtn.primary.checked.color.default` | color | {tt.white} | #FFFFFF |  |
| `toggleBtn.primary.checked.color.disabled` | color | {toggleBtn.primary.color.default} | #FFFFFF |  |
| `toggleBtn.primary.checked.color.focus` | color | {toggleBtn.primary.color.default} | #FFFFFF |  |
| `toggleBtn.primary.checked.color.hover` | color | {toggleBtn.primary.color.default} | #FFFFFF |  |
| `toggleBtn.primary.color.active` | color | {toggleBtn.primary.color.default} | #FFFFFF |  |
| `toggleBtn.primary.color.default` | color | {tt.white} | #FFFFFF |  |
| `toggleBtn.primary.color.disabled` | color | {toggleBtn.primary.color.default} | #FFFFFF |  |
| `toggleBtn.primary.color.focus` | color | {toggleBtn.primary.color.default} | #FFFFFF |  |
| `toggleBtn.primary.color.hover` | color | {toggleBtn.primary.color.default} | #FFFFFF |  |
| `toggleBtn.secondary.bg.disabled` | color | {fill.disabled.default} | #000000 |  |
| `toggleBtn.secondary.bg.end.active` | color | {toggleBtn.secondary.bg.start.active} | #1D70E2 |  |
| `toggleBtn.secondary.bg.end.default` | color | {toggleBtn.secondary.bg.start.default} | #1D70E2 |  |
| `toggleBtn.secondary.bg.end.focus` | color | {toggleBtn.secondary.bg.end.default} | #1D70E2 |  |
| `toggleBtn.secondary.bg.end.hover` | color | {toggleBtn.secondary.bg.start.hover} | #1D70E2 |  |
| `toggleBtn.secondary.bg.start.active` | color | {toggleBtn.secondary.bg.start.default} | #1D70E2 | ⚙darken 0.5 (hsl) |
| `toggleBtn.secondary.bg.start.default` | color | {tone.bg.vibrant} | #1D70E2 | ⚙alpha 0.16 (hsl) |
| `toggleBtn.secondary.bg.start.focus` | color | {toggleBtn.secondary.bg.start.default} | #1D70E2 |  |
| `toggleBtn.secondary.bg.start.hover` | color | {toggleBtn.secondary.bg.start.default} | #1D70E2 | ⚙lighten 0.6 (hsl) |
| `toggleBtn.secondary.br.active` | color | {toggleBtn.secondary.br.default} | transparent |  |
| `toggleBtn.secondary.br.default` | color | transparent |  |  |
| `toggleBtn.secondary.br.disabled` | color | {toggleBtn.secondary.br.default} | transparent |  |
| `toggleBtn.secondary.br.focus` | color | {toggleBtn.secondary.br.default} | transparent |  |
| `toggleBtn.secondary.br.hover` | color | {toggleBtn.secondary.br.default} | transparent |  |
| `toggleBtn.secondary.checked.br.active` | color | {toggleBtn.secondary.checked.br.default} | transparent |  |
| `toggleBtn.secondary.checked.br.default` | color | transparent |  |  |
| `toggleBtn.secondary.checked.br.disabled` | color | {toggleBtn.secondary.checked.br.default} | transparent |  |
| `toggleBtn.secondary.checked.br.focus` | color | {toggleBtn.secondary.checked.br.default} | transparent |  |
| `toggleBtn.secondary.checked.br.hover` | color | {toggleBtn.secondary.checked.br.default} | transparent |  |
| `toggleBtn.secondary.checked.color.active` | color | {toggleBtn.secondary.color.default} | #2C2C2C |  |
| `toggleBtn.secondary.checked.color.default` | color | {tt.primary} | #2C2C2C |  |
| `toggleBtn.secondary.checked.color.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `toggleBtn.secondary.checked.color.focus` | color | {toggleBtn.secondary.color.default} | #2C2C2C |  |
| `toggleBtn.secondary.checked.color.hover` | color | {toggleBtn.secondary.color.default} | #2C2C2C |  |
| `toggleBtn.secondary.color.active` | color | {toggleBtn.secondary.color.default} | #2C2C2C |  |
| `toggleBtn.secondary.color.default` | color | {tt.primary} | #2C2C2C |  |
| `toggleBtn.secondary.color.disabled` | color | {tt.quaternary} | #2C2C2C |  |
| `toggleBtn.secondary.color.focus` | color | {toggleBtn.secondary.color.default} | #2C2C2C |  |
| `toggleBtn.secondary.color.hover` | color | {toggleBtn.secondary.color.default} | #2C2C2C |  |
| `toggleBtn.size.lg` | sizing | {controlSize.lg} | 40 + 8 |  |
| `toggleBtn.size.md` | sizing | {controlSize.md} | 40 |  |
| `toggleBtn.size.sm` | sizing | {controlSize.sm} | 40 - 8 |  |
| `toggleBtn.size.xl` | sizing | {controlSize.xl} | 40 + 16 |  |
| `toggleBtn.size.xs` | sizing | {controlSize.xs} | 40 - 16 |  |
| `toggleBtn.text.bg.active` | color | {btn.text.bg.active} | #798086 |  |
| `toggleBtn.text.bg.default` | color | transparent |  |  |
| `toggleBtn.text.bg.disabled` | color | transparent |  |  |
| `toggleBtn.text.bg.focus` | color | {toggleBtn.text.bg.default} | transparent |  |
| `toggleBtn.text.bg.hover` | color | {btn.text.bg.hover} | #798086 |  |
| `toggleBtn.text.br.active` | color | {toggleBtn.text.br.default} | transparent |  |
| `toggleBtn.text.br.default` | color | transparent |  |  |
| `toggleBtn.text.br.disabled` | color | {toggleBtn.text.br.default} | transparent |  |
| `toggleBtn.text.br.focus` | color | {toggleBtn.text.br.default} | transparent |  |
| `toggleBtn.text.br.hover` | color | {toggleBtn.text.br.default} | transparent |  |
| `toggleBtn.text.checked.bg.active` | color | {btn.text.bg.active} | #798086 | ⚙darken 0.5 (hsl) |
| `toggleBtn.text.checked.bg.default` | color | {fill.darker} | #798086 |  |
| `toggleBtn.text.checked.bg.disabled` | color | transparent |  |  |
| `toggleBtn.text.checked.bg.focus` | color | {toggleBtn.text.checked.bg.default} | #798086 |  |
| `toggleBtn.text.checked.bg.hover` | color | {btn.text.bg.hover} | #798086 | ⚙darken 0.3 (hsl) |
| `toggleBtn.text.checked.br.active` | color | {toggleBtn.text.br.default} | transparent |  |
| `toggleBtn.text.checked.br.default` | color | transparent |  |  |
| `toggleBtn.text.checked.br.disabled` | color | {toggleBtn.text.br.default} | transparent |  |
| `toggleBtn.text.checked.br.focus` | color | {toggleBtn.text.br.default} | transparent |  |
| `toggleBtn.text.checked.br.hover` | color | {toggleBtn.text.br.default} | transparent |  |
| `toggleBtn.text.checked.color.active` | color | {btn.text.color.active} | #2C2C2C |  |
| `toggleBtn.text.checked.color.default` | color | {btn.text.color.default} | #2C2C2C |  |
| `toggleBtn.text.checked.color.disabled` | color | {btn.text.color.disabled} | #2C2C2C |  |
| `toggleBtn.text.checked.color.focus` | color | {btn.text.color.focus} | #2C2C2C |  |
| `toggleBtn.text.checked.color.hover` | color | {btn.text.color.hover} | #2C2C2C |  |
| `toggleBtn.text.color.active` | color | {btn.text.color.active} | #2C2C2C |  |
| `toggleBtn.text.color.default` | color | {btn.text.color.default} | #2C2C2C |  |
| `toggleBtn.text.color.disabled` | color | {btn.text.color.disabled} | #2C2C2C |  |
| `toggleBtn.text.color.focus` | color | {btn.text.color.focus} | #2C2C2C |  |
| `toggleBtn.text.color.hover` | color | {btn.text.color.hover} | #2C2C2C |  |
