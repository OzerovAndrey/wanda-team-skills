# Onboarding

Canvas `8:107711`("Ondoarding" — друкарська помилка в назві canvas у Figma), file `1iLHv8dNR3kwSoBYNl1wgs`. Слайд онбордингу (welcome-тур для нових користувачів).

## Props
```
Ondoarding({
  type: "Default"|"App", size: "xs"|"sm/md/lg/xl",
  dscription="Description",   // тільки Type=Default (той самий друкарський стиль помилки — "dscription")
})
```

## Anatomy
Type=Default: опц.Description(14px, `--drawer/description` — перевикористаний токен з Drawer!) → **Image/Cover**(`image.md`, 312×400) → **Navigator-Medium** з actions(Prev/Next стрілки, `navigator.md`). Type=App: без опису, менше зображення (192×336), той самий Navigator з actions знизу.

## Tokens
`--drawer/description`(перевикористаний з `drawer.md`). Image/Cover = `image.md`. Navigator = `navigator.md` (з `actions=true` — Prev/Next стрілки Btn Text по боках).

## Notes
- Назва canvas і пропс `dscription` містять ту саму родину друкарських помилок, що ми вже неодноразово фіксували в цьому файлі (lable/titile/defalut) — типова закономірність цього конкретного Figma-документа.
- Використовує Navigator у режимі з actions=true (Prev/Next стрілки) — той самий компонент, що вже задокументований, тут просто інший набір пропсів.
- Type=App, ймовірно, призначений для мобільного застосунку (менші розміри), Default — для вебу.
