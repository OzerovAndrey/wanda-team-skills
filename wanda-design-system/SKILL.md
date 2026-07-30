---
name: wanda-design-system
description: Design system reference for the Wanda iGaming platform (dark slate, premium non-promotional aesthetic). Use ANY TIME the user asks Claude to draw, mock up, prototype, or edit anything in Figma or code for this product — buttons, cards, badges, tournament/leaderboard UI, or any UI element. Also use when the user mentions "ДС", "дизайн система", "компоненти", "токени", or Figma file keys 1iLHv8dNR3kwSoBYNl1wgs / unyye82ba8ZM7zsMSJS8qT. INDEX file — component details in references/*.md, load only the file(s) needed. Check before creating new UI from scratch.
---

# Wanda Design System — індекс

## Правило: інстанс, не імітація

Перш ніж малювати UI-елемент — перевір таблицю нижче й використай реальний компонент.

**Якщо в поточному Figma-файлі вже є instance потрібного компонента:**
1. `getNodeByIdAsync(existingId)` → `.getMainComponentAsync()`
2. `mainComponent.createInstance()` (не малюй fills/effects вручну)
3. Текст: `findOne(n => n.type === "TEXT")` → `figma.loadFontAsync` → `.characters`
4. Варіанти: `instance.setProperties({...})`

**Якщо інстансу в файлі немає:** `search_design_system(fileKey, query)` → знайти `componentKey` → `figma.importComponentSetByKeyAsync(key)` → `.defaultVariant` або знайти потрібний варіант у `.children` за назвою → `.createInstance()`.

Ручне малювання через fills/cornerRadius/effects (токени з reference-файлів) — тільки fallback, коли жодного з двох шляхів вище не спрацювало.

## Компоненти

| Компонент | Файл | Суть |
|---|---|---|
| Btn | `references/button.md` | 7 variant × 5 size × 6 state |
| Checkbox | `references/checkbox.md` | Left/Right, checked=SVG |
| Input/TextArea | `references/input.md` | sm/md/lg, addon, validation |
| Badge | `references/badge.md` | Counter/Notifier(+Ripple)/Bookmark |
| Carousel | `references/carousel.md` | список або 3-слоти+Navigator |
| Chip | `references/chip.md` | avatar+icon+close, Rounded, Checked |
| Countdown | `references/countdown.md` | Cellular/Textual-Column/Textual-Row |
| Divider | `references/divider.md` | h/v лінія + лейбл |
| Fader | `references/fader.md` | градієнт-край + опц. кнопка |
| Link | `references/link.md` | accent/secondary, іконки |
| List | `references/list.md` | Item-Default/Inline/Fadeable |
| Navigator | `references/navigator.md` | dot/dash пагінація |
| Overlay | `references/overlay.md` | чорний градієнт 4 напрямки |
| Paginator | `references/paginator.md` | Default/Advanced+Changer+Jumper |
| Progress | `references/progress.md` | Linear/Circle(SVG)/Steps |
| Propser | `references/propser.md` | "Label • Label" рядок |
| Radio | `references/radio.md` | Default(=Checkbox)/Card |
| Scratch | `references/scratch.md` | закрита/стерта поверхня |
| Segmented | `references/segmented.md` | tab-капсула, outline-focus |
| Status | `references/status.md` | Default/Tag/Button(bevel) |
| Stepper | `references/stepper.md` | номер→галочка, лінія |
| Spinner | `references/spinner.md` | статичний SVG, треба CSS-анімація |
| Switcher | `references/switcher.md` | track+indicator тогл |
| Tabs | `references/tabs.md` | Item(indicator)+Tab(контейнер) |
| Tag | `references/tag.md` | 11 variant × 4 size, avatar+icon+label, Circle/Strong |
| Time | `references/time.md` | Time/Base(=Time/Base з card-файлів) + Time/Scoped(іконка+назва+countdown) |
| Toggle Button | `references/toggle-button.md` | Icon-only кругла кнопка, ділить bevel-токени з Btn; альтернатива FAB у Card/Default |
| Tooltip | `references/tooltip.md` | 12 positions, arrow+popup, опц. customUi-слот |
| WoF | `references/wof.md` | Wheel of Fortune: Sector(SVG pie-slice)+Btn(центральна "Spin") |
| Accordion | `references/accordion.md` | Default(без фону)/Block(картка), Title=true→Bungee для label |
| ActionBar | `references/actionbar.md` | Обгортка Confirm/Cancel кнопок, Block(full-width)/Inline(auto), порядок реверсується |
| Alert | `references/alert.md` | Icon+Title+Description+дії(Decline/Accept), 5 variant, Collapse=іконка-only |
| Announcer | `references/announcer.md` | Топ-банер смуга, пастельний діагональний градієнт, вбудований ActionBar |
| Avatar | `references/avatar.md` | Image/Icon/Label, +Progress-кільце, +Badge/Counter, +Add-кнопка; вбудований у Chip/Radio-Card |
| Banner | `references/banner.md` | Auth/Card досліджено; Sidebar/Showcase/Coverflow — ні. Промо-банери, Bungee-заголовки |
| Breadcrumbs | `references/breadcrumbs.md` | До 7 елементів, separator редагований; Selected-стан не перевірено (ліміт) |
| Calendar | `references/calendar.md` | Грід-календар; Item(день-клітинка)+Day+Month заголовки; токен-помилка "defalut" |
| Drawer | `references/drawer.md` | Horizontal(Left/Right, досліджено) + Vertical(Top/Bottom, ні); mask+card+Header+ActionBar |
| Dropdown | `references/dropdown.md` | Trigger+popup(12 positions, як Tooltip) + Item(Square/Rounded, avatar/icon/flag/arrow) |
| Empty | `references/empty.md` | "Немає даних"-стан; sm ПОРУШУЄ правило Title=Bungee (звичайний текст) |
| Menu | `references/menu.md` | Bottom tab-bar: Item(icon+label+Badge/Counter) + контейнер Horizontal/Vertical |
| Modal | `references/modal.md` | Центральний діалог, каркас ідентичний Drawer (mask+Card+Header+ActionBar+Close) |
| Notification | `references/notification.md` | Global/Item(toast, унікальна тінь) + Indicator(колір+Progress-кільце) + Global(6 позицій) |
| QDW | `references/qdw.md` | Quick Deposit Widget — вбудовує реальні Switcher+Input+Btn+Notification/Local |
| Promo widget | `references/promo-widget.md` | Плаваюча кругла кнопка, bevel як Btn, +Countdown-бірка знизу, +Badge/Notifier |
| Stats | `references/stats.md` | Градієнт-картка+Title+Rating(зірки, не окремий компонент)+Tag+Description. Дизайнер-TODO: градієнти не токенізовані |
| Table | `references/table.md` | Найбільша родина (Header+Default+Transaction+Bet), ще недороблена (є TODO дизайнерів) |
| Thumb | `references/thumb.md` | Ігрова мініатюра з 6 можливими тегами, вбудована в Card/Tournament/Jackpot |
| Heading | `references/heading.md` | Заголовок секції з навігацією (стрілки+"All"), типово над каруселлю |
| WoM | `references/wom.md` | Wheel of Mystery: Sector(вбудовує реальний Thumb!)+Pointer("Spin"), container-query обертання |
| Layout | `references/layout.md` | **Сітка breakpoint'ів для збірки сторінок** — Sidebar/padding/content-width/Header-size/вертикальний ритм на xs-xl |
| Header | `references/header.md` | Топ-бар + розкривна Balance details(Progress/Circle+вбудована Card/Bonus/Basic) |
| Hero | `references/hero.md` | Карусель промо(Banner/Card+QDW) + опц.Trust-блок(Stats+нагороди) |
| Section | `references/section.md` | Секція-обгортка: Heading+контент-слот+опц.Navigator, пастельний градієнт як Announcer |
| TabBar | `references/tabbar.md` | Мобільна нижня навігація, скляний фон, Accent CTA-таб, Ripple-badge |
| Sidebar | `references/sidebar.md` | Найскладніший Organism — композиція з 8+ компонентів (Card/Bonus, Menu, Dropdown тощо) |
| Randomizer | `references/randomizer.md` | "Слот-машина" вибору гри: ряд Thumb з приглушеними краями + виділена рамка + "Spin & Play" |
| Onboarding | `references/onboarding.md` | Слайд онбордингу: Image/Cover + Navigator(Prev/Next) |
| Achievement | `references/achievement.md` | Прогрес-ланцюжок кроків(Tag) + заблокована Btn Primary-нагорода(lock, disabled) |
| Footer | `references/footer.md` | Social Networks(досліджено) + Partners; головний Footer НЕ деталізовано (завеликий) |
| Support widget | `references/support-widget.md` | Чат-підтримка: FAB+Message(reply/reactions/processing); Widget-контейнер не деталізовано |
| Scrollbar | `references/scrollbar.md` | Кастомний track+thumb (уже зустрічався в Card/Drawer/Dropdown), не нативний overflow |
| System | `references/system.md` | НЕ UI-компоненти — службові Figma-заглушки (System/Node dashed-бокс = "тут довільний контент") |
| Store badges | `references/store-badges.md` | App Store/Google Play кнопки (той самий "Apps badge" з Sidebar) |
| Certificates | `references/certificates.md` | Статичні лого регуляторів/довіри (DMCA/SSL/GamCare тощо) — ті самі "Awards" з Hero |
| Award | `references/award.md` | Статичні лого нагород/рейтингів (16 variant × md/sm) — той самий "Awards"-ряд з Hero |
| Cover | `references/cover.md` | НЕ продукт — службова обкладинка файлу + статус-бейджі (TODO/Deprecated тощо) |
| Deprecated | `references/deprecated.md` | Порожній canvas — зарезервовано на майбутнє |
| Image | `references/image.md` | Front(1:1,4:3)/Cover(Back+Front) |
| Card (родина) | `references/card/*.md` | 20 підтипів, див. таблицю нижче |
| Типографіка | `references/typography.md` | **T1-T5/D1-D3=заголовки; Body/Caption=текст; дефолт=bodyMd** |
| Ефекти | `references/effects.md` | Shadow/Glow/Bevel/Emboss/Glass |
| Градієнти | `references/gradients.md` | Btn/card-bg/оверлей/progress |

Немає в таблиці → `search_design_system` / `get_metadata` на файлі ДС, додай reference-файл за шаблоном унизу.

### Card (canvas `8:69448`, file `1iLHv8dNR3kwSoBYNl1wgs`)

`Card/Default` — базовий слот-каркас, інші типи звіряй з ним.

| Тип | Node | Файл |
|---|---|---|
| Default | `8:84413` | `card/default.md` |
| Shop | `8:84600` | `card/shop.md` |
| Loot | `8:84616` | `card/loot.md` |
| Ticket | `8:84628` | `card/ticket.md` |
| Details | `8:84663` | `card/details.md` |
| Loyalty | `8:84678` | `card/loyalty.md` |
| Tournament | `8:84697` | `card/tournament.md` |
| Tournament Network | `3554:4978` | `card/tournament-network.md` |
| Lottery | `8:84866` | `card/lottery.md` |
| Bonus/Cashier | `25:29483` | `card/bonus-cashier.md` |
| Bonus/Basic | `346:56018` | `card/bonus-basic.md` |
| Bonus/Welcome | `2600:5858` | `card/bonus-welcome.md` |
| Free spins | `420:14340` | `card/free-spins.md` |
| Auction | `2949:1174` | `card/auction.md` |
| Jackpot | `3732:26010` | `card/jackpot.md` |
| Mood | `4623:2805` | `card/mood.md` |
| Daily | `4700:1643` | `card/daily.md` |
| Duel | `5273:65599` | `card/duel.md` |
| Popular | `5286:5582` | `card/popular.md` |
| Activities | `5286:5603` | `card/activities.md` |

## Figma-файли

| Файл | Key | Що там |
|---|---|---|
| — W — Design System v2.02 | `1iLHv8dNR3kwSoBYNl1wgs` | Бібліотека компонентів (усе, що вище в таблиці) |
| — W — Main | `QbmTYjRSyzALRb5GIl4Itk` | Реальні зібрані сторінки продукту — джерело `layout.md` (сітка breakpoint'ів) |
| VIP Manager / Tournament frames | `unyye82ba8ZM7zsMSJS8qT` | — |

## ⚠️ Перед збіркою ПОВНОЇ СТОРІНКИ (не окремого компонента)

Обов'язково спочатку читай `references/layout.md` — там зафіксована сітка breakpoint'ів (xs/sm/md/lg/xl): ширина Sidebar/padding/content-width, коли з'являється Sidebar (тільки md+), яка версія Header/Heading на якому breakpoint, вертикальний ритм секцій. Без цього кожна нова сторінка ризикує мати довільні відступи замість узгоджених із рештою продукту.

## Стилістика

Темна slate-тема, не-казино естетика. Червоний/яскравий — тільки critical-стани. Бейджі не показуються на порожніх слотах. CTA — дія ("Buy tickets"), не "Submit".

## Технічні нюанси Figma MCP

- URL node-id `41223-36796` → API формат `41223:36796` (двокрапка).
- `layoutSizingHorizontal='FILL'` — тільки ПІСЛЯ `appendChild` до auto-layout батька.
- `getNodeById` null → фолбек `figma.currentPage.appendChild()` з ручними координатами.
- `get_metadata`/`get_design_context` працюють лише коли Figma desktop відкритий на потрібному файлі/фреймі — при помилці "No node found" попроси користувача перевірити активну вкладку.
- Великі ноди можуть валити `get_design_context` — спочатку `get_metadata` для огляду, потім точково на дочірньому ноді.

## Розширення

Новий компонент: `references/<name>.md` за шаблоном (Node → Props → Tokens → Notes, макс 1-3 нюанси) → рядок у таблицю вище.
