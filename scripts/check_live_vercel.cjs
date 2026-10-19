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
        console.log('Contains Viloria?:', data.toLowerCase().includes('viloria'));
        resolve({ status: res.statusCode, headers: res.headers, length: data.length });
      });
    }).on('error', (err) => {
      console.error('Error fetching', url, err.message);
      resolve({ error: err.message });
    });
  });
}

async function run() {
  await check('https://akram-marref-site.vercel.app/?cachebust=' + Date.now());
  await check('https://akram-marref-site.vercel.app/works/viloria-perfumes?cachebust=' + Date.now());
}
run();
