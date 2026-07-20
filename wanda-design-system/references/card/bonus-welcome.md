# Card/Bonus/Welcome

Node `2600:5858` (canvas Card `8:69448`), file `1iLHv8dNR3kwSoBYNl1wgs`. 288×184px. Крок welcome-серії, з'єднується пазл-конектором справа.

## Variants
State, досліджено лише Active:
| Node | State |
|---|---|
| `2600:5859` | Active (досліджено) |
| `2600:5880` | Done |
| `2600:5892` | Faild (**так у файлі**, друкарська помилка, не "Failed") |
| `2600:5904` | Lock |

## Props
```
CardBonusWelcome({
  state: "Active",  // +Done,Faild,Lock не перевірено
  action=true, deactivate=true, divider=true, minDep=true,
  overline, title,
})
```

## Anatomy
Card(288×184, власний фон `--card/bonus/welcome/bg`#23267f — **інший колір, не Cashier-градієнт!**). Back(placeholder) → Overlay(горизонтальний, зліва направо, #23267f→rgba(35,38,127,.2)) → Front(декор 100×100 bottom-right). Wrapper(width224): Overline(uppercase12) → Title(Bungee20) → Min deposit. Кнопки: Activate=Btn **Accent**(рожевий #ff2a9c→#dc0075, **єдина картка з Accent, не Primary!**) + Deactivate(Secondary icon) + Time/Base"Time left"(завжди). Info(Secondary, right-8 top-8). Divider/Subtract(**унікальний** пазл-SVG 12×54, паддінг-b 65 — з'єднує з сусідньою карткою серії).

## Tokens
`--card/bonus/welcome/bg`(#23267f, ЄДИНИЙ, не плутати з `--card/bonus/bgprops/*`). `--card/bonus/welcome/{paddingh:16,paddingv:16,gap:4}`. `--card/bonus/welcome/overlaycolor/*`(горизонтальний). `--card/bonus/welcome/frontsize`(100). `--card/bonus/welcome/divider/paddingb`(65). `--btn/accent/*`(новий variant). Спільні: `--tt/*`, `--bg/glass/dark`, `--time/base/*`, `--btn/secondary/*`.

## Notes
- Єдина картка, що фізично з'єднується з сусідньою (без gap у верстці серії, інакше конектор "провисне").
- Колір фону відрізняється від Cashier/Basic — не плутай.
- Activate=Accent(рожевий), не Primary — унікальний випадок у Card.
- "Faild" — реальна назва в файлі, зберігай при звірянні з Figma; в коді enum краще "Failed" з коментарем.
