const path = require('path');

module.exports = {
  // join means to "replace"
  entry: path.join(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    // resolve means to *add* so you add the current directory + dist
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        // which files should babel be used on
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}