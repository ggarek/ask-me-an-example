const fs = require('fs');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');

const app = express();
const compiler = webpack(config);
const EXPRESS_PORT = process.env.EXPRESS_PORT || 3000;

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: { colors: true },
});

const hotMiddleware = require('webpack-hot-middleware')(compiler);

app.use(devMiddleware);
app.use(hotMiddleware);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(EXPRESS_PORT, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://0.0.0.0:${EXPRESS_PORT}`);
});