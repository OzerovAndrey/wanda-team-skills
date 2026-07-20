# Thumb

Canvas `8:100332`, file `1iLHv8dNR3kwSoBYNl1wgs`. Мініатюра гри — той самий компонент, що вбудований у Card/Tournament/Card/Jackpot як "6 мініатюр в ряд". 4 під-компоненти: **Fixed** (досліджено детально), Adaptive, with Counter, Btn.

## Thumb/Fixed
Node `8:104797`. Size(sm/md/lg).
```
ThumbFixed({
  size: "sm"|"md"|"lg",
  title=true, text="Game name", caption=true, text1="Provider Name",
  top, propNew, popular, live, exclusive, jackpot,  // до 6 тегів одночасно, top-left стеком
  tournament,   // скляний бейдж-іконка(Time/Base-стиль, `bg/glass/dark`) внизу-справа зображення
})
```

### Anatomy
Image/Front(квадрат, `image.md`, розмір=size: sm94/md130/lg190) → опц.Title(SemiBold12 `--thumb/title`)+Caption(10px, **синій** `--thumb/description`#1d70e2 — колір провайдера-лінка, не приглушений сірий!) → **до 6 тегів** зверху зображення (кожен — **реальний Tag xs**, `tag.md`, wrap-стек): Top(accent1 #1d70e2), New(success #1b9252), Popular(warning #e69100), Live(alt3 #ac834a), Exclusive(alt2 #009fb4), Jackpot(alt1 #933cb8). Опц.Tournament-бейдж(скляна іконка, bottom-right зображення).

## Thumb/Adaptive
Node `8:104754`. Outer(false/Skeleton)×Breakpoint(xs-md/lg-xl) — не досліджено детально. "Skeleton" варіант, ймовірно, loading-стан.

## Thumb/with Counter
Node `1650:1209`. Один символ — не досліджено детально, ймовірно Thumb + лічильник (Badge/Counter?) поверх.

## Thumb/Btn
Node `102:60784`. Size(sm/md/lg)×Variant(Default/Hover/Active/Focus/Disable) — квадратна кнопка-мініатюра (розміри збігаються з Fixed), ймовірно клікабельна версія без тегів/тексту. Не досліджено детально.

## Tokens
`--thumb/{gap:4,borderwidth:0,br/default,borderradius:8,title:rgba(44,44,44,.9),description:#1d70e2}`. Теги = реальні `--tag/{variant}/*` xs-розміру (`tag.md`).

## Notes
- **Caption/Provider-текст синій (#1d70e2), не приглушений сірий** — на відміну від типового паттерну "другорядний текст = tt/secondary" в решті ДС, тут це навмисно виглядає як клікабельне посилання на провайдера.
- До 6 тегів можуть бути активні одночасно — Figma не обмежує комбінацію, хоча на практиці навряд чи всі 6 показуються разом.
- Adaptive/with Counter/Btn не досліджені детально — саме Fixed є основним, найчастіше використовуваним варіантом (підтверджено використанням у Card/Tournament/Card/Jackpot).
