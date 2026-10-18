const fs = require('fs');

console.log('=== Step 1: Re-generating works/viloria-perfumes.html ===');
const arcHtml = fs.readFileSync('works/al-rayyan-castle.html', 'utf-8');
const manifest = JSON.parse(fs.readFileSync('public/media/works/viloria-perfumes/manifest.json', 'utf-8'));

let viloriaHtml = arcHtml;

// 1. Meta / SEO
viloriaHtml = viloriaHtml.replaceAll('AL RAYYAN CASTLE - Akram Marref', 'VILORIA PERFUMES - Akram Marref');
viloriaHtml = viloriaHtml.replaceAll('AL RAYYAN CASTLE | Full Brand Identity', 'VILORIA PERFUMES | Full Brand Identity');
viloriaHtml = viloriaHtml.replaceAll('Architectural Precision At Every Stage.', 'Born in Red, Crowned with Gold');
viloriaHtml = viloriaHtml.replaceAll('Architectural Precision\\nAt Every Stage.', 'Born in Red, Crowned with Gold');
viloriaHtml = viloriaHtml.replaceAll('Architectural Precision\nAt Every Stage.', 'Born in Red, Crowned with Gold');
viloriaHtml = viloriaHtml.replaceAll('/media/works/al-rayyan-castle/arc-cover.jpg', '/media/works/viloria-perfumes/viloria-cover.jpg');
viloriaHtml = viloriaHtml.replaceAll('/media/works/al-rayyan-castle/hero.webp', '/media/works/viloria-perfumes/hero.webp');
viloriaHtml = viloriaHtml.replaceAll('/works/al-rayyan-castle', '/works/viloria-perfumes');
viloriaHtml = viloriaHtml.replaceAll('al-rayyan-castle', 'viloria-perfumes');

// 2. Heading
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

// 4. Overview
const oldOverviewP1 = "The Al Rayyan Castle brand identity was created to embody architectural excellence through precision, craftsmanship, and refined luxury. Rooted in the principles of strength, structure, and timeless design, the project translates the brand’s core values into a visual language that feels both sophisticated and enduring.";
const oldOverviewP2 = "Blending contemporary aesthetics with subtle regional influence, the identity reflects a seamless harmony between functionality and elegance. Every detail was carefully considered to express prestige, durability, and a commitment to the highest standards of quality.";
const oldOverviewP3 = "The final branding system presents Al Rayyan Castle as a distinguished and confident brand one that reflects not only visual refinement, but also the integrity and excellence behind every project it represents.";

const newOverviewP1 = "Viloria Perfumes is a luxury fragrance house built around the belief that perfume should be more than a scent. Each fragrance is created as a character, an object of desire, and a collectible piece of art. The brand combines Victorian-inspired elegance, dramatic storytelling, sculptural craftsmanship, and contemporary luxury to create a distinctive world where every perfume has its own personality and visual identity.";
const newOverviewP2 = "Viloria was created to move beyond the conventional perfume experience, where packaging simply supports the fragrance. Here, the entire object becomes part of the experience. From sculptural animal caps and deep red bottles to black packaging, wax seals, jewelry-inspired details, and cinematic imagery, every touchpoint is designed to communicate rarity, mystery, craftsmanship, and a strong sense of ownership.";
const newOverviewP3 = "At its core, Viloria transforms fragrance into a personal emblem of character. The animal associated with each perfume is not simply decorative; it represents a different instinct, attitude, or personality that the wearer can connect with. In this way, Viloria creates collectible fragrances for people who want their scent to express who they are, not simply how they smell.";

viloriaHtml = viloriaHtml.replaceAll(oldOverviewP1, newOverviewP1);
viloriaHtml = viloriaHtml.replaceAll(oldOverviewP2, newOverviewP2);
viloriaHtml = viloriaHtml.replaceAll(oldOverviewP3, newOverviewP3);

// 5. Metadata Table
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

// 6. Gallery
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

const gPrefix = 'class="framer-ycym2p akram-gallery" data-framer-name="img wrapper">';
const gStart = viloriaHtml.indexOf(gPrefix);
const gEndMarker = '<div class="framer-cafykr hidden-1d6s8ho hidden-k4ktw8" data-framer-name="spacer">';
const gEnd = viloriaHtml.indexOf(gEndMarker, gStart);

if (gStart !== -1 && gEnd !== -1) {
  viloriaHtml = viloriaHtml.slice(0, gStart + gPrefix.length) + galleryHtml + '</div>' + viloriaHtml.slice(gEnd);
}

// Next Project in viloria-perfumes.html -> SAFFRON
const nextLogofolioIdx = viloriaHtml.indexOf('href="./logofolio"');
if (nextLogofolioIdx !== -1) {
  const nextSectionStart = viloriaHtml.lastIndexOf('<div class="framer-kzd5iu">', nextLogofolioIdx);
  const nextSectionEnd = viloriaHtml.indexOf('</div></div><!--/$--></div></div></section>', nextLogofolioIdx) + '</div></div><!--/$--></div></div>'.length;
  
  const saffronNextCard = `<div class="framer-kzd5iu"><!--$--><!--$--><a class="framer-qzlmkn framer-1cr9rtv" href="./saffron-brew"><div class="ssr-variant hidden-k4ktw8"><div class="framer-2lheo3-container"><div class="framer-0tDgX framer-DE02y framer-ERZud framer-UaMLt framer-3WfEN framer-NWers framer-6w0Zo framer-UyFur framer-18jqj2e framer-v-18jqj2e" data-framer-name="Desktop" style="height:100%;width:100%"><div class="framer-172onnj" data-border="true" data-framer-name="image wrapper" style="--border-bottom-width:1px;--border-color:var(--token-9e92eafd-428a-4d51-91e9-bb5924bff77e, #e4eef026);--border-left-width:1px;--border-right-width:1px;--border-style:solid;--border-top-width:1px;background-color:var(--token-4dfe4133-5687-4144-846c-c2716eed3ce2, #040f11)"><div class="framer-1g8cril-container"><div class="framer-9tRWd framer-504uzb framer-v-504uzb" data-framer-name="4 corners" style="height:100%;width:100%"><div class="framer-26hnv framer-zh73zt"></div><div class="framer-26hnv framer-taop0b"></div><div class="framer-26hnv framer-cia90e"></div><div class="framer-26hnv framer-1traeox"></div></div></div><div class="framer-1ws0sbe" data-framer-name="holder" style="box-shadow:0px 0px 0px 1px var(--token-9e92eafd-428a-4d51-91e9-bb5924bff77e, #e4eef026)"><div class="framer-sdccxg-container"><!--$--><div style="width:100%;height:100%;position:relative;display:flex;align-items:center;justify-content:center;border-radius:0;overflow:clip"><figure style="width:100%;height:100%;max-width:100%;flex:0 0 auto;margin:0;padding:0;position:absolute;z-index:1"><img src="/media/works/saffron-brew/saffron-cover.jpg" srcset="/media/works/saffron-brew/saffron-cover.jpg 1638w" alt="SAFFRON" draggable="false" style="width:100%;height:100%;object-fit:cover;object-position:50% 50%;margin:0;padding:0;user-select:none;pointer-events:none"></figure></div><!--/$--></div></div></div><div class="framer-1m2m390" data-framer-name="details"><div class="framer-aji1e1" data-framer-component-type="RichTextContainer" style="--framer-link-text-color:#e4eef0;--framer-link-text-decoration:underline;transform:none"><h3 class="framer-text framer-styles-preset-1w291dy" data-styles-preset="jYhVwWhYD">SAFFRON</h3></div><div class="framer-1ir4mra" data-framer-component-type="RichTextContainer" style="--framer-link-text-color:#e4eef0;--framer-link-text-decoration:underline;transform:none"><p class="framer-text framer-styles-preset-1bmj8aw">Full Brand Identity</p></div></div></div></div></div></a><!--/$--></div></div>`;
  viloriaHtml = viloriaHtml.slice(0, nextSectionStart) + saffronNextCard + viloriaHtml.slice(nextSectionEnd);
}

fs.writeFileSync('works/viloria-perfumes.html', viloriaHtml, 'utf-8');
console.log('✓ works/viloria-perfumes.html created');

console.log('=== Step 2: Updating index.html (Card #1 = VILORIA PERFUMES, Card #2 = SAFFRON, Card #3 = AL RAYYAN CASTLE) ===');
let baseIndex = fs.readFileSync('scripts/prev_index.html', 'utf-8');

// Replace perfumes-media-posts card in baseIndex with VILORIA PERFUMES
const pCardStart = baseIndex.indexOf('./works/perfumes-media-posts');
if (pCardStart !== -1) {
  const cardLinkStart = baseIndex.lastIndexOf('<a class="', pCardStart);
  const cardLinkEnd = baseIndex.indexOf('</a>', pCardStart) + '</a>'.length;
  
  // Build Viloria card
  const viloriaCard = `<a class="framer-1ij4yjj framer-lux5qc" href="./works/viloria-perfumes"><div class="ssr-variant hidden-eflc0x"><div class="framer-1xlxrwt-container"><div class="framer-0tDgX framer-DE02y framer-ERZud framer-UaMLt framer-3WfEN framer-NWers framer-6w0Zo framer-UyFur framer-18jqj2e framer-v-18jqj2e" data-framer-name="Desktop" style="height:100%;width:100%"><div class="framer-172onnj" data-border="true" data-framer-name="image wrapper" style="--border-bottom-width:1px;--border-color:var(--token-9e92eafd-428a-4d51-91e9-bb5924bff77e, #e4eef026);--border-left-width:1px;--border-right-width:1px;--border-style:solid;--border-top-width:1px;background-color:var(--token-4dfe4133-5687-4144-846c-c2716eed3ce2, #040f11)"><div class="framer-1g8cril-container"><div class="framer-9tRWd framer-504uzb framer-v-504uzb" data-framer-name="4 corners" style="height:100%;width:100%"><div class="framer-26hnv framer-zh73zt"></div><div class="framer-26hnv framer-taop0b"></div><div class="framer-26hnv framer-cia90e"></div><div class="framer-26hnv framer-1traeox"></div></div></div><div class="framer-1ws0sbe" data-framer-name="holder" style="box-shadow:0px 0px 0px 1px var(--token-9e92eafd-428a-4d51-91e9-bb5924bff77e, #e4eef026)"><div class="framer-sdccxg-container"><!--$--><div style="width:100%;height:100%;position:relative;display:flex;align-items:center;justify-content:center;border-radius:0;overflow:clip"><figure style="width:100%;height:100%;max-width:100%;flex:0 0 auto;margin:0;padding:0;position:absolute;z-index:1"><img src="/media/works/viloria-perfumes/viloria-cover.jpg" srcset="/media/works/viloria-perfumes/viloria-cover.jpg 2048w" alt="VILORIA PERFUMES" draggable="false" style="width:100%;height:100%;object-fit:cover;object-position:50% 50%;margin:0;padding:0;user-select:none;pointer-events:none" sizes="(min-width: 1200px) 100vw, (max-width: 809.98px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw"></figure><canvas id="stage" style="position:absolute;inset:0;width:100%;height:100%;z-index:3;pointer-events:none;opacity:1;min-width:100%;min-height:100%;max-width:100%;max-height:100%"></canvas></div><!--/$--></div></div></div><div class="framer-1m2m390" data-framer-name="details"><div class="framer-128v5r7" data-framer-component-type="RichTextContainer" style="--framer-link-text-color:#e4eef0;--framer-link-text-decoration:underline;transform:none"><h3 class="framer-text framer-styles-preset-1w291dy" data-styles-preset="jYhVwWhYD">VILORIA PERFUMES</h3></div><div class="framer-irh0wh" data-framer-component-type="RichTextContainer" style="--framer-link-text-color:#e4eef0;--framer-link-text-decoration:underline;transform:none"><p class="framer-text framer-styles-preset-1bmj8aw">Full Brand Identity</p></div></div></div></div></div><div class="ssr-variant hidden-72rtr7 hidden-1rlpj6l"><div class="framer-1xlxrwt-container"><div class="framer-0tDgX framer-DE02y framer-ERZud framer-UaMLt framer-3WfEN framer-NWers framer-6w0Zo framer-UyFur framer-18jqj2e framer-v-1g9n67x" data-framer-name="Phone" style="height:100%;width:100%"><div class="framer-172onnj" data-border="true" data-framer-name="image wrapper" style="--border-bottom-width:1px;--border-color:var(--token-9e92eafd-428a-4d51-91e9-bb5924bff77e, #e4eef026);--border-left-width:1px;--border-right-width:1px;--border-style:solid;--border-top-width:1px;background-color:var(--token-4dfe4133-5687-4144-846c-c2716eed3ce2, #040f11)"><div class="framer-1g8cril-container"><div class="framer-9tRWd framer-504uzb framer-v-504uzb" data-framer-name="4 corners" style="height:100%;width:100%"><div class="framer-26hnv framer-zh73zt"></div><div class="framer-26hnv framer-taop0b"></div><div class="framer-26hnv framer-cia90e"></div><div class="framer-26hnv framer-1traeox"></div></div></div><div class="framer-1ws0sbe" data-framer-name="holder" style="box-shadow:0px 0px 0px 1px var(--token-9e92eafd-428a-4d51-91e9-bb5924bff77e, #e4eef026)"><div class="framer-sdccxg-container"><!--$--><div style="width:100%;height:100%;position:relative;display:flex;align-items:center;justify-content:center;border-radius:0;overflow:clip"><figure style="width:100%;height:100%;max-width:100%;flex:0 0 auto;margin:0;padding:0;position:absolute;z-index:1"><img src="/media/works/viloria-perfumes/viloria-cover.jpg" srcset="/media/works/viloria-perfumes/viloria-cover.jpg 2048w" alt="VILORIA PERFUMES" draggable="false" style="width:100%;height:100%;object-fit:cover;object-position:50% 50%;margin:0;padding:0;user-select:none;pointer-events:none" sizes="(min-width: 1200px) 100vw, (max-width: 809.98px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw"></figure></div><!--/$--></div></div></div><div class="framer-1m2m390" data-framer-name="details"><div class="framer-128v5r7" data-framer-component-type="RichTextContainer" style="--framer-link-text-color:#e4eef0;--framer-link-text-decoration:underline;transform:none"><h3 class="framer-text framer-styles-preset-1w291dy" data-styles-preset="jYhVwWhYD">VILORIA PERFUMES</h3></div><div class="framer-irh0wh" data-framer-component-type="RichTextContainer" style="--framer-link-text-color:#e4eef0;--framer-link-text-decoration:underline;transform:none"><p class="framer-text framer-styles-preset-1bmj8aw">Full Brand Identity</p></div></div></div></div></div></a>`;
  baseIndex = baseIndex.slice(0, cardLinkStart) + viloriaCard + baseIndex.slice(cardLinkEnd);
}

// In Brands list on index.html: add VILORIA PERFUMES before SAFFRON
const brandSaffron = baseIndex.indexOf('href="/works/saffron-brew"');
if (brandSaffron !== -1) {
  const brandStart = baseIndex.lastIndexOf('<div class="framer-1ftlwkv" data-framer-name="block - holder"', brandSaffron);
  const viloriaBrandItem = `<div class="framer-1ftlwkv" data-framer-name="block - holder" data-highlight="true"><div class="framer-nxiht8-container" style="opacity:1"><!--$--><a class="framer-ombXH framer-UEvqd framer-KRxtX framer-16vhpco framer-v-16vhpco framer-s9jik7" data-framer-name="Desktop" data-highlight="true" href="/works/viloria-perfumes" target="_blank" tabindex="0" style="width:100%"><div class="framer-rbbhic" data-framer-component-type="RichTextContainer" style="--extracted-a0htzi:var(--token-3f43f58c-0863-4b51-8b01-f15c26b533d9, #e4eef0);--framer-link-text-color:#e4eef0;--framer-link-text-decoration:underline;transform:none"><h3 class="framer-text framer-styles-preset-1e1bj8v" data-styles-preset="gG1LIDejm" style="--framer-text-color:var(--extracted-a0htzi, var(--token-3f43f58c-0863-4b51-8b01-f15c26b533d9, #e4eef0))">VILORIA PERFUMES</h3></div><div class="framer-nfm5ks" data-framer-component-type="RichTextContainer" style="--extracted-r6o4lv:var(--token-3f43f58c-0863-4b51-8b01-f15c26b533d9, #e4eef0);--framer-link-text-color:#e4eef0;--framer-link-text-decoration:underline;transform:none"><p class="framer-text framer-styles-preset-o19or" data-styles-preset="SumHcjMGB" style="--framer-text-color:var(--extracted-r6o4lv, var(--token-3f43f58c-0863-4b51-8b01-f15c26b533d9, #e4eef0))">Full Brand Identity/</p></div></a><!--/$--></div></div>`;
  baseIndex = baseIndex.slice(0, brandStart) + viloriaBrandItem + baseIndex.slice(brandStart);
}

// In handover data on index.html: replace perfumes-media-posts with viloria-perfumes
baseIndex = baseIndex.replaceAll('"perfumes-media-posts"', '"viloria-perfumes"');
baseIndex = baseIndex.replaceAll('"Perfumes"', '"VILORIA PERFUMES"');

fs.writeFileSync('index.html', baseIndex, 'utf-8');
console.log('✓ index.html updated');

console.log('=== Step 3: Updating works.html (Card #1 = VILORIA PERFUMES, Card #2 = SAFFRON, Card #3 = AL RAYYAN CASTLE) ===');
let baseWorks = fs.readFileSync('scripts/prev_works.html', 'utf-8');

// In works.html: saffron-brew was at 303164, al-rayyan-castle at 308739, perfumes-media-posts at 314719.
// We remove perfumes-media-posts card from its position and insert VILORIA PERFUMES as Card #1 right before saffron-brew!

// 1. Remove perfumes-media-posts card from works.html
const pInWorks = baseWorks.indexOf('./works/perfumes-media-posts');
if (pInWorks !== -1) {
  const cardStart = baseWorks.lastIndexOf('<div class="framer-1a76l99"', pInWorks);
  const cardEnd = baseWorks.indexOf('</div><!--/$--></div>', pInWorks) + '</div><!--/$--></div>'.length;
  baseWorks = baseWorks.slice(0, cardStart) + baseWorks.slice(cardEnd);
}

// 2. Insert VILORIA PERFUMES card before saffron-brew
const saffronInWorks = baseWorks.indexOf('./works/saffron-brew');
if (saffronInWorks !== -1) {
  const saffronCardStart = baseWorks.lastIndexOf('<div class="framer-z54et1">', saffronInWorks);
  const viloriaWorksCard = `<div class="framer-z54et1"><!--$--><!--$--><a class="framer-k7292i framer-1lwf01a" href="./works/viloria-perfumes"><div class="ssr-variant hidden-khbs2k"><div class="framer-8px89v-container"><div class="framer-0tDgX framer-DE02y framer-ERZud framer-UaMLt framer-3WfEN framer-NWers framer-6w0Zo framer-UyFur framer-18jqj2e framer-v-18jqj2e" data-framer-name="Desktop" style="height:100%;width:100%"><div class="framer-172onnj" data-border="true" data-framer-name="image wrapper" style="--border-bottom-width:1px;--border-color:var(--token-9e92eafd-428a-4d51-91e9-bb5924bff77e, #e4eef026);--border-left-width:1px;--border-right-width:1px;--border-style:solid;--border-top-width:1px;background-color:var(--token-4dfe4133-5687-4144-846c-c2716eed3ce2, #040f11)"><div class="framer-1g8cril-container"><div class="framer-9tRWd framer-504uzb framer-v-504uzb" data-framer-name="4 corners" style="height:100%;width:100%"><div class="framer-26hnv framer-zh73zt"></div><div class="framer-26hnv framer-taop0b"></div><div class="framer-26hnv framer-cia90e"></div><div class="framer-26hnv framer-1traeox"></div></div></div><div class="framer-1ws0sbe" data-framer-name="holder" style="box-shadow:0px 0px 0px 1px var(--token-9e92eafd-428a-4d51-91e9-bb5924bff77e, #e4eef026)"><div class="framer-sdccxg-container"><!--$--><div style="width:100%;height:100%;position:relative;display:flex;align-items:center;justify-content:center;border-radius:0;overflow:clip"><figure style="width:100%;height:100%;max-width:100%;flex:0 0 auto;margin:0;padding:0;position:absolute;z-index:1"><img fetchpriority="high" src="/media/works/viloria-perfumes/viloria-cover.jpg" srcset="/media/works/viloria-perfumes/viloria-cover.jpg 2048w" alt="VILORIA PERFUMES" draggable="false" style="width:100%;height:100%;object-fit:cover;object-position:50% 50%;margin:0;padding:0;user-select:none;pointer-events:none" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw"></figure><canvas id="stage" style="position:absolute;inset:0;width:100%;height:100%;z-index:3;pointer-events:none;opacity:1;min-width:100%;min-height:100%;max-width:100%;max-height:100%"></canvas></div><!--/$--></div></div></div><div class="framer-1m2m390" data-framer-name="details"><div class="framer-aji1e1" data-framer-component-type="RichTextContainer" style="--framer-link-text-color:#e4eef0;--framer-link-text-decoration:underline;transform:none"><h3 class="framer-text framer-styles-preset-1w291dy" data-styles-preset="jYhVwWhYD">VILORIA PERFUMES</h3></div><div class="framer-1ir4mra" data-framer-component-type="RichTextContainer" style="--framer-link-text-color:#e4eef0;--framer-link-text-decoration:underline;transform:none"><p class="framer-text framer-styles-preset-1bmj8aw">Full Brand Identity</p></div></div></div></div></div><div class="ssr-variant hidden-1v77c6t hidden-j9g3r6"><div class="framer-8px89v-container"><div class="framer-0tDgX framer-DE02y framer-ERZud framer-UaMLt framer-3WfEN framer-NWers framer-6w0Zo framer-UyFur framer-18jqj2e framer-v-c56p40" data-framer-name="Phone" style="height:100%;width:100%"><div class="framer-172onnj" data-border="true" data-framer-name="image wrapper" style="--border-bottom-width:1px;--border-color:var(--token-9e92eafd-428a-4d51-91e9-bb5924bff77e, #e4eef026);--border-left-width:1px;--border-right-width:1px;--border-style:solid;--border-top-width:1px;background-color:var(--token-4dfe4133-5687-4144-846c-c2716eed3ce2, #040f11)"><div class="framer-1g8cril-container"><div class="framer-9tRWd framer-504uzb framer-v-504uzb" data-framer-name="4 corners" style="height:100%;width:100%"><div class="framer-26hnv framer-zh73zt"></div><div class="framer-26hnv framer-taop0b"></div><div class="framer-26hnv framer-cia90e"></div><div class="framer-26hnv framer-1traeox"></div></div></div><div class="framer-1ws0sbe" data-framer-name="holder" style="box-shadow:0px 0px 0px 1px var(--token-9e92eafd-428a-4d51-91e9-bb5924bff77e, #e4eef026)"><div class="framer-sdccxg-container"><!--$--><div style="width:100%;height:100%;position:relative;display:flex;align-items:center;justify-content:center;border-radius:0;overflow:clip"><figure style="width:100%;height:100%;max-width:100%;flex:0 0 auto;margin:0;padding:0;position:absolute;z-index:1"><img src="/media/works/viloria-perfumes/viloria-cover.jpg" srcset="/media/works/viloria-perfumes/viloria-cover.jpg 2048w" alt="VILORIA PERFUMES" draggable="false" style="width:100%;height:100%;object-fit:cover;object-position:50% 50%;margin:0;padding:0;user-select:none;pointer-events:none" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw"></figure></div><!--/$--></div></div></div><div class="framer-1m2m390" data-framer-name="details"><div class="framer-aji1e1" data-framer-component-type="RichTextContainer" style="--framer-link-text-color:#e4eef0;--framer-link-text-decoration:underline;transform:none"><h3 class="framer-text framer-styles-preset-1w291dy" data-styles-preset="jYhVwWhYD">VILORIA PERFUMES</h3></div><div class="framer-1ir4mra" data-framer-component-type="RichTextContainer" style="--framer-link-text-color:#e4eef0;--framer-link-text-decoration:underline;transform:none"><p class="framer-text framer-styles-preset-1bmj8aw">Full Brand Identity</p></div></div></div></div></div></a><!--/$--></div>`;
  baseWorks = baseWorks.slice(0, saffronCardStart) + viloriaWorksCard + baseWorks.slice(saffronCardStart);
}

// 3. JSON-LD in works.html
baseWorks = baseWorks.replaceAll('{"@type":"ListItem","position":1,"url":"https://akram-marref.netlify.app/works/perfumes-media-posts","name":"Perfumes | Social Media Posts"}', '{"@type":"ListItem","position":1,"url":"https://akram-marref.netlify.app/works/viloria-perfumes","name":"VILORIA PERFUMES | Full Brand Identity"}');

// 4. Handover in works.html
baseWorks = baseWorks.replaceAll('"perfumes-media-posts"', '"viloria-perfumes"');
baseWorks = baseWorks.replaceAll('"Perfumes"', '"VILORIA PERFUMES"');

fs.writeFileSync('works.html', baseWorks, 'utf-8');
console.log('✓ works.html updated');

console.log('=== Step 4: Updating JS Bundles ===');
const asVpPath = 'public/_framer/49d1839e6f/asVp159yxmBC7CLWffm2UzduwxU4jpEWKZS7XdyxGEI.3AGBmqag.mjs';
if (fs.existsSync(asVpPath)) {
  let asVp = fs.readFileSync(asVpPath, 'utf-8');
  if (!asVp.includes('viloria-perfumes')) {
    const target = 'if(item?.id==="2aghsjbCf"';
    const viloriaPatch = 'if(item?.id==="M9GzvQJK7"||item?.jf9cHyJea==="perfumes-media-posts"||item?.jf9cHyJea==="viloria-perfumes"||(typeof item?.lvvRv1y9U==="string"&&item.lvvRv1y9U.toLowerCase().includes("perfumes"))){try{if(item?.dK7pUTT1e?.props?.children?.props)item.dK7pUTT1e.props.children.props.children="Full Brand Identity";}catch(e){}if(item.j4fQjGAz1){item.j4fQjGAz1.src="/media/works/viloria-perfumes/viloria-cover.webp";item.j4fQjGAz1.srcSet="/media/works/viloria-perfumes/viloria-cover.webp";item.j4fQjGAz1.alt="VILORIA PERFUMES";}if(item.wjhxaKF0h){item.wjhxaKF0h.src="/media/works/viloria-perfumes/viloria-cover-hover.png";item.wjhxaKF0h.srcSet="/media/works/viloria-perfumes/viloria-cover-hover.png";item.wjhxaKF0h.alt="VILORIA PERFUMES";}return{...item,id:"M9GzvQJK7",jf9cHyJea:"viloria-perfumes",lvvRv1y9U:"VILORIA PERFUMES"};}' + target;
    asVp = asVp.replace(target, viloriaPatch);
    fs.writeFileSync(asVpPath, asVp, 'utf-8');
    console.log('✓ asVp bundle patched for M9GzvQJK7 (Viloria Perfumes)');
  }
}

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

console.log('=== Step 5: Updating Redirects & Sitemaps ===');
let redirects = fs.readFileSync('_redirects', 'utf-8');
if (!redirects.includes('/works/viloria-perfumes')) {
  redirects = '/works/viloria-perfumes  /works/viloria-perfumes.html  200\n/works/perfumes-media-posts  /works/viloria-perfumes  301\n' + redirects;
  fs.writeFileSync('_redirects', redirects, 'utf-8');
  console.log('✓ _redirects updated');
}

console.log('=== ALL DONE! ===');
