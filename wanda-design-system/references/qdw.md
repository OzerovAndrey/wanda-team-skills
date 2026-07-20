# QDW (Quick Deposit Widget)

Canvas `8:100328`, file `1iLHv8dNR3kwSoBYNl1wgs`. Промо-віджет швидкого депозиту (казино-специфічний функціонал). 306×208px мін.

## Props
```
QDW({ notification })  // показати Notification/Local поверх (підтвердження)
```
Судячи з QDW/Showcase (`3229:861`) є ще Variant(Default/Confirmation)×Breakpoint(xs/sm/md+) — не досліджено детально, `notification`-проп у базовому символі, ймовірно, і є той самий "Confirmation" стан.

## Anatomy
Фон: діагональний градієнт(145.8°) `--qdw/bg/{start:rgb(118,56,130),end:rgb(26,37,74)}`(фіолетово-індиго) + тайлований placeholder-текстура поверх. Title(Bungee18/t4, з емодзі "💰", white) + info-іконка. Caption(14px white) + вбудований реальний **Switcher**(`switcher.md`, checked=true) в одному рядку. Внизу: Input/Default sm(з $-сумою, emboss-ефект, `input.md`) + Btn **Accent**(CTA, повна ширина) в одній колонці, поруч Front-декор(110×110, виступає right:-16 top:16 — за межі картки). Опц. **Notification/Local** overlay(той самий патерн, що Card/Shop): message + ActionBar(Btn Secondary "Cancel" + Btn Accent "Confirm").

## Tokens
`--qdw/{borderwidth:0,br,borderradius:8,paddingh-v/md:16,gap/md:4,gapbtn/md:8,title:white,caption:white,image/size:110}`. Перевикористані: `--switcher/*`, `--input/*`, `--embossprops/*`, `--btn/accent-secondary/*`, `--notification/local/*`.

## Notes
- Це один із найбагатших композитних віджетів — вбудовує **реальні** Switcher, Input, Btn, Notification/Local одночасно, а не імітації.
- Front-декор виступає за межі картки (right:-16 top:16) — той самий паттерн overflow, що tag2 у Card/Shop.
- QDW/Showcase(6 варіантів Default/Confirmation × xs/sm/md+) не досліджено детально — при потребі точних breakpoint-розмірів звернись напряму до `3235:3066` тощо.
