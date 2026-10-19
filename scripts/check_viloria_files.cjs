const fs = require('fs');

const dir = 'public/media/works/viloria-perfumes';
const files = fs.readdirSync(dir);
console.log('Files in viloria-perfumes dir:');
for (const f of files) {
  const p = `${dir}/${f}`;
  const stat = fs.statSync(p);
  if (stat.isFile()) {
    console.log(`- ${f}: ${stat.size} bytes`);
  }
}
