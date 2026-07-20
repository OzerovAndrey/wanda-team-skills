# Footer

Canvas `8:107712`, file `1iLHv8dNR3kwSoBYNl1wgs`. Підвал сайту. Головний Footer-фрейм **дуже великий** (Type Product/Arbitrage × Breakpoint xs-xl × Authorized f/t — xs-варіант сягає 2517px заввишки!) — тут задокументовано лише реально досліджений під-компонент; сам головний Footer не деталізовано через розмір (аналогічно `layout.md`/`table.md`).

## Матриця Footer (не деталізовано)
Type(**Product** — повна версія з деталями продукту / **Arbitrage** — коротша версія, лише Authorized=False) × Breakpoint(xs/sm/md/lg/xl) × Authorized(f/t, тільки для Product). При потребі точної структури — `get_design_context` на конкретний node (напр. `8:141558` для Product/xl/Authorized=True), готуйся до дуже великого обсягу коду.

## Footer/Social Networks
Node `8:141969`. Досліджено детально.
```
FooterSocialNetworks({
  telegram=true, x=true, insta=true, facebook=true, youtube=true, vipSmm=true,
  whatsapp, viber, discord, linkedin, vk, yandex, ok, mailRu,  // усі false за замовч.
})
```
Заголовок "Find us in social media"(Overline-стиль, uppercase, `--tt/tertiary`) → ряд кругових Btn Text-іконок (до 14 різних соцмереж, wrap) → опц. **SMM-банер** "Telegram VIP Club" (функціональний градієнт `rgba(244,0,132,0→.25)`, той самий паттерн, що Stats/Announcer, з іконкою+текстом+стрілкою-посиланням).

## Footer/Partners
Node `8:141937`. Не досліджено детально — ймовірно ряд/сітка лого партнерів-провайдерів (аналогічно "Awards" з `hero.md` Trust-блоку).

## Tokens
`--tt/tertiary`(overline-заголовок). `--btn/text/*`(іконки-кнопки соцмереж). `gradient/accent2`(SMM-банер, rgba(244,0,132,*)).

## Notes
- Іконки соцмереж — усі однакового розміру(20px) Btn Text-кнопки, лише вміст іконки різний — легко розширювати новими мережами за тим самим патерном.
- SMM-банер використовує той самий "функціональний градієнт" паттерн (rgba(color,0)→rgba(color,.25)), що вже зустрічався в Stats/Announcer/card-оверлеях — наскрізний прийом для акцентних плашок у ДС.
- Головний Footer-фрейм (з юридичними посиланнями, лого, копірайтом тощо) **не задокументований детально** через величезний розмір — Footer/Social Networks і Footer/Partners, ймовірно, є його складовими блоками.
