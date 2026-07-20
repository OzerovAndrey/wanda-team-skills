# Propser

Canvas `8:41416`, file `1iLHv8dNR3kwSoBYNl1wgs`. "Label • Label" метадані-рядок, вбудований у List/Item-Default.

## Propser (контейнер)
Node `8:53656`. Size(md/sm).
```
Propser({ size, splitter="•", item2..item5 })
```
Кожен item додає свій splitter попереду.

## Propser/Item
Node `8:53637`. Variant(Default/Accent1/Accent2, не перевірено)×Size.
```
PropserItem({ variant, size, icon, component, label })
```
OpenSans14/20(md)+опц.іконка.

## Tokens
`--propser/gap`(8), `--propser/item/gap`(4), `--propser/item/color`(rgba(44,44,44,.9)), `--propser/splitter`(rgba(44,44,44,.3)).

## Notes
- Не плутати з Paginator (пагінація сторінок) — інша функція.
- `splitter` — редагований текст, не жорстка крапка.
- Accent1/2 кольори не перевірено (`8:53641`/`8:53644`).
