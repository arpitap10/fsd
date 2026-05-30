import fs from 'fs';
import path from 'path';

const file = path.join('public', 'destination_translations.json');
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const names = {
  hi: { Goa: 'गोवा', 'Leh Ladakh': 'लेह लद्दाख', Manali: 'मनाली', Kerala: 'केरल', Kutch: 'कच्छ' },
  kn: { Goa: 'ಗೋವಾ', 'Leh Ladakh': 'ಲೇಹ್ ಲಡಾಕ್', Manali: 'ಮನಾಲಿ', Kerala: 'ಕೇರಳ', Kutch: 'ಕಚ್ಛ' },
  ta: { Goa: 'கோவா', 'Leh Ladakh': 'லே லடாக்', Manali: 'மணாலி', Kerala: 'கேரளா', Kutch: 'கச்சு' },
  te: { Goa: 'గోవా', 'Leh Ladakh': 'లే లడాఖ్', Manali: 'మనాలి', Kerala: 'కేరళ', Kutch: 'కచ్ఛ్' },
  ml: { Goa: 'ഗോവ', 'Leh Ladakh': 'ലേ ലഡാഖ്', Manali: 'മനാലി', Kerala: 'കേരളം', Kutch: 'കച്ച്' },
  mr: { Goa: 'गोवा', 'Leh Ladakh': 'लेह लडाख', Manali: 'मनाली', Kerala: 'केरळ', Kutch: 'कच्छ' },
  bn: { Goa: 'গোয়া', 'Leh Ladakh': 'লেহ লাদাখ', Manali: 'মানালি', Kerala: 'কেরালা', Kutch: 'কচ্ছ' },
};

for (const lang of Object.keys(names)) {
  if (!data[lang]) data[lang] = {};
  Object.assign(data[lang], names[lang]);
}

fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log('Patched destination names for', Object.keys(names).join(', '));
