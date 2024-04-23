const fs = require('fs');
const { join } = require('path');

const files = fs.readdirSync('./**/*.module.ts');

console.log(files);
