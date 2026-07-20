# Section

Canvas `8:107707`("Section 🔴"), file `1iLHv8dNR3kwSoBYNl1wgs`. Загальна секція-обгортка сторінки (Heading + контент-слот + опц.навігація) — типовий блок для "Popular Games", "Promotions" тощо.

## Section
Node `27:58566`. Size(xs/sm/md/lg/xl)×Type(Primary/Secondary).
```
Section({
  size, type: "Primary"|"Secondary",
  gradSegment,   // додатковий горизонтальний градієнт-сегмент зверху/знизу
  navigator,     // Navigator-Medium dots знизу, `navigator.md`
  children,      // основний контент (карусель ігор, банерів тощо)
})
```

## Anatomy
Фон: пастельний діагональний градієнт(147.5°) `--section/gradientfill/{type}/{start,end}` — **той самий "пастельний" паттерн, що Announcer** (rgb(246,207,254)→rgb(186,202,254)). Border top+bottom(2px, `--section/br/{type}`). Padding `--section/{paddingh,paddingt,paddingb}/{size}`. Опц.GradientSegment(додатковий тонкий градієнт-акцент). **Heading**(реальний, `heading.md`) → children-слот(контент) → опц.**Navigator-Medium**(dots, `navigator.md`).

## Section/Block
Node `2600:16125`. Size(xs/md) — не досліджено детально, ймовірно варіант Section для окремого блоку/картки контенту, а не повної ширини сторінки.

## Tokens
`--section/{borderwidth/top-bottom-left-right,br/primary,paddingh-t-b/{size}}`. `--section/gradientfill/{type}/{start,end}`. `--section/gradientsegment/{type}/{start,center}`. `--layout/gap/secondary/{size}`.

## Notes
- Той самий пастельний градієнт-фон, що Announcer — обидва, ймовірно, використовують спільну "світлу" тему для акцентних обгорток на темному фоні сторінки.
- Section завжди вкладає реальний Heading — не переписуй заголовок вручну, звіряй з `heading.md`.
- Section/Block не досліджено детально.
