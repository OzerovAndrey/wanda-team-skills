# Card/Details

Node `8:84663` (canvas Card `8:69448`), file `1iLHv8dNR3kwSoBYNl1wgs`. 288×220px. Інформаційна панель Header/Body/Footer (не товар/приз).

## Props
```
CardDetails({ footer=true, header=true, layout, notification, scrollbar, segmented })
```

## Anatomy
Header(true, "Details" Bungee18 + опц. Segmented-табс, див. `segmented.md`) → Body(flex-1, layout-слот, fader top/bottom завжди, scrollbar=track/thumb без кнопки-стрілки) → Footer(true, ActionBar 2× flex-1: Btn Secondary"Deactivate"+Btn Primary"Deposit") → Settings-кнопка(Btn Secondary sm, top-right, **завжди присутня, без пропу**) → Notification(overlay, як у Shop).

## Tokens
Card-базові + `--tt/primary`. Segmented: див. `segmented.md`. `--fader/*`, `--scrollbar/*`(як Card/Default). `--btn/secondary/*`, `--btn/primary/*`. `--actionbar/gap`(12). `--notification/local/*`.

## Notes
- Settings-кнопка завжди є (не булевий проп) — не пропусти її.
- Fader завжди показаний, `scrollbar` лише додає track+thumb.
- Footer-кнопки рівної ширини (flex-1 кожна), на відміну від Card/Loot.
