# Card/Tournament

Node `8:84697` (canvas Card `8:69448`), file `1iLHv8dNR3kwSoBYNl1wgs`. 298×420px.

## Variants
Breakpoint(xs/lg) × Joined(f/t) × Finished(f/t) — 6 намальовано:
| Node | Breakpoint | Joined | Finished |
|---|---|---|---|
| `8:84698` | xs | f | f |
| `8:84729` | xs | t | f |
| `8:84760` | lg | f | f |
| `8:84791` | lg | t | f |
| `8:84822` | lg | f | t |
| `8:84844` | lg | t | t |
Joined=true не перевірено — при потребі `get_design_context` на `8:84729`.

## Props
```
CardTournament({
  breakpoint: "xs"|"lg", joined: bool, finished: bool,
  action: bool=true, classic: bool, divider: bool=true, exclusive: bool,
  game: bool=true,   // тільки якщо !finished
  minBet: bool=true, prizePool: string, provider: bool, rush: bool,
  text: string,      // Min bet value
  title: string,
  winYourPlaces: bool=true, winYourPlaces1: string,
})
```

## Anatomy
Image(fill placeholder) → Overlay(vertical gradient `--card/overlaycolor/{start,center,end}`) → Wrapper(justify-end): Title(Bungee20,white `--tt/primary`) → Prize pool(gold `--tt/accent3` if !finished, else white) → Min bet|Divider|Win places (3 cols) → Game thumbs 6× (только !finished) → actions: !finished=Secondary-icon+Primary"Join"; finished=Secondary"Details" full-width. Time/Base top-left (date range, not countdown). Tag stack top-right, до 4: Classic(`--tag/accent1`)/Provider(`--tag/alt2`)/Rush(`--tag/danger`)/Exclusive(`--tag/warning`).

## Tokens
`--card/overlaycolor/*`, `--card/tournament/{gap:8,padding:16,game/gap:8}`, `--tt/primary`(white here), `--tt/accent3`(#ffc700), `--thumb/*`, `--bg/glass/dark`, `--time/base/*`, `--tag/{accent1,alt2,danger,warning}/*`.
**Btn тут locally-blue**: `rgba(79,141,255,*)`, не стандартний `rgba(29,111,226,*)`.

## Notes
- Finished змінює структуру (не тільки стилі): game-ряд зникає, кнопки Join+icon → одна Details.
- `Joined=true` не перевірено.
