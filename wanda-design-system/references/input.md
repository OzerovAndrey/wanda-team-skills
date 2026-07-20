# Input / TextArea

Canvas `8:13511`, file `1iLHv8dNR3kwSoBYNl1wgs`.

| Frame | Node | Що |
|---|---|---|
| Input/Default | `8:24921` | Однорядкове, звичайний фон |
| Input/Ghost | `275:97429` | Прозорий стиль |
| TextArea/Default | `8:29395` | Багаторядкове |
| TextArea/Ghost | `275:107992` | Багаторядкове ghost |
| Input/Counter | `8:30212` | "0/100" |
| Input/Addon | `8:30225` | Боковий аддон |
| Input/Requirement | `8:30301` | Вимоги під полем |

## Props
```
Input({
  size: "sm"|"md"|"lg", state: "Default"|"Hover"|"Active"|"Focus"|"Disabled",
  filled, validation: "None"|"Success"|"Warning"|"Error",
  header, label, label1, mandatory, optional, info,
  placeholder,
  prefix, icon, flag, text2, text3, arrow1,
  suffix, counter, clear, divider, chip, icon1, arrow, text, text1,
  addon, addon1,
  helper, helper1, helperIcon, requirement,
})
```

## Sizes
sm=50px(`8:25555`), md=64px(`8:24922`), lg=80px(`8:25440`).

## Tokens
`--input/bg/default`(rgba(29,111,226,.32)), `--input/br/default`(залежить від validation+state), `--input/borderwidth`(1), `--input/borderradius/md`(8), `--input/paddingh/md`(12), `--input/gap-centergap/md`(8/4). `--input/color/default`, `--input/label/default`, `--input/labeloptional`, `--input/asterix`(#d83232). `--input/helper-requirement-counter/default`. `--input/addon/*`. `--chip/*`(див. `chip.md`). Ефект **emboss**(inset lightEdge+darkEdge) — див. `effects.md`.

## Notes
- Validation колір: None=нейтральний, Success=зелений, Warning=жовтий, Error=червоний — застосовується до border+footer.
