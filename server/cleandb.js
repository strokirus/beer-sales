const fs = require('fs');

const fileKey = './base/db-bk.json';
 
const contents = fs.readFileSync(fileKey, 'utf8');

let parsed = JSON.parse(contents);

parsed = parsed.filter(e => e.labels !== undefined);

console.log(JSON.stringify(parsed));