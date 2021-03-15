const path = require('path');

const name = 'every-ui'; // page title

const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  publicPath: '/',
  outputDir: 'lib',
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name,
    resolve: {
      alias: {
        '@': resolve('website/src'),
        '@every-ui': resolve('packages')
      },
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    entry: process.env.VUE_APP_TYPE === 'WEB' ? resolve('website/src/main.ts') : resolve('packages/every-ui/index.ts'),
  },
  chainWebpack(config) {
    config.optimization.delete('splitChunks');
  }
};
