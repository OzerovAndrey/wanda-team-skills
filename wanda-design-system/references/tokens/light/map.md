# Light / map

Джерело: `light/map.json` (Token Studio export). Автозгенеровано з JSON —
не редагувати вручну, а перегенерувати скриптом при новому експорті.

Колонки: **Raw** — значення як записано в цьому сеті (alias `{...}` або
літерал). **Resolved** — фінальне значення після проходу по стеку сетів
light/core → light/map → light/alias → light/styles → light/component/general → light/component/product → light/component/widget → light/component/betting (порядок з `$themes.json`/`$metadata.json`); порожньо, якщо Raw уже
літерал.


## borderWidthNone

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `borderWidthNone` | borderWidth | 0 |  |  |

## boxShadowNone

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `boxShadowNone` | boxShadow | x:0 y:0 blur:0 spread:0 color:#00000000 |  | box-shadow: none; |

## controlSize

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `controlSize.lg` | sizing | {controlSize.md} + 8 | 40 + 8 |  |
| `controlSize.md` | sizing | {baseControlSize} | 40 |  |
| `controlSize.sm` | sizing | {controlSize.md} - 8 | 40 - 8 |  |
| `controlSize.xl` | sizing | {controlSize.md} + 16 | 40 + 16 |  |
| `controlSize.xs` | sizing | {controlSize.md} - 16 | 40 - 16 |  |

## dangerStep

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `dangerStep.500` | color | {danger} | #D83232 |  |
| `dangerStep.700` | color | {danger} | #D83232 | ⚙darken 0.3 (hsl) |
| `dangerStep.900` | color | {danger} | #D83232 | ⚙darken 0.6 (hsl) |

## fontSizeBody2Xl

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `fontSizeBody2Xl` | fontSizes | 24 |  |  |

## fontSizeBodyLg

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `fontSizeBodyLg` | fontSizes | 16 |  |  |

## fontSizeBodyMd

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `fontSizeBodyMd` | fontSizes | 14 |  |  |

## fontSizeBodySm

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `fontSizeBodySm` | fontSizes | 12 |  |  |

## fontSizeBodyXl

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `fontSizeBodyXl` | fontSizes | 20 |  |  |

## fontSizeBodyXs

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `fontSizeBodyXs` | fontSizes | 10 |  |  |

## fontSizeCaption2

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `fontSizeCaption2` | fontSizes | 8 |  |  |

## fontSizeD1

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `fontSizeD1` | fontSizes | 84 |  |  |

## fontSizeD2

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `fontSizeD2` | fontSizes | 64 |  |  |

## fontSizeD3

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `fontSizeD3` | fontSizes | 34 |  |  |

## fontSizeOverline

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `fontSizeOverline` | fontSizes | 12 |  |  |

## fontSizeSubtitle1

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `fontSizeSubtitle1` | fontSizes | 22 |  |  |

## fontSizeSubtitle2

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `fontSizeSubtitle2` | fontSizes | 18 |  |  |

## fontSizeSubtitle3

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `fontSizeSubtitle3` | fontSizes | 14 |  |  |

## fontSizeT1

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `fontSizeT1` | fontSizes | 28 |  |  |

## fontSizeT2

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `fontSizeT2` | fontSizes | 24 |  |  |

## fontSizeT3

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `fontSizeT3` | fontSizes | 20 |  |  |

## fontSizeT4

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `fontSizeT4` | fontSizes | 18 |  |  |

## fontSizeT5

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `fontSizeT5` | fontSizes | 16 |  |  |

## fontWeightCursive

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `fontWeightCursive` | fontWeights | Italic |  |  |

## letterSpacingOverline

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `letterSpacingOverline` | letterSpacing | 4% |  |  |

## letterSpacingTitle

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `letterSpacingTitle` | letterSpacing | 2% |  |  |

## lineHeightBody2Xl

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `lineHeightBody2Xl` | lineHeights | 32px |  |  |

## lineHeightBodyLg

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `lineHeightBodyLg` | lineHeights | 24px |  |  |

## lineHeightBodyMd

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `lineHeightBodyMd` | lineHeights | 20px |  |  |

## lineHeightBodySm

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `lineHeightBodySm` | lineHeights | 16px |  |  |

## lineHeightBodyXl

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `lineHeightBodyXl` | lineHeights | 28px |  |  |

## lineHeightBodyXs

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `lineHeightBodyXs` | lineHeights | 14px |  |  |

## lineHeightCaption2

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `lineHeightCaption2` | lineHeights | 12px |  |  |

## lineHeightD1

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `lineHeightD1` | lineHeights | 88px |  |  |

## lineHeightD2

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `lineHeightD2` | lineHeights | 68px |  |  |

## lineHeightD3

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `lineHeightD3` | lineHeights | 38px |  |  |

## lineHeightOverline

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `lineHeightOverline` | lineHeights | 16px |  |  |

## lineHeightSubtitle1

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `lineHeightSubtitle1` | lineHeights | 28px |  |  |

## lineHeightSubtitle2

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `lineHeightSubtitle2` | lineHeights | 24px |  |  |

## lineHeightSubtitle3

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `lineHeightSubtitle3` | lineHeights | 20px |  |  |

## lineHeightT1

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `lineHeightT1` | lineHeights | 32px |  |  |

## lineHeightT2

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `lineHeightT2` | lineHeights | 28px |  |  |

## lineHeightT3

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `lineHeightT3` | lineHeights | 24px |  |  |

## lineHeightT4

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `lineHeightT4` | lineHeights | 22px |  |  |

## lineHeightT5

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `lineHeightT5` | lineHeights | 20px |  |  |

## product1Step

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `product1Step.1000` | color | {product1Step.900} | #1D70E2 | ⚙darken 0.24 (hsl) |
| `product1Step.500` | color | {product1} | #1D70E2 |  |
| `product1Step.700` | color | {product1} | #1D70E2 | ⚙darken 0.3 (hsl) |
| `product1Step.900` | color | {product1} | #1D70E2 | ⚙darken 0.6 (hsl) |

## product2Step

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `product2Step.500` | color | {product2} | #F40084 |  |
| `product2Step.700` | color | {product2} | #F40084 | ⚙darken 0.3 (hsl) |
| `product2Step.900` | color | {product2} | #F40084 | ⚙darken 0.6 (hsl) |

## toneStep

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `toneStep.500` | color | {tone.bg.neutral} | #798086 |  |
| `toneStep.800` | color | {tone.bg.neutral} | #798086 | ⚙darken 0.56 (hsl) |
