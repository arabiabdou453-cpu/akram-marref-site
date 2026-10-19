const fs = require('fs');

['index.html', 'works.html'].forEach(page => {
  const c = fs.readFileSync(page, 'utf8');
  console.log(page, 'contains id="stage":', c.includes('id="stage"'));
  
  // Find where stage is referenced
  let pos = 0;
  while ((pos = c.indexOf('stage', pos)) !== -1) {
    console.log(`[${page} @ ${pos}]:`, c.substring(Math.max(0, pos - 60), Math.min(c.length, pos + 100)));
    pos += 5;
    if (pos > 2000000) break;
  }
});
