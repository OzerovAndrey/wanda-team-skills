# Dark / component / betting (overrides)

Джерело: `dark/component/betting.json` (Token Studio export). Автозгенеровано з JSON —
не редагувати вручну, а перегенерувати скриптом при новому експорті.

Колонки: **Raw** — значення як записано в цьому сеті (alias `{...}` або
літерал). **Resolved** — фінальне значення після проходу по стеку сетів
light/core → light/map → light/alias → light/styles → light/component/general → light/component/product → light/component/widget → light/component/betting → dark/core → dark/alias → dark/component/general → dark/component/product → dark/component/widget → dark/component/betting (порядок з `$themes.json`/`$metadata.json`); порожньо, якщо Raw уже
літерал.


## betting

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `betting.notification.blocked` | color | #999 |  | {tt.white} darken 0,4 |
| `betting.notification.error` | color | #D83232 |  | {tt.danger} |
| `betting.notification.info` | color | #4F8DFF |  | tt.accent1 |
| `betting.notification.success` | color | #2BDA8D |  | {tt.success} |
| `betting.notification.warning` | color | #FAC02C |  | {tt.warning} |
| `betting.primaryAccent.1` | color | #EB007D |  | {tt.accent2} darken 0,1 |
| `betting.primaryAccent.2` | color | #D83232 |  | {tt.danger} |
| `betting.primaryAccent.3` | color | #FF38A2 |  | {tt.accent2} lighten 0,2 |
| `betting.primaryColor.1` | color | #fff |  | {tt.white} |
| `betting.primaryColor.2` | color | #222426 |  | {bg.neutral.secondary} |
| `betting.secondaryColor.1` | color | #2C2E30 |  | {bg.neutral.primary} |
| `betting.secondaryColor.2` | color | #383B3D |  | bg.neutral.primary Light:0,27 |
| `betting.secondaryColor.3` | color | #898F95 |  | {tone.bg.neutral} lighten 0,12 |
| `betting.text.buttonText` | color | #fff |  | {tt.white} |
| `betting.text.primaryText` | color | #E5E5E5 |  | {tt.primary} |
| `betting.text.secondaryText` | color | #999 |  | {tt.white} darken 0,4 |
