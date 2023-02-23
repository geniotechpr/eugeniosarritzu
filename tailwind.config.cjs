const defaultTheme = require('tailwindcss/defaultTheme');

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
