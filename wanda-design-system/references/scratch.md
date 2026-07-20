# Scratch

Canvas `8:41418`, file `1iLHv8dNR3kwSoBYNl1wgs`. Поверхня скретч-картки: закрита / стерта(приз).

## Props
```
Scratch({ breakpoint: "xs"|"md", cleared, text })
```

## Anatomy
Cleared=False: заливка `--scratch/bg/fill`(#1d70e2), radius8. Cleared=True: bg white(`--scratch/bg/clear`), центрований приз-текст Bungee16(t5), `--scratch/color`.

## Tokens
xs: `--scratch/width/sm`(260), `--scratch/height/sm`(120). md не зафіксовано (`8:54030`).

## Notes
- Лише статичний до/після — реальна scratch-механіка (canvas destination-out) реалізується окремо в коді.
- Приз-текст = Bungee (заголовковий шрифт, узгоджено з правилом T1-T5=заголовки).
