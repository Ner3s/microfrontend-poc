/* eslint-disable no-console */
require('dotenv').config({
  path: './.env',
});

const compression = require('compression');
const express = require('express');
const fs = require('fs');
const path = require('path');

const utilsPath = require('./config/utils');

const app = express();

app.use(compression());

const clientDirPath = path.join(__dirname, 'dist');
const clientIndexHtml = path.join(__dirname, 'dist', 'index.html');

app.get('*.js', (req, res, next) => {
  const pathToGzipFile = req.url + '.gz';

  try {
    // check  if gzip files exists
    if (fs.existsSync(path.join(clientDirPath, pathToGzipFile))) {
      // middleware to add .gz in all file.
      req.url = req.url + '.gz';
      res.set('Content-Encoding', 'gzip');
      res.set('Content-Type', 'text/javascript');
    }
  } catch (error) {
    console.error(error);
  }

  next();
});

app.use(express.static(clientDirPath));

app.get('/*', (req, res) => {
  res.sendFile(clientIndexHtml);
});

app.listen(utilsPath.port, () => {
  console.log(`### ${utilsPath.appName} SERVER ###`);
  console.log(`# 🔗 Link: http://localhost:${utilsPath.port}`);
  console.log(`# 🚀 Server is running 🚀`);
});
