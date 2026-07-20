# Card/Mood

Node `4623:2805` (canvas Card `8:69448`), file `1iLHv8dNR3kwSoBYNl1wgs`. 328×366px. Найпростіша картка — banner-плитка, без кнопок/таймерів.

## Variants
Mood (кожен — окремий колір фону), досліджено лише перший:
| Node | Mood |
|---|---|
| `4623:2824` | Surprise mode (досліджено, #1d6cff) |
| `4623:2836` | New arrivals |
| `4623:2806` | Pure adrenalin |
| `4623:2812` | Big win hunt |
| `4623:2818` | Tactical play |
| `4623:2830` | Relaxed flow |

## Props
```
CardMood({ mood: "Surprise mode", text })  // інші 5 mood не перевірено
```

## Anatomy
Фон=суцільний колір `--card/mood/bg/{mood-slug}`(drop-shadow, не box-shadow). Image(1:1 flex-1, placeholder). Play-кнопка(скляний круг 72px `--bg/glass/dark`, центрована абсолютно, іконка 48px). Title(Bungee18 white `--tt/primary`, центровано).

## Tokens
`--card/mood/bg/{mood-slug}`(окремий на кожен mood). `--card/shadowprops/*`(drop-shadow тут). `--card/mood/{gap:16,padding:16,image/borderradius:16,action/size:72,action/borderradius:36}`. `--bg/glass/dark`. `--tt/primary`.

## Notes
- Кожен mood — окремий токен кольору (не одна змінна) — зафіксуй точний hex при документуванні решти.
- Play-іконка завжди по центру — фіксований елемент, не опційний.
