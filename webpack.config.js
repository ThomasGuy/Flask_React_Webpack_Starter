/* eslint-disable global-require */
const environment = (process.env.NODE_ENV || 'development').trim();
if (environment === 'development') {
  module.exports = require('./wp_config/webpack.dev.config.js');
} else {
  module.exports = require('./wp_config/webpack.prod.config.js');
}
