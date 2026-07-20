# Segmented

Canvas `8:41419`, file `1iLHv8dNR3kwSoBYNl1wgs`. Tab-switcher капсула, згаданий у `card/details.md`.

## Segmented (контейнер)
Node `8:54211`. Size(md/sm)×Block.
```
Segmented({ size, block, focus, item3..item6 })
```
Капсула(`--segmented/bg`rgba(121,128,134,.2), padding3, radius/md20). Active Item=white+shadow(sm, див. `effects.md`). Inactive=прозорий, text приглушений. Focus(`focus`)=**зовнішнє рожеве кільце-outline**(`--segmented/outline/*`rgba(244,0,130,.25), 4px) — унікальний focus-патерн (не зміна самого елемента, як у Btn/Checkbox).

## Segmented/Item
Node `8:54066`. Size×State×Checked×Fill×Bold.
```
SegmentedItem({ size, state, checked, fill, bold })
```
Fill/Bold не перевірено (`8:54139`/`8:54097`).

## Tokens
`--segmented/{bg,padding:3,borderradius/md:20}`. `--segmented/item/{gap/md:6,paddingh/md:16,borderradius/md:17}`. `--segmented/item/checked/{bg:white,label}`. `--segmented/item/{bg:transparent,label/default}`. `--segmented/outline/{color,borderwidth:4,borderradius/md:21}`. `--shadow/y-blur/sm`(активний item).

## Notes
- Focus = зовнішнє кільце, не зміна самого елемента — унікально серед досліджених компонентів.
- Макс 6 tabs (item1-6).
- Ідентичний Segmented з Card/Details — токени/структура збігаються.
