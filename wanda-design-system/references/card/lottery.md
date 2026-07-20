# Card/Lottery

Node `8:84866` (canvas Card `8:69448`), file `1iLHv8dNR3kwSoBYNl1wgs`. 298×420px. Сестра Tournament, свій набір полів.

## Variants
Breakpoint(xs/lg) × Participated(f/t) × Finished(f/t):
| Node | Breakpoint | Participated | Finished |
|---|---|---|---|
| `8:84867` | xs | f | f (досліджено) |
| `8:84892` | xs | t | f |
| `8:84917` | lg | f | f |
| `8:84942` | lg | t | f |
| `8:84967` | xs | f | t |
| `8:84989` | lg | f | t |

## Props
```
CardLottery({
  breakpoint: "xs"|"lg", participated, finished,
  action2=true, divider=true, prizePool,
  tag,               // зелений "N used"
  text, text1,       // Your place, Win places
  title, winPlaces=true, yourPlaces=true,
})
```

## Anatomy
Спільне з `tournament.md`: Image+Overlay+Title+Prize pool+Time/Base. Відмінності: немає game-ряду; замість Min bet/Win places — Win places(text1)|Divider|Your place(text); кнопки=Secondary-icon+Primary flex-1 "Participate"(не "Join"); Tag "N used"(зелений `--tag/success`#1b9252, sm 24px, іконка квитка, right-12 top-12, замість Classic/Provider/Rush/Exclusive стеку).

## Tokens
Успадковує з `tournament.md` (`--card/overlaycolor/*`, `--tt/*`, `--divider/gapv`, `--btn/secondary,primary/*` locally-blue, `--bg/glass/dark`, `--time/base/*`). Власні: `--card/lottery/{gap:8,padding:16,content/gap:8}`. Нове: `--tag/success/{bg:#1b9252,color:white}`, `--tag/rounded/borderradius/sm`(6).

## Notes
- Спільний каркас з Tournament, заміщені смислові поля.
- Tag тут success/зелений (прогрес використання), не плутай з accent1 тегами Tournament.
- Participated/Finished не перевірено — `get_design_context` на потрібний node.
