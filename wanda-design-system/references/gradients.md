# Gradients

Немає окремої Figma-сторінки — зведено вручну з Button/Card. Тримай тут, не дублюй по card-файлах.

## Btn (вертикальні)
| Variant | Start | End |
|---|---|---|
| Primary | #4a8ce8 | #1a64cb |
| Primary (locally-blue, промо-картки) | #72a4ff | #2d77ff |
| Secondary | rgba(29,111,226,.16) | те саме (**флет**, start=end) |
| Secondary (locally-blue) | rgba(79,141,255,.16) | те саме |
| Accent | #ff2a9c | #dc0075 |
| Danger | #de5151 | #c92626 |
| Neutral | white(флет) | — |
| Text/Link | transparent | — |
Токени: `--btn/{variant}/bg/{start,end}/default`. Усі градієнтні variant + bevel-облямівка (`effects.md`).

## Card bg (вертикальні)
`--card/bonus/bgprops/*` і `--card/auction/bgprops/*` — обидва #4448cb→#222465 (той самий колір, окремі неймспейси). Cashier/Basic/Auction.

## Overlay поверх фото (функціональні затемнювачі)
| Токен | Напрям | Stops | Де |
|---|---|---|---|
| `--card/overlaycolor/*` | вертикальний | rgba(0,36,102,.85→.6@53%→0@90%) | Tournament, Tournament Network |
| `--card/freespins/overlaycolor/*` | горизонтальний | rgba(0,36,102,.85@20%→.6@60%→.2) | Free spins |
| `--card/bonus/welcome/overlaycolor/*` | горизонтальний | #23267f@20%→rgba(35,38,127,.8@60%→.2) | Bonus/Welcome, Daily(перевикористаний) |

## Progress indicator
`--progress/indicator/start→end/default`: зелений(#0ea45b/#2bda8d)→блакитний(#18aef4), горизонтальний. Loyalty, Bonus/Cashier-Basic, Daily.

## Notes
- Secondary-кнопка технічно градієнт, флет (start=end) — навмисно, не спрощуй до background-color.
- card/bonus-bg(#4448cb→#222465) vs overlay(rgba(0,36,102,*)) — різні відтінки, не переплутай (перший=суцільний фон, другий=напівпрозорий шар поверх фото).
