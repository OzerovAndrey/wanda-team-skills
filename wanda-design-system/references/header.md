# Header

Canvas `8:107705`, file `1iLHv8dNR3kwSoBYNl1wgs`. Головна навігаційна шапка сайту. 6 під-компонентів: **Header** (сам бар, досліджено), Header/Language select, Header/Balance, Header/Game (варіант для ігрових сторінок), Header/Balance/Details (розкривна панель), Header/Balance/Details/Wager.

## Header (основний бар)
Node `8:128621`. Type(Default)×Authorized(f/t)×Breakpoint(xs/sm/md/lg/xl).
```
Header({ authorized, balanceDetails, breakpoint, type: "Default" })
```

### Anatomy (Authorized=True)
Бар: `--header/bg`(#2c2e30), паддінги `--header/paddingleft-right/{bp}`, **bevel-ефект**(top+bottom inset, `effects.md`) → ліворуч: бургер-кнопка(Btn Text) + Logo(SVG) → праворуч: Notification-кнопка(Btn Text + Badge/Notifier important) + пошук/інша Btn Text + **Header/Balance**(вбудований, сума + стрілка-toggle + Btn Accent депозит-іконка). Все — реальні перевикористані компоненти (Btn, Badge/Notifier).

### Balance details (розкривна панель, `balanceDetails=true`)
Абсолютно позиційована панель під баром, `--bg/neutral/secondary`(#222426), radius16 знизу:
- Real money / Bonus money — дві картки з горизонтальним градієнтом(rgba(color,0)→rgba(color,.25), той самий "функціональний градієнт" паттерн) + wallet-іконка + суми.
- 3× **Header/Balance/Details/Wager** — кожна: Progress/Circle(40px, %, `progress.md`) + лейбл("Deposit/Bonus/Sport wager") + сума.
- Вбудована **реальна Card/Bonus/Basic** (промо-пропозиція прямо в шапці!, `card/bonus-basic.md`).
- Рамка-блок: M-bucks / Sport bonus money / Cashback — рядки іконка+лейбл+значення, останній — клікабельний Link "Calculate" (#1d70e2, underline).
- Withdraw / Transactions — 2 кнопки-плитки (не Btn-компонент, власний стиль `--bg/neutral/primary`).
- Btn Accent "Deposit" (full-width, фінальний CTA).

## Header/Balance (окремий компонент)
Node `8:128778`. Той самий блок суми+стрілка+депозит-кнопка, що вбудований у бар вище — `--header/balance/{bg:#1d1e1f,borderradius:20,paddingl:12,paddingr:4,color,gap}`, з **emboss-ефектом**(`effects.md`).

### Anatomy (Authorized=False)
Той самий бар (бургер+Logo ліворуч), праворуч замість Header/Balance — дві кнопки: **"Login"**(Btn Text) + **"Sign up"**(Btn Accent). Раніше в цьому файлі не документовано — уточнено 22.07.2026 після виявлення свіжої зміни в Figma (`updatedAt` компонента Header новіший за попередню версію докса).

## Не досліджено детально
- **Header/Language select** (`8:128725`, State Default/Hover/Active/Focus) — перемикач мови.
- **Header/Game** (`1123:18276`, Play for real×Breakpoint×Authorized) — варіант шапки для сторінки гри.
- Точний вміст зміни від 22.07.2026 (Figma `updatedAt` новіший за цей докс) — знайдено й задокументовано неавторизований стан (вище), але не виключено, що змінилось щось ще всередині Balance details чи Game/Language select — варто звірити детальніше при нагоді.

## Tokens
`--header/{bg:#2c2e30,paddingleft-right/{bp},gapbetweenbtnlogo/{bp},gaprightblock/{bp}}`. `--header/balance/*`(окремо задокументовано вище). `--header/balancedetails/{gap:12,padding:12,gaplist:8,wager/{gap:4,paddingh:12,paddingv:8}}`. `--bg/neutral/{primary:#2c2e30,secondary:#222426}`. `--br/primary`(rgba(121,128,134,.44)).

## Notes
- Header — один із найскладніших організмів: вбудовує Btn, Badge/Notifier, Progress/Circle, **реальну Card/Bonus/Basic**, Link — жодного дубльованого коду, усе перевикористані компоненти.
- Bevel на самому барі, emboss на Header/Balance — обидва ефекти з `effects.md`, застосовані одночасно в різних частинах.
- Game-варіант header і Language select не досліджені — при потребі `get_design_context` на відповідний node.
