const baseFontSize = 1
const baseLineHeight = baseFontSize * 1.25

const fontSizes = {
  sm: {
    'font-size': '.7rem',
    'line-height': `1rem`,
  },
  normal: {
    'font-size': '1rem',
    'line-height': '1.25rem',
  },
  md: {
    'font-size': '1.33rem',
    'line-height': '1.5rem',
  },
  lg: {
    'font-size': '1.77rem',
    'line-height': '1.88rem',
  },
  xl: {
    'font-size': '2rem',
    'line-height': '2.4rem',
  },
}


const fontFamilies = {
  primary: {
    name: '\'Open Sans\', sans-serif',
    fontWeights: {
      regular: '400',
      semibold: '600',
      bold: '700',
    },
  },
}

module.exports = {
  fontSizes,
  fontFamilies,
}
