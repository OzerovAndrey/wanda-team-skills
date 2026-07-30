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
Image(298×400, cover) → Overlay(синій градієнт `--card/overlaycolor/{start,center,end}`, top→bottom) → Check/bookmark-іконка(top-right, 32×32) → слот Tag(top-left, реальний `Tag` xs, опційний — не показаний у Default) → Wrapper(padding `--card/duel/padding`16): "Max prize:" + значення(Bungee) → **Prizes**(collapsible, `--card/duel/prize/bg`#79808638, paddingH8/T4/B8): заголовок "Possible prizes" + chevron-Btn(24×24) → ряд **Card/Duel/Chip** (окремий symbol `5252:6789`, 40×40, gap `--card/duel/prize/chip/gap`12) → "Prize limit"/"Min balance"(2 колонки) → CTA-ряд(gap `--card/duel/gap`8): **Breakpoint=xs** → `Info`(іконка-only, Btn secondary size=md 40×40) + `Start duel`(Btn primary, fill); **Breakpoint=lg** → `Details`(Btn secondary, текстовий, 50% ширини) + `Start duel`(50% ширини) — на lg немає окремої іконки-Info, її замінює текстова кнопка.

**Variant=Expand** (тільки Breakpoint=lg досліджено): замінює весь контент картки на full-screen список призів — заголовок "Possible prizes" + **×-кнопка закриття**(замість chevron) → grid чіпів **без обмеження в 1 ряд** (більший gap `--card/duel/prize/expand/gap`24, padding `--card/duel/prize/expand/padding`16, в прикладі 13 чіпів у 3 ряди) → немає Max prize/Prize limit/Min balance/CTA-рядка в цьому variant.

### Card/Duel/Chip
Symbol `5252:6789`, file `1iLHv8dNR3kwSoBYNl1wgs`. 40×40px, кругла позначка "999\nFS" (bodyXsStrong), кільце `--card/duel/chip/br`#ffc700(gold), текст `--card/duel/chip/color`#ffffff.

## Tokens
`--card/duel/{height:400,padding:16,gap:8}`. `--card/duel/prize/{gap:4,bg:#79808638,default/paddingH:8,default/paddingT:4,default/paddingB:8,chip/gap:12,expand/gap:24,expand/padding:16}`. `--card/duel/chip/{br:#ffc700,color:#ffffff}`. `--card/overlaycolor/{start:#002466d9,center:#00246699,end:#00246600}`. `--btn/secondary/*`, `--btn/primary/*`(звичайні, локально не перевизначені).

## Notes
- **Default показує РІВНО 5 чіпів** (один ряд, вміщується без overflow) — якщо в інстансі призів більше 5, використовуй **Variant=Expand**, а не просто дописуй чіпи в Default: у продуктовому файлі ("Duels 3.0") знайдено інстанси з 10 чіпами всередині Default-контейнера (розрахованого на 1 ряд/40px) — 4-6 чіпів фізично обрізаються overflow і не рендеряться. Це баг збірки в продуктовому файлі, не властивість компонента.
- **Info→Details — не помилка, а сама властивість Breakpoint-варіанту**: на xs — іконка 40×40 (Btn secondary, icon-only), на lg — текстова кнопка "Details" (50% ширини ряду разом з "Start duel"). sm/md не мають окремого Variant в бібліотеці — в продуктовому файлі вони успадковують xs-варіант (icon-only) аж до lg.
- Expand-variant досліджено лише на Breakpoint=lg; xs-версія expand (ймовірно full-screen/modal замість inline-заміни) не перевірена.
