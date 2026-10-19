const fs = require('fs');

const saffron = fs.readFileSync('works/saffron-brew.html', 'utf8');
const vIdx = saffron.indexOf('<video');
console.log('Video in Saffron Brew: index =', vIdx);
if (vIdx !== -1) {
  console.log(saffron.substring(vIdx - 500, vIdx + 800));
} else {
  console.log('No <video tag in saffron-brew.html');
  const galleryIdx = saffron.indexOf('data-framer-name="img wrapper"');
  console.log(saffron.substring(galleryIdx, galleryIdx + 1500));
}
