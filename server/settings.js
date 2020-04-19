const fs = require('fs');

const fileKey = './base/db.json';
 
let base = fs.readFileSync(fileKey, 'utf8');

base = JSON.parse(base);

module.exports = {
    base,
}
