import os
from html.parser import HTMLParser

class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tag=None
        self.attrs=None
        self.skip=False
        self.texts=[]
    def handle_starttag(self, tag, attrs):
        self.tag=tag
        self.attrs=dict(attrs)
        if tag in ['script','style','noscript','textarea']:
            self.skip=True
    def handle_endtag(self, tag):
        if tag in ['script','style','noscript','textarea']:
            self.skip=False
        self.tag=None
        self.attrs=None
    def handle_data(self,data):
        if self.skip:
            return
        s=data.strip()
        if not s:
            return
        if self.attrs and self.attrs.get('data-i18n'):
            return
        if self.tag in ['option','title','h1','h2','h3','h4','label','p','button','span','a','div','strong','li']:
            self.texts.append((self.tag,self.attrs or {},s))

files = ['public/homepage.html','public/chat.html','public/goa.html','public/manali.html','public/kerala.html','public/leh.html','public/kutch.html','public/nagaland.html','public/sikkim.html','public/udaipur.html']
for f in files:
    print('FILE', f)
    path = os.path.join(os.getcwd(), f)
    with open(path, 'r', encoding='utf-8') as fh:
        text = fh.read()
    parser = TextExtractor()
    parser.feed(text)
    uniq = []
    for tag, attrs, s in parser.texts:
        if '<' in s or '>' in s:
            continue
        if s not in uniq and len(s) > 1:
            uniq.append(s)
    print('UNTRANSLATED COUNT', len(uniq))
    for s in uniq:
        print(repr(s))
    print('----')
