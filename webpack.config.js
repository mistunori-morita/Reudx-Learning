var path = require('path');

const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  watch: true,
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader',
        {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'env', 'stage-1']
          }
        }
      ]
    }]
  }
}