# Card/Loyalty

Node `8:84678` (canvas Card `8:69448`), file `1iLHv8dNR3kwSoBYNl1wgs`. 318px.

## Props
```
CardLoyalty({ action=true, btn=true, progress=true, type: "Active" })
```
`type` наразі має лише одне значення (`"Active"`) — інших станів у компоненті не визначено.

## Anatomy
Gradient(діагональ rgba(79,141,255,0→.25) 16%, поверх `--card/bg`) → Body(paddingv/h/sm=16, gap8): Title(Bungee16) → Points-рядок(іконка Btn Text + "15"(`--tt/accent2`#f40084) + "(200 max)") → Progress(track+gradient indicator зелений→блакитний + "3d" статус, див. `progress.md`) → btn-блок(action=Btn Primary md "Select"). Image/Front(92×92, top:-16px — **виступає над карткою**).

## Tokens
`--card/bg/borderradius/shadowprops`(тут `drop-shadow`, не box-shadow!). `--card/paddingv-h/sm`(16). `--tt/primary`, `--tt/accent2`(#f40084). `--btn/text/*`. Progress-токени: див. `progress.md`. `--btn/primary/*`("Get"). `--card/loyalty/image/size`(92), `--borderradius/md`(8).

## Notes
- Image/Front виступає над карткою (top:-16px) — закладай overflow-простір у сітці, як tag2 у Shop.
- Тінь — Tailwind drop-shadow, не box-shadow.
- Title/points/progress не параметризовані пропсами — реальні значення додаються поза Figma-дизайном.
