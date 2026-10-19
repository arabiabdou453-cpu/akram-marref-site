const fs = require('fs');

const viloria = fs.readFileSync('works/viloria-perfumes.html', 'utf8');
const arc = fs.readFileSync('works/al-rayyan-castle.html', 'utf8');

function getCustomStyles(html, name) {
  const matches = html.match(/<style[^>]*>([\s\S]*?)<\/style>/g);
  return `=== ${name} STYLES (${matches ? matches.length : 0}) ===\n` + 
    (matches ? matches.map(m => m.slice(0, 500)).join('\n---\n') : '');
}

console.log(getCustomStyles(viloria, 'VILORIA'));
console.log(getCustomStyles(arc, 'ARC'));
