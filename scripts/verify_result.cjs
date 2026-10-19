const fs = require('fs');

const c = fs.readFileSync('works/viloria-perfumes.html', 'utf8');

console.log('--- 1. HERO HOLDER ---');
const hIdx = c.indexOf('data-framer-name="image holder"');
console.log(c.substring(hIdx, hIdx + 1100));

console.log('\n--- 2. GALLERY START (FIRST ITEM) ---');
const gIdx = c.indexOf('akram-gallery');
console.log(c.substring(gIdx, gIdx + 1200));

console.log('\n--- 3. TYPOGRAPHY FIX ---');
const tIdx = c.indexOf('project-overview-typography-fix');
console.log(c.substring(tIdx, tIdx + 450));

console.log('\n--- 4. NEXT PROJECT ---');
const nIdx = c.indexOf('Next Project');
console.log(c.substring(nIdx - 200, nIdx + 600));

console.log('\n--- 5. CHECK VIDEO PRESENCE ---');
const videoCount = (c.match(/<video/g) || []).length;
console.log(`Total <video tags in viloria-perfumes.html: ${videoCount}`);

console.log('\n--- 6. CHECK HERO VIDEO PRESENCE (MUST BE 0) ---');
const heroChunk = c.substring(hIdx, hIdx + 1200);
console.log(`Hero contains video: ${heroChunk.includes('<video')}`);
console.log(`Hero contains hero.webp: ${heroChunk.includes('hero.webp')}`);
console.log(`Hero contains 4 corners: ${heroChunk.includes('4 corners')}`);
