# references/tokens/

Повний каталог токенів Token Studio (Figma Tokens) для Wanda Design System —
джерело істини для назв/значень токенів, щоб не вгадувати їх з Figma-нод
(як було раніше з чипс-gap токеном).

Див. [structure.md](structure.md) — архітектура token sets і порядок резолву
(підтверджені з реального `$metadata.json`/`$themes.json`, не зі скріншота).

## Структура каталогу

```
source/            — сирий JSON-експорт з Token Studio (light/*, dark/*,
                      metadata.json, themes.json — trimmed)
generate.py         — генератор *.md з source/, python3 generate.py
light/core.md
light/map.md
light/alias.md
light/styles.md
light/component/general.md
light/component/product.md
light/component/widget.md
light/component/betting.md
dark/core.md                    — тільки перевизначення (dark не має map/styles)
dark/alias.md
dark/component/general.md
dark/component/product.md
dark/component/widget.md
dark/component/betting.md
```

Кожен `*.md` дзеркалить відповідний `*.json` з `source/` — один файл на
token set, як в самій Token Studio.

## Формат таблиць

Кожен `*.md` згрупований по top-level ключу (напр. `btn`, `card`, `bg`) з
таблицею:

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|

- **Token** — повний dotted-path (напр. `btn.primary.bg.default`)
- **Raw** — значення як записано в цьому конкретному сеті (alias `{...}`
  або літерал)
- **Resolved** — фінальне значення після резолву alias-ланцюжка по стеку
  сетів теми (`light` чи `dark`, стек — див. `structure.md`); порожньо,
  якщо Raw вже літерал
- **Note** — опис токена і/або `$extensions.studio.tokens.modify`
  (darken/lighten/alpha трансформація — Resolved показує БАЗОВЕ значення
  ДО трансформації, точний hue не рахуємо)

## Оновлення при новому експорті

1. Розпакувати новий Token Studio zip
2. Замінити файли в `source/` (light/*.json, dark/*.json, `$metadata.json`
   → `metadata.json`, `$themes.json` → trimmed `themes.json` — лишити тільки
   `id`/`name`/`group`/`selectedTokenSets`, викинути важезні
   `figmaStyleReferences`/`figmaVariableReferences`)
3. Якщо змінився список/порядок token sets — оновити `LIGHT_STACK`/
   `DARK_STACK` у `generate.py` (звірити з новим `metadata.json` +
   `themes.json`)
4. `cd references/tokens && python3 generate.py`
5. Перевірити діф — якщо з'явились нові top-level компоненти, додати їх у
   таблицю компонентів `SKILL.md`, якщо ще не там
