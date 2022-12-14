/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    colors:{
      ...colors,
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
