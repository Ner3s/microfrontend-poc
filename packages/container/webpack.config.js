const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

// MFE
const remotes = require("./config/webpack/mfe/remotes");
const exposes = require("./config/webpack/mfe/exposes");

// ENV
const utils = require('./config/utils');

const path = require("path");
const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: `http://localhost:${utils.port}/`,
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    alias: {
      "~": path.resolve(__dirname, "./src"),
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
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: utils.appName,
      filename: "remoteEntry.js",
      remotes,
      exposes,
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        redux: {
          singleton: true,
          requiredVersion: deps.redux
        }
      },
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      title: "Container",
    }),
  ],
};
