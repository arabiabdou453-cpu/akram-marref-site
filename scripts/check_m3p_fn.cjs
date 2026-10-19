const fs = require('fs');

const content = fs.readFileSync('public/_framer/49d1839e6f/M3P2wq2pB.BuR8V6rb.mjs', 'utf8');
const idx = content.indexOf('viloria-cover');
console.log(content.substring(idx - 1500, idx));
