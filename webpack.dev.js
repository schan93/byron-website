const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  // dist used to serve our application in browser
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    compress: true,
    hot: true
    // proxy: {
    //   '/**': {
    //     target: 'http://localhost:5000',
    //     secure: false
    //   }
    // }
  }
});