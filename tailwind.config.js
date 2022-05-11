/* eslint-disable no-undef */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'], // enable the active focus state variant
    },
  },
  plugins: [],
};
