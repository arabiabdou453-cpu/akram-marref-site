import fs from 'fs';

const js = fs.readFileSync('public/_framer/49d1839e6f/asVp159yxmBC7CLWffm2UzduwxU4jpEWKZS7XdyxGEI.3AGBmqag.mjs', 'utf8');

try {
  new Function(js);
  console.log('Valid JS!');
} catch (e) {
  console.error('Syntax error:', e.message);
  // find around patch
  const patchStart = js.indexOf('(()=>{let isS=');
  console.log('Around patchStart:\n', js.slice(patchStart, patchStart + 300));
  const patchEnd = js.indexOf('})()', patchStart);
  console.log('Around patchEnd:\n', js.slice(patchEnd - 100, patchEnd + 50));
}
