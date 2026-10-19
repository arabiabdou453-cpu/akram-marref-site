const fs = require('fs');

const content = fs.readFileSync('public/_framer/49d1839e6f/M3P2wq2pB.BuR8V6rb.mjs', 'utf8');
const idx = content.indexOf('imageBase:Zc(_)');
// find Rc definition
const rcIdx = content.lastIndexOf('function', idx - 100);
console.log(content.substring(rcIdx - 500, rcIdx + 400));
