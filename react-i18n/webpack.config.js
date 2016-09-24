const webpack = require('webpack');
const path = require('path');

const indir = (...parts) => path.join(__dirname, ...parts);

module.exports = {
  // TODO: example of output with entry: { app: './src/index.js' },
  entry: './src/index.js', // Will be /{public_path}/main.js because it is the main chunk
  output: {
    path: indir('build'),
    publicPath: '/assets/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: indir('./src'),
      }
    ]
  }
};