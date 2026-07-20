# Notification

Canvas `8:69455`, file `1iLHv8dNR3kwSoBYNl1wgs`. 4 під-компоненти: Global(позиціонування 6 кутів), Global/Item(картка сповіщення), Indicator(кольоровий кружок з countdown-кільцем), Local(=вже задокументований у `card/shop.md`/`card/details.md` overlay-патерн).

## Notification/Global/Item
Node `8:100404`. Variant(Default/Stack — Stack не досліджено, ймовірно "складена стопка" кількох сповіщень).
```
NotificationGlobalItem({
  variant: "Default"|"Stack",
  addons=true,   // блок зліва: icon/indicator/cover
  icon=true, component, indicator, cover,
  title=true, text="Title", message="Message...",
  actionBar,   // Btn Primary "Confirm"
})
```

### Anatomy
Wrapper(`--notification/global/bg`white, radius16, paddingl16/paddingr44(місце під Close)/paddingv16, **власна складна тінь** `notification/shadow` — два drop-shadow шари: `0 8px 48px 16px rgba(0,0,0,.12)` + `0 3px 8px rgba(0,0,0,.12)`, сильніша за стандартну `--shadow/*`) → Addons(Icon32/Indicator/Cover40, взаємовиключні) → Title(SemiBold12)+Message(Regular12) → опц.ActionBar(Btn Primary "Confirm"). Close(Btn Secondary sm, absolute top-8 right-8).

**Indicator** — кольоровий круг 32px(`--notification/indicator/{variant}/bg`, success=#0ea45b) з іконкою всередині(24px) **+ SVG-кільце Progress навколо** (той самий SVG-дуга патерн, що `progress.md` Circle) — це візуалізація countdown до автозакриття сповіщення.

## Notification/Indicator (окремий компонент)
Node `8:100366`. Variant(Success/Warning/Danger/Info) — кольорові варіанти того самого 32px кружка з іконкою, що вбудований в Global/Item.

## Notification/Global (позиціонування)
Node `8:100379`. Position(Top-Right/Top-Center/Top-Left/Bottom-Right/Bottom-Center/Bottom-Left) — контейнер, що вирівнює стек Item'ів у відповідному куті екрана. Структуру не досліджено детально (ймовірно просто flex-стек Item'ів + позиція фіксована).

## Notification/Local
Той самий overlay-патерн ("підтвердіть дію" оверлей знизу картки), вже задокументований у `card/shop.md` і `card/details.md` — токени `--notification/local/*`.

## Tokens
`--notification/global/{bg:white,borderradius:16,image/borderradius:8}`. `--notification/item/{gap:12,paddingl:16,paddingr:44,paddingv:16}`. `--notification/title`(rgba(44,44,44,.9)). `--notification/indicator/{success,warning,danger,info}/bg`. `--btn/primary-secondary/*`. `notification/shadow`(власна двошарова тінь, не з `effects.md`).

## Notes
- **Notification має власну унікальну тінь**, відмінну від стандартних `--shadow/{sm,md,lg}` з `effects.md` — сильніша й розлогіша (48px розмиття!), бо це "плаваючий" toast-елемент поверх усього UI.
- Indicator поєднує кольоровий круг + Progress-кільце countdown — двошаровий елемент, не просто іконка.
- Variant=Stack не досліджено — імовірно показує кілька складених карток сповіщень одна за одною.
