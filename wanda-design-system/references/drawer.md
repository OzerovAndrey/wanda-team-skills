# Drawer

Canvas `8:69450`, file `1iLHv8dNR3kwSoBYNl1wgs`. Бокова/верхня-нижня панель, що виїжджає поверх затемненого фону. 2 сімейства: **Horizontal**(Left/Right) і **Vertical**(Top/Bottom).

## Drawer/Horizontal
Node `8:95200`. Position(Left/Right)×Size(md/sm)×Rounded(f/t).
```
DrawerHorizontal({
  position: "Left"|"Right", size: "md"|"sm", rounded,
  cover,           // Image/Cover(160px, `image.md`) зверху
  header=true, icon, title="Title", titleShift=true,
  layout=true, component1,       // основний контент-слот
  actionNode, action,            // додатковий вузол-слот
  actionBar,       // Btn Primary "Confirm" (той самий ActionBar-патерн)
  scrollbar,       // track+thumb праворуч
  closable=true,   // Close-кнопка(Btn Secondary sm) у білому колі top-right
})
```

### Anatomy
Зовнішня обгортка(mask): `--drawer/mask`(rgba(0,0,0,.28)) + `backdrop-blur/sm`(6px, з `effects.md`), `pr:--drawer/offset`(48px, залишає видимим краєчок фону праворуч при Left-позиції). Card(`--drawer/bg`white, padding16, gap24, max-width640): опц.Cover → Header(icon24px+Title **Bungee18/t4**) → layout-слот(контент) → опц.actionNode → опц.ActionBar(Btn Primary "Confirm") → опц.Scrollbar → Close(absolute, білий круг-обгортка `--drawer/close/{padding:4,borderradius:24}` навколо Btn Secondary sm).

## Drawer/Vertical
Node `8:95345`. Position(Top/Bottom)×maxHeight(f/t)×Rounded(f/t) — не досліджено детально, за аналогією той самий каркас Header+layout+ActionBar+Close, тільки виїжджає зверху/знизу замість збоку. `maxHeight` ймовірно обмежує висоту панелі (для довгого контенту).

## Tokens
`--drawer/{mask:rgba(0,0,0,.28),offset:48,bg:white,gap:24,padding:16,image/borderradius:8,title,header/gap:8}`. `--drawer/close/{padding:4,borderradius:24}`. `--glass/blur/sm`(маска), `--scrollbar/*`(`list.md`/`card/default.md`), `--btn/primary-secondary/*`(ActionBar+Close).

## Notes
- **Rounded**-варіант не досліджений детально (ймовірно радіус на прилеглому до екрана краю панелі, а не всіх чотирьох кутах).
- `--drawer/offset`(48px) — навмисний відступ, що лишає видимим краєчок фону з протилежного боку від Position — це UX-сигнал "є ще контент/можна закрити тапом поза панеллю".
- Vertical(Top/Bottom) не досліджений детально — при потребі `get_design_context` на `8:95346` тощо.
