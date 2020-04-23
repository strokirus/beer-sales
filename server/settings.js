'use strict'

const fs = require('fs');
const path = require('path');

const fileKey = './base/db.json';

let base = fs.readFileSync(path.resolve(__dirname, fileKey), 'utf8');
 
base = JSON.parse(base);

module.exports = {
    base,
}
