# Stats

Canvas `8:100330`, file `1iLHv8dNR3kwSoBYNl1wgs`. Картка-статистика з кольоровим градієнтом, заголовком, опційним рейтингом-зірками, тегом і описом.

## Variants
Variant(Green/Purple/Blue/Orange/Red) — лише колір градієнта.

## Props
```
Stats({
  variant: "Green"|"Purple"|"Blue"|"Orange"|"Red",
  gradient=true, titile=true, text="Title",   // друкарська помилка "titile" в назві пропу
  rating,   // 5 зірок(24px), останню намальовано як half/empty SVG-варіант
  tag=true, description="Description",   // Tag(success, sm) + опис-текст
})
```

## Anatomy
Фон `--stats/bg`(rgba(121,128,134,.1)) + опц.діагональний градієнт(`from-16%`, колір variant, rgba(color,0)→rgba(color,.25) — та сама "функціональний градієнт" формула, що в Announcer/card-оверлеях) → ряд: Title(**Bungee18/t4**) + опц.5-зіркова Rating(SVG-іконки, 4 filled + 1 half/empty) + опц.Tag(**реальний** `Tag/success/sm`, `tag.md`) → Description(14px, `--stats/description`).

## Tokens
`--stats/{bg,gap:4,paddingh:8,borderradius:8,title,description}`. Градієнт: `gradient/{variant}` — **за нотатками дизайнера в файлі, ці градієнти ще НЕ прив'язані до токенів** (задача "Посадити градієнти на токени" відкрита), зараз кожен variant, ймовірно, використовує захардкожений колір.

## Notes
- **Дизайнерська TODO-нотатка прямо у файлі** (canvas `8:102887`) підтверджує: (1) градієнти Stats ще не токенізовані належним чином, (2) є ідея зробити окремий компонент "Рейтинг" (зараз 5 зірок — просто вбудовані SVG-іконки, не самостійний компонент), (3) є відомий баг з шириною картки, коли всі опційні елементи вимкнені. Май це на увазі — Stats ще в процесі доопрацювання дизайнерами.
- `titile`(не `title`) — ще одна друкарська помилка пропу в цьому файлі.
- Rating зірки — це НЕ окремий переюзабельний компонент (поки що), а вбудовані іконки прямо в Stats.
