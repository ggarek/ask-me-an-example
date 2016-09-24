const webpack = require('webpack');
const path = require('path');

const indir = (...parts) => path.join(__dirname, ...parts);


module.exports = {
  devtool: "eval-source-map",
  entry: './src/scripts/index.js',
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