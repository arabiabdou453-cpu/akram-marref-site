const fs = require('fs');

const saffron = fs.readFileSync('works/saffron-brew.html', 'utf8');
const arc = fs.readFileSync('works/al-rayyan-castle.html', 'utf8');
const viloria = fs.readFileSync('works/viloria-perfumes.html', 'utf8');

function extractTypo(html, name) {
  const start = html.indexOf('id="project-overview-typography-fix"');
  if (start === -1) return `${name}: none`;
  const end = html.indexOf('</style>', start);
  return `=== ${name} ===\n` + html.substring(start, end + 8);
}

console.log(extractTypo(saffron, 'SAFFRON'));
console.log(extractTypo(arc, 'ARC'));
console.log(extractTypo(viloria, 'VILORIA'));
