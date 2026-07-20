# Scrollbar

Canvas `5:2646`, file `1iLHv8dNR3kwSoBYNl1wgs`. Кастомний скролбар-індикатор — той самий, що вже неодноразово зустрічався в `card/default.md`, `drawer.md`, `dropdown.md`.

## Props
```
Scrollbar({ state: "Default"|"Hover", horizontal })
```

## Anatomy
Трек `--scrollbar/track/default`(transparent) з паддінгом 1px(верт.)/12px(гориз.) → Thumb 6px×48px, `--scrollbar/thumb/default`(rgba(121,128,134,.64)), radius `--scrollbar/borderradius/default`(3px). Horizontal — та сама структура, повернута на 90°. Hover-стан не перевірено детально (ймовірно товщий thumb — судячи з метаданих ширина зростає з 8px до 12px контейнера).

## Tokens
`--scrollbar/{track/default,thumb/default,borderradius/default}`.

## Notes
- Це той самий компонент-примітив, токени якого вже задокументовані розкидано по Card/Drawer/Dropdown — тут формальне єдине джерело.
- Завжди намальований вручну (track+thumb), не нативний `overflow: scroll` — при імплементації комбінуй з реальним CSS overflow на контейнері.
