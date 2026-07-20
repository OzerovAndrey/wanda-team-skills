# Dropdown

Canvas `8:69451`, file `1iLHv8dNR3kwSoBYNl1wgs`. Спливаюча панель (trigger+popup) — той самий 12-позиційний паттерн, що Tooltip, плюс окремі Item/Group під-компоненти для меню.

## Dropdown (wrapper)
Node `8:171918`. Position(12, як Tooltip)×Hug(f/t).
```
Dropdown({
  position: "Top — Left"|...(12), hug,
  trigger,           // тригер-елемент (кнопка/поле, що відкриває дропдаун)
  showDropdown=true,
  layout, component,     // верхній Layout-слот усередині панелі (над Menu)
  menu=true, component2, // сам список Item'ів (до 10, `item1..item10`)
  layout1, component1,   // нижній Layout-слот (під Menu)
  scrollbar,
  width="——————————",   // службовий текст для виміру ширини (Sizer, invisible)
})
```

### Anatomy
Trigger(hug=true: quadratний елемент; hug=false: `w-full` розтягнутий) → Wrapper(`drop-shadow`=shadow/lg з `effects.md`, offset gap4) → Container(`--dropdown/bg`white, radius8, paddingv8) → опц.Layout(top) → Menu(до 10 Item-слотів) → опц.Layout(bottom) → опц.Scrollbar.

## Dropdown/Item/Square, Dropdown/Item/Rounded
Node `8:96627`/`8:96684`. State(Default/Hover)×Checked×Danger×Disabled. Різниця Square/Rounded — лише форма контейнера (radius), решта ідентична.
```
DropdownItem({
  state, checked, danger, disabled,
  avatar, icon, component, flag, component2,
  label="Label", caption, text="Caption",
  arrow,   // шеврон праворуч (для вкладених підменю)
})
```
Ряд: Avatar(24px, опц.) → Icon(20px, опц.) → Flag(24×16px, опц.) → Label+опц.Caption(приглушений) → опц.Arrow(вкладене підменю). `--dropdown/item/color/default`(rgba(44,44,44,.7)), `/color/caption`(rgba(44,44,44,.5)).

## Не досліджено детально
- **Dropdown/Menu** (`8:96741`) — ймовірно обгортка над Item-списком.
- **Dropdown/Group/Square, /Rounded** (`8:96770`, `8:96795`) — ймовірно заголовок-розділювач групи items у меню.

## Tokens
`--dropdown/{bg:white,borderradius:8,paddingv:8,gap:4}`. `--dropdown/item/{gap:16,paddingh:20,paddingv:8,captiongap:8,color/default,color/caption}`. `--shadow/y-blur/lg`(drop-shadow панелі, з `effects.md`).

## Notes
- Ідентична 12-позиційна система, що й Tooltip (`tooltip.md`) — той самий підхід до позиціонування спливаючих елементів у ДС.
- `Danger`-варіант Item(State×Checked×Danger×Disabled) не перевірено детально (ймовірно колір тексту стає червоним, для деструктивних дій "Delete" тощо).
- Sizer/Start/End anchor-елементи — технічний артефакт auto-width Figma-компонента, не смислова частина розмітки.
