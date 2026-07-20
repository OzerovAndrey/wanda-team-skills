# Card/Free spins

Node `420:14340` (canvas Card `8:69448`), file `1iLHv8dNR3kwSoBYNl1wgs`. 312×194px. Один стан (не component set).

## Props
```
CardFreeSpins({ children, countdown, highlighted, tags, title })
```

## Anatomy
Wrapper(Back placeholder + горизонтальний overlay `--card/freespins/overlaycolor/*`, зліва направо як Bonus/Welcome) → Highlighter(рожева рамка, як Bonus/Basic) → Title(Bungee20) → 2 колонки flex-1: "Spins"(лейбл10+іконка+число Bungee20 gold `--tt/accent3`) / "Wager"(те саме, "x000") → Btn Primary md"Activate"(locally-blue) → Time/Base(countdown) → Tags-слот(children, left--2 top--2, як Bonus/Basic).

## Tokens
`--card/freespins/{minheight:194,paddingt:24,paddingb:16,paddingh:16}`. `--card/freespins/overlaycolor/*`. `--card/highlighter/*`(спільний з Bonus/Basic). `--tt/{primary,secondary,accent3:#ffc700}`. `--btn/primary/*`. Time/Base: `--bg/glass/dark`, `--time/base/*`.

## Notes
- Найпростіша картка (немає variant matrix).
- Числа Spins/Wager = той самий стиль, що Prize Pool у Tournament/Lottery (`--tt/accent3` Bungee20) — перевикористовуй токен, не хардкодь золотий.
- Tags-слот і Highlighter ідентичні Bonus/Basic.
