import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
const dest = JSON.parse(fs.readFileSync(path.join(publicDir, 'destination_translations.json'), 'utf8'));
const outPath = path.join(publicDir, 'destination-translations-bundle.js');
const body = `window.__SOLOSAFAR_DEST_TRANSLATIONS__=${JSON.stringify(dest)};\n`;
fs.writeFileSync(outPath, body, 'utf8');
console.log('Wrote', outPath, `(${(body.length / 1024).toFixed(1)} KB)`);
