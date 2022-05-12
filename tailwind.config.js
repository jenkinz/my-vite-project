/* eslint-disable no-undef */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0fa9e6', // brand
          light: '#3fbaeb', // brand-light
          dark: '#0c87b8', // brand-dark
        },
      },
      fontFamily: {
        headline: 'Poppins, sans-serif', // font-headline (note <link ...> stylesheet added to index.html for this font)
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'], // enable the active focus state variant
    },
  },
  plugins: [],
};
