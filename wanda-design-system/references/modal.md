# Modal

Canvas `8:69454`, file `1iLHv8dNR3kwSoBYNl1wgs`. Центральний діалог поверх затемненого фону — той самий каркас, що Drawer (mask+Card+Header+ActionBar+Close), але центрований, не бічний.

## Variants
Size(sm/md/lg)×Type(Fit/Fill)×Centered(f/t)×Horizontal(f/t). Досліджено: md/Fit/false/false.

## Props
```
Modal({
  size: "sm"|"md"|"lg", type: "Fit"|"Fill", centered, horizontal,
  heroStart,       // Hero-зображення зверху картки (160px, той самий Back+Front патерн)
  cover,           // Image/Cover усередині контенту (окремо від heroStart)
  header=true, icon, button, title="Title", titleShift, description, text="Description",
  layout=true, component1,     // основний контент-слот
  actionNode, action,
  actionBar=true,  // Btn Primary "Confirm"
})
```

## Anatomy
Mask(`--modal/mask`rgba(0,0,0,.28) + backdrop-blur/sm) центрує Card(`--modal/bg`white, radius16, shadow=**shadow/lg** з `effects.md`, max-width400/640 залежно від size) → опц.Hero-Start(160px) → Positioning wrapper(gap24, padding16): опц.Cover → Header(опц.Icon24 + опц.кругла Button-іконка + Title **Bungee18/t4** + опц.Description12) → layout-слот → опц.actionNode → ActionBar(Btn Primary "Confirm"). Close(absolute top-4 right-4, білий wrapper `--modal/close/{padding:4,borderradius:20}` навколо Btn Secondary sm).

## Не досліджено детально
- **Type=Fill** — ймовірно контент розтягується на всю висоту (на відміну від Fit, що облягає контент).
- **Centered=True** — ймовірно інше вертикальне позиціонування (по центру екрана, а не зверху).
- **Horizontal=True** — ймовірно бічна компоновка Hero+контент (замість вертикальної).
- **Modal/Ondoarding** (`8:99381`, окремий символ 752×596) — спеціалізований варіант для онбордингу, не досліджено.

## Tokens
`--modal/{mask,borderradius:16,gap:24,paddingh:16,paddingv:16,image/borderradius:8,header/gap:4,marginh:16,marginv:48,close/padding:4,close/borderradius:20}`. `--shadow/y-blur/lg`(тінь картки, з `effects.md`). `--tt/primary-secondary`(Title/Description). `--btn/primary-secondary/*`.

## Notes
- **Ідентичний каркас Drawer** (`drawer.md`) — mask+Card+Header+layout+ActionBar+Close — відмінність лише в позиціонуванні (центр vs бік екрана) і тіні (Modal=shadow/lg, Drawer не має явної тіні картки). Якщо документуєш один — звіряй з іншим.
- Title завжди Bungee18(t4) — узгоджено з правилом типографіки.
- Fill/Centered/Horizontal варіанти не перевірено — при потребі `get_design_context` на конкретний node.
