"use strict";

var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;
app.get('/', function (req, res) {
  res.send("<h1>Could I BE anymore usefull</h1>");
});
app.listen(PORT, function () {
  console.log("Listening on http://localhost:".concat(PORT));
});