const https = require('https');

function check(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      console.log('\n--- Checking:', url, '---');
      console.log('Status code:', res.statusCode);
      console.log('x-vercel-id:', res.headers['x-vercel-id']);
      console.log('age:', res.headers['age']);
      console.log('cache-control:', res.headers['cache-control']);

      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log('Body length:', data.length);
        console.log('Title:', (data.match(/<title>(.*?)<\/title>/) || [])[1]);
        console.log('Contains 7.mp4?:', data.includes('7.mp4'));
        console.log('Contains hero video?:', data.includes('<video src="/media/works/viloria-perfumes/gallery/7.mp4"'));
        console.log('Contains VILORIA PERFUMES?:', data.includes('VILORIA PERFUMES'));
        resolve();
      });
    }).on('error', (err) => {
      console.error('Error fetching', url, err.message);
      resolve();
    });
  });
}

async function run() {
  await check('https://akram-marref-site.vercel.app/works/viloria-perfumes?t=' + Date.now());
  await check('https://akram-marref-site.vercel.app/?t=' + Date.now());
}
run();
