import fs from 'fs';
import path from 'path';

const root = path.resolve('public');
const langPath = path.join(root, 'lang.js');
const destPath = path.join(root, 'destination_translations.json');
const dest = JSON.parse(fs.readFileSync(destPath, 'utf8'));

const names = ['Goa', 'Leh Ladakh', 'Manali', 'Kerala', 'Udaipur', 'Sikkim', 'Kutch', 'Nagaland'];
const langs = ['kn', 'ta', 'te', 'ml', 'mr', 'bn'];

let langJs = fs.readFileSync(langPath, 'utf8');

for (const lang of langs) {
  const lines = [];
  names.forEach((n, i) => {
    const val = dest[lang][n] || names[i];
    lines.push(`    'dest.name.${i + 1}': '${val.replace(/'/g, "\\'")}',`);
  });
  const royal = (dest[lang].Royal || 'Royal').replace(/'/g, "\\'");
  const udaipur = (dest[lang].Udaipur || 'Udaipur').replace(/'/g, "\\'");
  lines.push(`    'udaipur.hero.destination': '<em>${royal}</em><br>${udaipur}',`);

  const marker = `'dest.tag.8':`;
  const langMarker = `${lang}: {`;
  const start = langJs.indexOf(langMarker);
  if (start === -1) {
    console.warn('Missing lang block', lang);
    continue;
  }
  const tag8Idx = langJs.indexOf(marker, start);
  const lineEnd = langJs.indexOf('\n', tag8Idx);
  const insertAt = lineEnd + 1;
  const block = '\n' + lines.join('\n') + '\n';
  if (langJs.slice(insertAt, insertAt + 20).includes('dest.name.1')) {
    console.log('Skip', lang, '(already patched)');
    continue;
  }
  langJs = langJs.slice(0, insertAt) + block + langJs.slice(insertAt);
  console.log('Patched', lang);
}

fs.writeFileSync(langPath, langJs, 'utf8');
console.log('Done');
