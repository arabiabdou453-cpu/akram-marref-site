const fs = require('fs');

const v = fs.readFileSync('works/viloria-perfumes.html', 'utf-8');
const checks = [
  ['Title', v.includes('<title>VILORIA PERFUMES - Akram Marref</title>')],
  ['Hero h1', v.includes('>VILORIA PERFUMES</h1>')],
  ['Hero subtitle', v.includes('Born in Red, Crowned with Gold')],
  ['Hero image', v.includes('/media/works/viloria-perfumes/hero.webp')],
  ['Overview p1', v.includes('Viloria Perfumes is a luxury fragrance house')],
  ['Overview p2', v.includes('Viloria was created to move beyond')],
  ['Overview p3', v.includes('At its core, Viloria transforms fragrance')],
  ['Client', v.includes('>VILORIA PERFUMES</p>')],
  ['Industry', v.includes('>COSMETICS &amp; BEAUTY</p>')],
  ['Services', v.includes('>FULL BRAND IDENTITY / PRODUCT DESIGN</p>')],
  ['Live Behance', v.includes('https://www.behance.net/gallery/256986051/VILORIA-PERFUMES-Full-Brand-Identity')],
  ['Next Project Saffron', v.includes('href="./saffron-brew"')],
  ['Gallery 2.gif', v.includes('/media/works/viloria-perfumes/gallery/2.gif')],
  ['Gallery 7.mp4', v.includes('/media/works/viloria-perfumes/gallery/7.mp4')],
  ['Gallery 38.webp', v.includes('/media/works/viloria-perfumes/gallery/38.webp')]
];

console.log('=== VILORIA CASE STUDY VERIFICATION ===');
let allPassed = true;
for (const [name, passed] of checks) {
  console.log(`${passed ? '✓' : '✗'} ${name}: ${passed}`);
  if (!passed) allPassed = false;
}

const idx = fs.readFileSync('index.html', 'utf-8');
const idxChecks = [
  ['Index Card #1 Link', idx.includes('href="./works/viloria-perfumes"')],
  ['Index Card #1 Title', idx.includes('>VILORIA PERFUMES</h3>')],
  ['Index Card #1 Cover', idx.includes('/media/works/viloria-perfumes/viloria-cover.jpg')],
  ['Index Brands Worked With', idx.includes('/works/viloria-perfumes') && idx.includes('VILORIA PERFUMES')],
  ['Index Showcase Visual', idx.includes('/media/works/viloria-perfumes/viloria-cover.webp')]
];

console.log('\n=== INDEX.HTML VERIFICATION ===');
for (const [name, passed] of idxChecks) {
  console.log(`${passed ? '✓' : '✗'} ${name}: ${passed}`);
  if (!passed) allPassed = false;
}

const wrk = fs.readFileSync('works.html', 'utf-8');
const wrkChecks = [
  ['Works Card #1 Link', wrk.includes('href="./works/viloria-perfumes"')],
  ['Works Card #1 Title', wrk.includes('>VILORIA PERFUMES</h3>')],
  ['Works Card #1 Cover', wrk.includes('/media/works/viloria-perfumes/viloria-cover.jpg')],
  ['Works JSON-LD', wrk.includes('/works/viloria-perfumes') && wrk.includes('VILORIA PERFUMES | Full Brand Identity')]
];

console.log('\n=== WORKS.HTML VERIFICATION ===');
for (const [name, passed] of wrkChecks) {
  console.log(`${passed ? '✓' : '✗'} ${name}: ${passed}`);
  if (!passed) allPassed = false;
}

console.log('\nOVERALL RESULT:', allPassed ? 'ALL CHECKS PASSED PERFECTLY!' : 'SOME CHECKS FAILED!');
