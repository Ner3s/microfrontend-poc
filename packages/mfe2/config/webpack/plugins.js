const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

// Module - MFE
const deps = require('../../package.json').dependencies;
const utils = require('../utils');
const exposes = require('./mfe/exposes');
const remotes = require('./mfe/remotes');

const plugins = [
  new ModuleFederationPlugin({
    name: utils.appName,
    filename: 'remoteEntry.js',
    remotes,
    exposes,
    shared: {
      ...deps,
      react: {
        singleton: true,
        requiredVersion: deps.react,
      },
      'react-dom': {
        singleton: true,
        requiredVersion: deps['react-dom'],
      },
      redux: {
        singleton: true,
        requiredVersion: deps.redux,
      },
    },
  }),
  new HtmlWebPackPlugin({
    template: path.resolve('public', 'index.html'),
    title:
      utils.nodeEnv === 'development' ? utils.appName : 'Microfrontend POC',
    // favicon: path.resolve('public', 'favicon.ico'),
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
    },
  }),
];

const envMode = {
  development: () => {
    //
  },
  staging: () => {
    //
  },
  production: () => {
    plugins.push(
      new CompressionPlugin({
        deleteOriginalAssets: true,
        algorithm: 'gzip',
        exclude: /\.(html)$/,
      }),
    );
  },
};

envMode[utils.nodeEnv]();
module.exports = plugins;
