const fs = require('fs');

function inspectCards(filePath) {
  if (!fs.existsSync(filePath)) return;
  const html = fs.readFileSync(filePath, 'utf-8');
  console.log(`=== CARDS IN ${filePath} ===`);
  const regex = /<a class="framer-[^"]+" href="(\.\/works\/[^"]+|\/works\/[^"]+)">([\s\S]*?)<\/a>/g;
  let m;
  let i = 1;
  while ((m = regex.exec(html)) !== null) {
    const href = m[1];
    const block = m[2];
    const titleMatch = block.match(/<h3[^>]*>(.*?)<\/h3>/);
    const serviceMatch = block.match(/<p[^>]*>(.*?)<\/p>/);
    const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';
    const service = serviceMatch ? serviceMatch[1].replace(/<[^>]+>/g, '').trim() : '';
    if (title) {
      console.log(`${i++}. [${title}] (${service}) -> ${href}`);
    }
  }
}

inspectCards('index.html');
inspectCards('works.html');
