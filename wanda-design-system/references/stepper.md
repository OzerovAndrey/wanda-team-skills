# Stepper

Canvas `8:41423`, file `1iLHv8dNR3kwSoBYNl1wgs`. Нумерований wizard-крок з лінією-конектором. НЕ те саме, що Progress/Steps (там безтекстові сегменти).

## Props
```
StepperItem({
  state: "Default"|"Active"|"Done"|"Error", last,
  stepNumber,   // тільки Default/Active/Error — Done завжди показує галочку
  title, text, subtitle, text2, description, text1,
})
```

## Anatomy
Indicator(32px круг, номер/іконка) → Title+Subtitle → Line(flex-1, схована якщо last) → опц.Description(shift40, вирівняно під текстом).

## States
Default: число, bg`--stepper/indicator/bg/default`(rgba(121,128,134,.1)), title приглушений. Done: **іконка-галочка замість числа**, bg зелений(rgba(14,164,91,.12)), title темніший(rgba(44,44,44,.9)). Active/Error не перевірено(`8:64713`/`8:64745`).

## Tokens
`--stepper/gap`(16), `--stepper/item/gap`(8), `--stepper/indicatorborderradius`(16). `--stepper/indicator/{bg,color}/default`. `--stepper/indicator/bg/done`. `--stepper/{title,subtitle,description}/{default,done}`(subtitle/description НЕ темніють у done, лише title). `--stepper/item/descriptionshift`(40).

## Notes
- Не плутати з Progress/Steps — Stepper має текст/номер/підпис, Progress/Steps — ні.
- Number/Icon у Indicator взаємовиключні залежно від state.
- Немає контейнера-перемикача horizontal/vertical — збирається вручну з Item-інстансів.
