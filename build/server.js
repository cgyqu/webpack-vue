const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webHotMiddleware = require("webpack-hot-middleware");
var opn = require('opn')

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

var port = 3000; 

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
var devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: "/dist/"
})

var uri = 'http://localhost:' + port + '';

devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  opn(uri + "/dist/index.html")
})

app.use(devMiddleware);
app.use(webHotMiddleware(compiler));

// Serve the files on port 3000.
app.listen(port, function () {
  console.log('Example app listening on port 3000!\n');
});