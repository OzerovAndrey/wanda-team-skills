# Hero

Canvas `8:107706`, file `1iLHv8dNR3kwSoBYNl1wgs`. Головна секція сторінки (під Header) — карусель промо-банерів + опційний блок довіри (статистика+нагороди).

## Props
```
Hero({ breakpoint: "xs"|"sm"|"md"|"lg"|"xl", trust })
```

## Anatomy
Фон: вертикальний градієнт `--hero/bg/{start:rgba(29,111,226,.6),end:rgba(29,111,226,0)}` (світиться зверху, розчиняється вниз). Всередині:
- **Carousel** (реальний, `carousel.md`, Centered режим) зItem-слотами, що містять **реальні Banner/Card** (`banner.md`) і **реальні QDW** (`qdw.md`) впереміш — карусель промо-пропозицій.
- Navigator dots(`navigator.md`) під каруселлю.
- Опційний **Trust**-блок (`trust=true`): ще одна Carousel(list-режим, зі стрілками Btn Text) з **реальними Stats-картками** (`stats.md`: "Total Won"/"Biggest Win"/"New Games Added"/"24/7 Rating", кожна зі своїм кольором градієнта й Tag) + ряд лого нагород/сертифікатів (Awards, SVG-логотипи в ряд, 32px на xl / 24px на xs).

## Tokens
`--hero/{bg/start-end,gap/{bp},paddingt-b/{bp},trustgap/{bp},trustpaddingb/{bp}}`. `--layout/paddingh/{bp}`(горизонтальні відступи сторінки). Решта — повністю перевикористані токени Carousel/Banner/QDW/Navigator/Stats.

## Notes
- **Hero — це композиція з майже виключно перевикористаних компонентів**, майже нічого не намальовано "з нуля" — Carousel, Banner/Card, QDW, Navigator, Stats, Tag усі вставлені як реальні інстанси.
- Trust-блок демонструє соціальний доказ (статистика виплат + логотипи регуляторів/платіжних систем) — типовий патерн casino-лендингу.
- Не всі breakpoints досліджені детально (перевірено xl і xs) — sm/md/lg, ймовірно, проміжні варіації тієї самої структури.
