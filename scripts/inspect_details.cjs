const fs = require('fs');

const saffron = fs.readFileSync('works/saffron-brew.html', 'utf8');
const arc = fs.readFileSync('works/al-rayyan-castle.html', 'utf8');
const viloria = fs.readFileSync('works/viloria-perfumes.html', 'utf8');

console.log('=== SAFFRON GALLERY START ===');
const sGallery = saffron.indexOf('akram-gallery');
const sGalleryDiv = saffron.indexOf('<div class="framer-ycym2p', sGallery);
console.log(saffron.substring(sGalleryDiv, sGalleryDiv + 2500));

console.log('=== VILORIA GALLERY START ===');
const vGallery = viloria.indexOf('akram-gallery');
const vGalleryDiv = viloria.indexOf('<div class="framer-ycym2p', vGallery);
console.log(viloria.substring(vGalleryDiv, vGalleryDiv + 2500));
