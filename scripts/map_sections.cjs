const fs = require('fs');

['works/al-rayyan-castle.html', 'works/saffron-brew.html', 'works/viloria-perfumes.html'].forEach(p => {
  const c = fs.readFileSync(p, 'utf8');
  console.log(`=== SECTIONS IN ${p} ===`);
  const regex = /<section[^>]*data-framer-name="([^"]+)"[^>]*>/g;
  let m;
  while ((m = regex.exec(c)) !== null) {
    console.log(`  Section "${m[1]}" @ index ${m.index}`);
  }
});
