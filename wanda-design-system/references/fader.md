# Fader

Canvas `8:13509`, file `1iLHv8dNR3kwSoBYNl1wgs`. Градієнт-край "є ще контент" + опц. кнопка-стрілка. Використано в Card/Default, Carousel.

## Variants
Variant(Primary/Secondary/Tertiary/Quaternary)×Position(Top/Bottom/Left/Right). Досліджено Primary/Secondary Bottom.
```
Fader({ variant, position, button })
```

## Anatomy
Top/Bottom=100×48 горизонтальна смуга. Left/Right=48×100 вертикальна. Button=Btn Secondary 40px зі стрілкою (як у скролбарі Card/Default).

## Tokens
Primary: `--fader/start`(white)→`--fader/end`(transparent). Secondary: `--fader/start`(#f7f7f8, той самий колір, що `--bg/neutral/secondary` в `effects.md`)→transparent. Tertiary/Quaternary не перевірено (`8:182165`/`8:182167`).

## Notes
- Fader без кнопки=декоративний натяк на скрол; з кнопкою=активний контрол.
