# Card/Jackpot

Node `3732:26010` (canvas Card `8:69448`), file `1iLHv8dNR3kwSoBYNl1wgs`. 298×248px. **Єдина світла картка** серед промо (усі інші темні).

## Variants
Variant, немає булевих пропсів:
| Node | Variant |
|---|---|
| `3732:26008` | Active (досліджено) |
| `3732:26009` | Completed |

## Props
```
CardJackpot({ variant: "Active" })  // +Completed не перевірено
```

## Anatomy
Фон=білий `--card/bg`, тінь=стандартна `--shadow/y-blur/md` (не card-specific!). Gradient-декорація(**унікально**: обертовий SVG, CSS container-query units 100cqw/cqh + rotate-90 + scaleX-100 — не проста заливка). Wrapper(рожевий `--fill/accent2/default` rgba(244,0,130,.1), radius12): Front(80×80 зліва) + Title(Bungee16) + сума(Bungee16, **rose** `--tt/accent2`#f40084) + "min bet..."(8px `--tt/tertiary`). Game-ряд(Thumb 6×64px, як Tournament). Btn Primary full-width(**звичайні** токени #4a8ce8, НЕ locally-blue, як в інших промо-картках!).

## Tokens
`--card/jackpot/{gap:8,padding:12,content/gap:4,content/borderradius:12}`. `--shadow/y-blur/md/default`(стандартна UI-тінь). `--fill/accent2/default`. `--tt/primary`(**dark тут**, не white!), `--tt/accent2`(#f40084), `--tt/tertiary`. `--thumb/*`. `--btn/primary/*`(звичайний, не locally-blue).

## Notes
- `--tt/primary` тут dark (rgba(44,44,44,.9)) — на відміну від Tournament/Lottery/Auction, де white. Звіряй перед перевикористанням.
- Btn — звичайні токени (як Shop/Loot), не locally-blue, як у сусідніх темних промо-картках.
- Gradient-декорація — складний CSS-прийом (container queries + rotate), не проста заливка.
- Completed не перевірено.
