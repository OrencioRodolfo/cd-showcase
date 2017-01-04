module.exports = function pageTheme(theme) {
  const themes = {
    one: {
      gender: 'dark',
      primary: {
        base: '#00b3ea',
        light: '#a8eaff',
        dark: '#087da2',
      },
      accent: {
        base: '#b04638',
        light: '#d27b70',
        dark: '#933a2f',
      },
      background: {
        base: '#626262',
        light: '#fff',
        dark: '#1d1d1b',
      },
    },
    two: {
      gender: 'dark',
      primary: {
        base: '#313e3e',
        light: '#304646',
        dark: '#202727',
      },
      accent: {
        base: '#b04638',
        light: '#d27b70',
        dark: '#933a2f',
      },
      background: {
        base: '#e6eaed',
        light: '#fff',
        dark: '#252423',
      },
    },
  };

  return themes[theme] || themes.one;
}
