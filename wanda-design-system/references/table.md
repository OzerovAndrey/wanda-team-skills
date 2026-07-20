# Table

Canvas `8:100331`, file `1iLHv8dNR3kwSoBYNl1wgs`. **Найбільша й найскладніша родина в ДС** — набір комірок-компонентів для побудови таблиць (транзакції, ставки, платежі). Ще активно допрацьовується дизайнерами (див. TODO нижче).

## Дизайнерська TODO-нотатка (canvas `8:103307`, читай уважно перед імплементацією)
- Додати спливаюче вікно підтвердження дії (напр. видалення).
- Додати спливаюче вікно для сортування/фільтрації/пошуку.
- Можливість зробити основний лейбл клікабельним лінком.
- Імітація горизонтального скролу з фіксацією першої/останньої колонки.
- Імітація вертикального скролу з фіксацією рядка заголовків (sticky header).
- Ховер-стан для заголовка колонки (перемикання сортування по кліку).
- Стани для стрілочки collapse/expand (ще не реалізовано).

**Висновок: Table ще не повнофункціональна ДС-компонента** — багато очікуваної інтерактивності (sticky columns/header, popup-підтвердження, hover-сортування) поки не задокументовано у Figma. При імплементації враховуй, що ці функції доведеться додати самостійно, а не копіювати з готового патерну.

## Table/Cell/Header
Node `8:103310`. Variant(Default/Control).
```
TableCellHeader({ variant: "Default"|"Control" })
```
100×64(Default) або 52×64(Control, вужча — під чекбокс-колонку). + окремі **Search**, **Filter**, **Sort**-кнопки (State Default/Hover/Active/Focus, іконки 20px) — вбудовуються в заголовок для інтерактивних колонок. Sort має 3 стани: Sorted=False("🚧"), Sorted=True+Asc, Sorted=True+Desc.

## Table/Cell/Default
Node `8:103369`. Величезна матриця: Variant(Default/Control/Payment method/Node/Actions)×State(Default/Striped/Expanded/Hover)×Position(Left/Center/Right)×Checked×Highlighted.
```
TableCellDefault({
  variant, state, position, checked, highlighted,
  icon, component2, avatar, image,
  label=true, text="Label", underline, text1="Underline",
  description, text2="Description",
})
```
Anatomy: опц.Icon(20px) → опц.Avatar(40px, `avatar.md`) → опц.Image/Front(64×48, `image.md`) → Label(14px)+опц.Underline(12px, під основним текстом)+опц.Description(12px, окремим рядком знизу). Border-bottom(`--table/cell/br`rgba(121,128,134,.24), 1px) — розділяє рядки.

**Спеціалізовані Variant не досліджені детально**: Control(чекбокс-комірка), Payment method(іконка способу оплати), Node(довільний вміст-слот), Actions(кнопки дій, вужча 72px).

## Table/Cell/Transaction
Node `8:103608`. Type(Positive/Negative)×State×Position×Checked — та сама структура, що Default, але з семантичним кольором тексту суми (зелений/червоний) для фінансових транзакцій. Не досліджено детально.

## Table/Cell/Bet, Table/Cell/Bet/Participant
Node `8:103681`/`8:103844`. Спортивно-ставковий контекст: Variant(2 Participants/Many participants/Multi bet)×State×Checked. Participant-підкомірка: Selected×Winner(4 комбінації). Не досліджено детально — специфічний для sportsbook-функціоналу ДС.

## Tokens
`--table/cell/{paddingh:16,paddingv:12,borderwidth:1,br,color/default,color/underline,color/description}`. Avatar/Image перевикористовують `avatar.md`/`image.md` без змін.

## Notes
- Це найбільша задокументована родина за кількістю намальованих варіантів (Cell/Default сам по собі має ~60+ комбінацій) — я задокументував лише базову структуру (`Variant=Default, State=Default, Position=Left`), решта варіантів **не перевірені індивідуально**.
- Row-highlight(`highlighted`) і Row-select(`checked`) — наскрізні пропси через усі типи Cell, керуються на рівні рядка таблиці, а не окремої комірки.
- Sort-стан "🚧" на Table/Cell/Header/Sort — той самий службовий заглушка-паттерн, що в Divider/Radio (позначає "невизначений/дефолтний" стан сортування).
- Якщо потрібна точність по конкретному типу комірки (Transaction/Bet/Participant), онови цей файл окремим `get_design_context` на відповідний node ID.
