/* eslint-disable func-names */
const compression = require('compression');
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 80;
const app = express();

app.use(compression());

app.get('*.js', function(req, res, next) {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port);
