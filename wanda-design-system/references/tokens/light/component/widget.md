# Light / component / widget

Джерело: `light/component/widget.json` (Token Studio export). Автозгенеровано з JSON —
не редагувати вручну, а перегенерувати скриптом при новому експорті.

Колонки: **Raw** — значення як записано в цьому сеті (alias `{...}` або
літерал). **Resolved** — фінальне значення після проходу по стеку сетів
light/core → light/map → light/alias → light/styles → light/component/general → light/component/product → light/component/widget → light/component/betting (порядок з `$themes.json`/`$metadata.json`); порожньо, якщо Raw уже
літерал.


## widget

| Token | Type | Raw | Resolved | Note |
|---|---|---|---|---|
| `widget.bg` | color | {bg.neutral.secondary} | #798086 |  |
| `widget.body.paddingH` | spacing | {widget.header.paddingH} | 12 |  |
| `widget.body.paddingV` | spacing | 12 |  |  |
| `widget.borderRadius` | borderRadius | {borderRadius.lg} | 8 * 2 |  |
| `widget.categories.color.active` | color | {widget.categories.color.default} | #2C2C2C |  |
| `widget.categories.color.default` | color | {tt.primary} | #2C2C2C |  |
| `widget.categories.color.focus` | color | {widget.categories.color.default} | #2C2C2C |  |
| `widget.categories.color.hover` | color | {widget.categories.color.default} | #2C2C2C |  |
| `widget.categories.item.outline.borderRadius` | borderRadius | {borderRadius.md} | 8 |  |
| `widget.categories.item.outline.borderWidth` | borderWidth | {borderWidth.outline.md} | 4 |  |
| `widget.categories.item.outline.color` | color | {outline.default} | #F40084 |  |
| `widget.categories.shape.active` | color | {product1} | #1D70E2 | ⚙alpha 0.36 (hsl) |
| `widget.categories.shape.default` | color | {tone.bg.neutral} | #798086 | ⚙alpha 0.24 (hsl) |
| `widget.categories.shape.focus` | color | {widget.categories.shape.default} | #798086 |  |
| `widget.categories.shape.hover` | color | {product1} | #1D70E2 | ⚙alpha 0.24 (hsl) |
| `widget.caterories.gap` | spacing | 16 |  |  |
| `widget.caterories.item.gap` | spacing | 8 |  |  |
| `widget.fab.bg` | color | {widget.bg} | #798086 |  |
| `widget.fab.borderRadius` | borderRadius | {widget.borderRadius} | 8 * 2 |  |
| `widget.fab.color` | color | {tt.primary} | #2C2C2C |  |
| `widget.fab.horizontal.gap` | spacing | 2 |  |  |
| `widget.fab.horizontal.height` | sizing | {controlSize.md} | 40 |  |
| `widget.fab.horizontal.paddingH` | spacing | 12 |  |  |
| `widget.fab.horizontal.paddingV` | spacing | {widget.fab.vertical.padding} | 4 |  |
| `widget.fab.vertical.padding` | spacing | 4 |  |  |
| `widget.fab.vertical.size` | sizing | 56 |  |  |
| `widget.footer.borderWidth` | borderWidth | {widget.header.borderWidth} | 1 |  |
| `widget.footer.br` | color | {widget.header.br} | #798086 |  |
| `widget.footer.gapH` | spacing | {widget.header.gap} | 4 |  |
| `widget.footer.gapV` | spacing | 8 |  |  |
| `widget.footer.paddingH` | spacing | {widget.header.paddingH} | 12 |  |
| `widget.footer.paddingV` | spacing | {widget.header.paddingV} | 8 |  |
| `widget.header.actionGap` | spacing | 2 |  |  |
| `widget.header.agent.gap` | spacing | 8 |  |  |
| `widget.header.agent.name` | color | {tt.primary} | #2C2C2C |  |
| `widget.header.agent.position` | color | {tt.secondary} | #2C2C2C |  |
| `widget.header.bg` | color | {bg.neutral.primary} | #798086 |  |
| `widget.header.borderWidth` | borderWidth | {borderWidth.default} | 1 |  |
| `widget.header.br` | color | {br.secondary} | #798086 |  |
| `widget.header.gap` | spacing | 4 |  |  |
| `widget.header.paddingH` | spacing | 12 |  |  |
| `widget.header.paddingV` | spacing | 8 |  |  |
| `widget.height` | sizing | 560 |  |  |
| `widget.margin.xs` | spacing | 16 |  |  |
| `widget.message.addon.bg.featuredIcon` | color | {fill.default} | #798086 |  |
| `widget.message.addon.bg.uploading` | color | {widget.message.bg.sender} | #1D70E2 |  |
| `widget.message.addon.size` | sizing | 48 |  |  |
| `widget.message.addon.uploading.borderRadius` | borderRadius | {widget.message.document.addon.featuredIcon.borderRadius} | 48 / 2 |  |
| `widget.message.addon.uploading.fileSize.borderRadius` | borderRadius | {widget.message.media.addon.uploading.fileSize.height} / 2 | 24 / 2 |  |
| `widget.message.bg.recipient` | color | {fill.default} | #798086 |  |
| `widget.message.bg.sender` | color | {product1} | #1D70E2 | ⚙darken 0.5 (hsl) |
| `widget.message.borderRadius` | borderRadius | {borderRadius.lg} | 8 * 2 |  |
| `widget.message.bubble.actions.gap` | spacing | 8 |  |  |
| `widget.message.bubble.gap` | spacing | 12 |  |  |
| `widget.message.bubble.maxWidth` | sizing | 224 |  |  |
| `widget.message.bubble.padding` | spacing | 16 |  |  |
| `widget.message.bubble.reactions.gap` | spacing | 8 |  |  |
| `widget.message.description` | color | {tt.secondary} | #2C2C2C |  |
| `widget.message.document.addon.cover.borderRadius` | borderRadius | {borderRadius.md} | 8 |  |
| `widget.message.document.addon.featuredIcon.borderRadius` | borderRadius | {widget.message.addon.size} / 2 | 48 / 2 |  |
| `widget.message.document.addon.featuredIcon.iconSize` | sizing | {icon.lg} | 24 |  |
| `widget.message.gap` | spacing | 4 |  |  |
| `widget.message.media.addon.uploading.fileSize.height` | sizing | 24 |  |  |
| `widget.message.media.addon.uploading.fileSize.paddingH` | spacing | 8 |  |  |
| `widget.message.paddingV` | spacing | 4 |  |  |
| `widget.message.text` | color | {tt.primary} | #2C2C2C |  |
| `widget.reaction.bg.active` | color | {fill.darker} | #798086 |  |
| `widget.reaction.bg.hover` | color | {fill.default} | #798086 |  |
| `widget.reaction.borderWidth` | borderWidth | {borderWidth.strong} | 1 + 1 |  |
| `widget.reaction.size.md` | sizing | 32 |  |  |
| `widget.reaction.size.sm` | sizing | 24 |  |  |
| `widget.reactionBar.expanded.borderRadius` | borderRadius | {widget.reaction.size.md} / 2 | 32 / 2 |  |
| `widget.reactionBar.maxHeight` | sizing | 112 |  |  |
| `widget.reactionTag.bg.active` | color | {tone.bg.neutral} | #798086 | ⚙lighten 0.72 (hsl) |
| `widget.reactionTag.bg.default` | color | {tone.bg.neutral} | #798086 | ⚙lighten 0.78 (hsl) |
| `widget.reactionTag.bg.hover` | color | {tone.bg.neutral} | #798086 | ⚙lighten 0.75 (hsl) |
| `widget.reactionTag.borderRadius` | borderRadius | {widget.reactionTag.height} / 2 | 24 + 2 * 1 + 1 / 2 |  |
| `widget.reactionTag.br.active` | color | {widget.reactionTag.bg.active} | #798086 |  |
| `widget.reactionTag.br.default` | color | {widget.reactionTag.bg.default} | #798086 |  |
| `widget.reactionTag.br.hover` | color | {widget.reactionTag.bg.hover} | #798086 |  |
| `widget.reactionTag.height` | sizing | {widget.reaction.size.sm} + 2 * {widget.reactionTag.padding} | 24 + 2 * 1 + 1 |  |
| `widget.reactionTag.margin` | spacing | -8 |  |  |
| `widget.reactionTag.padding` | spacing | {widget.reaction.borderWidth} | 1 + 1 |  |
| `widget.reactionTag.user.borderRadius` | borderRadius | {avatar.borderRadius.sm} | 24 / 2 |  |
| `widget.reply.borderWidth` | borderWidth | {borderWidth.strong} | 1 + 1 |  |
| `widget.reply.br` | color | {br.accent1} | #1D70E2 |  |
| `widget.reply.cover.borderRadius.md` | borderRadius | {borderRadius.md} | 8 |  |
| `widget.reply.cover.borderRadius.sm` | borderRadius | {borderRadius.sm} | 8 / 2 |  |
| `widget.reply.cover.height.md` | sizing | 40 |  |  |
| `widget.reply.cover.height.sm` | sizing | 32 |  |  |
| `widget.reply.description` | color | {tt.primary} | #2C2C2C |  |
| `widget.reply.gap` | spacing | 8 |  |  |
| `widget.reply.minWidth.md` | sizing | 96 |  |  |
| `widget.reply.minWidth.sm` | sizing | 80 |  |  |
| `widget.reply.paddingL` | spacing | 8 |  |  |
| `widget.reply.paddingV` | spacing | 2 |  |  |
| `widget.reply.title.accent1` | color | {tt.accent1} | #1D70E2 |  |
| `widget.reply.title.default` | color | {tt.primary} | #2C2C2C |  |
| `widget.resizer` | color | {input.resizer} | #2C2C2C |  |
| `widget.width` | sizing | 320 |  |  |
