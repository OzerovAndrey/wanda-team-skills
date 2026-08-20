# Light / alias

Джерело: `light/alias.json` (Token Studio export). Автозгенеровано з JSON —
не редагувати вручну, а перегенерувати скриптом при новому експорті.

Колонки: **Raw** — значення як записано в цьому сеті (alias `{...}` або
літерал). **Resolved** — фінальне значення після проходу по стеку сетів
light/core → light/map → light/alias → light/styles → light/component/general → light/component/product → light/component/widget → light/component/betting (порядок з `$themes.json`/`$metadata.json`); порожньо, якщо Raw уже
літерал.


## bevelProps

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `bevelProps.darkEdge.blur.md` | number | 3 |  |  |
| `bevelProps.darkEdge.color.md` | color | transparent |  |  |
| `bevelProps.darkEdge.y.md` | number | -2 |  |  |
| `bevelProps.lightEdge.blur.md` | number | 3 |  |  |
| `bevelProps.lightEdge.color.md` | color | transparent |  |  |
| `bevelProps.lightEdge.y.md` | number | 2 |  |  |
| `bevelProps.shadow.blur.md` | number | 2 |  |  |
| `bevelProps.shadow.color.md` | color | transparent |  |  |
| `bevelProps.shadow.y.md` | number | 1 |  |  |

## bg

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `bg.glass.dark` | color | {black} | #000000 | ⚙alpha 0.15 (hsl) |
| `bg.glass.light` | color | {white} | #FFFFFF | ⚙alpha 0.15 (hsl) |
| `bg.neutral.primary` | color | {tone.bg.neutral} | #798086 | ⚙lighten 1 (hsl) |
| `bg.neutral.quaternary` | color | {tone.bg.neutral} | #798086 | ⚙lighten 0.8 (hsl) |
| `bg.neutral.secondary` | color | {tone.bg.neutral} | #798086 | ⚙lighten 0.94 (hsl) |
| `bg.neutral.tertiary` | color | {tone.bg.neutral} | #798086 | ⚙lighten 0.86 (hsl) |
| `bg.popup.default` | color | {bg.neutral.primary} | #798086 |  |
| `bg.popup.strong` | color | {bg.popup.default} | #798086 |  |

## borderRadius

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `borderRadius.lg` | borderRadius | {borderRadius.md} * 2 | 8 * 2 |  |
| `borderRadius.md` | borderRadius | {baseBorderRadius} | 8 |  |
| `borderRadius.sm` | borderRadius | {borderRadius.md} / 2 | 8 / 2 |  |

## borderWidth

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `borderWidth.default` | borderWidth | {baseBorderWidth} | 1 |  |
| `borderWidth.outline.md` | borderWidth | 4 |  |  |
| `borderWidth.outline.sm` | borderWidth | 3 |  |  |
| `borderWidth.outline.xs` | borderWidth | 2 |  |  |
| `borderWidth.strong` | borderWidth | {borderWidth.default} + 1 | 1 + 1 |  |

## br

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `br.accent1` | color | {product1} | #1D70E2 |  |
| `br.accent2` | color | {product2} | #F40084 |  |
| `br.danger` | color | {danger} | #D83232 |  |
| `br.disabled.primary` | color | {black} | #000000 | ⚙alpha 0.12 (hsl) |
| `br.disabled.secondary` | color | {black} | #000000 | ⚙alpha 0.08 (hsl) |
| `br.primary` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.24 (hsl) |
| `br.secondary` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.16 (hsl) |
| `br.success` | color | {success} | #0EA45B |  |
| `br.vibrant.primary` | color | {tone.bg.vibrant} | #1D70E2 | ⚙alpha 0.36 (hsl) |
| `br.vibrant.secondary` | color | {tone.bg.vibrant} | #1D70E2 | ⚙alpha 0.24 (hsl) |
| `br.warning` | color | {warning} | #FFC700 |  |
| `br.white` | color | {white} | #FFFFFF |  |

## contentMaxWidth

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `contentMaxWidth` | sizing | 600 |  |  |

## embossProps

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `embossProps.darkEdge.blur` | number | 4 |  |  |
| `embossProps.darkEdge.color` | color | transparent |  |  |
| `embossProps.darkEdge.y` | number | 2 |  |  |
| `embossProps.lightEdge.blur` | number | 4 |  |  |
| `embossProps.lightEdge.color` | color | transparent |  |  |
| `embossProps.lightEdge.y` | number | -1.5 |  |  |

## fill

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `fill.accent1.default` | color | {product1} | #1D70E2 | ⚙alpha 0.1 (hsl) |
| `fill.accent1.lighter` | color | {product1} | #1D70E2 | ⚙alpha 0.05 (hsl) |
| `fill.accent2.default` | color | {product2} | #F40084 | ⚙alpha 0.1 (hsl) |
| `fill.danger.darker` | color | {danger} | #D83232 | ⚙alpha 0.16 (hsl) |
| `fill.danger.default` | color | {danger} | #D83232 | ⚙alpha 0.1 (hsl) |
| `fill.darker` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.2 (hsl) |
| `fill.default` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.1 (hsl) |
| `fill.disabled.default` | color | {black} | #000000 | ⚙alpha 0.1 (hsl) |
| `fill.disabled.lighter` | color | {black} | #000000 | ⚙alpha 0.02 (hsl) |
| `fill.lighter` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.16 (hsl) |
| `fill.success.default` | color | {success} | #0EA45B | ⚙alpha 0.12 (hsl) |
| `fill.success.lighter` | color | {success} | #0EA45B | ⚙alpha 0.06 (hsl) |
| `fill.vibrant.darker` | color | {tone.bg.vibrant} | #1D70E2 | ⚙alpha 0.36 (hsl) |
| `fill.vibrant.default` | color | {tone.bg.vibrant} | #1D70E2 | ⚙alpha 0.32 (hsl) |
| `fill.vibrant.lighter` | color | {tone.bg.vibrant} | #1D70E2 | ⚙alpha 0.28 (hsl) |
| `fill.warning.default` | color | {warning} | #FFC700 | ⚙alpha 0.18 (hsl) |

## glass

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `glass.blur.md` | number | 48 |  |  |
| `glass.blur.sm` | number | 12 |  |  |

## glow

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `glow.accent1.color` | color | {product1} | #1D70E2 | ⚙alpha 0.48 (hsl) |
| `glow.blur` | number | 10 |  |  |

## gradientProps

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `gradientProps.primary.end` | color | #BACAFE |  |  |
| `gradientProps.primary.start` | color | #F6CFFE |  |  |
| `gradientProps.secondary.end` | color | #FFF9D8 |  |  |
| `gradientProps.secondary.start` | color | #FFD9B1 |  |  |

## icon

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `icon.lg` | sizing | 24 |  |  |
| `icon.md` | sizing | 20 |  |  |
| `icon.sm` | sizing | 16 |  |  |
| `icon.xl` | sizing | 32 |  |  |
| `icon.xs` | sizing | 14 |  |  |
| `icon.xxs` | sizing | 12 |  |  |

## mask

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `mask` | color | {black} | #000000 | ⚙alpha 0.28 (hsl) |

## outline

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `outline.default` | color | {product2} | #F40084 | ⚙alpha 0.25 (hsl) |
| `outline.error` | color | {danger} | #D83232 | ⚙alpha 0.25 (hsl) |

## product

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `product` | text | MB |  |  |

## randomizer

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `randomizer.frame.blur` | number | 8 |  |  |

## rhythm

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `rhythm.primary` | spacing | 48 |  |  |
| `rhythm.secondary` | spacing | 24 |  |  |

## shadow

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `shadow.blur.lg` | number | {shadow.blur.md} * 2 | 3 * 2 * 2 |  |
| `shadow.blur.md` | number | {shadow.blur.sm} * 2 | 3 * 2 |  |
| `shadow.blur.sm` | number | 3 |  |  |
| `shadow.default` | color | {black} | #000000 | ⚙alpha 0.15 (hsl) |
| `shadow.y.lg` | number | {shadow.y.md} * 2 | 2 * 2 * 2 |  |
| `shadow.y.md` | number | {shadow.y.sm} * 2 | 2 * 2 |  |
| `shadow.y.sm` | number | 2 |  |  |

## theme

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `theme` | text | Light |  |  |

## tt

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `tt.accent1` | color | {product1} | #1D70E2 |  |
| `tt.accent2` | color | {product2} | #F40084 |  |
| `tt.accent3` | color | {product3} | #FFC700 |  |
| `tt.black` | color | {black} | #000000 |  |
| `tt.danger` | color | {danger} | #D83232 |  |
| `tt.info` | color | {info} | #1D70E2 |  |
| `tt.primary` | color | {tone.text} | #2C2C2C | ⚙alpha 0.9 (hsl) |
| `tt.quaternary` | color | {tone.text} | #2C2C2C | ⚙alpha 0.3 (hsl) |
| `tt.secondary` | color | {tone.text} | #2C2C2C | ⚙alpha 0.7 (hsl) |
| `tt.success` | color | {success} | #0EA45B |  |
| `tt.tertiary` | color | {tone.text} | #2C2C2C | ⚙alpha 0.5 (hsl) |
| `tt.warning` | color | {warning} | #FFC700 |  |
| `tt.white` | color | {white} | #FFFFFF |  |
