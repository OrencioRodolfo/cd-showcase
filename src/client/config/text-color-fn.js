const textColors = require('./text-colors');

/**
 * Responsible for providing the color
 * for the scale and variant asked
 */
module.exports = function getColor(scale = 'dark', variant = 'primary') {
  return textColors[scale][variant];
};
