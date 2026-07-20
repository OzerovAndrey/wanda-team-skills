# Card/Tournament Network

Node `3554:4978` (canvas Card `8:69448`), file `1iLHv8dNR3kwSoBYNl1wgs`. 298×420px. Варіант Tournament для крос-провайдерних турнірів.

## Variants
Finished(f/t): `3554:5043`(f, досліджено) / `3554:5107`(t, не перевірено).

## Props
```
CardTournamentNetwork({ finished, game=true, network, prizePool, title })
```

## Anatomy
Спільне з `tournament.md`: Image+Overlay+Wrapper, Title(Bungee20 white), Prize pool(gold), Game-ряд 6×, Time/Base(дати). Відмінності: немає Min bet/Win places/Divider; **Provider-банер**(новий, node `3571:1546`: `--fill/default` rgba(121,128,134,.16) + логотип провайдера + "Exclusively on the provider's platform" `--tt/secondary`); кнопка завжди одна "Details"(Btn Secondary full-width, немає Join-пари); Tag "Network"(`--tag/alt1` #933cb8, right-12 top-12, замість Classic/Provider/Rush/Exclusive стеку).

## Tokens
Успадковує з `tournament.md`. Нові: `--fill/default`(rgba(121,128,134,.16)), `--borderradius/sm`(4), `--tag/alt1/{bg:#933cb8,color:white}`.

## Notes
- Спеціалізований варіант Tournament, не окремий компонент — звіряй структуру з `tournament.md`.
- Кнопка завжди одна "Details" (мережевий турнір веде на сторонній майданчик).
