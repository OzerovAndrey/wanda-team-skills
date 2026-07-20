# Typography

Node `5:2643` (Styles→Typography), file `1iLHv8dNR3kwSoBYNl1wgs`.

## Правило
- **T1-T5(Title)+D1-D3(Display) = ТІЛЬКИ заголовки** (Bungee).
- **Body/Caption(усі+Strong) = увесь інший текст** (Open Sans).
- **Дефолт тексту = `bodyMd`** (Open Sans Regular 14/20).
- Subtitle(курсив)/Overline(uppercase) — спецвипадки, не плутай ні з заголовками, ні з дефолт-текстом.

## Шкала
| Тір | Токен | Size/LH | Font | Tracking |
|---|---|---|---|---|
| Display | d1/d2/d3 | 84/88, 64/68, 34/38 | Bungee | 1.68/1.28/0.68 |
| Title | t1..t5 | 28/32→16/20 | Bungee | 0.56→0.32 |
| Subtitle | subtitle1-3 | 22/28, 18/24, 14/20 | OpenSans **Italic** | 0 |
| Overline | overline | 12/16 | OpenSans SemiBold UPPERCASE | 4 |
| Body | bodyMd/Sm/(Strong) | 14/20, 12/16 | OpenSans Regular/SemiBold | 0 |
| Caption | bodyXs/caption2/(Strong) | 10/14, 8/12 | OpenSans Regular/SemiBold | 0 |

## Tokens (--tt/*)
| Токен | Світла тема | Темні промо-картки |
|---|---|---|
| `--tt/primary` | rgba(44,44,44,.9) | rgba(255,255,255,.9) |
| `--tt/secondary` | rgba(44,44,44,.7) | rgba(255,255,255,.6) |
| `--tt/tertiary` | rgba(44,44,44,.5) | — |
| `--tt/accent2` | #f40084 | те саме |
| `--tt/accent3` | #ffc700 | те саме |

primary/secondary **інвертуються за контекстом фону** (світлі картки=темний текст, темні промо=світлий) — один токен, різне резолв-значення.

## Notes
- Subtitle=єдиний italic-тір.
- Адаптивний breakpoint-mapping є у фреймі `8:13346`(canvas Typography) — загальний принцип: розмір спускається на 1-2 тіри на вужчих екранах, точна таблиця не зафіксована, звіряй напряму при потребі.
- `#808080` в raw-коді — демо-колір специмену, не токен.
