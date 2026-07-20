# Card/Daily

Node `4700:1643` (canvas Card `8:69448`), file `1iLHv8dNR3kwSoBYNl1wgs`. 296×184px. Щоденний квест з прогрес-баром.

## Variants
State, досліджено лише перший:
| Node | State |
|---|---|
| `4695:10886` | In progress (досліджено) |
| `4700:3157` | Done |
| `4700:3203` | Claim |

## Props
```
CardDaily({ state: "In progress", prize, title })  // Done/Claim не перевірено
```

## Anatomy
Back(placeholder) → Overlay(горизонтальний, **перевикористовує токени Card/Bonus/Welcome** `--card/bonus/overlaycolor/*`) → Front(120×120 bottom-right, як Cashier) → Title(Bungee20, pr-40 щоб не заходив під Info) → Prize("Prize:"+значення Bungee18 gold `--tt/accent3`) → Progress/Linear(sm, з "%" замість "N/M") → Btn **Secondary**"Change quest"(full-width, **немає Primary кнопки взагалі**) → Info(Secondary, right-8 top-8).

## Tokens
`--card/daily/{height:184,paddingh:16,paddingv:16,front/size:120}`. `--card/bonus/overlaycolor/*`(перевикористаний, не власний). `--tt/primary`, `--tt/accent3`. `--progress/*`(sm). `--btn/secondary/*`(locally-blue).

## Notes
- Немає Primary-кнопки (на відміну від майже всіх інших промо-карток) — основна дія квесту поза карткою, тут лише Secondary "Change quest".
- Оверлей буквально перевикористовує токени Bonus/Welcome — спільний "BonusOverlay" патерн.
- Done/Claim не перевірено.
