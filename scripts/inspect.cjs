const fs = require('fs');

const viloria = fs.readFileSync('works/viloria-perfumes.html', 'utf8');
const arc = fs.readFileSync('works/al-rayyan-castle.html', 'utf8');
const saffron = fs.readFileSync('works/saffron-brew.html', 'utf8');

console.log('=== VILORIA HERO ===');
const vIdx = viloria.indexOf('data-framer-name="image holder"');
console.log(viloria.substring(vIdx, vIdx + 1200));

console.log('=== SAFFRON HERO ===');
const sIdx = saffron.indexOf('data-framer-name="image holder"');
console.log(saffron.substring(sIdx, sIdx + 1200));

console.log('=== ARC HERO ===');
const aIdx = arc.indexOf('data-framer-name="image holder"');
console.log(arc.substring(aIdx, aIdx + 1200));
