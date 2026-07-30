# Layout / Page Grid (правила збірки сторінок) — індекс

**ОБОВ'ЯЗКОВО читай цей файл перед збіркою будь-якої повної сторінки** (не окремого компонента).

Повні, вичерпні правила (paddings/gaps/розміри/border-radius, виміряні напряму з реальної сторінки продукту) тепер живуть у `references/pages/*.md` — по одному файлу на **тип сторінки**. Перший і поки єдиний еталон — **Main Page**:

| Тип сторінки | Файл | Джерело (Figma) |
|---|---|---|
| **Main Page** (Lobby — Authorized) | `pages/main-page.md` | file `QbmTYjRSyzALRb5GIl4Itk`, node `8991:58214` |

Інші типи сторінок додаватимуться в цю ж таблицю по мірі надходження прикладів від команди.

Цей файл (`layout.md`) — короткий quick-reference з тими самими цифрами, що й `pages/main-page.md`; якщо десь розбіжність — **`pages/main-page.md` головніший**, це файл править сюди.

## Головна таблиця сітки (з `pages/main-page.md`)

| Breakpoint | Ширина сторінки | Sidebar | Page-container | Padding (ліво/право) | Content width | Header height | Hero height |
|---|---|---|---|---|---|---|---|
| **xs** | 360px | ❌ немає | = вся ширина (360) | 16px | 328px | 56px | 240px |
| **sm** | 768px | ❌ немає | = вся ширина (768) | 40px | 688px | 56px | 240px |
| **md** | 1024px | 80px | 944px | 40px | 864px | 56px | 240px |
| **lg** | 1280px | 80px | 1200px | 36px | 1128px | 64px | 248px |
| **xl** | 1440px | 80px | 1360px | 36px + 32px зовнішній відступ Container = **68px ефективно** | 1224px (по центру) | 64px | 248px |

### Ключове правило: Sidebar з'являється тільки з md (1024px)
- **xs/sm** — Sidebar відсутній повністю, Header/Hero/Body/Footer на всю ширину. Мобільна навігація — TabBar знизу (`tabbar.md`).
- **md/lg/xl** — зліва фіксований **Sidebar 80px** (collapsed-варіант, `sidebar.md`). Header — на всю ширину екрана (включно з зоною сайдбару); Sidebar+Page-container ідуть одним рядком під ним.
- **Sidebar тягнеться на всю сторінку**, включно з Footer-рядком: `Sidebar.height === Footer.y + Footer.height` — перевірено математично на md/lg/xl.
- Footer full-width на xs/sm; на md/lg/xl — звужений до ширини Page-container (сидить поруч із Sidebar).
- Hero теж обмежений шириною Page-container (не full-bleed) при наявності Sidebar.

### Header / Hero розміри
- Header: xs/sm/md → 56px; lg/xl → 64px. Межа переходу — між md і lg.
- Hero: xs/sm/md → 240px; lg/xl → 248px.

## Вертикальний ритм секцій

| Breakpoint | Gap між секціями | Container padding-top | Heading height | Gap Heading→контент |
|---|---|---|---|---|
| xs | 16px | 4px | 32px | 8px |
| sm | 16px | 8px | 32px | 8px |
| md | 16px | 16px | 32px | 8px |
| lg | 24px | 16px | 40px | 12px |
| xl | 24px | 16px | 40px | 12px |

Межа переходу — та сама, що й для Header (між md і lg). Деталі по Heading+Segmented парі (інлайн на md-xl, стек на xs/sm) — в `pages/main-page.md` розділ 2.

## Responsive-поведінка типових рядів карток

| Секція | xs | sm | md | lg | xl |
|---|---|---|---|---|---|
| Card/Activities (промо-плитки) | 3-up | 3-up | 3-up | 3-up | 3-up |
| Event-картки | 1-up | 2-up | 3-up | 3-up | 3-up |
| Card/Tournament | 2-up | 2-up | 3-up | 3-up | 3-up |

Gap між картками в ряду — завжди **8px** на будь-якому breakpoint, у будь-якій картковій родині (Activities/Event/Tournament/Duel/Feed Item), без винятків.

**"Row Thumbs" карусель** і **Card/Default міні-грід** (провайдери) — горизонтально-скрольовані карусельні ряди (не N-up грід): фіксований розмір картки, кількість видимих залежить від ширини контейнера. Не виводь із них "правильну" кількість на breakpoint.

## ⚠️ Виявлено 22.07.2026: формальний component_set "Layout" у бібліотеці ДС
Пошук по бібліотеці "[W] — Design System v2.02" показав component_set **"Layout"** (componentKey `2478610909da853c89f22b3ce5d338d16c2acedb`) — виглядає як спроба формалізувати цю сітку в реальний Figma-компонент. Вузол не вдалося дослідити інструментами MCP (filePath у пошуку логічний, не фактичний файл). **Потребує ручної перевірки** — звірити, чи він замінює/доповнює правила вище.

## Ще не задокументовано
- **"XS/SM/MD/LG/XL Row Thumbs"** — назва інстансу змінюється разом з breakpoint, не один компонент з розмір-пропом. Не той самий, що просто `Thumb` з `thumb.md`.
- **"Feed Item"** — 48px на sm/md/lg/xl, **50px на xs** (див. `pages/main-page.md` п.4) — сам компонент не задокументовано детально.

## Правило для майбутніх збірок сторінок
1. Визнач breakpoint і тип сторінки → відкрий відповідний `pages/<тип>.md` для точних цифр (поки що лише `pages/main-page.md`).
2. Sidebar (80px) — тільки md+; на xs/sm сторінка йде на всю ширину.
3. Header і Hero НЕ full-bleed, коли є Sidebar.
4. Секційний ритм: 16px gap / Heading-xs (32px) на xs-md; 24px gap / Heading-md (40px) на lg-xl.
5. Padding контенту: 16(xs)/40(sm)/40(md)/36(lg)/36+32(xl).
6. Footer ділить ширину з Sidebar (не full-bleed) на md+; full-width на xs/sm.
7. Card-row gap — завжди 8px.
