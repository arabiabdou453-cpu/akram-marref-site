import fs from 'fs';

// 1. Read inner from scratch/saffron_gallery.html
const saffronContent = fs.readFileSync('C:/Users/genious pc/.gemini/antigravity/brain/3e6d80ca-9f94-46d2-99cd-191df4eb3bdf/scratch/saffron_gallery.html', 'utf8').trim();
const firstDivEnd = saffronContent.indexOf('>') + 1;
const lastDivStart = saffronContent.lastIndexOf('</div>');
const inner = saffronContent.slice(firstDivEnd, lastDivStart);

// 2. Read asVp
const filePath = 'public/_framer/49d1839e6f/asVp159yxmBC7CLWffm2UzduwxU4jpEWKZS7XdyxGEI.3AGBmqag.mjs';
let js = fs.readFileSync(filePath, 'utf8');

// Find our previous wrapper patch
const patchStart = js.indexOf('(()=>{let isS=');
if (patchStart === -1) {
  console.error('Previous patch not found!');
  process.exit(1);
}

// Find where this self-executing function ends: it ends with `})()`
// Let's locate the full function
const patchEnd = js.indexOf('})()', patchStart) + 4;
const oldPatch = js.slice(patchStart, patchEnd);

// Extract the original div from oldPatch: it's after `return ` at the end
const lastReturn = oldPatch.lastIndexOf('return s(`div`');
const originalDiv = oldPatch.slice(lastReturn + 7);

const newPatch = `(()=>{let isS=(typeof location!=='undefined'&&location.pathname.includes('saffron-brew'))||(typeof S==='string'&&S.toUpperCase().includes('SAFFRON'));if(isS){const rawHtml=${JSON.stringify(inner)};if(typeof window!=='undefined')window.__SAFFRON_GALLERY_INNER=rawHtml;return s(\`div\`,{className:\`framer-ycym2p akram-gallery\`,"data-framer-name":\`img wrapper\`,dangerouslySetInnerHTML:{__html:rawHtml}})}return ${originalDiv}})()`;

js = js.slice(0, patchStart) + newPatch + js.slice(patchEnd);
fs.writeFileSync(filePath, js, 'utf8');
console.log('Successfully embedded complete static gallery directly into asVp component!');
