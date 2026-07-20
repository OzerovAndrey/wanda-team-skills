# Paginator

Canvas `8:41414`, file `1iLHv8dNR3kwSoBYNl1wgs`. Default(prev/next+лічильник) + Advanced(номери+Changer+Jumper).

## Paginator/Default
Node `8:46169`. Position(Left/Right/Center)×Disabled.
```
PaginatorDefault({ position, disabled, total=true, text })
```
Btn **Secondary** 40px(Prev/Next) + текст(`--paginator/color`rgba(44,44,44,.9)).

## Paginator/Advanced
Node `8:46128`. Disabled.
```
PaginatorAdvanced({
  disabled, total, text, item1..item6,
  gapStart, gapFinish,   // "…" розрив
  option, charger,       // Changer: page-size Input
  jumper,                // "Go to [_] Page"
})
```
Prev/Next=Btn **Text**(не Secondary, як Default!). Item=40px круг, active=bg#1d70e2+white text(`--paginator/item/checked/*`), inactive=text rgba(44,44,44,.7)(без фону, без bevel). Gap="…" замість номера. Changer=Input(sm,emboss). Jumper=Input+"Page".

## Tokens
`--paginator/gap`(8), `--paginator/color`, `--paginator/item/borderradius`(20), `--paginator/item/checked/{bg:#1d70e2,color:white}`, `--paginator/item/default/color`. Changer/Jumper: `--input/*`, `--embossprops/*`.

## Notes
- Prev/Next різні variant у Default(Secondary) vs Advanced(Text) — не переплутай.
- Активна сторінка БЕЗ bevel/тіні (на відміну від Badge/Counter).
- Макс 6 items + 2 gaps.
