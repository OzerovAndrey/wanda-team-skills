# Menu

Canvas `8:69453`, file `1iLHv8dNR3kwSoBYNl1wgs`. Нижня/бокова навігація (bottom tab bar) — icon+label вертикальний таб.

## Menu/Item
Node `2642:995`. State(Default/Hover/Active/Focus/Disabled)×Checked.
```
MenuItem({ state, checked, icon=true, component, label="Label", badge })
```
Вертикальний стек: Icon(32px) → Label(SemiBold10). Checked-фон: `--menu/item/bg/default`(rgba(29,111,226,.16)), обмежений нижньою частиною(`h:42px` з `58px` повної висоти — фон не займає весь таб, тільки нижню зону навколо іконки+тексту). Badge(опц.)=**реальний Badge/Counter** top-right, **варіант залежить від checked**: `checked=false` → Default(сірий, bevel); `checked=true` → Important(#d83232, білий текст) — тобто бейдж міняє колір, коли таб активний/вибраний, не лишається завжди default.

## Menu (контейнер)
Node `2642:1043`. Variant(Horizontal/Vertical).
```
Menu({ variant: "Horizontal"|"Vertical", children })
```
Простий flex-ряд(`--menu/gap`6) з `children`-слотом для Menu/Item-інстансів. Vertical не досліджено детально (ймовірно `flex-col` замість `flex-row`).

## Tokens
`--menu/{gap:6,item/gap:4,item/size:58,item/paddingh:12,item/borderradius:8}`. `--menu/item/{bg/default,br/default,color/default}`. Badge = перевикористані токени з `badge.md`.

## Notes
- Це bottom-nav/tab-bar патерн (як мобільна навігація), не dropdown-меню (те — `dropdown.md`) чи контекстне меню.
- Badge вбудовує реальний Badge/Counter — узгоджуй зміни з `badge.md`.
- Vertical variant не досліджено детально.
