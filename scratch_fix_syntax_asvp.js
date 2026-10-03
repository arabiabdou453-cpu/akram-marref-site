import fs from 'fs';

const filePath = 'public/_framer/49d1839e6f/asVp159yxmBC7CLWffm2UzduwxU4jpEWKZS7XdyxGEI.3AGBmqag.mjs';
let js = fs.readFileSync(filePath, 'utf8');

// Replace })()})() with })()
if (js.includes('})()})()')) {
  js = js.replace('})()})()', '})()');
  fs.writeFileSync(filePath, js, 'utf8');
  console.log('Fixed extra })() in asVp');
} else {
  console.log('Pattern })()})() not found');
}
