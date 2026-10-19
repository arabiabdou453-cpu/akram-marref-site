const fs = require('fs');

console.log('Checking git history of viloria-cover and viloria-cover-hover:');
const cp = require('child_process');
console.log(cp.execSync('git log --oneline -- public/media/works/viloria-perfumes/viloria-cover.jpg public/media/works/viloria-perfumes/viloria-cover-hover.png').toString());
