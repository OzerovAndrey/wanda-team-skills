# Chip

Canvas `8:13507`, file `1iLHv8dNR3kwSoBYNl1wgs`. Тег/фільтр з avatar+icon+close.

## Variants
Size(md/sm)×State(Default/Hover/Active/Focus/Disabled)×Rounded(f/t)×Checked(f/t). Disabled лише з Checked=False (36 з 40 комбінацій).

## Props
```
Chip({
  size: "md"|"sm", state, rounded, checked,
  avatar, icon, component, lable, closable=true,
})
```

## Anatomy
Avatar(24px коло, опц.) → Icon(20/16px) → Label(bodySm12/16, колір залежить від checked) → Close(20/16px, checked=true→синя іконка SVG).

## Tokens
md: `--chip/size`(32), `--chip/paddingh`(12), `--chip/rounded/borderradius`(8), `--chip/circle/borderradius`(16,pill). sm: 24/12/6. `--chip/gap`(4). Unchecked: `--chip/bg/default`(rgba(121,128,134,.1)), `--chip/br/default`. Checked: `--chip/checked/bg`(rgba(29,111,226,.08)), `--chip/checked/br`(#1d70e2). `--chip/borderwidth`(1).

## Notes
- `lable`(не `label`) — та сама помилка, що в Badge/Bookmark, системна в ДС.
- Checked міняє тільки фон/рамку/close-колір, НЕ колір тексту.
- Avatar+sm не перевірено (avatar 24px може не влізти в 24px sm-чип).
- Rounded — стилістичний перемикач, комбінується з будь-яким size/state/checked.
