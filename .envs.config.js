const { exist } = require('flagr');

module.exports = {
  test: exist('--test'),
  prod: exist('--prod'),
};