# ActionBar

Canvas `8:69441`, file `1iLHv8dNR3kwSoBYNl1wgs`. Обгортка для 1-2 кнопок дії (Confirm/Cancel) — той самий патерн, що ми вже бачили в `card/details.md` Footer.

## Variants
Direction(Column/Row)×Type(Block/Float/Inline)×Position(—/Right/Left/Center), 6 намальовано: Column+Block, Row+Block, Row+Float, Row+Inline×{Right,Left,Center}.

## Props
```
ActionBar({ direction: "Column"|"Row", type: "Block"|"Float"|"Inline", position: "—"|"Right"|"Left"|"Center", btn2 })
```

## Anatomy
Btn Primary("Confirm", завжди) + опц. Btn Secondary("Cancel", `btn2`). **Block**=кнопки `w-full`(на всю ширину, і в Column, і в Row-варіантах). **Inline**=кнопки auto-width(`shrink-0`, не full). **Порядок реверсується для Row+Inline+Right**: Secondary("Cancel") йде першою, Primary("Confirm") — другою/крайньою праворуч (типова UX-конвенція: головна дія найправіше).

## Tokens
`--actionbar/gap`(12). Кнопки = реальні `Btn` Primary/Secondary md (див. `button.md`), нічого власного крім gap і layout-логіки.

## Notes
- Це просто layout-обгортка навколо реальних Btn-інстансів — немає власних кольорів/токенів, крім `--actionbar/gap`.
- Той самий Footer-патерн з `card/details.md` — при імплементації обох звіряй.
- Float-варіант не досліджено детально (ймовірно absolute-позиціонування поверх контенту).
