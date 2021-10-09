const express = require('express');
const { createProxyMiddleware } = require("http-proxy-middleware");

var app = express();

app.use('/coins/markets', createProxyMiddleware({target: "http://api.coingecko.com/api/v3/coins/markets?vs_currency=aud",
headers: {
    accept: "application/json",
    method: "GET",
  },
  onProxyRes: function (proxyRes, req, res) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
 }, changeOrigin: true}));

var port = process.env.PORT || 3001;

app.listen(port);