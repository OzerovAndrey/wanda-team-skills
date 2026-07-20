# Card/Loot

Node `8:84616` (canvas Card `8:69448`), file `1iLHv8dNR3kwSoBYNl1wgs`. 288px, простіший Card/Shop без input/notification.

## Props
```
CardLoot({
  border, button=true, component,  // component замінює дефолтну кнопку "Activate"
  tag, timer=true, title,
})
```

## Anatomy
Image(288/192 placeholder) → Tag(Danger md, bottom-8 right-8, на зображенні) → Body(fixed 260px, justify-between): Title(Bungee20) → Timer(Countdown, якщо timer) → Button-слот(component || Btn Primary md "Activate"). Info(Btn Neutral sm, top-right). Border(опційно).

## Tokens
Card-базові + `--tt/primary`, `--countdown/*`, `--btn/*`(Primary/md дія, Neutral/sm Info), `--tag/danger/*`.

## Notes
- Кнопка — реальний composition-слот (`component`), не просто текст.
- Body фіксовано 260px, justify-between тримає title/button на місцях незалежно від timer.
