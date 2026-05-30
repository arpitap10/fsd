import os
import re
import sys
from html.parser import HTMLParser

if sys.platform.startswith('win'):
    sys.stdout.reconfigure(encoding='utf-8')


class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.texts = []
        self.skip = False
        self.skip_tags = {'script', 'style', 'noscript', 'textarea'}
        self.stack = []

    def handle_starttag(self, tag, attrs):
        self.stack.append((tag, dict(attrs)))
        if tag in self.skip_tags:
            self.skip = True

    def handle_endtag(self, tag):
        if self.stack:
            self.stack.pop()
        if tag in self.skip_tags:
            self.skip = False

    def inside_keyed_element(self):
        for tag, attrs in self.stack:
            if any(k.startswith('data-i18n') for k in attrs):
                return True
        return False

    def handle_data(self, data):
        if self.skip or self.inside_keyed_element():
            return
        txt = data.strip()
        if txt and not txt.isspace():
            self.texts.append((self.stack[-1][0] if self.stack else None, txt, self.getpos()))

html_dir = 'public'
files = [os.path.join(html_dir, f) for f in os.listdir(html_dir) if f.endswith('.html')]
lang = open(os.path.join(html_dir, 'lang.js'), 'r', encoding='utf-8').read()
keys = set()
for m in re.finditer(r"'([^']+)':\s*'([^']*)'", lang):
    keys.add(m.group(1))
    keys.add(m.group(2))

for fn in sorted(files):
    with open(fn, 'r', encoding='utf-8') as f:
        txt = f.read()
    p = TextExtractor()
    p.feed(txt)
    missing = []
    for tag, text, pos in p.texts:
        if any(marker in text for marker in ['data-i18n', 'data-i18n-placeholder', 'data-i18n-value']):
            continue
        if re.fullmatch(r'[\d\s\-–—:,.?\!\u2022%\$\+\/]+', text):
            continue
        if text not in keys:
            missing.append(text)
    if missing:
        print('FILE', fn)
        for t in sorted(set(missing)):
            print('  ', t)
