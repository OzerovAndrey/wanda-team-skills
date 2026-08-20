# Dark / component / widget (overrides)

Джерело: `dark/component/widget.json` (Token Studio export). Автозгенеровано з JSON —
не редагувати вручну, а перегенерувати скриптом при новому експорті.

Колонки: **Raw** — значення як записано в цьому сеті (alias `{...}` або
літерал). **Resolved** — фінальне значення після проходу по стеку сетів
light/core → light/map → light/alias → light/styles → light/component/general → light/component/product → light/component/widget → light/component/betting → dark/core → dark/alias → dark/component/general → dark/component/product → dark/component/widget → dark/component/betting (порядок з `$themes.json`/`$metadata.json`); порожньо, якщо Raw уже
літерал.


## widget

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `widget.fab.bg` | color | {dropdown.bg} | #798086 |  |
| `widget.message.bg.recipient` | color | {fill.default} | #798086 |  |
| `widget.message.bg.sender` | color | {product1} | #4f8dff | ⚙darken 0.5 (hsl) |
