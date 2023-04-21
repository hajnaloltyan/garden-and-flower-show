/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    colors: {
      tears: '#ec5242',
    },
    backgroundImage: {
      'hero-image': 'url("./images/light3.jpg")',
      'main-image': 'url("./images/green-main.jpg")',
      'clematis-image': 'url("./images/clematis1.jpg")',
      'hydrangea-image': 'url("./images/hydrangea.jpg")',
    },
    extend: {},
  },
  plugins: [],
};
