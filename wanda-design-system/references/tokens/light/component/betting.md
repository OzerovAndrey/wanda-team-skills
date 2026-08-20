# Light / component / betting

Джерело: `light/component/betting.json` (Token Studio export). Автозгенеровано з JSON —
не редагувати вручну, а перегенерувати скриптом при новому експорті.

Колонки: **Raw** — значення як записано в цьому сеті (alias `{...}` або
літерал). **Resolved** — фінальне значення після проходу по стеку сетів
light/core → light/map → light/alias → light/styles → light/component/general → light/component/product → light/component/widget → light/component/betting (порядок з `$themes.json`/`$metadata.json`); порожньо, якщо Raw уже
літерал.


## betting

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `betting.betslipWidget.maxWidth` | sizing | 360 |  |  |
| `betting.notification.blocked` | color | #999 |  | white darken 0,4 |
| `betting.notification.error` | color | #D83232 |  | {tt.danger} |
| `betting.notification.info` | color | #1D70E2 |  | {tt.accent1} |
| `betting.notification.success` | color | #0EA45B |  | tt.success darken 0,25 |
| `betting.notification.warning` | color | #FFC700 |  | {tt.warning} |
| `betting.primaryAccent.1` | color | #F40084 |  | {tt.accent2} |
| `betting.primaryAccent.2` | color | #D83232 |  | {tt.danger} |
| `betting.primaryAccent.3` | color | #FF249A |  | tt.accent2 lighten 0,2 |
| `betting.primaryColor.1` | color | #414141 |  | {tt.primary} |
| `betting.primaryColor.2` | color | #F7F7F8 |  | {bg.neutral.secondary} |
| `betting.secondaryColor.1` | color | #fff |  | {white} |
| `betting.secondaryColor.2` | color | #ECEDEE |  | {bg.neutral.tertiary} |
| `betting.secondaryColor.3` | color | #959595 |  | {tt.tertiary} |
| `betting.text.buttonText` | color | #fff |  | {tt.white} |
| `betting.text.primaryText` | color | #414141 |  | {tt.primary} |
| `betting.text.secondaryText` | color | #6B6B6B |  | {tt.secondary} |
