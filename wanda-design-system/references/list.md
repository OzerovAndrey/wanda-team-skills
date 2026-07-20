# List

Canvas `8:13513`, file `1iLHv8dNR3kwSoBYNl1wgs`. 3 під-компоненти: Item-Default(гнучкий), Item-Inline(label...value), Fadeable(mask-fade).

## List/Item — Default
Node `8:36647`. State×Shifted×Centered×LabelSize×Highlighted = 80 варіантів.
```
ListItemDefault({
  state, shifted, centered, labelSize: "Default"|"Strong", highlighted,
  addon, icon, component3, label1, text1, node, component1,   // Addon-колонка (тільки shifted=true)
  header=true, prefix, component5, overline, text3, label, underline,
  propser,   // вбудований Propser, див. propser.md
  status, suffix, label2, text2, node1, component,
  description, text, customLayout, component2, arrow, component4, divider=true,
})
```
Конструктор, як Card/Default. `shifted=false`=центрований рядок; `shifted=true`=Addon-колонка зліва + контент вирівняний по верху.

## Tokens
`--list/item/{gaph:12,gapv:16,paddingh:8,paddingv:8}`. `--list/item/color/default`(rgba(44,44,44,.9)), `/color/overline/default`(.7). `--list/item/statusgap`(4). `--divider/gaph`(див. `divider.md`). `--propser/*`(див. `propser.md`).

## List/Item — Inline
Node `8:38424`. Variant(Default/Accent1).
```
ListItemInline({ variant, icon=true, component, label, track=true, counter, value1=true, value, node, component1 })
```
"Label ⋯⋯⋯ Value" — track=пунктирна лінія (SVG), counter=**реальний Badge/Counter**(accent2, див. `badge.md`), value=жирний текст.

## List/Fadeable
Node `8:38439`. Breakpoint(xs/sm-md/lg-xl).
```
ListFadeable({ breakpoint, layout })
```
**CSS mask** (не fader-градієнт!): `mask-alpha mask-intersect`, offset -16px 0, розмір 360×40 — краї розчиняються через маску, інший технічний прийом, ніж `fader.md`.

## Notes
- Item-Default — конструктор (як Card/Default), комбінуй слоти.
- Item-Inline вбудовує реальний Badge/Counter — зміни в badge.md впливають тут.
- Fadeable ≠ Fader — різні технічні прийоми, не уніфікуй.
