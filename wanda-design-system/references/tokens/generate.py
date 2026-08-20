# Regenerates the light/*.md and dark/*.md token catalog from a Token Studio
# export placed in source/ (same light/dark/*.json + component/*.json layout).
# Run: python3 generate.py   (from this directory)
#
# LIGHT_STACK/DARK_STACK below encode the resolution order Token Studio uses
# for the "Light"/"Dark" themes, taken from source/themes.json
# (selectedTokenSets) filtered/ordered by source/metadata.json's
# tokenSetOrder. Re-check both files by hand if a new export adds/removes
# token sets or reorders them, since the stacks here are hardcoded.
import json, glob, re, os

HERE = os.path.dirname(os.path.abspath(__file__))
EXTRACT = os.path.join(HERE, 'source')
OUT = HERE

def load(setname):
    path = os.path.join(EXTRACT, setname + '.json')
    return json.load(open(path))

def flatten(obj, prefix=''):
    out = {}
    if isinstance(obj, dict) and 'value' in obj and 'type' in obj:
        out[prefix] = obj
        return out
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k.startswith('$'):
                continue
            newprefix = f'{prefix}.{k}' if prefix else k
            out.update(flatten(v, newprefix))
    return out

SET_FILES = [
    'light/core', 'light/map', 'light/alias', 'light/styles',
    'light/component/general', 'light/component/product',
    'light/component/widget', 'light/component/betting',
    'dark/core', 'dark/alias', 'dark/component/general',
    'dark/component/product', 'dark/component/widget', 'dark/component/betting',
]

RAW = {s: flatten(load(s)) for s in SET_FILES}

LIGHT_STACK = [
    'light/core', 'light/map', 'light/alias', 'light/styles',
    'light/component/general', 'light/component/product',
    'light/component/widget', 'light/component/betting',
]
DARK_STACK = [
    'light/core', 'light/map', 'light/alias', 'light/styles',
    'light/component/general', 'light/component/product',
    'light/component/widget', 'light/component/betting',
    'dark/core', 'dark/alias', 'dark/component/general',
    'dark/component/product', 'dark/component/widget', 'dark/component/betting',
]

def merged_stack(stack):
    m = {}
    prov = {}
    for s in stack:
        for path, tok in RAW[s].items():
            m[path] = tok
            prov[path] = s
    return m, prov

LIGHT_MERGED, LIGHT_PROV = merged_stack(LIGHT_STACK)
DARK_MERGED, DARK_PROV = merged_stack(DARK_STACK)

REF_RE = re.compile(r'\{([^{}]+)\}')

def modify_note(tok):
    ext = tok.get('$extensions', {}).get('studio.tokens', {}).get('modify')
    if not ext:
        return ''
    return f" ⚙{ext.get('type')} {ext.get('value')} ({ext.get('space')})"

def render_raw_value(v):
    if isinstance(v, dict):
        if 'type' in v and set(v.keys()) <= {'x','y','blur','spread','color','type'}:
            return f"x:{v.get('x')} y:{v.get('y')} blur:{v.get('blur')} spread:{v.get('spread')} color:{v.get('color')}"
        return json.dumps(v, ensure_ascii=False)
    if isinstance(v, list):
        return '; '.join(render_raw_value(i) for i in v)
    return str(v)

def resolve_value(v, merged, seen):
    if isinstance(v, str):
        def sub(m):
            ref = m.group(1)
            if ref in seen:
                return f'<CYCLE:{ref}>'
            if ref not in merged:
                return m.group(0)
            seen2 = seen | {ref}
            resolved = resolve_value(merged[ref]['value'], merged, seen2)
            return resolved if isinstance(resolved, str) else render_raw_value(resolved)
        prev = None
        cur = v
        for _ in range(15):
            prev = cur
            cur = REF_RE.sub(sub, cur)
            if cur == prev:
                break
        return cur
    if isinstance(v, dict):
        return {k: (resolve_value(x, merged, seen) if k != 'type' else x) for k, x in v.items()}
    if isinstance(v, list):
        return [resolve_value(i, merged, seen) for i in v]
    return v

def resolved_str(tok, merged):
    resolved = resolve_value(tok['value'], merged, set())
    return render_raw_value(resolved)

def write_table(fh, path_tok_pairs, merged):
    groups = {}
    for path, tok in path_tok_pairs:
        top = path.split('.')[0]
        groups.setdefault(top, []).append((path, tok))
    for top in sorted(groups):
        fh.write(f'\n## {top}\n\n')
        fh.write('| Token | Type | Raw | Resolved | Note |\n')
        fh.write('|---|---|---|---|---|\n')
        for path, tok in sorted(groups[top]):
            raw = render_raw_value(tok['value'])
            has_ref = bool(REF_RE.search(raw))
            resolved = resolved_str(tok, merged) if has_ref else ''
            note_parts = []
            desc = tok.get('description')
            if desc:
                note_parts.append(desc)
            mn = modify_note(tok)
            if mn:
                note_parts.append(mn.strip())
            note = ' — '.join(note_parts)
            def esc(s):
                return str(s).replace('|', '\\|').replace('\n', ' ')
            fh.write(f'| `{esc(path)}` | {esc(tok["type"])} | {esc(raw)} | {esc(resolved)} | {esc(note)} |\n')

HEADER = """# {title}

Джерело: `{setname}.json` (Token Studio export). Автозгенеровано з JSON —
не редагувати вручну, а перегенерувати скриптом при новому експорті.

Колонки: **Raw** — значення як записано в цьому сеті (alias `{{...}}` або
літерал). **Resolved** — фінальне значення після проходу по стеку сетів
{stack} (порядок з `$themes.json`/`$metadata.json`); порожньо, якщо Raw уже
літерал.

"""

def gen_file(setname, title, merged, out_relpath):
    out_path = os.path.join(OUT, out_relpath)
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, 'w') as fh:
        stack_used = LIGHT_STACK if merged is LIGHT_MERGED else DARK_STACK
        fh.write(HEADER.format(title=title, setname=setname, stack=' → '.join(stack_used)))
        write_table(fh, list(RAW[setname].items()), merged)
    print('wrote', out_path, len(RAW[setname]), 'tokens')

gen_file('light/core', 'Light / core', LIGHT_MERGED, 'light/core.md')
gen_file('light/map', 'Light / map', LIGHT_MERGED, 'light/map.md')
gen_file('light/alias', 'Light / alias', LIGHT_MERGED, 'light/alias.md')
gen_file('light/styles', 'Light / styles', LIGHT_MERGED, 'light/styles.md')
gen_file('light/component/general', 'Light / component / general', LIGHT_MERGED, 'light/component/general.md')
gen_file('light/component/product', 'Light / component / product', LIGHT_MERGED, 'light/component/product.md')
gen_file('light/component/widget', 'Light / component / widget', LIGHT_MERGED, 'light/component/widget.md')
gen_file('light/component/betting', 'Light / component / betting', LIGHT_MERGED, 'light/component/betting.md')

gen_file('dark/core', 'Dark / core (overrides)', DARK_MERGED, 'dark/core.md')
gen_file('dark/alias', 'Dark / alias (overrides)', DARK_MERGED, 'dark/alias.md')
gen_file('dark/component/general', 'Dark / component / general (overrides)', DARK_MERGED, 'dark/component/general.md')
gen_file('dark/component/product', 'Dark / component / product (overrides)', DARK_MERGED, 'dark/component/product.md')
gen_file('dark/component/widget', 'Dark / component / widget (overrides)', DARK_MERGED, 'dark/component/widget.md')
gen_file('dark/component/betting', 'Dark / component / betting (overrides)', DARK_MERGED, 'dark/component/betting.md')

print('TOTAL tokens', sum(len(v) for v in RAW.values()))
