# TabBar

Canvas `8:107708`, file `1iLHv8dNR3kwSoBYNl1wgs`. Мобільна нижня навігація (bottom nav bar), схожа за задумом на `menu.md`, але це окремий Organism-рівня контейнер із конкретним прикладом (Lobby/Promo/Deposit/Casino/Live Casino).

## TabBar/Item
Node `8:133534`. State(Default/Active/Disabled)×Accent(f/t)×Checked(f/t).
```
TabBarItem({ state, accent, checked, icon, label=true, text="Lable", badge })
```
Вертикальний стек: Icon(24px) → Label(SemiBold10, `--tabbar/item/default`rgba(44,44,44,.5) світла тема / rgba(255,255,255,.6) темна). Опц.Badge = **реальний Badge/Notifier/Accent1 with Ripple** (`badge.md`, з анімацією). `Accent=true` — особливий піднятий CTA-таб (напр. "Deposit"): кругла кнопка-іконка з градієнтом `--tabbar/item/accent/bg/{start:#ff2a9c,end:#dc0075}` і тим самим bevel, що Btn Accent.

## TabBar (контейнер)
Node `8:133570`. Variant(Menu).
```
TabBar({ variant: "Menu", children })
```
`--tabbar/bg`(rgba(63,67,70,.8)) + backdrop-blur(`--image/blur/md`8px, скляний ефект) → children-слот з TabBar/Item'ами (у прикладі — 5: Lobby, Promo, **Deposit**(accent, піднятий), Casino, Live Casino).

## Tokens
`--tabbar/{bg,item/{gap:4,paddingt:6,paddingb:22,paddingh:4,default,accent/{borderradius:20,bg/start-end}}}`. Ripple-badge = `badge.md`.

## Notes
- Той самий "нижня навігація" функціонал, що Menu (`menu.md`), але TabBar — окремий Organism з конкретнішим, мобільно-орієнтованим прикладом (5 табів, з CTA-табом посередині) і скляним напівпрозорим фоном.
- Accent-таб (напр. "Deposit") — єдиний елемент ряду з підвищеним, кольоровим кружком-кнопкою замість плоскої іконки — привертає увагу до основної конверсійної дії.
- Ripple-анімація на Badge — той самий паттерн, що вже задокументований у `badge.md` (Notifier with Ripple).
