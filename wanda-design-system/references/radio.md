# Radio

Canvas `8:41417`, file `1iLHv8dNR3kwSoBYNl1wgs`. 2 під-компоненти: Default(коло, як Checkbox), Card(картка-опція).

## Radio/Default
Node `8:53714`. Layout(⬅️Left/Right➡️/🚧)×Block×State×Checked.
```
RadioDefault({ layout, block=true, state, checked, description })
```
Структура=Checkbox: коло-Control(20px,radius10) + Label + опц.Description. **checked=SVG-асет** (клонуй instance, не малюй!). `layout="🚧"` — службовий, для block=false (як Divider).

## Radio/Card
Node `8:14020`. State×Checked.
```
RadioCard({ state, checked, prefix, image, icon, component, label, description, size })
```
240×48px: Prefix(опц.)→Label+Description(flex-1)→**Radio/Default вбудований як реальний instance**(не копія). Description тут 10px (у Default — 12px!).

## Tokens
`--radio/gap`(12), `--radio/{borderwidth:1,borderradius:10}`. `--radio/default/{bg,br}/default`. `--radio/{label,description}/default`(rgba(44,44,44,{.9,.7})). Card: `--radio/card/{bg:white,br,borderradius:8,paddingh:12,paddingv:8}`.

## Notes
- checked=SVG-асет — клонуй instance для Radio, як для Checkbox.
- Card буквально вбудовує Default (композиція, не дублювання).
- Description-розмір різний: Default=12px, Card=10px — не уніфікуй.
