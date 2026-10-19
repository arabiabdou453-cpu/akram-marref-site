const fs = require('fs');

// Check index.html for cards
const index = fs.readFileSync('index.html', 'utf8');

// In index.html, find all card links
const regex = /<a[^>]+href="(?:\.\/|\/)?works\/([^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
let match;
while ((match = regex.exec(index)) !== null) {
  const slug = match[1];
  const content = match[2];
  const imgs = Array.from(content.matchAll(/<img[^>]+src="([^">]+)"/g)).map(m => m[1]);
  console.log(`Card: ${slug} -> imgs:`, imgs);
}
