# Countdown

Canvas `8:41427`, file `1iLHv8dNR3kwSoBYNl1wgs`. 3 під-компоненти: Cellular(боксики), Textual-Column(число+підпис під ним), Textual-Row(=Time/Base у card-файлах).

## Cellular
Node `8:68502`. Size(xs/sm/md/lg)×Align(Row/Column).
```
CountdownCellular({
  size, align: "Row"|"Column",
  label=true, label1, icon, component,
  day, hour, minutes, seconds,  // незалежні, hour+minutes true за замовч.
  unit..unit3, value..value3,
})
```
Bungee18 лейбл + боксики 48×48(`--countdown/bg`rgba(29,111,226,.32), radius8) з числом(`--countdown/digit/primary`)+одиницею(`--countdown/unit/tertiary`). Card/Auction=48px, Card/Shop/Loot/Loyalty=32px(інший size-варіант, не кастом).

## Textual-Column
Node `8:68707`. Size(lg/md/sm/xs).
```
CountdownTextualColumn({ size, label, icon, day,hours,minutes,seconds, splitter..splitter2, unit, value..value3 })
```
Без боксів: число(14/12px SemiBold)+слово-підпис під ним(10px "Day/Hrs/Min/Sec", `unit/tertiary`). Splitter — окремі булеві пропи (не авто).

## Textual-Row (=Time/Base)
Node `3877:239`. Variant(Primary/Secondary)×Size(lg/md/sm/xs).
```
CountdownTextualRow({ variant, size, label, text, days,hours,minutes,seconds, splitter..splitter2, unit, value..value3 })
```
Інлайн формат, однолітерний unit **не приглушений** (`--countdown/unit/primary`, той самий колір, що цифра — відмінність від інших двох!). Secondary не перевірено.

## Tokens
`--countdown/bg`(тільки Cellular), `--countdown/borderradius`(8), `--countdown/digit/primary`(спільний), `--countdown/unit/tertiary`(Cellular+Column) vs `--countdown/unit/primary`(тільки Row), `--countdown/label`, `--countdown/gap/{xs,sm,md}`.

## Notes
- 3 "ваги" одного функціоналу: Cellular=акцент, Column=середній, Row=компактний inline.
- Row має unit того ж кольору, що digit — не приглушений, як в інших двох.
- Splitter — керуй узгоджено з видимими розрядами (не автоматичний).
