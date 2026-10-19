const fs = require('fs');
const path = require('path');

console.log('========================================================');
console.log('   PERFECT VILORIA PERFUMES & FULL PORTFOLIO SYNTHESIS  ');
console.log('========================================================');

// -------------------------------------------------------------------
// STEP 1: Construct the Perfect works/viloria-perfumes.html from ARC template
// -------------------------------------------------------------------
console.log('\n--- Step 1: Building works/viloria-perfumes.html ---');
const arcHtml = fs.readFileSync('works/al-rayyan-castle.html', 'utf-8');
const manifest = JSON.parse(fs.readFileSync('public/media/works/viloria-perfumes/manifest.json', 'utf-8'));

let viloriaHtml = arcHtml;

// 1.1 Meta tags / SEO / Titles
viloriaHtml = viloriaHtml.replaceAll('AL RAYYAN CASTLE - Akram Marref', 'VILORIA PERFUMES - Akram Marref');
viloriaHtml = viloriaHtml.replaceAll('AL RAYYAN CASTLE | Full Brand Identity', 'VILORIA PERFUMES | Full Brand Identity');
viloriaHtml = viloriaHtml.replaceAll('Architectural Precision At Every Stage.', 'Born in Red, Crowned with Gold');
viloriaHtml = viloriaHtml.replaceAll('Architectural Precision\\nAt Every Stage.', 'Born in Red, Crowned with Gold');
viloriaHtml = viloriaHtml.replaceAll('Architectural Precision\nAt Every Stage.', 'Born in Red, Crowned with Gold');
viloriaHtml = viloriaHtml.replaceAll('/media/works/al-rayyan-castle/arc-cover.jpg', '/media/works/viloria-perfumes/viloria-cover.jpg');
viloriaHtml = viloriaHtml.replaceAll('/media/works/al-rayyan-castle/hero.webp', '/media/works/viloria-perfumes/hero.webp');
viloriaHtml = viloriaHtml.replaceAll('/works/al-rayyan-castle', '/works/viloria-perfumes');
viloriaHtml = viloriaHtml.replaceAll('al-rayyan-castle', 'viloria-perfumes');

// 1.2 Title Heading
viloriaHtml = viloriaHtml.replaceAll(
  '<h1 class="framer-text framer-styles-preset-x4zbk" data-styles-preset="Ywk0qkDMj">AL RAYYAN CASTLE</h1>',
  '<h1 class="framer-text framer-styles-preset-x4zbk" data-styles-preset="Ywk0qkDMj">VILORIA PERFUMES</h1>'
);

// 1.3 Hero Banner Image Holder (Exact standard: Hero Image + 4 corners, NO video here!)
const heroInnerHtml = `<div class="ssr-variant"><div class="framer-cpcazi" data-border="true"><div style="position:absolute;border-radius:inherit;corner-shape:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true"><img decoding="async" fetchpriority="high" width="3840" height="2160" sizes="(min-width: 1200px) max(min(100vw - 80px, 1600px) - 40px, 1px), (min-width: 810px) and (max-width: 1199.98px) max(min(100vw - 80px, 1600px) - 40px, 1px), (max-width: 809.98px) max(min(100vw - 60px, 1600px) - 20px, 1px)" srcset="/media/works/viloria-perfumes/hero-1024.webp 1024w,/media/works/viloria-perfumes/hero-2048.webp 2048w,/media/works/viloria-perfumes/hero.webp 3840w" src="/media/works/viloria-perfumes/hero.webp" alt="VILORIA PERFUMES" style="display:block;width:100%;height:100%;border-radius:inherit;corner-shape:inherit;object-position:center;object-fit:cover"></div></div></div><div class="ssr-variant"><div class="framer-4623j8-container"><div class="framer-9tRWd framer-504uzb framer-v-504uzb" data-framer-name="4 corners" style="height:100%;width:100%"><div class="framer-26hnv framer-zh73zt"></div><div class="framer-26hnv framer-taop0b"></div><div class="framer-26hnv framer-cia90e"></div><div class="framer-26hnv framer-1traeox"></div></div></div></div>`;

const heroHolderStart = viloriaHtml.indexOf('data-framer-name="image holder"');
const heroHolderClose = viloriaHtml.indexOf('</section>', heroHolderStart);
viloriaHtml = viloriaHtml.substring(0, heroHolderStart) + `data-framer-name="image holder">${heroInnerHtml}</div>` + viloriaHtml.substring(heroHolderClose);

// 1.4 Overview Paragraphs
const oldOverviewP1 = "The Al Rayyan Castle brand identity was created to embody architectural excellence through precision, craftsmanship, and refined luxury. Rooted in the principles of strength, structure, and timeless design, the project translates the brand’s core values into a visual language that feels both sophisticated and enduring.";
const oldOverviewP2 = "Blending contemporary aesthetics with subtle regional influence, the identity reflects a seamless harmony between functionality and elegance. Every detail was carefully considered to express prestige, durability, and a commitment to the highest standards of quality.";
const oldOverviewP3 = "The final branding system presents Al Rayyan Castle as a distinguished and confident brand one that reflects not only visual refinement, but also the integrity and excellence behind every project it represents.";

const newOverviewP1 = "Viloria Perfumes is a luxury fragrance house built around the belief that perfume should be more than a scent. Each fragrance is created as a character, an object of desire, and a collectible piece of art. The brand combines Victorian-inspired elegance, dramatic storytelling, sculptural craftsmanship, and contemporary luxury to create a distinctive world where every perfume has its own personality and visual identity.";
const newOverviewP2 = "Viloria was created to move beyond the conventional perfume experience, where packaging simply supports the fragrance. Here, the entire object becomes part of the experience. From sculptural animal caps and deep red bottles to black packaging, wax seals, jewelry-inspired details, and cinematic imagery, every touchpoint is designed to communicate rarity, mystery, craftsmanship, and a strong sense of ownership.";
const newOverviewP3 = "At its core, Viloria transforms fragrance into a personal emblem of character. The animal associated with each perfume is not simply decorative; it represents a different instinct, attitude, or personality that the wearer can connect with. In this way, Viloria creates collectible fragrances for people who want their scent to express who they are, not simply how they smell.";

viloriaHtml = viloriaHtml.replaceAll(oldOverviewP1, newOverviewP1);
viloriaHtml = viloriaHtml.replaceAll(oldOverviewP2, newOverviewP2);
viloriaHtml = viloriaHtml.replaceAll(oldOverviewP3, newOverviewP3);

// 1.5 Metadata table
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

// 1.6 Build the Gallery: Video FIRST at top, then items 1..38 in numerical order
let galleryInnerHtml = '';

// Video Card (First item at the top of the gallery, matching Saffron Brew standard!)
galleryInnerHtml += `<div class="framer-1hve4up akram-h viloria-video-card" data-border="true" data-framer-name="video"><div class="framer-1keextd-container"><div class="framer-9tRWd framer-504uzb framer-v-504uzb" data-framer-name="4 corners" style="height:100%;width:100%"><div class="framer-26hnv framer-zh73zt"></div><div class="framer-26hnv framer-taop0b"></div><div class="framer-26hnv framer-cia90e"></div><div class="framer-26hnv framer-1traeox"></div></div></div><div class="framer-1q1633g" data-border="true" data-framer-name="video player" style="aspect-ratio:1920/1080;overflow:hidden;border-radius:inherit;position:relative;"><video src="/media/works/viloria-perfumes/gallery/7.mp4" autoplay loop muted playsinline controls style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover;"></video></div></div>`;

// Images in numerical order 1 to 38
for (const item of manifest) {
  const isH = !item.isPortrait;
  const colClass = isH ? 'framer-1hve4up akram-h' : 'framer-1hve4up';

  let mediaTag = '';
  if (item.type === 'gif') {
    mediaTag = `<img decoding="async" loading="lazy" width="${item.width}" height="${item.height}" src="/media/works/viloria-perfumes/gallery/${item.file}" alt="VILORIA PERFUMES Slide ${item.id}" style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover">`;
  } else {
    const srcset = `/media/works/viloria-perfumes/gallery/${item.id}-1024.webp 1024w, /media/works/viloria-perfumes/gallery/${item.id}-2048.webp 2048w, /media/works/viloria-perfumes/gallery/${item.file} ${item.width}w`;
    const sizes = item.isPortrait
      ? `(min-width: 1200px) calc(max(max(min(100vw - 80px, 1600px) / 2, 50px), 50px) - 20px), (min-width: 810px) calc(min(100vw - 80px, 1600px) / 2 - 20px), calc(100vw - 40px)`
      : `(min-width: 1200px) max(min(100vw - 80px, 1600px) - 40px, 1px), (min-width: 810px) calc(min(100vw - 80px, 1600px) - 40px), calc(100vw - 40px)`;

    mediaTag = `<img decoding="async" loading="lazy" width="${item.width}" height="${item.height}" sizes="${sizes}" srcset="${srcset}" src="/media/works/viloria-perfumes/gallery/${item.file}" alt="VILORIA PERFUMES Slide ${item.id}" style="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:cover">`;
  }

  galleryInnerHtml += `<div class="${colClass}" data-border="true" data-framer-name="img ${item.id}"><div class="framer-1keextd-container"><div class="framer-9tRWd framer-504uzb framer-v-504uzb" data-framer-name="4 corners" style="height:100%;width:100%"><div class="framer-26hnv framer-zh73zt"></div><div class="framer-26hnv framer-taop0b"></div><div class="framer-26hnv framer-cia90e"></div><div class="framer-26hnv framer-1traeox"></div></div></div><div class="framer-1q1633g" data-border="true" data-framer-name="img" style="aspect-ratio:${item.width}/${item.height};position:relative;overflow:hidden"><div style="position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0" data-framer-background-image-wrapper="true">${mediaTag}</div></div></div>`;
}

// Replace in HTML gallery wrapper
const gPrefix = 'class="framer-ycym2p akram-gallery" data-framer-name="img wrapper">';
const gStart = viloriaHtml.indexOf(gPrefix);
const gEndMarker = '<div class="framer-cafykr hidden-1d6s8ho hidden-k4ktw8" data-framer-name="spacer">';
const gEnd = viloriaHtml.indexOf(gEndMarker, gStart);

if (gStart !== -1 && gEnd !== -1) {
  viloriaHtml = viloriaHtml.slice(0, gStart + gPrefix.length) + galleryInnerHtml + '</div>' + viloriaHtml.slice(gEnd);
  console.log('✓ Successfully injected gallery (Video FIRST + 37 numbered slides)');
} else {
  console.error('ERROR: Could not locate gallery bounds!');
  process.exit(1);
}

// 1.7 Next Project Section: Point to Saffron Brew (Project #2)
const saffronNextCard = `<div class="framer-kzd5iu"><!--$--><!--$--><a class="framer-qzlmkn framer-1cr9rtv" href="./saffron-brew"><div class="ssr-variant hidden-k4ktw8"><div class="framer-2lheo3-container"><div class="framer-0tDgX framer-DE02y framer-ERZud framer-UaMLt framer-3WfEN framer-NWers framer-6w0Zo framer-UyFur framer-18jqj2e framer-v-18jqj2e" data-framer-name="Desktop" style="height:100%;width:100%"><div class="framer-172onnj" data-border="true" data-framer-name="image wrapper" style="--border-bottom-width:1px;--border-color:var(--token-9e92eafd-428a-4d51-91e9-bb5924bff77e, #e4eef026);--border-left-width:1px;--border-right-width:1px;--border-style:solid;--border-top-width:1px;background-color:var(--token-4dfe4133-5687-4144-846c-c2716eed3ce2, #040f11)"><div class="framer-1g8cril-container"><div class="framer-9tRWd framer-504uzb framer-v-504uzb" data-framer-name="4 corners" style="height:100%;width:100%"><div class="framer-26hnv framer-zh73zt"></div><div class="framer-26hnv framer-taop0b"></div><div class="framer-26hnv framer-cia90e"></div><div class="framer-26hnv framer-1traeox"></div></div></div><div class="framer-1ws0sbe" data-framer-name="holder" style="box-shadow:0px 0px 0px 1px var(--token-9e92eafd-428a-4d51-91e9-bb5924bff77e, #e4eef026)"><div class="framer-sdccxg-container"><!--$--><div style="width:100%;height:100%;position:relative;display:flex;align-items:center;justify-content:center;border-radius:0;overflow:clip"><figure style="width:100%;height:100%;max-width:100%;flex:0 0 auto;margin:0;padding:0;position:absolute;z-index:1"><img src="/media/works/saffron-brew/saffron-cover.jpg" srcset="/media/works/saffron-brew/saffron-cover.jpg 1638w" alt="SAFFRON" draggable="false" style="width:100%;height:100%;object-fit:cover;object-position:50% 50%;margin:0;padding:0;user-select:none;pointer-events:none"></figure><canvas id="stage" style="position:absolute;inset:0;width:100%;height:100%;z-index:3;pointer-events:none;opacity:1;min-width:100%;min-height:100%;max-width:100%;max-height:100%"></canvas></div><!--/$--></div></div></div><div class="framer-1m2m390" data-framer-name="details"><div class="framer-aji1e1" data-framer-component-type="RichTextContainer" style="--framer-link-text-color:#e4eef0;--framer-link-text-decoration:underline;transform:none"><h3 class="framer-text framer-styles-preset-1w291dy" data-styles-preset="jYhVwWhYD">SAFFRON</h3></div><div class="framer-1ir4mra" data-framer-component-type="RichTextContainer" style="--framer-link-text-color:#e4eef0;--framer-link-text-decoration:underline;transform:none"><p class="framer-text framer-styles-preset-1bmj8aw">Full Brand Identity</p></div></div></div></div></div><div class="ssr-variant hidden-w6inbe hidden-1d6s8ho"><div class="framer-2lheo3-container"><div class="framer-0tDgX framer-DE02y framer-ERZud framer-UaMLt framer-3WfEN framer-NWers framer-6w0Zo framer-UyFur framer-18jqj2e framer-v-qahv0g" data-framer-name="Phone" style="height:100%;width:100%"><div class="framer-172onnj" data-border="true" data-framer-name="image wrapper" style="--border-bottom-width:1px;--border-color:var(--token-9e92eafd-428a-4d51-91e9-bb5924bff77e, #e4eef026);--border-left-width:1px;--border-right-width:1px;--border-style:solid;--border-top-width:1px;background-color:var(--token-4dfe4133-5687-4144-846c-c2716eed3ce2, #040f11)"><div class="framer-1g8cril-container"><div class="framer-9tRWd framer-504uzb framer-v-504uzb" data-framer-name="4 corners" style="height:100%;width:100%"><div class="framer-26hnv framer-zh73zt"></div><div class="framer-26hnv framer-taop0b"></div><div class="framer-26hnv framer-cia90e"></div><div class="framer-26hnv framer-1traeox"></div></div></div><div class="framer-1ws0sbe" data-framer-name="holder" style="box-shadow:0px 0px 0px 1px var(--token-9e92eafd-428a-4d51-91e9-bb5924bff77e, #e4eef026)"><div class="framer-sdccxg-container"><!--$--><div style="width:100%;height:100%;position:relative;display:flex;align-items:center;justify-content:center;border-radius:0;overflow:clip"><figure style="width:100%;height:100%;max-width:100%;flex:0 0 auto;margin:0;padding:0;position:absolute;z-index:1"><img src="/media/works/saffron-brew/saffron-cover.jpg" srcset="/media/works/saffron-brew/saffron-cover.jpg 1638w" alt="SAFFRON" draggable="false" style="width:100%;height:100%;object-fit:cover;object-position:50% 50%;margin:0;padding:0;user-select:none;pointer-events:none"></figure><canvas id="stage" style="position:absolute;inset:0;width:100%;height:100%;z-index:3;pointer-events:none;opacity:1;min-width:100%;min-height:100%;max-width:100%;max-height:100%"></canvas></div><!--/$--></div></div></div><div class="framer-1m2m390" data-framer-name="details"><div class="framer-aji1e1" data-framer-component-type="RichTextContainer" style="--framer-link-text-color:#e4eef0;--framer-link-text-decoration:underline;transform:none"><h3 class="framer-text framer-styles-preset-1w291dy" data-styles-preset="jYhVwWhYD">SAFFRON</h3></div><div class="framer-1ir4mra" data-framer-component-type="RichTextContainer" style="--framer-link-text-color:#e4eef0;--framer-link-text-decoration:underline;transform:none"><p class="framer-text framer-styles-preset-1bmj8aw">Full Brand Identity</p></div></div></div></div></div></a><!--/$--></div></div>`;

const nextLogofolioIdx = viloriaHtml.indexOf('href="./logofolio"');
if (nextLogofolioIdx !== -1) {
  const nextSectionStart = viloriaHtml.lastIndexOf('<div class="framer-kzd5iu">', nextLogofolioIdx);
  const nextSectionEnd = viloriaHtml.indexOf('</div><div class="framer-31wfkg hidden-k4ktw8"', nextLogofolioIdx);
  if (nextSectionStart !== -1 && nextSectionEnd !== -1) {
    viloriaHtml = viloriaHtml.slice(0, nextSectionStart) + saffronNextCard + viloriaHtml.slice(nextSectionEnd);
    console.log('✓ Successfully configured Next Project to SAFFRON');
  }
}

// 1.8 Inject window.__VILORIA_HERO_INNER & window.__VILORIA_GALLERY_INNER into <head> script
viloriaHtml = viloriaHtml.replace(/<script>window\.__VILORIA_HERO_INNER[\s\S]*?<\/script>/, '');
viloriaHtml = viloriaHtml.replace(/<script>window\.__VILORIA_GALLERY_INNER[\s\S]*?<\/script>/, '');

const globalsScript = `<script>
window.__VILORIA_HERO_INNER = ${JSON.stringify(heroInnerHtml)};
window.__VILORIA_GALLERY_INNER = ${JSON.stringify(galleryInnerHtml)};
</script>`;

viloriaHtml = viloriaHtml.replace('</head>', globalsScript + '\n</head>');

// 1.9 Overview typography CSS block
const typoStyle = `<style id="project-overview-typography-fix">
  main.framer-y5jt56,
  .framer-7J2Cd .framer-y5jt56 {
    opacity: 1 !important;
    transform: none !important;
    gap: 20px !important;
  }
  .framer-1oupkq2 {
    width: 100% !important;
    max-width: 100% !important;
  }
  .framer-18xcv1t {
    width: 100% !important;
    max-width: 100% !important;
  }
  .framer-1oupkq2 h5,
  .framer-1oupkq2 .framer-text {
    font-size: clamp(16px, 1.25vw, 19px) !important;
    line-height: 1.4 !important;
  }
  /* Live Project Row: perfectly visible, bright white contrast, IBM Plex Mono uppercase */
  .framer-1fmambg,
  [data-framer-name="live project"],
  .framer-7J2Cd [data-framer-name="live project"] {
    display: flex !important;
  }
  .framer-1fmambg a,
  .framer-1fmambg a span,
  .framer-1fmambg .framer-text {
    color: var(--token-3f43f58c-0863-4b51-8b01-f15c26b533d9, #e4eef0) !important;
    --framer-text-color: var(--token-3f43f58c-0863-4b51-8b01-f15c26b533d9, #e4eef0) !important;
    font-family: "IBM Plex Mono", monospace !important;
    font-size: 13px !important;
    letter-spacing: 0em !important;
    line-height: 1.4em !important;
    text-transform: uppercase !important;
    opacity: 1 !important;
    visibility: visible !important;
  }
  .framer-1fmambg a {
    text-decoration: none !important;
    cursor: pointer !important;
  }
  .framer-19r9k91 p,
  .framer-19r9k91 .framer-text {
    color: var(--token-e0e6349c-3e5b-4581-bcb0-400b1265e7fe, #e4eef0ab) !important;
    --framer-text-color: var(--token-e0e6349c-3e5b-4581-bcb0-400b1265e7fe, #e4eef0ab) !important;
  }
  .akram-gallery > .akram-h { grid-column: 1 / -1; }
  .akram-gallery .framer-1q1633g { height: auto !important; }
  @media (max-width: 809.98px) {
    .framer-7J2Cd .framer-ycym2p.akram-gallery {
      grid-template-columns: repeat(2, minmax(50px, 1fr));
    }
    .framer-7J2Cd .framer-ycym2p.akram-gallery > .akram-h {
      grid-column: 1 / -1;
    }
  }

  /* Metadata table text styling guarantees - 0 contrast bugs, 100% white, IBM Plex Mono uppercase */
  .framer-16bl9h4 p,
  .framer-1qidz05 p,
  .framer-1qcnbz7 p,
  .framer-16bl9h4 .framer-text,
  .framer-1qidz05 .framer-text,
  .framer-1qcnbz7 .framer-text {
    color: var(--token-3f43f58c-0863-4b51-8b01-f15c26b533d9, #e4eef0) !important;
    --framer-text-color: var(--token-3f43f58c-0863-4b51-8b01-f15c26b533d9, #e4eef0) !important;
    font-family: "IBM Plex Mono", monospace !important;
    font-size: 13px !important;
    letter-spacing: 0em !important;
    line-height: 1.4em !important;
    text-transform: uppercase !important;
    text-align: right !important;
    opacity: 1 !important;
    visibility: visible !important;
  }
</style>`;

if (viloriaHtml.includes('id="project-overview-typography-fix"')) {
  viloriaHtml = viloriaHtml.replace(/<style id="project-overview-typography-fix">[\s\S]*?<\/style>/, typoStyle);
} else {
  viloriaHtml = viloriaHtml.replace('</head>', typoStyle + '\n</head>');
}

fs.writeFileSync('works/viloria-perfumes.html', viloriaHtml, 'utf-8');
console.log('✓ Successfully wrote works/viloria-perfumes.html');


// -------------------------------------------------------------------
// STEP 2: JS Bundles Sync for Hydration
// -------------------------------------------------------------------
console.log('\n--- Step 2: Syncing JS Bundles ---');
const asVpPath = 'public/_framer/49d1839e6f/asVp159yxmBC7CLWffm2UzduwxU4jpEWKZS7XdyxGEI.3AGBmqag.mjs';
let asVp = fs.readFileSync(asVpPath, 'utf-8');

// Find the patch in asVp using indexOf
const patchMarker = '/*__VILORIA_HERO_PATCH__*/';
const patchIdx = asVp.indexOf(patchMarker);
if (patchIdx !== -1) {
  const patchStart = asVp.lastIndexOf('s(`div`,{className:`framer-olm270`', patchIdx);
  const patchEnd = asVp.indexOf(':[a(h', patchIdx);
  if (patchStart !== -1 && patchEnd !== -1) {
    const replacement = `s(\`div\`,{className:\`framer-olm270\`,"data-border":!0,"data-framer-name":\`image holder\`,/*__VILORIA_HERO_PATCH__*/dangerouslySetInnerHTML:((typeof location!=='undefined'&&location.pathname.includes('viloria-perfumes'))||(typeof S==='string'&&S.toUpperCase().includes('VILORIA')))?{__html:(typeof window!=='undefined'&&window.__VILORIA_HERO_INNER)?window.__VILORIA_HERO_INNER:${JSON.stringify(heroInnerHtml)}}:void 0,children:((typeof location!=='undefined'&&location.pathname.includes('viloria-perfumes'))||(typeof S==='string'&&S.toUpperCase().includes('VILORIA')))?void 0`;
    asVp = asVp.substring(0, patchStart) + replacement + asVp.substring(patchEnd);
    fs.writeFileSync(asVpPath, asVp, 'utf-8');
    console.log('✓ asVp bundle Hero hydration updated to render Hero Image');
  } else {
    console.error('ERROR: Could not find patchStart or patchEnd in asVp');
  }
} else {
  console.log('No patch marker in asVp');
}

// -------------------------------------------------------------------
// STEP 3: Verify index.html & works.html cards
// -------------------------------------------------------------------
console.log('\n--- Step 3: Checking index.html and works.html cards ---');

function updateCard(pagePath) {
  let content = fs.readFileSync(pagePath, 'utf-8');
  
  content = content.replaceAll(
    'src="/media/works/viloria-perfumes/viloria-cover.jpg" srcset="/media/works/viloria-perfumes/viloria-cover.jpg 2048w"',
    'src="/media/works/viloria-perfumes/viloria-cover.jpg" srcset="/media/works/viloria-perfumes/viloria-cover-1024.webp 1024w, /media/works/viloria-perfumes/viloria-cover-2048.webp 2048w, /media/works/viloria-perfumes/viloria-cover.jpg 3840w"'
  );
  
  fs.writeFileSync(pagePath, content, 'utf-8');
  console.log(`✓ Updated card images and srcset in ${pagePath}`);
}

updateCard('index.html');
updateCard('works.html');

console.log('\n=== MASTER FIX COMPLETED SUCCESSFULLY! ===');
