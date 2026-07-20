# Avatar

Canvas `8:69444`, file `1iLHv8dNR3kwSoBYNl1wgs`. Size(md/sm/lg/xl)×Type(Image/Icon/Label). Той самий Avatar, вбудований у Chip і Radio/Card.

## Props
```
Avatar({
  size: "md"|"sm"|"lg"|"xl", type: "Image"|"Icon"|"Label",
  label="SW",   // ініціали (тільки Type=Label)
  progress,     // кільце прогресу поверх (те саме, що Progress/Circle SVG-асет)
  badge,        // вбудований реальний Badge/Counter(important, "0") top-right
  add,          // маленька Accent-кнопка "+" bottom-right (Btn Accent xs-подібна, 24px усередині 28px wrapper)
})
```

## Anatomy
Коло(md=40px, `--avatar/borderradius/md`20, border `--avatar/{borderwidth:1,br}`). Type=Image: фото+тайлований placeholder. Type=Label: фон `--avatar/bg`(rgba(121,128,134,.1)) + ініціали(SemiBold10, `--avatar/color`rgba(44,44,44,.5)). Progress(опц.)=та сама SVG-дуга з `progress.md` Circle. Badge(опц.)=реальний Badge/Counter(important, "0", bevel) — `badge.md`. Add(опц.)=біле коло28px(`--avatar/add/bg`,`--avatar/size/addsize`) з Btn Accent-градієнтом усередині(24px, іконка "+"12px).

## Tokens
`--avatar/{borderwidth:1,br:rgba(121,128,134,.16),borderradius/md:20}`. `--avatar/bg`(Label-тип). `--avatar/color`(Label-текст). `--avatar/add/bg`(white), `--avatar/size/addsize`(28). Progress/Badge = перевикористані токени з `progress.md`/`badge.md`.

## Notes
- Type=Icon не досліджено детально (ймовірно як Label, але з іконкою замість ініціалів).
- Progress-кільце і Badge — реальні перевикористані компоненти, не імітація.
- `add`-кнопка завжди Accent-градієнт (рожевий), незалежно від контексту.
