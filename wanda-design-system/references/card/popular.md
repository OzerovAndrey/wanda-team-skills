# Card/Popular

Node `5286:5582` (канвас Card `8:69448`), file `1iLHv8dNR3kwSoBYNl1wgs`. Темна промо-плитка "популярне", фон `--card/popular/bg`#1d1f20 + діагональна watermark-текстура + округла Btn-стрілка знизу.

## Variants
Variant — назва пропу буквально перелічує групи breakpoint'ів (не окремий Size-токен на кожен):
| Node | Variant | Розмір |
|---|---|---|
| `5286:5583` | md/lg/xl | 328×96 (горизонтальна) |
| `5286:5593` | xs/sm | 156×160 (вертикальна) |

## Props
```
CardPopular({ variant: "md/lg/xl"|"xs/sm", title })
```

## Anatomy
Фон=`--card/popular/bg`(суцільний темний, без градієнта) + watermark-паттерн (та сама діагональна сітка, що й у Card/Duel/Card/Tournament) праворуч/знизу → Title(Bungee16 `t5`, `--tt/primary` white) → Btn **Primary** round icon-only(стрілка "→", звичайні `--btn/primary/*` токени, borderRadius `--borderRadius/md`8) знизу зліва під заголовком.

## Tokens
`--card/popular/bg`#1d1f20. `--card/borderRadius`16. `t5`(Bungee16). `--tt/primary`#ffffffe5. `--btn/primary/*`(звичайні, не locally-blue).

## Notes
- Найпростіша картка родини: лише Title + одна кругла Primary-кнопка, без Image/Front, без Tag, без опису.
- Property `Variant` названо за групами breakpoint'ів ("md/lg/xl" / "xs/sm"), а не окремим Size-enum на кожен — звіряй назву рівно так при роботі з API, це не одруківка.
- Не переплутати з `Chip` (`chip.md`, avatar+icon+close) — інша, дрібніша сутність з тим самим типом слова "chip" у товарних чіпах Duel.
