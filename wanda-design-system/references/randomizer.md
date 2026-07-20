# Randomizer

Canvas `8:107710`, file `1iLHv8dNR3kwSoBYNl1wgs`. "Випадкова гра" фіча — горизонтальний ряд ігрових мініатюр (як слот-машина), де центральна виділена рамкою, решта приглушені; кнопка "Spin & Play" знизу.

## Randomizer/Frame
Node `8:135925`. Size(sm/md)×Glow(f/t).
```
RandomizerFrame({ size: "sm"|"md", glow })
```
Синя рамка(`--randomizer/frame/{borderwidth:4,br:#1d70e2,borderradius:12}`) навколо центрального елемента + Arrow-вказівник зверху (12×24, той самий трикутник-стрілка, що WoM/Pointer). `Glow` додає світіння (не досліджено детально).

## Randomizer/Selector
Node `8:135946`. Size(xs-xl).
```
RandomizerSelector({ size: "xs"|"sm"|"md"|"lg"|"xl" })
```
Картка `--randomizer/selector/{color:#f7f7f8,paddingv:16,borderradius:16}` зі стандартною тінню(`--shadow/y-blur/md`) → ряд **реальних Thumb/Fixed** (`thumb.md`, 94px кожен) — по центру звичайна яскравість, по краях `opacity-50` (приглушені) → **Randomizer/Frame** абсолютно позиціонований поверх центрального Thumb → Btn Primary sm "Spin & Play" знизу по центру.

## Randomizer (повний контейнер)
Node `8:136032`. Size(xs-xl) — ймовірно повна секція сторінки, що включає Selector + заголовок/опис. Не досліджено детально.

## Tokens
`--randomizer/frame/{borderwidth:4,br:#1d70e2,borderradius:12}`. `--randomizer/selector/{color:#f7f7f8,paddingv:16,gap:8,borderradius:16}`. `--shadow/y-blur/md`(з `effects.md`). Thumb = `thumb.md`. Btn Primary sm = `button.md`.

## Notes
- Приглушені бокові мініатюри (`opacity-50`) імітують "розмиття рухом" слот-машини — центральна завжди повнокольорова й підсвічена рамкою.
- Це той самий Arrow-вказівник, що в `wom.md` (WoM/Pointer) — наскрізний елемент "тут зупинився вибір".
- Randomizer (повний контейнер) не досліджено детально — при потребі `get_design_context` на `8:136066`(xs) тощо.
