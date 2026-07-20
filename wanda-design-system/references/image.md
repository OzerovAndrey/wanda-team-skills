# Image

Canvas `8:13510`, file `1iLHv8dNR3kwSoBYNl1wgs`. Базовий плейсхолдер-примітив — той самий тайлований патерн, що в Hero/Image/Front/Back по всій родині Card. 2 під-компоненти: Image/Front, Image/Cover.

## Image/Front
Node `4347:6747`. Ratio(1:1/4:3 old)×Slot(f/t), 4:3(old)+Slot=true не намальовано.
```
ImageFront({ ratio: "1:1"|"4:3 (old)", slot, children })
```
Slot=false: тайлована текстура. Slot=true: прозорий `children`-контейнер. Розміри: 1:1=160×160, 4:3(old)=160×120(legacy, віддавай перевагу 1:1). Те саме, що вкладений квадрат у Hero(Card/Default) і Thumb-мініатюрах(Tournament/Jackpot).

## Image/Cover
Node `4389:4749`. Slot(f/t)×front(bool). Фіксовано 207×88px.
```
ImageCover({ front=true, slot, children })
```
Back+Front двошарова структура (як Hero Card/Default): Back=фон(slot=false→текстура, slot=true→`children` Bg); Front=квадрат 160/160 flex-1 поверх, **завжди текстура навіть при slot=true** (слот міняє тільки фон, не Front).

## Notes
- Cover: слот підмінює лише задній Bg-шар, не Front-квадрат — щоб замінити Front, клонуй реальний instance.
- Image/Cover ідентичний патерну Hero(Card/Default) і Image(Shop/Loot/Ticket) — базовий будівельний блок, не збіг.
