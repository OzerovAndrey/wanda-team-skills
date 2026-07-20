# Card/Bonus/Basic

Node `346:56018` (canvas Card `8:69448`), file `1iLHv8dNR3kwSoBYNl1wgs`. Той самий градієнт, що Cashier, більша промо-картка.

## Variants
Advanced(f/t) × Size(lg/md/sm), досліджено лише lg/false:
| Node | Advanced | Size |
|---|---|---|
| `346:56003` | f | lg (досліджено, 320px) |
| `369:90360` | t | lg |
| `346:56334` | f | md (194px) |
| `369:90384` | t | md |
| `346:56405` | f | sm (130px) |
| `369:90408` | t | sm |

## Props
```
CardBonusBasic({
  advanced, size: "lg"|"md"|"sm",
  btn2, children,          // tags-слот
  details, highlighted,    // акцентна рамка
  information=true, minDeposit=true,
  overline, overline1=true, progress, tags, timeRange, title,
})
```

## Anatomy
Фон=градієнт(як Cashier). Image/Front(декор, 320px, центроване, opacity low). Highlighter(рожева рамка `--card/highlighter/*`, якщо highlighted). Overline(uppercase12 `--tt/secondary`) → Title(Bungee20) → details-рядок(Min deposit+Progress). Кнопки: Btn Primary"Activate" **flex-1** + опц.Secondary(btn2) + опц.Time/Base(timeRange). Info(Btn **Secondary** — не Text, як у Cashier! — right-8 top-8). Tags-слот(children, left--2 top--2, справжній composition-слот).

## Tokens
`--card/bonus/bgprops/*`(спільний з Cashier). `--card/bonus/basic/{gap:8,paddingt:24,paddingb:16,paddingh:16}`. `--card/highlighter/{borderwidth:2,br:#f40084,borderradius:16}`. `--tt/secondary`(white тут). Решта спільні з Cashier (progress/btn/time-base).

## Notes
- Info=Secondary тут, Text у Cashier — не переплутай.
- Tags-слот приймає children (гнучкіше за Tournament tag-стек).
- Advanced/md/sm не перевірено (висоти падають 320→194→130, ймовірно прибирають Image/details).
- Activate-кнопка тут flex-1, у Cashier — фіксована ширина.
