# Sidebar

Canvas `8:107709`, file `1iLHv8dNR3kwSoBYNl1wgs`. Найскладніший Organism у ДС — бокова навігаційна панель сайту (desktop). Багато під-компонентів, зібраних в одну композицію.

## Sidebar (головний контейнер)
Node `8:133659`. Authorized(f/t)×Collapse(f/t) — 4 варіанти (складений/розгорнутий × гість/залогінений).

### Структура композиції (з реального прикладу, `4156:4772`)
Зверху вниз, усе — реальні перевикористані компоненти:
1. **Card/Bonus/Basic** (`card/bonus-basic.md`) — промо-бонус угорі.
2. **Sidebar/Event** — банер події/турніру (не досліджено детально).
3. **Quicklinks** — 2× **Sidebar/Quicklinks** у ряд (швидкі посилання-плитки).
4. **Jackpot** — банер джекпоту (окремий інстанс, не досліджено детально).
5. **Menu** — список навігації: чергування **Sidebar/Menu**(Title/Item) та **Divider**(`divider.md`) та **Sidebar/Menu/Items**(розгортувані підгрупи).
6. Внизу: **Language select**(`8:128725` з `header.md`) + **Dropdown**(`dropdown.md`).
7. **Apps** — 2× "Apps badge" (посилання на мобільні застосунки).
8. **Scrollbar** (прихований за замовч., з'являється при скролі).

Для **гостя** (Authorized=False) — коротша версія без Account/Avatar-блоку й персональних розділів меню; для **залогіненого** (Authorized=True) — довша, з блоком Account (Avatar72px + ім'я + Progress-рівень) на самому верху.

## Sidebar/Menu
Node `8:133799`. State(Default/Hover/Active/Focus/Disable)×Type(Title/Item)×Checked×Collapse.
```
SidebarMenu({
  state, type: "Title"|"Item", checked, collapse,
  badge,   // Badge/Notifier(important, 6px) top-right іконки
  icon=true, component,
  text="Label",
  button=true,   // шеврон-стрілка праворуч (розгорнути підменю)
})
```
Bg `--sidebar/menu/title/bg/default`(transparent за замовч., змінюється по checked/hover). Icon(20px)+опц.Badge → Label(14px, `--sidebar/menu/title/color/default`) → опц.Btn Text-шеврон.

## Sidebar/Menu/Items
Node `8:133958`. Collapse(f/t) — розгортувана підгрупа пунктів меню (напр. "Game flyout"/"Promo flyout"/"Activities flyout" з реальних композицій). Не досліджено детально.

## Не досліджено детально
- **Sidebar/Potion** (`8:133769`) — банер-плашка (можливо промо чи попередження).
- **Sidebar/Quicklinks** (`8:133778`) — плитка швидкого посилання.
- **Sidebar/Event** (`8:133786`) — банер турніру/події.

## Tokens
`--sidebar/menu/title/{bg/default,paddingl:16,paddingr:8,gap:16,color/default}`. Badge = `badge.md`. Card/Bonus/Basic = `card/bonus-basic.md`.

## Notes
- Sidebar — це, по суті, **вертикальна композиція з 8+ інших компонентів ДС** (Card/Bonus/Basic, Divider, Badge, Dropdown, реальні кнопки) — сам по собі майже нічого унікального не малює, окрім Menu-пунктів і структурних плиток (Event/Quicklinks/Potion).
- Collapse-режим (Authorized×Collapse=True) звужує панель до 80px — лише іконки, без тексту (типовий "звужений сайдбар" паттерн).
- Composite-приклади в файлі ("Old"/"New" секції) показують кілька повних реальних макетів сайдбару для гостя/залогіненого користувача — корисно звірятись з ними при потребі точного порядку елементів.
- Sidebar/Potion, Quicklinks, Event не досліджені детально — при потребі `get_design_context` на відповідний node.
