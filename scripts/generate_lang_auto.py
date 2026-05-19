import json
from pathlib import Path

inp = Path('tmp_scan_output.txt')
out = Path('public/lang-auto.json')
if not inp.exists():
    print('tmp_scan_output.txt not found')
    raise SystemExit(1)

lines = []
with inp.open('r', encoding='utf-16') as f:
    for raw in f:
        line = raw.strip()
        if not line: 
            continue
        if line.startswith('FILE '):
            continue
        # strip leading quotes
        if line.startswith('"') and line.endswith('"'):
            line = line[1:-1]
        # ignore pure emoji lines
        if all(ord(c) > 127 for c in line.strip()):
            continue
        lines.append(line)

# unique preserving order
seen = set()
unique = []
for l in lines:
    if l not in seen:
        seen.add(l)
        unique.append(l)

# make safe key function
import re

def make_key(s):
    s2 = s.lower()
    s2 = re.sub(r"[^a-z0-9]+", "_", s2)
    s2 = re.sub(r"(^_+|_+$)", "", s2)
    if not s2:
        s2 = 'text'
    base = 'auto.' + s2
    key = base
    i = 1
    while key in existing_keys:
        key = f"{base}_{i}"
        i += 1
    existing_keys.add(key)
    return key

# load existing keys from lang.js if present
existing_keys = set()
langjs = Path('public/lang.js')
if langjs.exists():
    content = langjs.read_text(encoding='utf-8')
    for m in re.finditer(r"'([a-z0-9_.-]+)'\s*:\s*'", content, flags=re.I):
        existing_keys.add(m.group(1))

mapping = {}
for s in unique:
    k = make_key(s)
    mapping[k] = s

# write JSON
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(json.dumps(mapping, ensure_ascii=False, indent=2), encoding='utf-8')
print('Wrote', out)
