const defaultTheme = require('tailwindcss/defaultTheme');
/** Can use these additional colors if you want to define additional colors to defaultTheme in the 
// extend object below. Note: you can also define your onw custom colors in hex. */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens
    }
  },
  darkMode: 'class',
  plugins: []
};
