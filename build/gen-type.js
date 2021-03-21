const fs = require('fs');
const path = require('path');
// const { noElPrefixFile } = require('./common');
//
// const outsideImport = /import .* from '..\/(.*?)\/src\/.*/;

// global.d.ts
fs.copyFileSync(
  path.resolve(__dirname, '../vue-shim.d.ts'),
  path.resolve(__dirname, '../lib/index.d.ts')
);
