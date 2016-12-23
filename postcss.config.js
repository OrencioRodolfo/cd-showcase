const configPath = './src/client/config';
const theme = 'one';
const colorPalettes = require(`./${configPath}/color-palettes.js`)(theme);
const colorFunction = require(`./${configPath}/color-palette-fn.js`)(theme);
const textColorFunction = require(`./${configPath}/text-color-fn.js`);
const fontSettings = require(`./${configPath}/font-settings.js`);
const screenSizes = require(`./${configPath}/screen-sizes.js`);

module.exports = {
  plugins: [
    require('postcss-import')({ /* ...options */ }),
    require('postcss-nested')({ /* ...options */ }),
    require('postcss-mixins'),
    require('postcss-conditionals'),
    require('postcss-map')({ maps: [colorPalettes, fontSettings, screenSizes] }),
    require('postcss-simple-vars')({ /* ...options */ }),
    require('autoprefixer')('last 5 versions'),
    require('postcss-functions')({
      functions: {
        'get-color': colorFunction,
        'text-color': textColorFunction,
      },
    }),
  ]
}
