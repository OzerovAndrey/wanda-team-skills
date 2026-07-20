# Switcher

Canvas `8:41424`, file `1iLHv8dNR3kwSoBYNl1wgs`. Повзунковий тогл (не плутати з Toggle Button — інший компонент, `8:41428`).

## Props
```
Switcher({
  size: "md", state, layout: "⬅️ Left"|"Right ➡️", block, checked,
  indicatorIcon, component1,   // іконка 12px усередині повзунка
  innerIcon, component, innerLabel, text,  // іконка/текст усередині треку поряд з повзунком
  label, text1, description,   // зовнішній лейбл (block=true → Label+Description)
})
```

## Anatomy
Control(трек-капсула `--switcher/bg/default`rgba(29,111,226,.14), radius11) → Indicator(білий повзунок 18px, тінь sm як iOS switch) → Inner Wrapper(простір ПОРУЧ з indicator усередині треку, показує icon/text "ON/OFF" — не зовнішній текст, а частина треку) → зовнішній Label+Description(block) або single-line(!block).

## Tokens
`--switcher/bg/default`. `--switcher/gap/default`(4). `--switcher/padding`(2). `--switcher/shift/default`(8). `--switcher/borderradius`(11)/`borderradiusindicator`(9). `--switcher/indicator/bg/default`(white). `--switcher/inner/color/default`(rgba(44,44,44,.7)). `--switcher/label/default`(rgba(44,44,44,.9)).

## Notes
- Не плутати з "Toggle Button" — окремий компонент.
- Inner Wrapper — простір усередині треку (типовий native switch "ON/OFF"), не зовнішній текст.
- Checked не перевірено (`8:64969`).
