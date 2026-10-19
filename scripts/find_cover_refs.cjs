const fs = require('fs');

const dir = 'public/_framer/49d1839e6f';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.mjs'));

for (const file of files) {
  const content = fs.readFileSync(`${dir}/${file}`, 'utf8');
  if (content.includes('saffron-cover') || content.includes('arc-cover') || content.includes('viloria-cover')) {
    console.log(`File: ${file}`);
    const matches = content.match(/.{0,50}(?:viloria-cover|arc-cover|saffron-cover).{0,50}/g);
    console.log(matches.slice(0, 5));
  }
}
