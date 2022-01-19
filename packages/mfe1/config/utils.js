require('dotenv').config({
  path: process.env.NODE_ENV !== 'production' ? './.env.development' : './.env',
});

const utils = {
  port: process.env.PORT,
  appName: process.env.APP_NAME,
  nodeEnv: process.env.NODE_ENV,
};

module.exports = utils;
