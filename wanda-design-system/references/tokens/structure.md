# Структура Token Studio (Wanda)

Підтверджено з реального JSON-експорту (`source/`, `$metadata.json` +
`$themes.json`) — не зі скріншота. 3081 токен усього.

## Теми

Дві теми: **Light** та **Dark**. Кожна визначена в `$themes.json` через
`selectedTokenSets` — які token sets активні і в якому статусі
(`source` — учасник резолву значень, але не публікується як окрема
змінна; `enabled` — публікується).

## Token sets

Фактичний список (з `$metadata.json.tokenSetOrder`):

```
light/core
light/map
light/alias
light/styles
light/component/general
light/component/product
light/component/widget
light/component/betting
dark/core
dark/alias
dark/component/general
dark/component/product
dark/component/widget
dark/component/betting
```

**Важливо:** у `dark` НЕМАЄ окремих `map` і `styles` — тема Dark лише
перевизначає частину `core`/`alias`/`component/*`, а розміри/типографію
(`map`) і style-прив'язки (`styles`) успадковує від `light`.

## Порядок резолву (стек, later overrides earlier)

**Light:**
```
light/core → light/map → light/alias → light/styles →
light/component/general → light/component/product →
light/component/widget → light/component/betting
```

**Dark:** (той самий light-стек як база, потім dark-шари поверх)
```
light/core → light/map → light/alias → light/styles →
light/component/general → light/component/product →
light/component/widget → light/component/betting →
dark/core → dark/alias → dark/component/general →
dark/component/product → dark/component/widget → dark/component/betting
```

Це не здогадка — точно виведено з `selectedTokenSets` кожної теми в
`$themes.json`, відфільтрованого й впорядкованого за `tokenSetOrder`.
Приклад підтвердження: `dark/core` перевизначає лише `product1`, `product2`,
`success`, `warning`, `tone.text` — все інше (`fontFamilyMain`,
`baseBorderRadius`, `black`/`white` тощо) падає крізь до `light/core`
незмінним. Аналогічно `dark/alias.bg.neutral.primary` резолвиться через
`{tone.bg.neutral}`, якого немає в `dark/core`, тож бере значення з
`light/core.tone.bg.neutral` (`#798086`).

## Категорії всередині `core`

- **Sizing** — `baseControlSize`
- **Color** — базова палітра (`black`, `white`, `product1/2/3`, `success`,
  `warning`, `danger`, `info`, `alt1/2/3`, `gold`, `silver`, `bronze`,
  `disabled`, `tone.text`, `tone.bg.neutral`, `tone.bg.vibrant`)
- **Border Radius** — `baseBorderRadius`
- **Border Width** — `baseBorderWidth`
- **Font Family** — `fontFamilyMain`, `fontFamilyTitle`
- **Font Weight** — `fontWeightDefault`, `fontWeightStrong`, `fontWeightTitle`

`map` додає: розмірна шкала `controlSize.{xs..xl}`, `fontSize*`,
`lineHeight*`, `letterSpacing*`, `borderWidthNone`, `boxShadowNone`,
кольорові "степи" (`product1Step`, `product2Step`, `dangerStep`, `toneStep`
— варіації через `$extensions.studio.tokens.modify`, тип darken/lighten/alpha
у просторі hsl).

## Готовий каталог

Повний, автоматично згенерований перелік усіх 3081 токенів — з raw-значенням
+ резолвленим (де це alias) — лежить у `light/*.md` та `dark/*.md`
(дзеркалить структуру `source/`). Дивись [README.md](README.md) за деталями
формату та скрипта регенерації.
