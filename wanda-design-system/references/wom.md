# WoM (Wheel of Mystery)

Canvas `8:100334`, file `1iLHv8dNR3kwSoBYNl1wgs`. Складніше "колесо" за WoF — 6-секторне, кожен сектор містить справжню ігрову мініатюру (Thumb) + текст, з градієнтними розділювачами. 3 під-компоненти: WoM(контейнер), WoM/Pointer(центральна кнопка-стрілка "Spin"), WoM/Sector(сегмент, 6× Size sm/md).

## WoM/Sector
Node `8:105983`. Sector(1-6)×Size(sm/md).
```
WoMSector({ sector: "1"-"6", size: "sm"|"md", title="Title", text="Text" })
```
**Технічно складний**: Shape(SVG pie-форма, обертається через `container-type:size` + `100cqw/100cqh` + rotate90 — та сама техніка, що обертовий градієнт у Card/Jackpot!) + Border(градієнтний SVG-розділювач між секторами) + Gradient(накладення) → Title(Bungee18/t4, `--wom/sector/color/title`приглушений) → **реальний Thumb**(75×100, `thumb.md`, повернутий на 90°) → Text(Bungee18/t4, white, text-shadow=shadow/sm).

## WoM/Pointer
Node `8:105958`. Variant(Primary/Secondary)×Size(md/sm).
```
WoMPointer({ variant, size })
```
Центральна кнопка "Spin" — Arrow(стрілка-вказівник зверху) + Bg+Circle+Button(3 накладені SVG-шари, градієнт+тінь запечені) + текст "Spin"(Bungee18/t4, white, text-shadow).

## WoM (контейнер)
Node `8:105937`. Size(sm/md) — ймовірно збирає 6 Sector + 1 Pointer по колу. Не досліджено детально.

## Tokens
`--wom/sector/{shape/bg,border/gradient,color/title,color/text}`. `--wom/pointer/{arrow/gradient,circle,btn/bg/{variant},btn/color}`. `--wom/thumb/width/md`(75). `--shadow/y-blur/sm`(text-shadow, з `effects.md`).

## Notes
- **Sector використовує ту саму container-query-обертання техніку**, що обертовий градієнт у Card/Jackpot — підтверджує, що це наскрізний прийом ДС для кругових/секторних елементів, не одноразове рішення.
- **Sector вбудовує реальний Thumb-компонент** (не просто картинку) — гра в кожному секторі колеса це справжня ігрова мініатюра з токенами `thumb.md`.
- Форми Pointer — SVG-асети із запеченими градієнтами/тінями (як WoF/Btn) — для реалізації або використовуй SVG як є, або відтвори вручну.
- WoM (контейнер, що збирає 6 секторів у коло) не досліджений детально.
