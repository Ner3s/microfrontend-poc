const EnvTarget = {
  development: './.env.development',
  staging: './.env.staging',
  production: './.env',
};

const webpackMode = {
  development: 'development',
  production: 'production',
  staging: 'none',
};

require('dotenv').config({
  path: EnvTarget[process.env.NODE_ENV],
});

const utils = {
  port: process.env.PORT,
  appName: process.env.APP_NAME,
  nodeEnv: process.env.NODE_ENV,
  webpackMode: webpackMode[process.env.NODE_ENV],
  envTarget: EnvTarget[process.env.NODE_ENV],
};

module.exports = utils;
