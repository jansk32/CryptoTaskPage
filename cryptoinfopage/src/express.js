var express = require("express");
var { createProxyMiddleware } = require('http-proxy-middleware');


var app = express();
var port = process.env.port || 3000;

app.use('', createProxyMiddleware({target: "http://api.coingecko.com/api/v3", changeOrigin: true}))


app.listen(port);