# Time

Canvas `3953:2088`, file `1iLHv8dNR3kwSoBYNl1wgs`. 2 під-компоненти: **Time/Base** (= той самий "Time/Base"-бейдж з усіх card-файлів!) і **Time/Scoped** (новий: іконка-контекст + назва + countdown).

## Time/Base
Node `3621:6159`. Variant(Timer/Date)×State(Default/Disabled)×Center.
```
TimeBase({ variant: "Timer"|"Date", state, center, label=true, text="Label" })
```
Скляний бейдж(`--bg/glass/dark`rgba(0,0,0,.15), backdrop-blur24, radius20, paddingh16, height40): опц.label(10px `--tt/secondary`) → цифри(Days:Hours:Minutes, OpenSans SemiBold12/16 `--countdown/digit/primary`). Це канонічний компонент, вже задокументований розкидано по `card/ticket.md`, `card/tournament.md` тощо.

## Time/Scoped
Node `3944:4098`. Variant(Danger/Warning/Success/Accent1/Accent2)×Block.
```
TimeScoped({ variant, block, countdown=true, icon, title="Label" })
```
Горизонтальний градієнт-фон(`from-16% rgba({color},0)→rgba({color},.25)`, radius8) → Icon-wrapper(40px круг, `--fill/{variant}/default`rgba({color},.1)) → Title(OpenSans SemiBold12 `--tt/primary`) + опц.Countdown("Expire in "+хвилини, 10px `--countdown/digit-unit/secondary`).

## Tokens
Base: `--time/base/{size:40,paddingh:16,borderradius:20}`, `--bg/glass/dark`, `--countdown/digit/primary`. Scoped: `--borderradius/md`(8), `--time/scoped/iconwrapper/borderradius`(20), `--fill/{accent1,danger,...}/default`, `--tt/primary-secondary`, `--countdown/digit-unit/secondary`.

## Notes
- Time/Base — уже знайомий компонент з card-файлів, тепер формально задокументований тут як єдине джерело.
- Time/Scoped — новий патерн (іконка-контекст+назва+countdown), кольори Warning/Success/Accent2 не перевірено детально (лише Danger/Accent1).
