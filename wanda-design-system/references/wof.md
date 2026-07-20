# WoF (Wheel of Fortune)

Canvas `8:69300`, file `1iLHv8dNR3kwSoBYNl1wgs`. Компоненти для гри "Колесо фортуни". 2 під-компоненти: Sector(сегмент колеса), Btn(центральна кнопка "Spin").

## WoF/Sector
Node `8:69415`. Color(Primary/Secondary/Tertiary)×Size(sm/md).
```
WoFSector({ color, size, text })
```
**Форма сегмента — це растровий/SVG image-асет** (готова pie-slice форма з градієнтом, не CSS-конструкція) + текст(**Bungee28, t1-стиль**, `--wof/sector/{color}/color`white, text-shadow=shadow/md з `effects.md`), вирівняний по правому краю сегмента.

## WoF/Btn
Node `1890:573`. Size(xs/sm)×State(Default/Hover).
```
WoFBtn({ size, state })
```
Центральна кнопка колеса — теж SVG-асет (форма+градієнт+ефекти запечені) з inner-shadow(`--wof/btn/innerShadow/*`) + drop-shadow(`--wof/btn/dropShadow/*`), текст "Spin"(**Bungee24, t2-стиль**, white, той самий text-shadow).

## Tokens
`--wof/sector/{color}/{bg,color}`. `--wof/btn/{default/bg,innerShadow/{color,blur},dropShadow/{color,y,blur}}`. Текст обох — `--shadow/{y,blur}/md`, `--shadow/default`(з `effects.md`) як text-shadow.

## Notes
- Форми Sector і Btn — готові image-асети (SVG з запеченим градієнтом/тінями), не CSS-фігури — для реальної імплементації або використовуй SVG як є, або відтвори форму окремо (sector = дуга/трикутник з градієнтом).
- Текст використовує Title-тіри (t1/t2, Bungee) — узгоджено з правилом типографіки (заголовки=Bungee).
