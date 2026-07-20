# Announcer

Canvas `3334:6914`, file `1iLHv8dNR3kwSoBYNl1wgs`. Тонка банер-смуга оголошень (напр. топ-бар сайту). Size(sm/md)×Style(Primary/Secondary/Neutral)×Centered.

## Props
```
Announcer({
  size: "sm"|"md", style: "Primary"|"Secondary"|"Neutral", centered,
  closable=true, image, icon, component, title="Title",
  actionBar,   // вбудований ActionBar(Btn Primary sm "Confirm")
})
```

## Anatomy
Close(Btn Text sm, опц.) → Image(32px, опц.) → Icon(20px, опц.) → Title(SemiBold12, `--announcer/color`) → опц. ActionBar(вбудований, див. `actionbar.md`). Фон — **діагональний градієнт** (172°): Primary=пастельний рожевий→блакитний (`--gradientprops/primary/{start,end}`, rgb(246,207,254)→rgb(186,202,254)).

## Tokens
`--announcer/{gap:8,paddingh/sm:8,paddingv/sm:4,content/gap/sm:8,color,image/borderradius:4}`. `--gradientprops/{style}/{start,end}` — новий градієнт-неймспейс (окремий від `gradients.md`, варто додати туди при наступному оновленні).

## Notes
- Це топ-смуга з пастельним градієнтом — інший колірний реєстр, ніж решта ДС (не btn/card-градієнти).
- Вбудовує реальний ActionBar/Btn — не дублюй розмітку кнопки.
- Secondary/Neutral кольори градієнта не перевірено детально.
