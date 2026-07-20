# Calendar

Canvas `8:69447`, file `1iLHv8dNR3kwSoBYNl1wgs`. Повноцінний календар-грід. 4 під-компоненти: Calendar(контейнер-специмен), Calendar/Item(день-клітинка, справжній reusable атом), Calendar/Day(заголовок дня тижня), Calendar/Month(заголовок місяця).

## Calendar (контейнер)
Node `8:77398`. Size(lg/md)×Expanded(f/t).
```
Calendar({ sIze: "lg"|"md", expanded, extraLine })
```
Header: Dropdown(Bungee, `t5`16px md / `t4`18px lg, "August 2024" + шеврон) → Navigation(Prev/Next=Btn Text) → Divider(vertical) → MinMax(Btn Text, згорнути/розгорнути). Days-заголовок(7× Calendar/Day). Далі 5-6 рядків по 7 Calendar/Item (сітка місяця). `extraLine` додає 7-й рядок (для місяців що потребують 6 тижнів).

## Calendar/Item (день-клітинка)
Node `8:77579`. Size(lg=64px/md=40px)×State(Default/Hover/Active/Focus)×Checked×External×Current.
```
CalendarItem({
  size: "lg"|"md", state, checked, current, external, dateText="00",
  indicator,   // маленька крапка під числом (напр. "є подія цього дня")
  badge,       // кругла іконка-бейдж у куті (напр. "є приз")
})
```
Unchecked: border `--calendar/item/default/bg/defalut`(rgba(121,128,134,.24), **friздрукарська помилка "defalut"** у назві токена!), текст `--calendar/item/default/color/default`(rgba(44,44,44,.9)). Checked: суцільний фон `--calendar/item/checked/bg`(#1d70e2), текст білий. External(дні сусіднього місяця): текст приглушений `--calendar/item/external/color/default`(rgba(44,44,44,.3)), без рамки.

## Calendar/Day, Calendar/Month
Заголовкові текстові елементи (Size lg/md) — назва дня тижня("Mo") і назва місяця в trigger-рядку. Не мають власних складних пропсів.

## Tokens
`--calendar/{gap:8,item/borderradius:8,item/size/lg:64,item/size/md:40}`. `--calendar/item/{default/bg/defalut(!),default/color/default,checked/bg:#1d70e2,checked/color:white,external/color/default}`. `--calendar/badge/{padding/lg:4,borderradius/lg:11,borderwidth:1}`. `--calendar/item/badge/{bg/default:white,br/default}`. `--calendar/month/{gap/md:2,gap/lg:4,color}`.

## Notes
- **Товар токена `--calendar/item/default/bg/defalut` містить друкарську помилку "defalut"** (не "default") — зберігай як є при звірянні з Figma.
- `Current=true`(сьогоднішній день) колір/стиль не досліджено детально — перевір `8:77590`/`8:77624` при потребі.
- Заголовок місяця — Bungee (`t4`/`t5`), узгоджено з правилом типографіки.
- Календар складається як грід із реальних Calendar/Item-інстансів — сам "Calendar"-фрейм у Figma це специмен з хардкодженими числами (1-31), не жива логіка генерації місяця.
