const fs = require('fs');

['works/al-rayyan-castle.html', 'works/saffron-brew.html', 'works/viloria-perfumes.html'].forEach(p => {
  const c = fs.readFileSync(p, 'utf8');
  const contentSectionIdx = c.indexOf('data-framer-name="Section - Content"');
  const galleryIdx = c.indexOf('akram-gallery', contentSectionIdx);
  const endSection = c.indexOf('</section>', galleryIdx);
  console.log(`=== ${p} ===`);
  console.log('After gallery in Section - Content:');
  console.log(c.substring(endSection - 500, endSection + 10));
});
