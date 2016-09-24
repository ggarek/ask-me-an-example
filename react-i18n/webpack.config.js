const path = require('path');

const indir = (...parts) => path.join(__dirname, ...parts);

// TODO: add links to enhance/dig the topic

module.exports = {
  devtool: "eval-source-map",
  /**
   * In this case the bundle can be accessed as `/{public_path}/main.js` because it is the main chunk.
   * But you can set entry to `{ app: './src/scripts/index.js' }`, then it will be available at `/{public_path}/app.js`
   */
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