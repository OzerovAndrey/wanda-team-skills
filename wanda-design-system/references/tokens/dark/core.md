# Dark / core (overrides)

Джерело: `dark/core.json` (Token Studio export). Автозгенеровано з JSON —
не редагувати вручну, а перегенерувати скриптом при новому експорті.

Колонки: **Raw** — значення як записано в цьому сеті (alias `{...}` або
літерал). **Resolved** — фінальне значення після проходу по стеку сетів
light/core → light/map → light/alias → light/styles → light/component/general → light/component/product → light/component/widget → light/component/betting → dark/core → dark/alias → dark/component/general → dark/component/product → dark/component/widget → dark/component/betting (порядок з `$themes.json`/`$metadata.json`); порожньо, якщо Raw уже
літерал.


## product1

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `product1` | color | #4f8dff |  |  |

## product2

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `product2` | color | #F40084 |  |  |

## success

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `success` | color | #2BDA8D |  |  |

## tone

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `tone.text` | color | {white} | #FFFFFF |  |

## warning

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `warning` | color | #FAC02C |  |  |
