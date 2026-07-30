# Card/Activities

Node `5286:5603` (канвас Card `8:69448`), file `1iLHv8dNR3kwSoBYNl1wgs`. Темна промо-плитка "активність", фон `--card/activities/bg`#2c2e30. Це той самий компонент, що згаданий як недосліджений TODO в `layout.md` (розділ "Responsive-поведінка типових рядів карток" — 3-up ряд і 2-колоночний грід).

## Variants
Variant = позиція зображення відносно тексту, досліджено всі 4:
| Node | Variant | Розмір |
|---|---|---|
| `5286:5604` | Left | 328×88 (горизонтальна, картинка зліва) |
| `5286:5613` | Right | 328×88 (горизонтальна, картинка справа) |
| `5286:5632` | Top | 156×172 (вертикальна, картинка згори) |
| `5286:5654` | Bottom | 156×172 (вертикальна, картинка знизу) |

## Props
```
CardActivities({ variant: "Left"|"Right"|"Top"|"Bottom", title, description })
```

## Anatomy
Фон=`--card/activities/bg`#2c2e30 + діагональна watermark-текстура (спільний паттерн з Popular/Duel/Tournament) → Title(Bungee16 `t5`, `--tt/primary` white) → Description(bodyXs, `--tt/secondary`#ffffff99 — приглушений, на відміну від Title). Left/Right — горизонтальна компоновка (текст+картинка side-by-side, 88px заввишки); Top/Bottom — вертикальна (172px, картинка займає більшу частку висоти).

## Tokens
`--card/activities/bg`#2c2e30. `--card/borderRadius`16. `t5`(Bungee16). `--tt/primary`#ffffffe5, `--tt/secondary`#ffffff99. `--banner/{borderRadius:8,borderWidth:2}` — присутні як токени компонента, але не видно застосованими в дослідженому варіанті (ймовірно опційний акцентний бордер/бейдж, не перевірено).

## Notes
- Використовується у `layout.md` як "Card/Activities (промо-плитки)" — 3-up ряд на всіх breakpoint (xs-xl), і окремо як 2-колоночний грід ("Frame 1151/1152") — сам компонент не має grid-пропу, розкладку контролює батьківський контейнер.
- Left/Right vs Top/Bottom — це різні **розміри** (88 vs 172px), а не просто дзеркальний mirror одного й того ж розміру; не намагайся підміняти Top/Bottom розміром Left/Right.
- `banner/*` токени не перевірено в реальному застосуванні — потребує окремого дослідження, якщо десь зустрінеться акцентна рамка на цій картці.
