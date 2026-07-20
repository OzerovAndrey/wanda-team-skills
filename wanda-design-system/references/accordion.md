# Accordion

Canvas `5:2639`, file `1iLHv8dNR3kwSoBYNl1wgs`. 2 під-компоненти: Default(без фону) і Block(картка з фоном).

## Accordion/Default
Node `8:69483`. Type(Single/Multiple)×State(Default/Hover/Active/Focus/Disabled).
```
AccordionDefault({
  type: "Single"|"Multiple", state,
  control, control1=true,   // ліва/права шеврон-кнопка (Btn Text) розгортання
  overline, labelType, underline,   // текстовий блок: overline(10px)+Label(14px)/labelType-слот+underline(10px)
  caption, text="Caption",   // текст праворуч у Header
  action,      // додаткова іконка-кнопка справа
  splitter,    // вертикальний Divider між action і control1
  expand,      // чи розгорнутий (показує Body)
  image, description=true, customLayout, component,   // Body-контент при expand
})
```
Header(control-шеврон+Label-блок+caption+action+control1) → опц.Body(Shift-відступ якщо control + Image/Front(160/120, той самий, що `image.md`)+Description+customLayout-слот).

## Accordion/Block
Node `263:70303`. +Size(sm/md/lg/xl)×Title(f/t).
```
AccordionBlock({ size, type, title, state, label="Label", ...(ті самі пропси, що Default) })
```
Той самий Header/Body, але обгорнутий у картку: `--accordion/block/bg`(rgba(121,128,134,.1)), radius8, paddingh/v(sm:16/16, md:20/16). **Title=true** використовує **Bungee18(t4)** для label(замість звичайного 14px тексту) — типографія відповідає правилу "заголовок=Bungee".

## Tokens
`--accordion/{gaph:12,gapv:8}`. `--accordion/color/default`(rgba(44,44,44,.9)). `--accordion/underline/default`(rgba(44,44,44,.7), для overline/underline теж). `--accordion/image/borderradius`(8). `--btn/text/*`(control-кнопки, див. `button.md`). `--divider/gapv`(splitter). Block: `--accordion/block/{bg,borderradius:8,paddingh,paddingv}/{sm,md}`.

## Notes
- Control-кнопки (шеврони) — Btn variant **Text**, той самий патерн, що прев/некст стрілки в Carousel/Navigator.
- Title=true(Block) міняє label з body-тексту на Bungee-заголовок — узгоджено з правилом типографіки.
- Image/Front усередині Body = той самий компонент з `image.md` (160/120 aspect).
