# Alert

Canvas `8:69442`, file `1iLHv8dNR3kwSoBYNl1wgs`. Inline-повідомлення з іконкою+текстом+діями. 2 фрейми: **Alert** і **Alert/Global** (та сама матриця Variant×Outline×Collapse, Global не досліджено — ймовірно full-width/toast позиціонування).

## Variants
Variant(Success/Warning/Error/Info/Tip)×Outline(f/t)×Collapse(f/t, collapse=іконка-only 36×36 без тексту).

## Props
```
Alert({
  variant: "Success"|"Warning"|"Error"|"Info"|"Tip",
  outline, collapse,
  icon=true, title, text="Title", description1=true, description="Description",
  action1, action2=true,   // action1=показати блок дій; action2="Decline"(Secondary sm), + action1-кнопка="Accept"(Accent sm)
  closable,   // Close-кнопка(Btn Text, absolute top-right, -1px)
})
```

## Anatomy
Icon(20px) → Title(SemiBold12)+Description(Regular12) → опц. дії(Decline=Btn Secondary sm + Accept=Btn Accent sm) → опц.Close(Btn Text, absolute). Фон/бордер залежать від variant: `--alert/bg/{variant}`, `--alert/br/{variant}`.

## Tokens
Success: bg rgba(14,164,91,.1), br #0ea45b. `--alert/{padding:8,borderradius:8,borderwidth:1,gap:8,color}`. Warning/Error/Info/Tip кольори не зафіксовано детально (ймовірно ті самі семантичні кольори, що Tag/Status: warning=жовтогарячий, error=червоний, info=синій, tip=?).

## Notes
- Дії використовують **sm-розмір і нестандартні variant**: Decline=Secondary, Accept=**Accent**(не Primary!) — незвична пара для confirm/dismiss патерну.
- Collapse=true згортає Alert до 36×36 іконки без тексту (компактний стан).
- Alert/Global — паралельний фрейм з тією ж матрицею, не досліджено — ймовірно toast/full-width варіант того самого компонента.
