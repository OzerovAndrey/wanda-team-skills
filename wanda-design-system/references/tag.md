# Tag

Canvas `8:41426`, file `1iLHv8dNR3kwSoBYNl1wgs`. 11 variants × 4 sizes(xs/sm/md/lg) × Circle(f/t) × Strong(f/t) = 176 варіантів. Той самий Tag, що зустрічався в усіх Card-файлах (danger/accent2/alt1/alt2/alt4/alt5/success/warning).

## Props
```
Tag({
  variant: "Default"|"Accent 1"|"Accent 2"|"Success"|"Warning"|"Danger"|"Alt 1"|"Alt 2"|"Alt 3"|"Alt 4"|"Alt 5",
  size: "xs"|"sm"|"md"|"lg", circle, strong,
  avatar, icon, component, lable="Lable",
})
```

## Anatomy
Avatar(24px коло, опц.) → Icon(20px, опц., component=кастом) → Label(OpenSans Regular 12/16 bodySm, `--tag/{variant}/color`).

## Sizes
md=min32/paddingh12/radius8(rounded)/radius16(circle). sm/lg/xs аналогічно менші/більші (`--tag/{rounded,circle}/borderradius/{size}`).

## Кольори (зібрано з card-файлів + цього компонента)
| Variant | Bg | Color | Де бачили |
|---|---|---|---|
| Default | rgba(121,128,134,.1) | rgba(44,44,44,.9) | (сам компонент) |
| Danger | #bc0000 | white | Card/Shop tag1 |
| Accent1 | #1d70e2 | white | Thumb/Fixed "Top" |
| Accent2 | #f40084 | white | Card/Shop tag2 |
| Success | #1b9252 | white | Card/Lottery "N used", Thumb "New" |
| Warning | #e69100 | white | Thumb/Fixed "Popular" |
| Alt1 | #933cb8 | white | Tournament Network "Network", Thumb "Jackpot" |
| Alt2 | #009fb4 | white | Thumb/Fixed "Exclusive" (раніше вважав "бірюзовий", тепер точний hex) |
| Alt3 | #ac834a | white | Thumb/Fixed "Live" |
| Alt4 | rgba(0,0,0,.25) | — | Card/Auction ставки |
| Alt5 | white | black | Card/Auction "Ongoing" |
| Accent1(інший)/Alt3(теги без контексту) | не досліджено | — | — |

## Tokens
`--tag/{variant}/bg`, `--tag/{variant}/color`, `--tag/{variant}/br`. `--tag/borderwidth`(1). `--tag/gap/{size}`(4 md). `--tag/paddingh/{size}`(12 md). `--tag/rounded/borderradius/{size}`(8 md), `--tag/circle/borderradius/{size}`(16 md, повне коло).

## Notes
- Це той самий компонент, розкиданий по всій родині Card — 176 варіантів, більшість не досліджено детально; кольори вище зібрані з фактичного використання в картках, не з прямого перебору всіх 11 variant.
- Circle=true — повністю округла пігулка (як Chip Rounded), не окремий стиль.
- Якщо потрібен variant, якого немає в таблиці кольорів — перевір напряму відповідний symbol node (список у get_metadata).
