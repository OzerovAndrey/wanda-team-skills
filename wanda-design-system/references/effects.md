# Effects

Node `5:2645` (Styles→Effects), file `1iLHv8dNR3kwSoBYNl1wgs`. 5 категорій, основа "об'ємних" поверхонь ДС.

## Shadow
sm/md/lg: y=2/4/8px, blur=3/6/12px, color=`--shadow/default`(rgba(0,0,0,.15) світла / .25 темна тема). = `--card/shadowprops/*` в родині Card (Default=sm, Jackpot=md).

## Glow
`inset 0 0 var(--glow/blur,10px) var(--glow/accent1/color,rgba(29,111,226,.48))`. Внутрішнє підсвічування (фокус/виділення). Задокументовано лише accent1.

## Bevel
3-шаровий: зовнішня тінь + light-edge(зверху) + dark-edge(знизу) inset:
```
box-shadow: 0 y/md blur/md color/md, inset 0 lightedge/y/md lightedge/blur/md lightedge/color/md, inset 0 darkedge/y/md darkedge/blur/md darkedge/color/md;
```
= `--btn/boxshadow/*`(button.md) і Badge Counter/Notifier. Кольори прозорі в нейтральному показнику, стають видимі в конкретному варіанті (напр. `--btn/boxshadow/lightedge/color/primary`).

## Emboss
2-шаровий inset (без зовнішньої тіні) — Bevel мінус зовнішня тінь:
```
box-shadow: inset 0 lightedge/y(-1.5) lightedge/blur(4) color, inset 0 darkedge/y(2) darkedge/blur(4) color;
```
= той самий ефект в Input (`input.md`).

## Glass
backdrop-blur + `--bg/glass/dark`(rgba(0,0,0,.15)). sm=6px, md=24px. = Time/Base, Notification/Local (обидва використовують md/24px).

## Tokens
`--shadow/{y,blur}/{sm,md,lg}`, `--shadow/default`. `--glow/blur`(10), `--glow/accent1/color`. `--bevelprops/{shadow,lightedge,darkedge}/{y,blur,color}/md`. `--embossprops/{lightedge,darkedge}/{y,blur,color}`. `--glass/blur/{sm,md}`, `--bg/glass/dark`.

## Notes
- Bevel/Emboss = той самий прийом (light+dark edge inset), різниця лише в зовнішній тіні (Bevel має, Emboss ні).
- Glass завжди з `--bg/glass/dark` — без нього контраст тексту зникне.
