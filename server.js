const express = require('express');
const favicon = require('express-favicon');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(express.static("public"));

app.get('/*', function (req, res) {
  res.sendFile("./public/index.html");
});

app.listen(port);