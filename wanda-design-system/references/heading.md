# Heading

Canvas `8:100333`, file `1iLHv8dNR3kwSoBYNl1wgs`. Заголовок секції з навігацією (напр. "Popular Games ⟨ ⟩ | All (2)") — типовий header для горизонтальних списків/каруселей ігор.

## Variants
Size(xs/sm/md/lg/xl). Досліджено xs(18px) і md(20px).

## Props
```
Heading({
  size: "xs"|"sm"|"md"|"lg"|"xl",
  icon=true, component1,   // іконка перед заголовком (24px)
  title="Heading",
  icon1,   // маленька Btn Text-кнопка (16px іконка) одразу після заголовка
  badge,   // реальний Badge/Counter(important) після заголовка/іконки
  actions=true,
  arrows=true,   // пара Btn Secondary sm(prev/next стрілки, 32px)
  divider=true,  // вертикальний Divider між стрілками і "All"
  all=true,      // Btn Secondary sm "All (2)"
  customLayout, component,  // кастомний слот замість стандартних actions
})
```

## Anatomy
Ліва частина(flex-1): Icon(24px) → Title(**Bungee, розмір за size**: xs=18/t4-подібний, md=20/t3) → опц.icon1(Btn Text) → опц.Badge(реальний Badge/Counter, `badge.md`). Права частина(actions): опц.arrows(2× Btn Secondary sm) → Divider(vertical) → Btn Secondary sm "All (N)" → або повністю customLayout-слот замість усього цього.

## Tokens
`--heading/{gapbetweenicon,gapbetweenaction}/{xs,md}`(4px/8px). `--heading/color`(rgba(44,44,44,.9)). Розмір шрифту прив'язаний до Title-шкали з `typography.md` (xs≈t4-подібний 18px, md=t3 20px — точну відповідність t1-t5 для кожного розміру Heading варто звірити при документуванні sm/lg/xl).

## Notes
- Це типовий заголовок для горизонтальних каруселей контенту (ігри, банери) — часто йде разом із `carousel.md`.
- Кнопки-стрілки й "All"-кнопка — усі Secondary sm, той самий паттерн навігації, що в Carousel список-режимі.
- sm/lg/xl розміри не перевірено детально.
