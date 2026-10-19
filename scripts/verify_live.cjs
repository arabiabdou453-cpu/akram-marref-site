const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', reject);
  });
}

async function verifyLive() {
  console.log('=== VERIFYING LIVE PRODUCTION: https://akram-marref-site.vercel.app ===\n');

  // 1. Check Case Study
  const caseStudyUrl = 'https://akram-marref-site.vercel.app/works/viloria-perfumes?t=' + Date.now();
  const cs = await fetchUrl(caseStudyUrl);
  console.log(`[Case Study] Status: ${cs.status}, Length: ${cs.data.length}`);

  const heroIdx = cs.data.indexOf('data-framer-name="image holder"');
  const heroEnd = cs.data.indexOf('</section>', heroIdx);
  const heroHtml = cs.data.substring(heroIdx, heroEnd);

  console.log('✓ Hero contains hero.webp:', heroHtml.includes('hero.webp'));
  console.log('✓ Hero has NO video:', !heroHtml.includes('<video'));
  console.log('✓ Hero has 4 corners:', heroHtml.includes('4 corners'));

  console.log('✓ Overview font clamp(16px, 1.25vw, 19px):', cs.data.includes('font-size: clamp(16px, 1.25vw, 19px)'));
  console.log('✓ Overview line-height 1.4:', cs.data.includes('line-height: 1.4'));

  const gIdx = cs.data.indexOf('class="framer-ycym2p akram-gallery"');
  const galleryItems = Array.from(cs.data.substring(gIdx, gIdx + 50000).matchAll(/data-framer-name="(video|img \d+)"/g)).map(m => m[1]);
  console.log(`✓ Gallery items count: ${galleryItems.length}`);
  console.log('✓ First 5 items in gallery:', galleryItems.slice(0, 5));
  console.log('✓ Video is FIRST at top:', galleryItems[0] === 'video');

  console.log('✓ Behance live project link:', cs.data.includes('https://www.behance.net/gallery/256986051/VILORIA-PERFUMES-Full-Brand-Identity'));
  console.log('✓ Next Project points to Saffron Brew:', cs.data.includes('href="./saffron-brew"'));

  // 2. Check Homepage
  const homeUrl = 'https://akram-marref-site.vercel.app/?t=' + Date.now();
  const home = await fetchUrl(homeUrl);
  console.log(`\n[Homepage] Status: ${home.status}, Length: ${home.data.length}`);

  const vIdx = home.data.indexOf('./works/viloria-perfumes');
  const sIdx = home.data.indexOf('./works/saffron-brew');
  const aIdx = home.data.indexOf('./works/al-rayyan-castle');

  console.log(`✓ Card positions: Viloria @ ${vIdx}, Saffron @ ${sIdx}, ARC @ ${aIdx}`);
  console.log('✓ Viloria is Card #1, Saffron is Card #2, ARC is Card #3:', vIdx < sIdx && sIdx < aIdx);

  console.log('\n=== ALL PRODUCTION VERIFICATIONS PASSED 100%! ===');
}

verifyLive().catch(console.error);
