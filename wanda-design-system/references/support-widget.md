# Support widget

Canvas `5:2641`("Features" сторінка), file `1iLHv8dNR3kwSoBYNl1wgs`. Повноцінний чат-віджет підтримки (типу Intercom/Zendesk). Багато під-компонентів: Widget(контейнер), Widget/FAB(кнопка-запуск), Widget/Message(бульбашка), Widget/Response(швидкі відповіді), Widget/Categories(+Item), Widget/Reaction(+List+Tag).

## Widget/FAB (кнопка запуску)
Node `8:6608`. Horizontal(f/t).
```
WidgetFab({ horizontal, badge })
```
Кругла кнопка 56px, `--widget/fab/{bg:#3f4346,borderradius:16}`, тінь `--shadow/y-blur/lg`(з `effects.md`) → Logo(Symbol-варіант, 32px) + "CHAT"(SemiBold10, `--widget/fab/color`white) → опц. **реальний Badge/Counter**(important) top-right. `Horizontal=true` — ймовірно горизонтальний варіант (лого+текст в ряд, а не стовпчиком).

## Widget/Message (бульбашка чату)
Node `8:6414`. Variant(Text/Text-strong/Custom/Document/Media)×Sender(f/t — своє/чуже повідомлення).
```
WidgetMessage({
  variant, sender,
  avatar=true, message="Message...",
  responce,   // цитата-відповідь на інше повідомлення (reply quote з превʼю+іменем)
  reaction1, reaction2,   // емодзі-реакції з аватарками, до 2 показано
  actions,    // hover-кнопки React/More (Btn Secondary xs, з'являються при наведенні)
  processing, // Spinner замість завантаженого стану (повідомлення ще надсилається)
})
```
Avatar(24px, тільки не-sender) → Bubble(`--widget/message/bg/recipient`rgba(121,128,134,.1), radius16 з кутом біля відправника прямим) → опц.Reply-quote(синя ліва межа `--widget/reply/br`#1d70e2 + мініатюра+назва+опис) → текст повідомлення(14px) → опц.Reactions(до 2 emoji-тегів з аватарками користувачів, хто реагував).

## Не досліджено детально
- **Widget** (контейнер, `8:6573`, Collapsed f/t) — головна панель чату.
- **Widget/Response** (`8:6517`, Accent1/Default × md/sm) — кнопки швидких відповідей.
- **Widget/Categories** + **Widget/Categories/Item** (`8:6564`/`8:6538`) — вибір теми звернення.
- **Widget/Reaction**, **Widget/ReactionList**, **Widget/ReactionTag** — детальна механіка емодзі-реакцій (частково видно всередині Message).

## Tokens
`--widget/fab/{bg,borderradius:16,color,vertical/{padding:4,size:56}}`. `--widget/message/{gap:4,paddingv:4,bg/recipient,bubble/{gap:12,padding:16,reactions/gap:8,actions/gap:8},borderradius:16,text}`. `--widget/reply/{br:#1d70e2,borderwidth:2,gap:8,paddingl:8,paddingv:2,title/default,description,cover/borderradius/sm:4}`. `--widget/reactiontag/{bg:#e2e3e4,padding:2,margin:0,user/borderradius:12}`. `--widget/reaction/borderwidth:2`. Badge/Counter, Spinner, Avatar — перевикористані реальні компоненти.

## Notes
- Це, ймовірно, **найбагатший на функціонал окремий Feature** у ДС — повноцінний реалтайм-чат з реакціями, цитатами-відповідями, статусами доставки (processing).
- FAB перевикористовує стандартну тінь `shadow/lg` і вбудовує реальний Badge/Counter — не дублюй розмітку.
- Widget-контейнер (головна панель зі списком повідомлень, полем вводу тощо) не досліджений — при потребі `get_design_context` на `8:6574`(Collapsed=False).
