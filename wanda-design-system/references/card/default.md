# Card/Default

Node `8:84413` (canvas Card `8:69448`), file `1iLHv8dNR3kwSoBYNl1wgs`. Слот-каркас — блоки вмикаються булевими пропсами, наповнюються через `component*`/`slot*`. Базовий паттерн для інших карток ДС.

## Props
```
CardDefault({
  direction: "Vertical"|"Horizontal", size: "xs"|"sm"|"md"|"lg",
  heroStart, heroEnd,     // Hero-картинка (heroEnd лише Horizontal, справа)
  headerSticky, footerSticky,
  nodeBody, slotBody,     // Body: дефолт-плейсхолдер / кастомний slot
  scrollbar,              // fader top/bottom + track/thumb
  overlayHero, sOverlayHero,  // оверлей Hero (component vs slot1)
  overlayGlobal,          // оверлей Body+Footer
  fab, toggle,            // кутова кнопка (взаємовиключні)
  border,
  component, component1, component2, component3, layout, slot, slot1,  // ReactNode слоти
})
```

## Variants (Size × Direction)
| Size | V-node | H-node | Ширина | Aspect Hero |
|---|---|---|---|---|
| xs | `8:84468` | `8:84552` | 64px | 64/48 |
| sm | `8:84450` | `8:84530` | 72px | 72/54 |
| md | `8:84414` | `8:84486` | 88px | 88/66 |
| lg | `8:84432` | `8:84508` | 104px | 104/78 |

## Anatomy
Hero(top/vertical або start+end/horizontal, `flex-1`) → Header(тільки якщо headerSticky, контент=component3) → Body(nodeBody=плейсхолдер/layout + slotBody=slot; scrollbar=fader+track/thumb, у md/lg fader має кнопку-стрілку Btn Secondary) → Footer(тільки footerSticky, component2, `absolute bottom-0`) → Overlay[Global](component1) → FAB/Toggle(кутова кнопка, взаємовиключні) → Border(окремий шар).

## Tokens
`--card/bg`(white), `--card/borderradius`(16), `--card/borderwidth`(0), `--card/br/default`(transparent), `--card/shadowprops/{y,blur,color}`(rgba(0,0,0,.15)).
Розмірні: `--card/paddingv/h/{size}`, `--card/gap/{size}` → xs:12/8, sm:16/24, md:24/24, lg:32/24.
`--fader/{start,end}/primary`, `--scrollbar/{track,thumb,borderradius}/default`, `--btn/neutral/*`(FAB), `--togglebtn/*`(Toggle).

## Notes
- Hero-контент у файлі — плейсхолдер-текстура, не реальний асет; справжній контент через `overlayHero`/`sOverlayHero`.
- `scrollbar` — намальований UI (fader+track+thumb), не нативний overflow — комбінуй з реальним CSS overflow.
- FAB/Toggle перевикористовують токени з `button.md` — звіряй, якщо стилізуєш вручну.
