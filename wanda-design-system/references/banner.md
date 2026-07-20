# Banner

Canvas `8:69445`, file `1iLHv8dNR3kwSoBYNl1wgs`. Родина промо-банерів, 5 підтипів: Auth, Sidebar, Card, Showcase, Coverflow.

## Banner/Auth
Node `8:76959`. Один статичний символ, без пропсів (фіксований контент "Overline"/"Title"/"Description"). 240px, opacity90, `--banner/auth/{gap:4,paddingl:12,paddingr:124,paddingv:12,borderradius:16}`. Logo(SVG) → Overline(SemiBold12 uppercase) → Title(**Bungee18/t4**) → Description(8px). Front-декор image(108px) у нижньому правому куті, виступає за межі(`bottom:-4px right:-12px`).

## Banner/Card
Node `8:76966`. Type(Card/Custom Block).
```
BannerCard({ type: "Card", border, corner, deactiv, discription=true, info, timer=true, title=true })
```
328×208px мін., паддінги `--banner/card/paddingh-v/md`(16). Back+Overlay(градієнт `--banner/overlaycolor/{start:rgba(53,56,59,.85),end:rgba(53,56,59,.25)}`)+Front(158px decor). Title(**Bungee24/t2**, white, pr-shift80) + Description(14px, `--banner/card/caption`#caddff, pr-shift120). Кнопки: Btn **Accent**(CTA) + опц.Deactiv(Btn Neutral, dark #2c2e30, перевернутий -scale-y-180) + опц.Time/Base("Time left", той самий компонент з `time.md`). Опц.Info(Btn Secondary sm, top-right corner). Опц.border/corner-рамки(`--banner/borderwidth`2, `--banner/card/corner/default`).

## Не досліджено детально
- **Banner/Sidebar** (`3732:4208`, 312×84px) — вужчий формат для бічної панелі.
- **Banner/Showcase** (`2725:10003`) — Size(xs/sm vs md/lg/xl), два різні макети.
- **Banner/Coverflow** (`3745:7966`) — Size(md/xs), імовірно карусель-подібний showcase.

## Tokens
`--banner/borderradius`(8, Card), `--banner/borderwidth`(2). `--banner/overlaycolor/*`(градієнт для Card, схожий на card/overlaycolor з `gradients.md`, але окремий неймспейс). `--banner/card/{paddingh,paddingv,gap,image,shifttitle,shift,title:white,caption:#caddff}/md`. Auth: `--banner/auth/*`.

## Notes
- Banner/Card перевикористовує реальні Time/Base(`time.md`) і Btn(Accent/Neutral/Secondary, `button.md`) — не дублюй розмітку.
- 3 підтипи (Sidebar/Showcase/Coverflow) не досліджені — при потребі `get_design_context` на відповідний node ID.
- Заголовки скрізь Bungee (Auth=t4/18px, Card=t2/24px) — узгоджено з правилом типографіки.
