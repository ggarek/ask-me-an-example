const webpack = require('webpack');
const path = require('path');

const indir = (...parts) => path.join(__dirname, ...parts);

// TODO: add links to enhance/dig the topic

module.exports = {
  // TODO: example of output with entry: { app: './src/index.js' },
  entry: './src/scripts/index.js', // Will be /{public_path}/main.js because it is the main chunk
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
        include: indir('./src/scripts'),
      },
      {
        test: /\.json$/,
        loader: 'json',
        include: indir('./src/locales'),
      },
    ]
  }
};