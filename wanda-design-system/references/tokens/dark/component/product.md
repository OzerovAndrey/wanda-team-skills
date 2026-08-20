# Dark / component / product (overrides)

Джерело: `dark/component/product.json` (Token Studio export). Автозгенеровано з JSON —
не редагувати вручну, а перегенерувати скриптом при новому експорті.

Колонки: **Raw** — значення як записано в цьому сеті (alias `{...}` або
літерал). **Resolved** — фінальне значення після проходу по стеку сетів
light/core → light/map → light/alias → light/styles → light/component/general → light/component/product → light/component/widget → light/component/betting → dark/core → dark/alias → dark/component/general → dark/component/product → dark/component/widget → dark/component/betting (порядок з `$themes.json`/`$metadata.json`); порожньо, якщо Raw уже
літерал.


## appsBadge

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `appsBadge.bg` | color | {black} | #000000 |  |
| `appsBadge.br` | color | {white} | #FFFFFF | ⚙alpha 0.5 (hsl) |
| `appsBadge.color` | color | {white} | #FFFFFF |  |

## award

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `award.color` | color | {tone.bg.vibrant} | #4f8dff | ⚙alpha 0.64 (hsl) |

## card

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `card.mood.bg.big-win-hunt` | color | {alt1} | #a04bc4 | ⚙darken 0.15 (hsl) |
| `card.mood.bg.new-arrivals` | color | {success} | #2BDA8D | ⚙darken 0.15 (hsl) |
| `card.mood.bg.pure-adrenalin` | color | {warning} | #FAC02C | ⚙darken 0.2 (hsl) |
| `card.mood.bg.relaxed-flow` | color | {alt3} | #BD9865 | ⚙darken 0.15 (hsl) |
| `card.mood.bg.surprise-mode` | color | {product1} | #4f8dff | ⚙darken 0.15 (hsl) |
| `card.mood.bg.tactical-play` | color | {alt2} | #00BCD4 | ⚙darken 0.15 (hsl) |

## checkbox

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `checkbox.checked.indicator.disabled` | color | {white} | #FFFFFF | ⚙alpha 0.48 (hsl) |

## countdown

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `countdown.v2.bg` | color | {white} | #FFFFFF | ⚙alpha 0.2 (hsl) |

## footer

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `footer.bg` | color | {bg.neutral.primary} | #798086 |  |

## header

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `header.bg` | color | {bg.neutral.primary} | #798086 |  |

## hero

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `hero.bg.end` | color | {tt.accent1} | #4f8dff | ⚙alpha 0 (hsl) |
| `hero.bg.start` | color | {tt.accent1} | #4f8dff | ⚙alpha 0.3 (hsl) |

## notification

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `notification.edge.bg` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.32 (hsl) |

## segmented

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `segmented.item.checked.bg` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.52 (hsl) |
| `segmented.item.checked.label` | color | {tt.primary} | #FFFFFF |  |

## spinner

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `spinner.track` | color | {white} | #FFFFFF | ⚙alpha 0.18 (hsl) |

## switcher

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `switcher.bg.default` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.36 (hsl) |
| `switcher.bg.hover` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.52 (hsl) |
| `switcher.checked.inner.color.disabled` | color | {tt.quaternary} | #FFFFFF |  |
| `switcher.indicator.bg.disabled` | color | {white} | #FFFFFF | ⚙alpha 0.48 (hsl) |
| `switcher.indicator.color.default` | color | {tone.bg.neutral} | #798086 | ⚙darken 0.56 (hsl) |
| `switcher.indicator.color.disabled` | color | {black} | #000000 | ⚙alpha 0.4 (hsl) |

## tabbar

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `tabbar.item.active` | color | {tt.primary} | #FFFFFF |  |
| `tabbar.item.default` | color | {tt.secondary} | #FFFFFF |  |
| `tabbar.item.disabled` | color | {tt.quaternary} | #FFFFFF |  |

## tooltip

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `tooltip.boxShadowColor` | color | {black} | #000000 | ⚙alpha 0.25 (hsl) |

## widget

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `widget.message.bg.recipient` | color | {fill.default} | #798086 |  |
| `widget.message.bg.sender` | color | {product1} | #4f8dff | ⚙darken 0.5 (hsl) |
