const cp = require('child_process');
const html = cp.execSync('git show f702cf6~1:index.html').toString();
const matches = Array.from(html.matchAll(/href="(?:\.\/|\/)?works\/([^"]+)"/g)).map(m => m[1]);
console.log('Project links in index.html before f702cf6:');
console.log([...new Set(matches)]);
