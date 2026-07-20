# Empty

Canvas `8:69452`, file `1iLHv8dNR3kwSoBYNl1wgs`. Стан "немає даних" (empty state). Size(sm/md/lg).

## Props
```
Empty({
  size: "sm"|"md"|"lg",
  image=true,   // Image/Cover(`image.md`) зверху
  icon, component,   // альтернатива image — іконка 56px
  title=true, text="No data",
  description=true, text1="Description",
  button1, button2=true,   // Secondary + Primary кнопки
})
```

## Anatomy
Image/Cover(опц., `image.md`) або Icon(56px, опц.) → Title+Description → опц. пара кнопок(Secondary+Primary, `button.md`).

**Важливий нюанс типографіки:** `size=sm` використовує Title як **звичайний SemiBold12 текст** (НЕ Bungee!), тоді як `size=md` використовує **Bungee16(t5)**. Це виняток із загального правила "заголовки завжди Bungee" — на маленькому розмірі Empty-стану заголовок навмисно менш акцентний.

## Tokens
`--empty/{gap:16,textgap:8,imageborderradius:8,title:rgba(44,44,44,.9),description:rgba(44,44,44,.5)}`. Кнопки = `--btn/secondary-primary/*`.

## Notes
- `size=sm` порушує правило "Title=Bungee" — звіряй уважно перед застосуванням загального правила типографіки бездумно.
- lg-розмір не досліджено детально (ймовірно ще більший Bungee-заголовок, за аналогією sm→md прогресії).
