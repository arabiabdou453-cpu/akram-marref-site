const fs = require('fs');

const c = fs.readFileSync('works/viloria-perfumes.html', 'utf8');
const gPrefix = 'class="framer-ycym2p akram-gallery" data-framer-name="img wrapper">';
const idx = c.indexOf(gPrefix);
console.log('--- FIRST 500 CHARACTERS INSIDE GALLERY ---');
console.log(c.substring(idx + gPrefix.length, idx + gPrefix.length + 600));

// Count items and list their names
const items = Array.from(c.matchAll(/data-framer-name="(video|img \d+)"/g)).map(m => m[1]);
console.log('\n--- GALLERY ITEMS IN ORDER ---');
console.log(`Total items found: ${items.length}`);
console.log('First 10 items:', items.slice(0, 10));
console.log('Last 5 items:', items.slice(-5));
