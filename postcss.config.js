const configPath = './src/client/config';
const theme = 'one'
const colorPalettes = require(`./${configPath}/color-palettes.js`)(theme)
const colorFunction = require(`./${configPath}/color-fn.js`)(theme)
const fontSettings = require(`./${configPath}/font-settings.js`)
const screenSizes = require(`./${configPath}/screen-sizes.js`)

module.exports = {
  plugins: [
    require('postcss-import')({ /* ...options */ }),
    require('postcss-nested')({ /* ...options */ }),
    require('postcss-simple-vars')({ /* ...options */ }),
    require('autoprefixer')({ /* ...options */ }),
    require('postcss-map')({ maps: [colorPalettes, fontSettings, screenSizes] }),
    require('postcss-functions')({
      functions: {
        'get-color': colorFunction,
      },
    }),
  ]
}
