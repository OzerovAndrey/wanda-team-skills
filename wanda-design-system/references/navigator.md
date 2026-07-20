# Navigator

Canvas `8:13514`, file `1iLHv8dNR3kwSoBYNl1wgs`. Dot/dash пагінація-індикатор, той самий, що вбудований у Carousel.

## Variants
Medium(`8:41440`) / Small(`8:41470`, не досліджено), обидва Dash(t/f).

## Props
```
NavigatorMedium({ dash, actions, item1..item7 })
```

## Anatomy
Dash=True: 7 капсул, активний(item4)=48px синій(`--navigator/active`#1d70e2), решта 8-16px напівпрозорі(`--navigator/default`rgba(29,111,226,.25)). Dash=False: 7 крапок, розмір росте до центру(4→6→8→8→8→6→4), активна=8px синя. Actions=Btn Text 32px стрілки.

## Tokens
`--navigator/gap`(16). `--navigator/dash/{gap:8,padding:4}`. `--navigator/dot/{gap:10,padding:5}`. `--navigator/default`, `--navigator/active`(той самий колір, що `--link/accent/color`, `--badge/bg/accent2`).

## Notes
- item1-7 = макс позицій, не завжди 7 — активна визначається ззовні (яка з item отримує active-колір).
- Ідентичний Navigator у Carousel(Centered=True) — тримай токени синхронними.
