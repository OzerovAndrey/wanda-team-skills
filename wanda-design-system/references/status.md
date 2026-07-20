# Status

Canvas `8:41421`, file `1iLHv8dNR3kwSoBYNl1wgs`. 3 ваги: Default(голий), Tag(пігулка), Button(bevel). Вбудований у List/Item.

## Common
```
Status*({ variant: "Default"|"Accent 1"|"Accent 2"|"Success"|"Warning"|"Danger", size, indicator=true, icon, component, label/text })
```
Indicator=8px крапка `--status/indicator/default`(rgba(44,44,44,.3)).

## Status/Default
Node `8:64117`. Indicator+Icon+Label, без фону. `--status/label`(rgba(44,44,44,.9)).

## Status/Tag
Node `8:64166`. +Circle(f/t). Фон`--status/bg/default`(rgba(121,128,134,.1)), border`--status/br/default`, `--status/tag/{paddingh/sm:12,borderwidth:1,rounded/borderradius/sm:8}`.

## Status/Button
Node `8:64263`. Size(xs-xl)×Label. **Bevel-ефект**(як Btn): `--status/boxshadow/{base,lightedge,darkedge}`. `--status/btn/{gap/md:8,paddingh/md:24,borderradius/md:20}`.

## Notes
- 3 ваги для контексту: Default=inline, Tag=фільтр-елемент, Button=акцентований CTA-подібний (не клікабельний по суті).
- Кольори Accent1/2/Success/Warning/Danger не перевірено — ймовірно як в Tag/Badge.
- Тільки Button має bevel, Default/Tag — ні.
