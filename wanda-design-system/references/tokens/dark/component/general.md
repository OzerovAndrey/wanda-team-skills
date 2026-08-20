# Dark / component / general (overrides)

Джерело: `dark/component/general.json` (Token Studio export). Автозгенеровано з JSON —
не редагувати вручну, а перегенерувати скриптом при новому експорті.

Колонки: **Raw** — значення як записано в цьому сеті (alias `{...}` або
літерал). **Resolved** — фінальне значення після проходу по стеку сетів
light/core → light/map → light/alias → light/styles → light/component/general → light/component/product → light/component/widget → light/component/betting → dark/core → dark/alias → dark/component/general → dark/component/product → dark/component/widget → dark/component/betting (порядок з `$themes.json`/`$metadata.json`); порожньо, якщо Raw уже
літерал.


## input

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `input.addon.bg.default` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.12 (hsl) |

## radio

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `radio.checked.indicator.disabled` | color | {white} | #FFFFFF | ⚙alpha 0.4 (hsl) |
