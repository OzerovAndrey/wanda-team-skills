# Tabs

Canvas `8:41425`, file `1iLHv8dNR3kwSoBYNl1wgs`. Tab/Item(окремий таб) + Tab(контейнер, до 10 табів).

## Tab/Item
Node `8:65777`. Size×Position(Top/Bottom/Left/Right)×State×Checked×Accent(не перевірено).
```
TabItem({ size, position, state, checked, accent, icon, component, label, text, badge, badgeXs })
```
Unchecked: text приглушений. Checked: **бордер-індикатор з боку `position`**(для Top=border-b, 2px, #1d70e2)+text синій. `badge`/`badgeXs` = реальні Badge/Counter та Badge/Notifier(див. `badge.md`).

## Tab (контейнер)
Node `8:66138`. Size×Position×Centered.
```
Tab({ size, position, centered, divider=true, actions, actions1, scrollable, scrollable1, component, component1, item3..item10 })
```
Ряд табів(gap24, overflow-x-auto) + базова лінія знизу. Actions=Btn Secondary sm по краях. Scrollable="More"-стрілки + **inset box-shadow**(`--tab/shadow/*`, третій технічний прийом "є ще контент" — після Fader-градієнта і List/Fadeable mask).

## Tokens
`--tab/item/{gap/md:8,size/md:40,color/default,checked/color,checked/indicator,indicatorborderwidth}`. `--tab/{gaph:24,br,borderwidth}`. `--tab/actions/paddingh`(24). `--tab/shadow/{xright,xleft,blur:16,spread:-24,color}`.

## Notes
- 3-й технічний прийом "є ще контент" у ДС (Fader/mask/inset-shadow) — не уніфікуй.
- `position` = сторона indicator-лінії, не косметика (Left/Right→вертикальна).
- Accent не перевірено (`8:65784`/`8:65814`). Макс 10 табів.
