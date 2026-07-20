# Progress

Canvas `8:41415`, file `1iLHv8dNR3kwSoBYNl1wgs`. 3 під-компоненти: Linear(бар), Circle(SVG-кільце), Steps(дискретні сегменти).

## Progress/Linear
Node `8:166561`. Size(sm/md/lg)×Horizontal×State(Default/Success/Error). Токени вже зустрічались в card-файлах: `--progress/track/color`, `--progress/linear/borderradius/{sm,md}`, `--progress/indicator/start→end/default`(зелений→блакитний). Success/Error не перевірено.

## Progress/Circle
Node `8:52357`. Variant(Full/Gap)×Size(xs-xl)×State×Outer×LineRounding.
```
ProgressCircle({ variant, size, state, outer, lineRounding, track=true, statusLabel, text })
```
**Не CSS conic-gradient** — 2 накладені SVG (Track+Indicator обрізаний через inset%) з конкретним кутом заповнення. Для реального коду: переробити на SVG stroke-dasharray/dashoffset або conic-gradient — Figma дає лише візуальний референс, не формулу.

## Progress/Steps
Node `8:52968`. Size(xs-lg)×State×Block.
```
ProgressSteps({ size, state, block, header=true, label, info, step2..step10, status, text })
```
Прямокутні сегменти 16×16(md): виконаний=градієнт success(#0ea45b)+bevel-inset; невиконаний=`--progress/track/color`(rgba(29,111,226,.32))+inset-тінь.

## Tokens
`--progress/color/default`(спільний). `--progress/track/color`(Linear+Steps). `--progress/indicator/{start,end}/{state}`. `--progress/steps/{gaph:4,borderradius/md:4}`. `--progress/linear/borderradius/{sm,md}`. `--progress/boxshadow/{track,indicator/lightedge/darkedge/glow}/*`.

## Notes
- 3 різні UX-задачі: Linear=% виконання, Circle=компакт-дашборд, Steps=дискретний wizard.
- Circle=SVG-асет з фіксованим кутом, не жива формула — рахуй кут/dashoffset сам.
- Success/Error ймовірно просто міняють колір-суфікс токена.
