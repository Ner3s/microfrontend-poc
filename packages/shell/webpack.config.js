const path = require('path');

const utils = require('./config/utils');
const plugins = require('./config/webpack/plugins');

module.exports = {
  output: {
    publicPath: `http://localhost:${utils.port}/`,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },

  mode: utils.nodeEnv,

  devServer: {
    port: utils.port,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    compress: true,
  },

  devtool: utils.nodeEnv === 'development' && 'source-map',

  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(js|mjs|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        include: path.resolve(__dirname),
        exclude: [/node_modules/],
      },
    ],
  },

  plugins,
};
