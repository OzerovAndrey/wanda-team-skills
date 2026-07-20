# Breadcrumbs

Canvas `8:69446`, file `1iLHv8dNR3kwSoBYNl1wgs`. Прості хлібні крихти, до 7 елементів.

## Breadcrumbs (контейнер)
Node `8:77264`. Один статичний символ (без явних варіантів на контейнері).
```
Breadcrumbs({ separator="/", item3..item7 })
```
Item#1/#2 завжди присутні, item3-7 опційні. Кожен наступний item додає свій separator попереду (як у Propser).

## Breadcrumbs/Item
Node `8:77251`. State(Default/Hover)×Selected(f/t) — **Selected=True не перевірено детально** (ліміт запитів досягнуто, `8:77260` не отримано).

## Tokens
`--breadcrumbs/{gap:4,itemgap:4,paddingh:4,color/default:rgba(44,44,44,.5),separatorcolor:rgba(44,44,44,.3)}`. Текст OpenSans14/20 bodyMd.

## Notes
- Максимум 7 елементів (item1/item2 завжди + item3-7 опційні).
- Separator — редагований текстовий проп (як у Propser), не жорстко "/".
- **Selected-стан не досліджений** (колір активного/поточного пункту хлібних крихт) — перевір `8:77260` при наступній нагоді.
