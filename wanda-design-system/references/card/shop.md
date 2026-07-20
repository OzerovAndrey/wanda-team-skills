# Card/Shop

Node `8:84600` (canvas Card `8:69448`), file `1iLHv8dNR3kwSoBYNl1wgs`. Фіксовано 288px, немає size/direction.

## Props
```
CardShop({
  border, input=true, notification, subtitle,
  tag1,      // знижка "-15%", top-left
  tag2,      // бейдж над карткою, top:-40px
  text, timer, title,
})
```

## Anatomy
Image(288/192, placeholder) → Body(paddingv/h/md, gap/md): Title(Bungee20 `--tt/primary`) → Subtitle(OpenSans14 `--tt/secondary`, якщо subtitle) → Timer(Countdown Hours/Minutes, якщо timer) → Input/Default(filled+suffix-стрілка, якщо input) → Purchase-кнопка(Btn Primary md, завжди). Info(Btn Neutral sm, top-right поверх Image). Tag1(Danger lg, left-8 top-8). Tag2(Accent2 md, top:-40px — виступає над карткою). Border(опційно). Notification/Local(bottom overlay, backdrop-blur: title+message+Confirm Btn Primary+countdown+close Btn Secondary sm).

## Tokens
Успадковує card-базові з `card/default.md` (bg/borderradius/shadowprops/paddingv-h-md/gap-md/border*). `--tt/primary`, `--tt/secondary`. `--countdown/*`. `--input/*`(md filled). `--btn/*`(Purchase=Primary/md, Info=Neutral/sm, Confirm=Primary/md, close=Secondary/sm). `--tag/danger/{bg:#bc0000,color:white}`, `--tag/accent2/{bg:#f40084,color:white}`. `--notification/local/*`(bg rgba(255,255,255,.15) backdrop-blur).

## Notes
- Фіксована ширина 288px, не масштабується як Card/Default.
- `tag2` виступає над карткою (top:-40px) — закладай overflow-простір у сітці.
