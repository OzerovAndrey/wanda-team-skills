# Achievement

Canvas `1784:9206`, file `1iLHv8dNR3kwSoBYNl1wgs`. Один під-компонент: **Ahievement/Chain** (друкарська помилка "Ahievement" у назві canvas — та сама закономірність файлу).

## Ahievement/Chain
Node `1784:12685`. Breakpoint(md-xl/xs-sm).
```
AhievementChain({ breakpoint: "md-xl"|"xs-sm" })
```

### Anatomy
Steps-ряд: 3× **реальний Tag** (default variant, xs, `tag.md`) з номерами "1"/"2"/"3" — прогресія кроків досягнення. Знизу: Btn Primary(**Disabled-стан**, з lock-іконкою) з текстом винагороди ("300 FS" — Free Spins) — заблокована нагорода до виконання кроків.

## Tokens
Tag = `tag.md` (Default variant). Btn Disabled = `--btn/primary/{bg/start-end/disabled:rgba(...,.4), color/disabled:white, br/disabled}` — той самий Btn Primary, але в затемненому(.4 alpha) disabled-стані з lock-іконкою замість звичайної.

## Notes
- Проста, компактна фіча — прогрес-ланцюжок кроків + заблокована кнопка-нагорода. Breakpoint xs-sm не досліджено детально (ймовірно, кроки переносяться в 2 ряди при вужчому екрані, судячи з більшої висоти 84px проти 68px).
- Показує зразок реального **Disabled**-стану кнопки Primary з lock-іконкою — корисний приклад для `button.md` (там Disabled задокументований лише як стан варіанту, без конкретного прикладу з lock-іконкою).
