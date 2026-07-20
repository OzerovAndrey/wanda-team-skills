# Card/Auction

Node `2949:1174` (canvas Card `8:69448`), file `1iLHv8dNR3kwSoBYNl1wgs`. 328×320px. Bid-механіка, великий цифровий таймер.

## Variants
Variant, 6 значень, **немає булевих пропсів** — кожен variant = самостійна композиція:
| Node | Variant |
|---|---|
| `2892:12253` | Default (досліджено) |
| `2992:12949` | Joined |
| `2949:1175` | Winning |
| `2949:1236` | Overbid |
| `2949:1297` | Last chance |
| `2949:1358` | Completed |

## Props
```
CardAuction({ variant: "Default" })  // +Joined,Winning,Overbid,Last chance,Completed не перевірено
```

## Anatomy (Default)
Фон=градієнт `--card/auction/bgprops/{start:#4448cb,end:#222465}`(власний, не Bonus). Border(завжди в розмітці, invisible у Default). Теги: "Ongoing"(white pill `--tag/alt5/*`) + ставки"44"(чорний напівпрозорий `--tag/alt4/*`, іконка молотка). **Countdown/Cellular**(великий: Bungee18 лейбл + 48×48 блоки D/H/M з одиницею всередині — інший, "важчий" за звичайний Timer). Title(Bungee18). Current/Balance(2 колонки, монета-іконка+лейбл+значення+стрілка). Btn Primary flex-1"Button"(плейсхолдер, реальний текст міняється по variant). Front(160×160 top-right, rounded-tr — інша позиція, ніж у інших карток). Settings(Btn Secondary **40px**, не стандартні 32px).

## Tokens
`--card/auction/bgprops/*`(власний). `--card/auction/{gap:12,padding:16,frontsize:160}`. `--card/borderwidth/br/default`. `--tag/alt5/*`(white), `--tag/alt4/*`(чорний напівпрозорий), `--tag/circle/borderradius/sm`(12,pill). Countdown/Cellular: `--countdown/bg`(тут rgba(79,141,225,.32) — інший відтінок ніж Card/Shop!), `--countdown/{borderradius,digit/primary,unit/tertiary,label,gap/md}`. `--btn/*` locally-blue.

## Notes
- Немає булевих пропсів — не уніфікуй if/else, кожен variant окрема композиція.
- Countdown/Cellular тут "важчий" варіант (48px блоки, одиниця всередині) — не плутай зі звичайним Timer.
- Кнопка-текст "Button" — плейсхолдер, реальний варіюється по variant.
- Info-кнопка 40px, не 32px, як в інших картках.
