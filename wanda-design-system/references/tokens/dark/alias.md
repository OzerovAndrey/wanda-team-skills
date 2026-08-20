# Dark / alias (overrides)

Джерело: `dark/alias.json` (Token Studio export). Автозгенеровано з JSON —
не редагувати вручну, а перегенерувати скриптом при новому експорті.

Колонки: **Raw** — значення як записано в цьому сеті (alias `{...}` або
літерал). **Resolved** — фінальне значення після проходу по стеку сетів
light/core → light/map → light/alias → light/styles → light/component/general → light/component/product → light/component/widget → light/component/betting → dark/core → dark/alias → dark/component/general → dark/component/product → dark/component/widget → dark/component/betting (порядок з `$themes.json`/`$metadata.json`); порожньо, якщо Raw уже
літерал.


## bevelProps

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `bevelProps.darkEdge.color.md` | color | transparent |  |  |
| `bevelProps.lightEdge.color.md` | color | transparent |  |  |

## bg

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `bg.neutral.primary` | color | {tone.bg.neutral} | #798086 | ⚙darken 0.64 (hsl) |
| `bg.neutral.quaternary` | color | {tone.bg.neutral} | #798086 | ⚙darken 0.8 (hsl) |
| `bg.neutral.secondary` | color | {tone.bg.neutral} | #798086 | ⚙darken 0.72 (hsl) |
| `bg.neutral.tertiary` | color | {tone.bg.neutral} | #798086 | ⚙darken 0.76 (hsl) |
| `bg.popup.default` | color | {tone.bg.neutral} | #798086 | ⚙darken 0.48 (hsl) |
| `bg.popup.strong` | color | {tone.bg.neutral} | #798086 | ⚙darken 0.36 (hsl) |

## br

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `br.disabled.primary` | color | {white} | #FFFFFF | ⚙alpha 0.18 (hsl) |
| `br.disabled.secondary` | color | {white} | #FFFFFF | ⚙alpha 0.14 (hsl) |
| `br.primary` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.44 (hsl) |
| `br.secondary` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.36 (hsl) |

## embossProps

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `embossProps.darkEdge.color` | color | transparent |  |  |
| `embossProps.lightEdge.color` | color | transparent |  |  |

## fill

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `fill.darker` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.26 (hsl) |
| `fill.default` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.16 (hsl) |
| `fill.disabled.default` | color | {black} | #000000 | ⚙alpha 0.25 (hsl) |
| `fill.lighter` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.22 (hsl) |

## gradientProps

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `gradientProps.primary.end` | color | #1B2543 |  |  |
| `gradientProps.primary.start` | color | #4E2457 |  |  |
| `gradientProps.secondary.end` | color | #280567 |  |  |
| `gradientProps.secondary.start` | color | #114994 |  |  |

## shadow

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `shadow.default` | color | {black} | #000000 | ⚙alpha 0.25 (hsl) |

## theme

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `theme` | text | Dark |  |  |

## tt

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `tt.accent2` | color | {product2} | #F40084 | ⚙lighten 0.05 (hsl) |
| `tt.quaternary` | color | {tone.text} | #FFFFFF | ⚙alpha 0.24 (hsl) |
| `tt.secondary` | color | {tone.text} | #FFFFFF | ⚙alpha 0.6 (hsl) |
| `tt.tertiary` | color | {tone.text} | #FFFFFF | ⚙alpha 0.36 (hsl) |
