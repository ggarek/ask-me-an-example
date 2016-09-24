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

const allowedLocales = ['en', 'ru', 'pt'];
const defaultLocale = 'en';
const sendHtmlWithDefinedLocale = (req, res)  => {
  const { locale } = req.params;

  // Send html page with configured locale
  res.write( `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>React i18n Example</title>
</head>
<body>
    <div id="host"></div>
    <script>
      window.appConfig = {};
      window.appConfig.locale = "${locale && allowedLocales.indexOf(locale) !== -1 ? locale : defaultLocale}";
    </script>
    <script src="/assets/main.js"></script>
</body>
</html>
`);

  res.end();
};

app.get('/', (req, res) => res.redirect("/en"));
app.get('/:locale', sendHtmlWithDefinedLocale);

app.listen(EXPRESS_PORT, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://0.0.0.0:${EXPRESS_PORT}`);
});