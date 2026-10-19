const fs = require('fs');

const viloria = fs.readFileSync('works/viloria-perfumes.html', 'utf8');
const arc = fs.readFileSync('works/al-rayyan-castle.html', 'utf8');

function getTable(html, name) {
  const start = html.indexOf('data-framer-name="details"');
  if (start === -1) return `${name}: no details`;
  const end = html.indexOf('</section>', start);
  return `=== ${name} TABLE ===\n` + html.substring(start, start + 3000);
}

console.log(getTable(viloria, 'VILORIA'));
console.log(getTable(arc, 'ARC'));
