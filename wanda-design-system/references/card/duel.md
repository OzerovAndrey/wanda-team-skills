# Card/Duel

Node `5273:65599` (канвас Card `8:69448`), file `1iLHv8dNR3kwSoBYNl1wgs`. 298×400px. PvP-картка "виклику" (дуель на приз), фон-зображення з синім overlay `--card/overlaycolor/*`.

## Variants
Variant × Breackpoint (назва пропу саме так, з опискою "Breackpoint"), досліджено всі 3:
| Node | Variant |
|---|---|
| `5259:6303` | Default, Breackpoint=xs |
| `5295:1848` | Default, Breackpoint=lg |
| `5274:2308` | Expand, Breackpoint=lg |

## Props
```
CardDuel({ variant: "Default"|"Expand", breakpoint: "xs"|"lg", maxPrize, prizeLimit, minBalance, tag })
```

## Anatomy
Image(298×400, cover) → Overlay(синій градієнт `--card/overlaycolor/{start,center,end}`, top→bottom) → Check/bookmark-іконка(top-right, 32×32) → слот Tag(top-left, реальний `Tag` xs, опційний — не показаний у Default) → Wrapper(padding `--card/duel/padding`16, gap `--card/duel/gap`8): "Max prize:" + значення(Bungee) → **Prizes**(collapsible, `--card/duel/prize/bg`#79808638, paddingH8/T4/B8, внутр. gap `--card/duel/prize/gap`4): заголовок "Possible prizes" + chevron-Btn(24×24) → ряд **Card/Duel/Chip** (окремий symbol `5252:6789`, 40×40, gap `--card/duel/prize/chiplist/gap`12 — **не** `chip/gap`, як було раніше задокументовано) → "Prize limit"/"Min balance"(2 колонки, gap `--card/tournament/gap`8 — так, перевикористаний токен від Tournament-картки, не `--card/duel/gap`) → CTA-ряд(той самий `--card/tournament/gap`8): **Breakpoint=xs** → `Info`(іконка-only, Btn secondary size=md 40×40) + `Start duel`(Btn primary, fill); **Breakpoint=lg** → `Details`(Btn secondary, текстовий, `flex-[1_0_0]` = 50% ширини) + `Start duel`(теж `flex-[1_0_0]`, 50%) — на lg немає окремої іконки-Info, її замінює текстова кнопка. Default-значення пропів у самому компоненті: `maxPrize="00000"`, `prizeLimit="000"`, `minBalance="000"`.

**Variant=Expand** (тільки Breakpoint=lg досліджено): замінює нижню частину картки (`Wrapper`) на **absolute-позиційований блок `All prizes`** (bottom/left/right:0, той самий backdrop-blur24 + bg `--card/duel/prize/bg`) — заголовок "Possible prizes" + **×-кнопка закриття**(замість chevron, той самий Btn-слот) → grid чіпів **без обмеження в 1 ряд** (той самий чіп-gap `--card/duel/prize/chiplist/gap`12, у прикладі 13 чіпів у 3 ряди) → повноширинна кнопка **`Start duel`**(Btn primary, w-full) — Info/Details тут немає, лишається тільки один CTA. Зовнішній `gap` `--card/duel/prize/expand/gap`24 і `padding` `--card/duel/prize/expand/padding`16 належать самому блоку `All prizes` (відступ між призами-грідом і кнопкою Start duel, і внутрішній padding блоку) — це **не** gap між рядами чіпів. Max prize/Prize limit/Min balance у цьому variant відсутні (весь верх картки з ними прихований під блоком All prizes).

### Card/Duel/Chip
Symbol `5252:6789`, file `1iLHv8dNR3kwSoBYNl1wgs`. 40×40px, кругла позначка "999\nFS" (bodyXsStrong), кільце `--card/duel/chip/br`#ffc700(gold), текст `--card/duel/chip/color`#ffffff.

## Tokens
`--card/duel/{height:400,padding:16,gap:8,maxWidth:428}`. `maxWidth` — новий, не був задокументований раніше; підтверджено 03.08.2026 на сторінці "Light — Duel arena" (`rdQH0d2MRRKFkgzCmCGLGw`, node `6002:20991`): картка в page-контексті може мати `flex-[1_0_0]` (розтягуватись, не фіксовані 298px) з капом саме на цьому значенні — див. Notes нижче. `--card/duel/prize/{gap:4,bg:#79808638,default/paddingH:8,default/paddingT:4,default/paddingB:8,chiplist/gap:12,expand/gap:24,expand/padding:16}`. `--card/duel/chip/{br:#ffc700,color:#ffffff}`. `--card/overlaycolor/{start:#002466d9,center:#00246699,end:#00246600}`. `--card/tournament/gap:8`(перевикористаний для Prize-limit-рядка і CTA-рядка, не duel-specific). `--btn/secondary/*`, `--btn/primary/*`(звичайні, локально не перевизначені).

## Notes
- **Default показує РІВНО 5 чіпів** (один ряд, вміщується без overflow, контейнер `h-[40px] overflow-clip`) — **підтверджено безпосередньо в самому library-компоненті**: і в `Default,xs` (`5259:6303`), і в `Default,lg` (`5295:1848`) шар `Card/Duel/Chip` містить 10 інстансів (не 5!), 5 останніх фізично обрізаються overflow і не рендеряться — це нормальна поведінка контейнера, а не тільки баг збірки продуктового файлу ("Duels 3.0", де так само зустрічались 10-чіпові інстанси). Якщо призів більше 5 — використовуй **Variant=Expand**, а не просто дописуй чіпи в Default.
- **Info→Details — не помилка, а сама властивість Breakpoint-варіанту**: на xs — іконка 40×40 (Btn secondary, icon-only), на lg — текстова кнопка "Details" (`flex-[1_0_0]`, 50% ширини ряду разом з "Start duel", теж `flex-[1_0_0]`). sm/md не мають окремого Variant в бібліотеці — в продуктовому файлі вони успадковують xs-варіант (icon-only) аж до lg.
- **Токен для gap між чіпами — `--card/duel/prize/chiplist/gap`**, а не `chip/gap` (попередня версія цього файлу містила помилкову назву).
- **Prize-limit-рядок і CTA-рядок використовують `--card/tournament/gap` (8px)**, не `--card/duel/gap` — схоже на перевикористання/недогляд дизайнерів (той самий gap-токен, що й у Card/Tournament), а не duel-власний токен. Зовнішній `Wrapper` (весь вертикальний стек) використовує саме `--card/duel/gap`.
- Expand-variant досліджено лише на Breakpoint=lg; xs-версія expand (ймовірно full-screen/modal замість inline-заміни) не перевірена.
- **Ширина картки НЕ завжди фіксована 298px** — це розмір інстансу-за-замовчуванням у бібліотеці (та в page-збірках на xs/sm, де ряд скролиться горизонтально). Але на md/lg/xl у product-збірці "Duel arena" (`pages/duel-arena.md` розділ 3) картка інстансується з `layoutSizingHorizontal=FILL` (`flex-[1_0_0]`, кап `--card/duel/maxWidth`428px), щоб рівно 3 картки в ряду заповнювали контент-колонку без скролу. Перевіряй `layoutSizingHorizontal`/`flex` конкретного інстансу, а не припускай 298px за замовчуванням.
- **Гап між картками в ряду (не всередині однієї картки)** — окремий токен `layout/gap/row/{bp}` (8px на всіх брейкпоінтах), не один із токенів цього компонента (`card/duel/gap`=8 — це внутрішній вертикальний stack-гап Wrapper'а картки, інша річ). Деталі — `rules.md` розділ "Реальні Figma-змінні".
