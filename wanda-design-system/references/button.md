# Btn (Button)

Node `8:151308` (frame Btn), file `1iLHv8dNR3kwSoBYNl1wgs`.

## Props
```
Btn({
  variant: "Primary"|"Secondary"|"Accent"|"Danger"|"Neutral"|"Text"|"Link",
  size: "xs"|"sm"|"md"|"lg"|"xl",
  state: "Default"|"Hover"|"Active"|"Focus"|"Loading"|"Disabled",
  label, icon, icon1, badge, text,
})
```
7×5×6×(текст/іконка) — усе вже намальовано, не створюй нову комбінацію без перевірки.

## Tokens
Паттерн `--btn/{variant}/{property}/{state}` або `--btn/{property}/{size}`:
`--btn/{variant}/bg/{start,end}/default`(градієнт), `--btn/borderradius/{size}`, `--btn/paddingh/{size}`, `--btn/gap/{size}`, `--btn/boxshadow/{glow,base}/color/{variant}`, `--btn/{variant}/color/default`, `--badge/bg/important`, `--badge/counter/color/important`(лічильник поверх).

Кольори — завжди через variable, не хардкодь hex. Градієнти по variant: див. `gradients.md`.
