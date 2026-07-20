# Toggle Button

Canvas `8:41428`, file `1iLHv8dNR3kwSoBYNl1wgs`. Icon-only кругла кнопка з двома станами вигляду (checked/unchecked) — той самий `--togglebtn/*`, що вже використано в Card/Default (Toggle-кутова кнопка, альтернатива FAB). Variant(Primary/Secondary/Neutral/Text)×Size(xs/sm/md/lg/xl)×State(Default/Hover/Active/Disabled/Focus)×Checked = 240 варіантів.

## Props
```
ToggleButton({ variant: "Primary"|"Secondary"|"Neutral"|"Text", size: "xs"|"sm"|"md"|"lg"|"xl", state, checked, iconDefault })
```

## Anatomy
Кругла кнопка (min40px md, radius `--togglebtn/borderradius/md`20) з градієнтним фоном `--togglebtn/{variant}/bg/start-end/default`(Primary: #4a8ce8→#1a64cb, ті самі кольори, що Btn Primary) + іконка(20px) + **той самий bevel-ефект, що Btn** (`--btn/boxshadow/{base,glow,lightedge,darkedge}/*` — буквально перевикористані токени Btn, не власні).

## Tokens
`--togglebtn/{variant}/{bg/start-end,br}/default`. `--togglebtn/borderradius/{size}`. Ефект = ті самі `--btn/boxshadow/*` токени з `button.md`/`effects.md` (не дублюються під togglebtn-неймспейс).

## Notes
- Це саме компонент, вбудований у Card/Default як альтернатива FAB.
- Bevel-ефект буквально ділить токени з Btn — зміни в button.md впливають і тут.
- Checked-різниця не перевірена детально (ймовірно змінює variant/колір іконки) — перевір `1009:55093` при потребі.
