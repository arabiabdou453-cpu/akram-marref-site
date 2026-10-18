const fs = require('fs');
const { execSync } = require('child_process');

console.log('=== Step 1: Update wnmZ770gq.C6unbM4D.mjs (CMS Collection Handler) ===');
const wnmzPaths = [
  'public/_framer/49d1839e6f/wnmZ770gq.C6unbM4D.mjs',
  'public/_framer/07eebbe483/wnmZ770gq.C6unbM4D.mjs'
];

for (const p of wnmzPaths) {
  if (!fs.existsSync(p)) continue;
  let code = fs.readFileSync(p, 'utf-8');
  if (!code.includes('viloria-perfumes')) {
    const target = 'if(e.id==="2aghsjbCf"';
    const viloriaPatch = `if(e.id==="M9GzvQJK7"||e.jf9cHyJea==="perfumes-media-posts"||e.jf9cHyJea==="viloria-perfumes"||(typeof e.lvvRv1y9U==="string"&&(e.lvvRv1y9U.toLowerCase().includes("perfumes")||e.lvvRv1y9U.toLowerCase().includes("viloria")))){e.id="M9GzvQJK7";e.jf9cHyJea="viloria-perfumes";e.lvvRv1y9U="VILORIA PERFUMES";e.dK7pUTT1e="[1,[4,\\"p\\",null,[5,\\"Full Brand Identity\\"]]]";e.j4fQjGAz1={alt:"VILORIA PERFUMES",src:"/media/works/viloria-perfumes/viloria-cover.webp",srcSet:"/media/works/viloria-perfumes/viloria-cover-1024.webp 1024w, /media/works/viloria-perfumes/viloria-cover-2048.webp 2048w, /media/works/viloria-perfumes/viloria-cover.webp 2048w",pixelWidth:2048,pixelHeight:2048};e.wjhxaKF0h={alt:"VILORIA PERFUMES",src:"/media/works/viloria-perfumes/viloria-cover-hover.png",srcSet:"/media/works/viloria-perfumes/viloria-cover-hover.png",pixelWidth:2048,pixelHeight:2048};}` + target;
    code = code.replace(target, viloriaPatch);
    fs.writeFileSync(p, code, 'utf-8');
    console.log('✓ Patched wnmZ:', p);
  } else {
    console.log('• wnmZ already includes viloria-perfumes:', p);
  }
}

console.log('=== Step 2: Update asVp159yxm bundle (CMS query wt interceptor) ===');
const asVpPath = 'public/_framer/49d1839e6f/asVp159yxmBC7CLWffm2UzduwxU4jpEWKZS7XdyxGEI.3AGBmqag.mjs';
let asVp = fs.readFileSync(asVpPath, 'utf-8');

const wtOldStart = asVp.indexOf('wt=({query:e,pageSize:t,children:n})=>{');
const wtOldEnd = asVp.indexOf('Z={Desktop:`EKPj7n3tH`', wtOldStart);

if (wtOldStart !== -1 && wtOldEnd !== -1) {
  const cleanWt = `wt=({query:e,pageSize:t,children:n})=>{let r=de(e);if(Array.isArray(r)){r=r.map(item=>{if(item?.id==="M9GzvQJK7"||item?.jf9cHyJea==="perfumes-media-posts"||item?.jf9cHyJea==="viloria-perfumes"||(typeof item?.lvvRv1y9U==="string"&&(item.lvvRv1y9U.toLowerCase().includes("perfumes")||item.lvvRv1y9U.toLowerCase().includes("viloria")))){try{if(item?.dK7pUTT1e?.props?.children?.props)item.dK7pUTT1e.props.children.props.children="Full Brand Identity";}catch(e){}if(item.j4fQjGAz1){item.j4fQjGAz1.src="/media/works/viloria-perfumes/viloria-cover.webp";item.j4fQjGAz1.srcSet="/media/works/viloria-perfumes/viloria-cover.webp";item.j4fQjGAz1.alt="VILORIA PERFUMES";}if(item.wjhxaKF0h){item.wjhxaKF0h.src="/media/works/viloria-perfumes/viloria-cover-hover.png";item.wjhxaKF0h.srcSet="/media/works/viloria-perfumes/viloria-cover-hover.png";item.wjhxaKF0h.alt="VILORIA PERFUMES";}return{...item,id:"M9GzvQJK7",jf9cHyJea:"viloria-perfumes",lvvRv1y9U:"VILORIA PERFUMES"};}if(item?.id==="dgXhzIuU6"||item?.jf9cHyJea==="saffron-brew"||(typeof item?.lvvRv1y9U==="string"&&item.lvvRv1y9U.toLowerCase().includes("saffron"))){try{if(item?.dK7pUTT1e?.props?.children?.props)item.dK7pUTT1e.props.children.props.children="Full Brand Identity";}catch(e){}if(item.j4fQjGAz1){item.j4fQjGAz1.src="/media/works/saffron-brew/saffron-cover.jpg";item.j4fQjGAz1.srcSet="/media/works/saffron-brew/saffron-cover.jpg";item.j4fQjGAz1.alt="SAFFRON";}if(item.wjhxaKF0h){item.wjhxaKF0h.src="/media/works/saffron-brew/saffron-hover-cover.png";item.wjhxaKF0h.srcSet="/media/works/saffron-brew/saffron-hover-cover.png";item.wjhxaKF0h.alt="SAFFRON";}return{...item,id:"dgXhzIuU6",jf9cHyJea:"saffron-brew",lvvRv1y9U:"SAFFRON"};}if(item?.id==="2aghsjbCf"||item?.jf9cHyJea==="formura-labs-full-branding"||item?.jf9cHyJea==="al-rayyan-castle"||(typeof item?.lvvRv1y9U==="string"&&item.lvvRv1y9U.toLowerCase().includes("formura"))){try{if(item?.dK7pUTT1e?.props?.children?.props)item.dK7pUTT1e.props.children.props.children="Full Brand Identity";}catch(e){}if(item.j4fQjGAz1){item.j4fQjGAz1.src="/media/works/al-rayyan-castle/arc-cover.jpg";item.j4fQjGAz1.srcSet="/media/works/al-rayyan-castle/arc-cover.jpg";item.j4fQjGAz1.alt="AL RAYYAN CASTLE";}if(item.wjhxaKF0h){item.wjhxaKF0h.src="/media/works/al-rayyan-castle/arc-cover-hover.png";item.wjhxaKF0h.srcSet="/media/works/al-rayyan-castle/arc-cover-hover.png";item.wjhxaKF0h.alt="AL RAYYAN CASTLE";}return{...item,id:"2aghsjbCf",jf9cHyJea:"al-rayyan-castle",lvvRv1y9U:"AL RAYYAN CASTLE"};}return item;});}return n(r);},`;
  asVp = asVp.slice(0, wtOldStart) + cleanWt + asVp.slice(wtOldEnd);
  fs.writeFileSync(asVpPath, asVp, 'utf-8');
  console.log('✓ Clean wt interceptor installed in asVp bundle');
}

console.log('=== Step 3: Surgical in-place swap of Row 0 cards in works.html ===');
const baseWorksHtml = execSync('git show be797e4:works.html', { encoding: 'utf-8' });

const c1Start = baseWorksHtml.lastIndexOf('<div class="framer-z54et1">', baseWorksHtml.indexOf('./works/saffron-brew'));
const c2Start = baseWorksHtml.lastIndexOf('<div class="framer-1eigxyk">', baseWorksHtml.indexOf('./works/al-rayyan-castle'));
const c3Start = baseWorksHtml.lastIndexOf('<div class="framer-1vo60tm">', baseWorksHtml.indexOf('./works/perfumes-media-posts'));
const rowEnd = baseWorksHtml.indexOf('<div class="framer-frof2j" data-framer-name="row">');

let newC1 = baseWorksHtml.slice(c1Start, c2Start);
let newC2 = baseWorksHtml.slice(c2Start, c3Start);
let newC3 = baseWorksHtml.slice(c3Start, rowEnd);

// newC1 becomes Viloria Perfumes:
// 1. Specific media replacements FIRST
newC1 = newC1.replaceAll('/media/works/saffron-brew/saffron-cover.jpg 1638w', '/media/works/viloria-perfumes/viloria-cover.jpg 2048w');
newC1 = newC1.replaceAll('/media/works/saffron-brew/saffron-cover.jpg', '/media/works/viloria-perfumes/viloria-cover.jpg');
newC1 = newC1.replaceAll('/media/works/saffron-brew/saffron-hover-cover.png', '/media/works/viloria-perfumes/viloria-cover-hover.png');
newC1 = newC1.replaceAll('/media/works/saffron-brew/saffron-hover-cover.jpg 1638w', '/media/works/viloria-perfumes/viloria-cover-hover.jpg 2048w');
newC1 = newC1.replaceAll('/media/works/saffron-brew/saffron-hover-cover.jpg', '/media/works/viloria-perfumes/viloria-cover-hover.jpg');
newC1 = newC1.replaceAll('alt="SAFFRON"', 'alt="VILORIA PERFUMES"');
newC1 = newC1.replaceAll('>SAFFRON<', '>VILORIA PERFUMES<');
// 2. Generic slug replacements AFTER
newC1 = newC1.replaceAll('./works/saffron-brew', './works/viloria-perfumes');
newC1 = newC1.replaceAll('/works/saffron-brew', '/works/viloria-perfumes');

// newC2 becomes Saffron Brew:
// 1. Specific media replacements FIRST
newC2 = newC2.replaceAll('/media/works/al-rayyan-castle/arc-cover-1024.webp 1024w, /media/works/al-rayyan-castle/arc-cover-2048.webp 2048w, /media/works/al-rayyan-castle/arc-cover.jpg 3750w', '/media/works/saffron-brew/saffron-cover.jpg 1638w');
newC2 = newC2.replaceAll('/media/works/al-rayyan-castle/arc-cover.jpg', '/media/works/saffron-brew/saffron-cover.jpg');
newC2 = newC2.replaceAll('/media/works/al-rayyan-castle/arc-cover-hover.png', '/media/works/saffron-brew/saffron-hover-cover.png');
newC2 = newC2.replaceAll('alt="AL RAYYAN CASTLE"', 'alt="SAFFRON"');
newC2 = newC2.replaceAll('>AL RAYYAN CASTLE<', '>SAFFRON<');
// 2. Generic slug replacements AFTER
newC2 = newC2.replaceAll('./works/al-rayyan-castle', './works/saffron-brew');
newC2 = newC2.replaceAll('/works/al-rayyan-castle', '/works/saffron-brew');

// newC3 becomes Al Rayyan Castle:
// 1. Specific media replacements FIRST
newC3 = newC3.replaceAll('https://framerusercontent.com/images/pxabGWOTzuHaRk9tUvu4Wl8YE1Q.png?scale-down-to=512&amp;width=2328&amp;height=1690 512w,https://framerusercontent.com/images/pxabGWOTzuHaRk9tUvu4Wl8YE1Q.png?scale-down-to=1024&amp;width=2328&amp;height=1690 1024w,https://framerusercontent.com/images/pxabGWOTzuHaRk9tUvu4Wl8YE1Q.png?scale-down-to=2048&amp;width=2328&amp;height=1690 2048w,https://framerusercontent.com/images/pxabGWOTzuHaRk9tUvu4Wl8YE1Q.png?width=2328&amp;height=1690 2328w', '/media/works/al-rayyan-castle/arc-cover-1024.webp 1024w, /media/works/al-rayyan-castle/arc-cover-2048.webp 2048w, /media/works/al-rayyan-castle/arc-cover.jpg 3750w');
newC3 = newC3.replaceAll('https://framerusercontent.com/images/pxabGWOTzuHaRk9tUvu4Wl8YE1Q.png?width=2328&amp;height=1690', '/media/works/al-rayyan-castle/arc-cover.jpg');
newC3 = newC3.replaceAll('alt="Perfumes"', 'alt="AL RAYYAN CASTLE"');
newC3 = newC3.replaceAll('>Perfumes<', '>AL RAYYAN CASTLE<');
newC3 = newC3.replaceAll('>Social Media Posts<', '>Full Brand Identity<');
// 2. Generic slug replacements AFTER
newC3 = newC3.replaceAll('./works/perfumes-media-posts', './works/al-rayyan-castle');
newC3 = newC3.replaceAll('/works/perfumes-media-posts', '/works/al-rayyan-castle');

let finalWorksHtml = baseWorksHtml.slice(0, c1Start) + newC1 + newC2 + newC3 + baseWorksHtml.slice(rowEnd);

// Update JSON-LD in works.html
finalWorksHtml = finalWorksHtml.replace(
  '{"@type":"ListItem","position":1,"url":"https://akram-marref.netlify.app/works/perfumes-media-posts","name":"Perfumes | Social Media Posts"}',
  '{"@type":"ListItem","position":1,"url":"https://akram-marref.netlify.app/works/viloria-perfumes","name":"VILORIA PERFUMES | Full Brand Identity"}'
);


// Handover data in works.html: replace perfumes-media-posts with viloria-perfumes
finalWorksHtml = finalWorksHtml.replaceAll('"perfumes-media-posts"', '"viloria-perfumes"');
finalWorksHtml = finalWorksHtml.replaceAll('"Perfumes"', '"VILORIA PERFUMES"');

fs.writeFileSync('works.html', finalWorksHtml, 'utf-8');
console.log('✓ works.html surgically updated with exact 15 cards');
