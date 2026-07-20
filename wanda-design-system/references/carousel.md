# Carousel

Canvas `8:13505`, file `1iLHv8dNR3kwSoBYNl1wgs`. Каркас навігації (не слайдер) — слоти-плейсхолдери + стрілки/fader/dot-індикатор.

## Variants
Centered(f/t) × Breakpoint(xs/sm/md/lg/xl), 6 намальовано: `8:22925`(F,xs), `8:22942`(T,xs), `8:22950`(T,sm), `8:22958`(T,md), `8:22966`(T,lg), `8:22974`(T,xl). Centered=False лише для xs (єдиний універсальний режим).

## Centered=False (список)
```
Carousel({ actions, fader, fader1, item1..item11, component..component11 })
```
List(flex-1 overflow-clip, gap4). Fader(`--fader/*`, 80px з боків). Prev/Next=Btn **Text** маленькі.

## Centered=True (3 слоти по центру)
```
Carousel({ breakpoint, actions, navigator, item1-3, component, component1, component3, component11 })
```
3 слоти 40×40 центровані z-index2. Prev/Next=Btn **Neutral** 56px, absolute overlay(left/right-24, z нижче слотів). Navigator-Medium(7 dashes, активний 48px `--navigator/active`#1d70e2, див. `navigator.md`). Breakpoint переважно міняє лише gap-токен.

## Tokens
`--carousel/gap`(4, список). `--carousel/centered/gap/{bp}`(8). `--fader/*`. `--btn/text/*`(список), `--btn/neutral/*`+`borderradius/xl`(центрований). `--navigator/*`(див. `navigator.md`).

## Notes
- **component*↔item* НЕ мапляться лінійно** (item3=component3, але item4=component2!) — звіряй явно перед кодогенерацією, не покладайся на порядок імен.
- Макс 11 елементів у списку.
- Це каркас — весь контент через `component*`-слоти або клонування реального instance.
- Prev/Next різні variant у двох режимах (Text vs Neutral) — не переплутай.
