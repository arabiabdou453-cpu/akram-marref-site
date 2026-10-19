const fs = require('fs');

const saffron = fs.readFileSync('works/saffron-brew.html', 'utf8');
const arc = fs.readFileSync('works/al-rayyan-castle.html', 'utf8');
const viloria = fs.readFileSync('works/viloria-perfumes.html', 'utf8');

function getOverview(html, name) {
  const oStart = html.indexOf('data-framer-name="overview - wrapper"');
  if (oStart === -1) return `${name}: overview - wrapper NOT FOUND`;
  const oEnd = html.indexOf('</section>', oStart);
  return `=== ${name} OVERVIEW ===\n` + html.substring(oStart, Math.min(oStart + 2500, oEnd));
}

console.log(getOverview(saffron, 'SAFFRON'));
console.log(getOverview(arc, 'ARC'));
console.log(getOverview(viloria, 'VILORIA'));
