# Badge

Canvas `5:2638`, file `1iLHv8dNR3kwSoBYNl1wgs`. 3 під-компоненти: Counter, Notifier(+Ripple), Bookmark.

## Спільна палітра (Counter+Notifier)
| Variant | Bg | Color |
|---|---|---|
| Default | `--badge/bg/default`(rgba(121,128,134,.1)) | rgba(44,44,44,.7) |
| Accent 1 | #f40084 | white |
| Accent 2 | #1d70e2 | white |
| Important | #d83232 | white |
| Success | #0ea45b | white |
(та сама, що лічильник поверх Btn у `button.md`)

## Badge/Counter
Node `8:13523`. Variant×Size(md/sm)=10.
```
BadgeCounter({ label, size: "md"|"sm", variant })
```
md: min20, paddingh6.5, radius10, font12/16SemiBold. sm: min16, paddingh5, radius8, font10/14.
**Bevel-ефект** завжди (див. `effects.md`) — об'ємна капсула, не флет.

## Badge/Notifier
Node `8:13571`. Variant(ті самі 5), фікс.розмір.
```
BadgeNotifier({ variant })
```
6px крапка, radius3(коло), той самий Bevel.

### Notifier+Ripple
Окремі фрейми (не варіанти!) `1204:13930`(Accent1)/`1265:2494,2501,2508`(Accent2/Important/Success) — **немає для Default**.
```
BadgeNotifierWithRipple({ propValue: "Start"|"End" })
```
Start=кільце 6px, End=32px розширення. Прозорість у файлі статична "1" — реальна pulse-анімація (opacity 1→0) реалізується власним CSS/motion, не копіюй буквально.

## Badge/Bookmark
Node `8:13549`. Position(Top/Bottom/Left/Right) — визначає які кути прямі (сторона кріплення), решта radius4.
```
BadgeBookmark({ component, icon=true, lable, position, text })
```
Висота32, bg=#e4e6e7(сірий, **єдиний без кольор.варіантів**), color rgba(44,44,44,.9).

## Badge/Loyalty
Node `5031:3660`. Шестикутна (hexagon) бірка рівня лояльності. Size(sm/xs)×Type(Current/Next/Past) — **не повний крос-варіант**: sm існує лише для Current, xs існує для всіх трьох Type.
```
BadgeLoyalty({ label="00", size: "sm"|"xs", type: "Current"|"Next"|"Past" })
```
Колір форми залежить від Type: Current=зелений, Next=рожевий/accent1, Past=сірий (кожен — окреме SVG-зображення, не токен-заливка). Текст: sm+Current=14px, будь-який xs=12px (обидва Open Sans SemiBold, білий).

## Notes
- `lable`(не `label`) — реальна назва пропу у Figma, друкарська помилка (стосується Badge/Bookmark).
- Ripple існує лише для 4 з 5 кольорів (немає Default).
- Badge/Loyalty використовує растрові/векторні шейпи-картинки на Type, не CSS-токени кольору — при імплементації звіряй асет, а не намагайся токенізувати колір.
