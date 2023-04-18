/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    backgroundImage: {
      'hero-image': 'url("./images/light3.jpg")',
      'main-image': 'url("./images/green-main.jpg")',
    },
    extend: {},
  },
  plugins: [],
};
