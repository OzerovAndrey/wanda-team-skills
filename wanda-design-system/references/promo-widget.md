# Promo widget

Canvas `8:100329`, file `1iLHv8dNR3kwSoBYNl1wgs`. Плаваюча кругла кнопка-віджет (floating promo bubble, напр. в кутку екрана) з опційним таймером-біркою знизу.

## Props
```
PromoWidget({
  variant: "Primary"|"Accent", state: "Default"|"Hover"|"Active",
  icon, component, image=true,   // контент усередині круга: іконка або Image/Front
  timer,   // countdown-бірка знизу (Countdown/Textual-Column, `countdown.md`)
  badge,   // Badge/Notifier(important, 6px) top-right, `badge.md`
})
```

## Anatomy
Круг 48px(`--promowidget/borderradius`24, повне коло), градієнт `--promowidget/{variant}/bg/start-end/default`(Primary=#4a8ce8→#1a64cb, ті самі кольори, що Btn Primary) + той самий bevel-ефект(`--btn/boxshadow/*`, перевикористаний з Button). Icon(24px) або Image/Front(24px, `image.md`) усередині. Опц.Timer-бірка(`--promowidget/countdown/{bg:white,borderradius:2}`, `52px`, підвішена знизу з негативним відступом `mb:-8px` — притискається до низу круга). Опц.Badge=Badge/Notifier(important, 6px) у верхньому правому куті.

## Tokens
`--promowidget/borderradius`(24). `--promowidget/{variant}/bg/start-end/default` — перевикористовує ту саму гамму, що Btn (Primary/Accent). `--promowidget/countdown/{bg,borderradius}`. Ефект = `--btn/boxshadow/*`(bevel з `button.md`/`effects.md`). Timer = `Countdown/Textual-Column`(xs, `countdown.md`). Badge = `Badge/Notifier`(`badge.md`).

## Notes
- Це третій компонент (після Toggle Button), що **буквально перевикористовує bevel-токени Btn**, а не власні — підтверджує наскрізність цього ефекту в ДС.
- Таймер-бірка "підвішена" знизу круга з негативним margin — не окремий елемент поруч, а частина тієї самої вертикальної колонки.
