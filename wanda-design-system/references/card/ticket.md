# Card/Ticket

Node `8:84628` (canvas Card `8:69448`), file `1iLHv8dNR3kwSoBYNl1wgs`. 288px. Найпростіша картка (Image+Title/Description, без кнопок).

## Props
```
CardTicket({ border, description, tag, title })
```

## Anatomy
Image(192px placeholder) → Tag(Danger md, bottom-8 right-8) → Time/Base(завжди, left-12 top-12: скляний backdrop-blur бейдж, "Vanished in:" + DD:HH:MM) → Body(Title Bungee20 + Description OpenSans14, обидва `--tt/primary`, ellipsis) → Info(Btn Neutral sm, top-right) → Border(опційно).

## Tokens
Card-базові + `--tt/primary/secondary`, `--tag/danger/*`, `--btn/neutral/*`. Time/Base(нове): `--bg/glass/dark`(rgba(0,0,0,.15) blur24), `--time/base/{size:40,paddingh:16,borderradius:20}`. Цифри = `--countdown/digit/primary`.

## Notes
- Time/Base — постійний елемент (не опційний Timer, як у Shop/Loot), формат DD:HH:MM (не HH:MM).
- Немає кнопки дії/кастомних слотів — чисто інформаційна картка.
