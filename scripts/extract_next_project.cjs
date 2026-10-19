const fs = require('fs');

const saffron = fs.readFileSync('works/saffron-brew.html', 'utf8');
const gIdx = saffron.indexOf('akram-gallery');
// Find where gallery ends. Gallery has many items, let's find the closing of the gallery container.
const nextProjectTagIdx = saffron.indexOf('Next Project', gIdx);
const containerBeforeNext = saffron.lastIndexOf('<div class="framer-', nextProjectTagIdx);
console.log('Distance between gallery and next project:', nextProjectTagIdx - gIdx);
console.log('Snippet around Next Project in Saffron:');
console.log(saffron.substring(nextProjectTagIdx - 300, nextProjectTagIdx + 500));
