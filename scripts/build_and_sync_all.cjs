const fs = require('fs');
const path = require('path');

console.log('=== Step 1: Building works/viloria-perfumes.html ===');
const arcHtml = fs.readFileSync('works/al-rayyan-castle.html', 'utf-8');
const manifest = JSON.parse(fs.readFileSync('public/media/works/viloria-perfumes/manifest.json', 'utf-8'));

let viloriaHtml = arcHtml;

// 1. Title, SEO, Canonical, Social Meta
viloriaHtml = viloriaHtml.replaceAll('AL RAYYAN CASTLE - Akram Marref', 'VILORIA PERFUMES - Akram Marref');
viloriaHtml = viloriaHtml.replaceAll('AL RAYYAN CASTLE | Full Brand Identity', 'VILORIA PERFUMES | Full Brand Identity');
viloriaHtml = viloriaHtml.replaceAll('Architectural Precision At Every Stage.', 'Born in Red, Crowned with Gold');
viloriaHtml = viloriaHtml.replaceAll('Architectural Precision\\nAt Every Stage.', 'Born in Red, Crowned with Gold');
viloriaHtml = viloriaHtml.replaceAll('Architectural Precision\nAt Every Stage.', 'Born in Red, Crowned with Gold');
viloriaHtml = viloriaHtml.replaceAll('/media/works/al-rayyan-castle/arc-cover.jpg', '/media/works/viloria-perfumes/viloria-cover.jpg');
viloriaHtml = viloriaHtml.replaceAll('/media/works/al-rayyan-castle/hero.webp', '/media/works/viloria-perfumes/hero.webp');
viloriaHtml = viloriaHtml.replaceAll('/works/al-rayyan-castle', '/works/viloria-perfumes');
viloriaHtml = viloriaHtml.replaceAll('al-rayyan-castle', 'viloria-perfumes');

// 2. Headings
viloriaHtml = viloriaHtml.replaceAll(
  '<h1 class="framer-text framer-styles-preset-x4zbk" data-styles-preset="Ywk0qkDMj">AL RAYYAN CASTLE</h1>',
  '<h1 class="framer-text framer-styles-preset-x4zbk" data-styles-preset="Ywk0qkDMj">VILORIA PERFUMES</h1>'
);

// 3. Hero image holder
const heroHolderStart = viloriaHtml.indexOf('data-framer-name="image holder"');
const heroHolderEnd = viloriaHtml.indexOf('</section>', heroHolderStart);
if (heroHolderStart !== -1 && heroHolderEnd !== -1) {
  const newHeroHolder = `data-framer-name="image holder"><div class="ssr-variant"><div class="framer-cpcazi" data-border="true"><div style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true"><img decoding="async" fetchpriority="high" width="3840" height="2160" sizes="(min-width: 1200px) max(min(100vw - 80px, 1600px) - 40px, 1px), (min-width: 810px) and (max-width: 1199.98px) max(min(100vw - 80px, 1600px) - 40px, 1px), (max-width: 809.98px) max(min(100vw - 40px, 1600px) - 40px, 1px)" srcset="/media/works/viloria-perfumes/hero-1024.webp 1024w, /media/works/viloria-perfumes/hero-2048.webp 2048w, /media/works/viloria-perfumes/hero.webp 3840w" src="/media/works/viloria-perfumes/hero.webp" alt="VILORIA PERFUMES Hero" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:cover"></div></div></div></div>`;
  viloriaHtml = viloriaHtml.slice(0, heroHolderStart) + newHeroHolder + viloriaHtml.slice(heroHolderEnd);
}

// 4. Overview Paragraphs
const oldOverviewP1 = "The Al Rayyan Castle brand identity was created to embody architectural excellence through precision, craftsmanship, and refined luxury. Rooted in the principles of strength, structure, and timeless design, the project translates the brand’s core values into a visual language that feels both sophisticated and enduring.";
const oldOverviewP2 = "Blending contemporary aesthetics with subtle regional influence, the identity reflects a seamless harmony between functionality and elegance. Every detail was carefully considered to express prestige, durability, and a commitment to the highest standards of quality.";
const oldOverviewP3 = "The final branding system presents Al Rayyan Castle as a distinguished and confident brand one that reflects not only visual refinement, but also the integrity and excellence behind every project it represents.";

const newOverviewP1 = "Viloria Perfumes is a luxury fragrance house built around the belief that perfume should be more than a scent. Each fragrance is created as a character, an object of desire, and a collectible piece of art. The brand combines Victorian-inspired elegance, dramatic storytelling, sculptural craftsmanship, and contemporary luxury to create a distinctive world where every perfume has its own personality and visual identity.";
const newOverviewP2 = "Viloria was created to move beyond the conventional perfume experience, where packaging simply supports the fragrance. Here, the entire object becomes part of the experience. From sculptural animal caps and deep red bottles to black packaging, wax seals, jewelry-inspired details, and cinematic imagery, every touchpoint is designed to communicate rarity, mystery, craftsmanship, and a strong sense of ownership.";
const newOverviewP3 = "At its core, Viloria transforms fragrance into a personal emblem of character. The animal associated with each perfume is not simply decorative; it represents a different instinct, attitude, or personality that the wearer can connect with. In this way, Viloria creates collectible fragrances for people who want their scent to express who they are, not simply how they smell.";

viloriaHtml = viloriaHtml.replaceAll(oldOverviewP1, newOverviewP1);
viloriaHtml = viloriaHtml.replaceAll(oldOverviewP2, newOverviewP2);
viloriaHtml = viloriaHtml.replaceAll(oldOverviewP3, newOverviewP3);

// 5. Metadata table
viloriaHtml = viloriaHtml.replaceAll('>AL RAYYAN CASTLE</p>', '>VILORIA PERFUMES</p>');
viloriaHtml = viloriaHtml.replaceAll('>TRADING &amp; CONSTRUCTION</p>', '>COSMETICS &amp; BEAUTY</p>');
viloriaHtml = viloriaHtml.replaceAll('>TRADING & CONSTRUCTION</p>', '>COSMETICS &amp; BEAUTY</p>');
viloriaHtml = viloriaHtml.replaceAll('TRADING &amp; CONSTRUCTION', 'COSMETICS &amp; BEAUTY');
viloriaHtml = viloriaHtml.replaceAll('TRADING & CONSTRUCTION', 'COSMETICS & BEAUTY');
viloriaHtml = viloriaHtml.replaceAll('>FULL BRAND IDENTITY / WEBSITE DESIGN</p>', '>FULL BRAND IDENTITY / PRODUCT DESIGN</p>');
viloriaHtml = viloriaHtml.replaceAll('FULL BRAND IDENTITY / WEBSITE DESIGN', 'FULL BRAND IDENTITY / PRODUCT DESIGN');
viloriaHtml = viloriaHtml.replaceAll(
  'https://www.behance.net/gallery/246600219/AL-RAYYAN-CASTLE-Construction-Brand-Identity',
  'https://www.behance.net/gallery/256986051/VILORIA-PERFUMES-Full-Brand-Identity'
);

// 6. Gallery items
let galleryHtml = '';
for (const item of manifest) {
  const isH = !item.isPortrait;
  const colClass = isH ? 'framer-1hve4up akram-h' : 'framer-1hve4up';

  let mediaTag = '';
  if (item.type === 'gif') {
    mediaTag = `<img decoding="async" loading="lazy" width="${item.width}" height="${item.height}" src="/media/works/viloria-perfumes/gallery/${item.file}" alt="VILORIA PERFUMES Slide ${item.id}" style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover">`;
  } else if (item.type === 'video') {
    mediaTag = `<video src="/media/works/viloria-perfumes/gallery/${item.file}" autoplay loop muted playsinline style="width:100%;height:100%;object-fit:cover;display:block"></video>`;
  } else {
    const srcset = `/media/works/viloria-perfumes/gallery/${item.id}-1024.webp 1024w, /media/works/viloria-perfumes/gallery/${item.id}-2048.webp 2048w, /media/works/viloria-perfumes/gallery/${item.file} ${item.width}w`;
    const sizes = item.isPortrait
      ? `(min-width: 1200px) calc(max(max(min(100vw - 80px, 1600px) / 2, 50px), 50px) - 20px), (min-width: 810px) calc(min(100vw - 80px, 1600px) / 2 - 20px), calc(100vw - 40px)`
      : `(min-width: 1200px) max(min(100vw - 80px, 1600px) - 40px, 1px), (min-width: 810px) calc(min(100vw - 80px, 1600px) - 40px), calc(100vw - 40px)`;

    mediaTag = `<img decoding="async" loading="lazy" width="${item.width}" height="${item.height}" sizes="${sizes}" srcset="${srcset}" src="/media/works/viloria-perfumes/gallery/${item.file}" alt="VILORIA PERFUMES Slide ${item.id}" style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover">`;
  }

  galleryHtml += `<div class="${colClass}" data-border="true" data-framer-name="img ${item.id}"><div class="framer-1keextd-container"><div class="framer-9tRWd framer-504uzb framer-v-504uzb" data-framer-name="4 corners" style="height:100%;width:100%"><div class="framer-26hnv framer-zh73zt"></div><div class="framer-26hnv framer-taop0b"></div><div class="framer-26hnv framer-cia90e"></div><div class="framer-26hnv framer-1traeox"></div></div></div><div class="framer-1q1633g" data-border="true" data-framer-name="img" style="aspect-ratio:${item.width}/${item.height};position:relative;overflow:hidden"><div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">${mediaTag}</div></div></div>`;
}

// Exact gallery insertion boundaries
const gPrefix = 'class="framer-ycym2p akram-gallery" data-framer-name="img wrapper">';
const gStart = viloriaHtml.indexOf(gPrefix);
const gEndMarker = '<div class="framer-cafykr hidden-1d6s8ho hidden-k4ktw8" data-framer-name="spacer">';
const gEnd = viloriaHtml.indexOf(gEndMarker, gStart);

if (gStart !== -1 && gEnd !== -1) {
  viloriaHtml = viloriaHtml.slice(0, gStart + gPrefix.length) + galleryHtml + '</div>' + viloriaHtml.slice(gEnd);
  console.log('✓ Successfully injected gallery with all 37 items, keeping Next Project intact!');
} else {
  console.error('ERROR: Could not find exact gallery boundaries!');
}

// Next Project section in viloria-perfumes.html -> AL RAYYAN CASTLE
// In ARC template, next project was logofolio. In Viloria, it should be AL RAYYAN CASTLE!
const nextLogofolioIdx = viloriaHtml.indexOf('href="./logofolio"');
if (nextLogofolioIdx !== -1) {
  const nextSectionStart = viloriaHtml.lastIndexOf('<div class="framer-kzd5iu">', nextLogofolioIdx);
  const nextSectionEnd = viloriaHtml.indexOf('</div></div><!--/$--></div></div></section>', nextLogofolioIdx) + '</div></div><!--/$--></div></div>'.length;
  
  const arcNextCard = `<div class="framer-kzd5iu"><!--$--><!--$--><a class="framer-qzlmkn framer-1cr9rtv" href="./al-rayyan-castle"><div class="ssr-variant hidden-k4ktw8"><div class="framer-2lheo3-container"><div class="framer-0tDgX framer-DE02y framer-ERZud framer-UaMLt framer-3WfEN framer-NWers framer-6w0Zo framer-UyFur framer-18jqj2e framer-v-18jqj2e" data-framer-name="Desktop" style="height:100%;width:100%"><div class="framer-172onnj" data-border="true" data-framer-name="image wrapper" style="--border-bottom-width:1px;--border-color:var(--token-9e92eafd-428a-4d51-91e9-bb5924bff77e, #e4eef026);--border-left-width:1px;--border-right-width:1px;--border-style:solid;--border-top-width:1px;background-color:var(--token-4dfe4133-5687-4144-846c-c2716eed3ce2, #040f11)"><div class="framer-1g8cril-container"><div class="framer-9tRWd framer-504uzb framer-v-504uzb" data-framer-name="4 corners" style="height:100%;width:100%"><div class="framer-26hnv framer-zh73zt"></div><div class="framer-26hnv framer-taop0b"></div><div class="framer-26hnv framer-cia90e"></div><div class="framer-26hnv framer-1traeox"></div></div></div><div class="framer-1ws0sbe" data-framer-name="holder" style="box-shadow:0px 0px 0px 1px var(--token-9e92eafd-428a-4d51-91e9-bb5924bff77e, #e4eef026)"><div class="framer-sdccxg-container"><!--$--><div style="width:100%;height:100%;position:relative;display:flex;align-items:center;justify-content:center;border-radius:0;overflow:clip"><figure style="width:100%;height:100%;max-width:100%;flex:0 0 auto;margin:0;padding:0;position:absolute;z-index:1"><img src="/media/works/al-rayyan-castle/arc-cover.jpg" srcset="/media/works/al-rayyan-castle/arc-cover.jpg" alt="AL RAYYAN CASTLE" draggable="false" style="width:100%;height:100%;object-fit:cover;object-position:50% 50%;margin:0;padding:0;user-select:none;pointer-events:none"></figure></div><!--/$--></div></div></div><div class="framer-1m2m390" data-framer-name="details"><div class="framer-aji1e1" data-framer-component-type="RichTextContainer" style="--framer-link-text-color:#e4eef0;--framer-link-text-decoration:underline;transform:none"><h3 class="framer-text framer-styles-preset-1w291dy" data-styles-preset="jYhVwWhYD">AL RAYYAN CASTLE</h3></div><div class="framer-1ir4mra" data-framer-component-type="RichTextContainer" style="--framer-link-text-color:#e4eef0;--framer-link-text-decoration:underline;transform:none"><p class="framer-text framer-styles-preset-1bmj8aw">Full Brand Identity</p></div></div></div></div></div></a><!--/$--></div></div>`;
  viloriaHtml = viloriaHtml.slice(0, nextSectionStart) + arcNextCard + viloriaHtml.slice(nextSectionEnd);
  console.log('✓ Successfully configured Next Project to AL RAYYAN CASTLE');
}

fs.writeFileSync('works/viloria-perfumes.html', viloriaHtml, 'utf-8');
console.log('✓ works/viloria-perfumes.html written');

console.log('=== Step 2: Updating index.html ===');
let indexHtml = fs.readFileSync('index.html', 'utf-8');

// A. First replace specific cover/hover images BEFORE replacing generic slug
indexHtml = indexHtml.replaceAll('/media/works/saffron-brew/saffron-cover.jpg 1638w', '/media/works/viloria-perfumes/viloria-cover.jpg 2048w');
indexHtml = indexHtml.replaceAll('/media/works/saffron-brew/saffron-cover.jpg', '/media/works/viloria-perfumes/viloria-cover.jpg');
indexHtml = indexHtml.replaceAll('/media/works/saffron-brew/saffron-hover-cover.jpg 1638w', '/media/works/viloria-perfumes/viloria-cover-hover.jpg 2048w');
indexHtml = indexHtml.replaceAll('/media/works/saffron-brew/saffron-hover-cover.jpg', '/media/works/viloria-perfumes/viloria-cover-hover.jpg');
indexHtml = indexHtml.replaceAll('/media/works/saffron-brew/saffron-hover-cover.png', '/media/works/viloria-perfumes/viloria-cover-hover.png');

// Showcase visual in the middle of index
indexHtml = indexHtml.replaceAll('/media/works/saffron-brew/cover-1024.e1e249e4.webp', '/media/works/viloria-perfumes/viloria-cover-1024.webp');
indexHtml = indexHtml.replaceAll('/media/works/saffron-brew/cover-2048.e5f33ef4.webp', '/media/works/viloria-perfumes/viloria-cover-2048.webp');
indexHtml = indexHtml.replaceAll('/media/works/saffron-brew/cover.d6d38ec6.webp', '/media/works/viloria-perfumes/viloria-cover.webp');
indexHtml = indexHtml.replaceAll('alt="SAFFRON"', 'alt="VILORIA PERFUMES"');

// B. Card links
indexHtml = indexHtml.replaceAll('./works/saffron-brew', './works/viloria-perfumes');
indexHtml = indexHtml.replaceAll('/works/saffron-brew', '/works/viloria-perfumes');

// C. Headings in Card and Brands section
indexHtml = indexHtml.replaceAll(
  '<h3 class="framer-text framer-styles-preset-1w291dy" data-styles-preset="jYhVwWhYD">SAFFRON</h3>',
  '<h3 class="framer-text framer-styles-preset-1w291dy" data-styles-preset="jYhVwWhYD">VILORIA PERFUMES</h3>'
);
indexHtml = indexHtml.replaceAll(
  '<h3 class="framer-text framer-styles-preset-1e1bj8v" data-styles-preset="gG1LIDejm" style="--framer-text-color:var(--extracted-a0htzi, var(--token-3f43f58c-0863-4b51-8b01-f15c26b533d9, #e4eef0))">SAFFRON</h3>',
  '<h3 class="framer-text framer-styles-preset-1e1bj8v" data-styles-preset="gG1LIDejm" style="--framer-text-color:var(--extracted-a0htzi, var(--token-3f43f58c-0863-4b51-8b01-f15c26b533d9, #e4eef0))">VILORIA PERFUMES</h3>'
);

// D. Handover data
indexHtml = indexHtml.replaceAll('"saffron-brew"', '"viloria-perfumes"');
indexHtml = indexHtml.replaceAll('"SAFFRON"', '"VILORIA PERFUMES"');

fs.writeFileSync('index.html', indexHtml, 'utf-8');
console.log('✓ index.html updated');

console.log('=== Step 3: Updating works.html ===');
let worksHtml = fs.readFileSync('works.html', 'utf-8');

// A. Replace specific media paths first
worksHtml = worksHtml.replaceAll('/media/works/saffron-brew/saffron-cover.jpg 1638w', '/media/works/viloria-perfumes/viloria-cover.jpg 2048w');
worksHtml = worksHtml.replaceAll('/media/works/saffron-brew/saffron-cover.jpg', '/media/works/viloria-perfumes/viloria-cover.jpg');
worksHtml = worksHtml.replaceAll('/media/works/saffron-brew/saffron-hover-cover.jpg 1638w', '/media/works/viloria-perfumes/viloria-cover-hover.jpg 2048w');
worksHtml = worksHtml.replaceAll('/media/works/saffron-brew/saffron-hover-cover.jpg', '/media/works/viloria-perfumes/viloria-cover-hover.jpg');
worksHtml = worksHtml.replaceAll('/media/works/saffron-brew/saffron-hover-cover.png', '/media/works/viloria-perfumes/viloria-cover-hover.png');
worksHtml = worksHtml.replaceAll('alt="SAFFRON"', 'alt="VILORIA PERFUMES"');

// B. Card links
worksHtml = worksHtml.replaceAll('./works/saffron-brew', './works/viloria-perfumes');
worksHtml = worksHtml.replaceAll('/works/saffron-brew', '/works/viloria-perfumes');

// C. Card heading
worksHtml = worksHtml.replaceAll(
  '<h3 class="framer-text framer-styles-preset-1w291dy" data-styles-preset="jYhVwWhYD">SAFFRON</h3>',
  '<h3 class="framer-text framer-styles-preset-1w291dy" data-styles-preset="jYhVwWhYD">VILORIA PERFUMES</h3>'
);

// D. JSON-LD & handover
worksHtml = worksHtml.replaceAll('SAFFRON Brew | Full Brand Identity', 'VILORIA PERFUMES | Full Brand Identity');
worksHtml = worksHtml.replaceAll('"saffron-brew"', '"viloria-perfumes"');
worksHtml = worksHtml.replaceAll('"SAFFRON"', '"VILORIA PERFUMES"');

fs.writeFileSync('works.html', worksHtml, 'utf-8');
console.log('✓ works.html updated');

console.log('=== Step 4: Updating JS Bundles ===');

// 1. 3sBZwnk bundle
const bundlePath1 = 'public/_framer/49d1839e6f/3sBZwnkAKzAgWC8v0ymSJ7KiBq4wPPpOE_d8Y87xR9s.DiYhvrvI.mjs';
if (fs.existsSync(bundlePath1)) {
  let b1 = fs.readFileSync(bundlePath1, 'utf-8');
  b1 = b1.replaceAll('/media/works/saffron-brew/cover-1024.e1e249e4.webp', '/media/works/viloria-perfumes/viloria-cover-1024.webp');
  b1 = b1.replaceAll('/media/works/saffron-brew/cover-2048.e5f33ef4.webp', '/media/works/viloria-perfumes/viloria-cover-2048.webp');
  b1 = b1.replaceAll('/media/works/saffron-brew/cover.d6d38ec6.webp', '/media/works/viloria-perfumes/viloria-cover.webp');
  b1 = b1.replaceAll('/works/saffron-brew', '/works/viloria-perfumes');
  b1 = b1.replaceAll('`SAFFRON`', '`VILORIA PERFUMES`');
  fs.writeFileSync(bundlePath1, b1, 'utf-8');
  console.log('✓ 3sBZwnk bundle updated');
}

// 2. M3P2wq2pB bundle (Hover shader)
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

console.log('=== Step 6: Building with npm run build ===');
