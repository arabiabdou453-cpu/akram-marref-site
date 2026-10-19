const fs = require('fs');

console.log('--- INDEX CARDS ---');
const index = fs.readFileSync('index.html', 'utf8');
['viloria-perfumes', 'saffron-brew', 'al-rayyan-castle'].forEach(slug => {
  const needle = './works/' + slug;
  const idx = index.indexOf(needle);
  if (idx !== -1) {
    const cardStart = index.lastIndexOf('<a ', idx);
    const cardEnd = index.indexOf('</a>', idx);
    console.log(`=== INDEX CARD: ${slug} ===`);
    console.log(index.substring(cardStart, cardEnd + 4));
  } else {
    console.log(`=== INDEX CARD: ${slug} NOT FOUND ===`);
  }
});

console.log('\n--- WORKS CARDS ---');
const works = fs.readFileSync('works.html', 'utf8');
['viloria-perfumes', 'saffron-brew', 'al-rayyan-castle'].forEach(slug => {
  const needle = './works/' + slug;
  const idx = works.indexOf(needle);
  if (idx !== -1) {
    const cardStart = works.lastIndexOf('<div class="framer-z54et1"', idx);
    const cardEnd = works.indexOf('</a>', idx);
    console.log(`=== WORKS CARD: ${slug} ===`);
    console.log(works.substring(cardStart, cardEnd + 4));
  } else {
    console.log(`=== WORKS CARD: ${slug} NOT FOUND ===`);
  }
});
