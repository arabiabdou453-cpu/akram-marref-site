const fs = require('fs');
const path = require('path');

console.log('=== Step 2: Updating index.html ===');
let indexHtml = fs.readFileSync('index.html', 'utf-8');

// Replace card #1 links and text
indexHtml = indexHtml.replaceAll('./works/saffron-brew', './works/viloria-perfumes');
indexHtml = indexHtml.replaceAll('/works/saffron-brew', '/works/viloria-perfumes');

// Replace card images and titles
indexHtml = indexHtml.replaceAll('/media/works/saffron-brew/saffron-cover.jpg 1638w', '/media/works/viloria-perfumes/viloria-cover.jpg 2048w');
indexHtml = indexHtml.replaceAll('/media/works/saffron-brew/saffron-cover.jpg', '/media/works/viloria-perfumes/viloria-cover.jpg');
indexHtml = indexHtml.replaceAll('/media/works/saffron-brew/saffron-hover-cover.jpg 1638w', '/media/works/viloria-perfumes/viloria-cover-hover.jpg 2048w');
indexHtml = indexHtml.replaceAll('/media/works/saffron-brew/saffron-hover-cover.jpg', '/media/works/viloria-perfumes/viloria-cover-hover.jpg');
indexHtml = indexHtml.replaceAll('/media/works/saffron-brew/saffron-hover-cover.png', '/media/works/viloria-perfumes/viloria-cover-hover.png');

// Card headings: in index.html card details
indexHtml = indexHtml.replaceAll(
  '<h3 class="framer-text framer-styles-preset-1w291dy" data-styles-preset="jYhVwWhYD">SAFFRON</h3>',
  '<h3 class="framer-text framer-styles-preset-1w291dy" data-styles-preset="jYhVwWhYD">VILORIA PERFUMES</h3>'
);

// Brands I've Worked With heading
indexHtml = indexHtml.replaceAll(
  '<h3 class="framer-text framer-styles-preset-1e1bj8v" data-styles-preset="gG1LIDejm" style="--framer-text-color:var(--extracted-a0htzi, var(--token-3f43f58c-0863-4b51-8b01-f15c26b533d9, #e4eef0))">SAFFRON</h3>',
  '<h3 class="framer-text framer-styles-preset-1e1bj8v" data-styles-preset="gG1LIDejm" style="--framer-text-color:var(--extracted-a0htzi, var(--token-3f43f58c-0863-4b51-8b01-f15c26b533d9, #e4eef0))">VILORIA PERFUMES</h3>'
);

// Top showcase visual
indexHtml = indexHtml.replaceAll('/media/works/saffron-brew/cover-1024.e1e249e4.webp', '/media/works/viloria-perfumes/viloria-cover-1024.webp');
indexHtml = indexHtml.replaceAll('/media/works/saffron-brew/cover-2048.e5f33ef4.webp', '/media/works/viloria-perfumes/viloria-cover-2048.webp');
indexHtml = indexHtml.replaceAll('/media/works/saffron-brew/cover.d6d38ec6.webp', '/media/works/viloria-perfumes/viloria-cover.webp');
indexHtml = indexHtml.replaceAll('alt="SAFFRON"', 'alt="VILORIA PERFUMES"');

// Handover data in index.html
indexHtml = indexHtml.replaceAll('"saffron-brew"', '"viloria-perfumes"');
indexHtml = indexHtml.replaceAll('"SAFFRON"', '"VILORIA PERFUMES"');

fs.writeFileSync('index.html', indexHtml, 'utf-8');
console.log('✓ index.html successfully updated');

console.log('=== Step 3: Updating works.html ===');
let worksHtml = fs.readFileSync('works.html', 'utf-8');

worksHtml = worksHtml.replaceAll('./works/saffron-brew', './works/viloria-perfumes');
worksHtml = worksHtml.replaceAll('/works/saffron-brew', '/works/viloria-perfumes');

worksHtml = worksHtml.replaceAll('/media/works/saffron-brew/saffron-cover.jpg 1638w', '/media/works/viloria-perfumes/viloria-cover.jpg 2048w');
worksHtml = worksHtml.replaceAll('/media/works/saffron-brew/saffron-cover.jpg', '/media/works/viloria-perfumes/viloria-cover.jpg');
worksHtml = worksHtml.replaceAll('/media/works/saffron-brew/saffron-hover-cover.jpg 1638w', '/media/works/viloria-perfumes/viloria-cover-hover.jpg 2048w');
worksHtml = worksHtml.replaceAll('/media/works/saffron-brew/saffron-hover-cover.jpg', '/media/works/viloria-perfumes/viloria-cover-hover.jpg');
worksHtml = worksHtml.replaceAll('/media/works/saffron-brew/saffron-hover-cover.png', '/media/works/viloria-perfumes/viloria-cover-hover.png');

worksHtml = worksHtml.replaceAll(
  '<h3 class="framer-text framer-styles-preset-1w291dy" data-styles-preset="jYhVwWhYD">SAFFRON</h3>',
  '<h3 class="framer-text framer-styles-preset-1w291dy" data-styles-preset="jYhVwWhYD">VILORIA PERFUMES</h3>'
);

worksHtml = worksHtml.replaceAll('SAFFRON Brew | Full Brand Identity', 'VILORIA PERFUMES | Full Brand Identity');
worksHtml = worksHtml.replaceAll('alt="SAFFRON"', 'alt="VILORIA PERFUMES"');

// Handover data in works.html
worksHtml = worksHtml.replaceAll('"saffron-brew"', '"viloria-perfumes"');
worksHtml = worksHtml.replaceAll('"SAFFRON"', '"VILORIA PERFUMES"');

fs.writeFileSync('works.html', worksHtml, 'utf-8');
console.log('✓ works.html successfully updated');

console.log('=== Step 4: Updating public/_framer bundles ===');

// 1. 3sBZwnk bundle (Homepage component)
const bundlePath1 = 'public/_framer/49d1839e6f/3sBZwnkAKzAgWC8v0ymSJ7KiBq4wPPpOE_d8Y87xR9s.DiYhvrvI.mjs';
if (fs.existsSync(bundlePath1)) {
  let b1 = fs.readFileSync(bundlePath1, 'utf-8');
  b1 = b1.replaceAll('/works/saffron-brew', '/works/viloria-perfumes');
  b1 = b1.replaceAll('`SAFFRON`', '`VILORIA PERFUMES`');
  b1 = b1.replaceAll('/media/works/saffron-brew/cover-1024.e1e249e4.webp', '/media/works/viloria-perfumes/viloria-cover-1024.webp');
  b1 = b1.replaceAll('/media/works/saffron-brew/cover-2048.e5f33ef4.webp', '/media/works/viloria-perfumes/viloria-cover-2048.webp');
  b1 = b1.replaceAll('/media/works/saffron-brew/cover.d6d38ec6.webp', '/media/works/viloria-perfumes/viloria-cover.webp');
  fs.writeFileSync(bundlePath1, b1, 'utf-8');
  console.log('✓ 3sBZwnk bundle updated');
}

// 2. M3P2wq2pB bundle (Hover shader) in 49d1839e6f and 07eebbe483
const m3pPaths = [
  'public/_framer/49d1839e6f/M3P2wq2pB.BuR8V6rb.mjs',
  'public/_framer/07eebbe483/M3P2wq2pB.BuR8V6rb.mjs'
];
for (const mp of m3pPaths) {
  if (fs.existsSync(mp)) {
    let mb = fs.readFileSync(mp, 'utf-8');
    if (!mb.includes('viloria-perfumes')) {
      const target = 'includes("1.c94b0005"))||t?.src&&(t.src.includes("saffron")||t.src.includes("cover-1024")||t.src.includes("cover.d6d38ec6")))?`/media/works/saffron-brew/saffron-hover-cover.png`:';
      const replacement = 'includes("1.c94b0005"))||t?.src&&(t.src.includes("saffron")||t.src.includes("cover-1024")||t.src.includes("cover.d6d38ec6")))?`/media/works/saffron-brew/saffron-hover-cover.png`:(n?.src&&(n.src.includes("viloria")||n.src.includes("viloria-cover"))||t?.src&&(t.src.includes("viloria")||t.src.includes("viloria-cover")))?`/media/works/viloria-perfumes/viloria-cover-hover.png`:';
      mb = mb.replace(target, replacement);
      fs.writeFileSync(mp, mb, 'utf-8');
      console.log('✓ Hover shader updated in', mp);
    }
  }
}

// 3. asVp159yxm bundle (CMS query interceptor)
const asVpPath = 'public/_framer/49d1839e6f/asVp159yxmBC7CLWffm2UzduwxU4jpEWKZS7XdyxGEI.3AGBmqag.mjs';
if (fs.existsSync(asVpPath)) {
  let asVp = fs.readFileSync(asVpPath, 'utf-8');
  if (!asVp.includes('viloria-perfumes')) {
    const target = 'if(item?.id==="2aghsjbCf"';
    const viloriaPatch = 'if(item?.id==="dgXhzIuU6"||item?.jf9cHyJea==="saffron-brew"||item?.jf9cHyJea==="viloria-perfumes"||(typeof item?.lvvRv1y9U==="string"&&item.lvvRv1y9U.toLowerCase().includes("saffron"))){try{if(item?.dK7pUTT1e?.props?.children?.props)item.dK7pUTT1e.props.children.props.children="Full Brand Identity";}catch(e){}if(item.j4fQjGAz1){item.j4fQjGAz1.src="/media/works/viloria-perfumes/viloria-cover.webp";item.j4fQjGAz1.srcSet="/media/works/viloria-perfumes/viloria-cover.webp";item.j4fQjGAz1.alt="VILORIA PERFUMES";}if(item.wjhxaKF0h){item.wjhxaKF0h.src="/media/works/viloria-perfumes/viloria-cover-hover.png";item.wjhxaKF0h.srcSet="/media/works/viloria-perfumes/viloria-cover-hover.png";item.wjhxaKF0h.alt="VILORIA PERFUMES";}return{...item,id:"dgXhzIuU6",jf9cHyJea:"viloria-perfumes",lvvRv1y9U:"VILORIA PERFUMES"};}' + target;
    asVp = asVp.replace(target, viloriaPatch);
    fs.writeFileSync(asVpPath, asVp, 'utf-8');
    console.log('✓ CMS query interceptor updated with Viloria Perfumes');
  }
}

console.log('=== Step 5: Updating _redirects, sitemap, llms.txt ===');
let redirects = fs.readFileSync('_redirects', 'utf-8');
if (!redirects.includes('/works/viloria-perfumes')) {
  redirects = '/works/viloria-perfumes  /works/viloria-perfumes.html  200\n/works/saffron-brew  /works/viloria-perfumes  301\n' + redirects;
  fs.writeFileSync('_redirects', redirects, 'utf-8');
  console.log('✓ _redirects updated');
}

const sitemapPaths = ['sitemap.xml', 'public/sitemap.xml'];
for (const sp of sitemapPaths) {
  if (fs.existsSync(sp)) {
    let sm = fs.readFileSync(sp, 'utf-8');
    if (!sm.includes('/works/viloria-perfumes')) {
      sm = sm.replace(
        '</urlset>',
        '  <url>\n    <loc>https://akram-marref-site.vercel.app/works/viloria-perfumes</loc>\n    <lastmod>' + new Date().toISOString().split('T')[0] + '</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.9</priority>\n  </url>\n</urlset>'
      );
      fs.writeFileSync(sp, sm, 'utf-8');
      console.log('✓', sp, 'updated');
    }
  }
}

const llmsPaths = ['llms.txt', 'public/llms.txt'];
for (const lp of llmsPaths) {
  if (fs.existsSync(lp)) {
    let lt = fs.readFileSync(lp, 'utf-8');
    if (!lt.includes('viloria-perfumes')) {
      lt = lt.replace(
        '## Works',
        '## Works\n- [VILORIA PERFUMES](https://akram-marref-site.vercel.app/works/viloria-perfumes): Luxury fragrance house brand identity and product design.'
      );
      fs.writeFileSync(lp, lt, 'utf-8');
      console.log('✓', lp, 'updated');
    }
  }
}

console.log('=== ALL UPDATES COMPLETED SUCCESSFULLY ===');
