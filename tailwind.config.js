/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.html"],
  theme: {
    container:{
      center:true,
    },
    extend: {
      fontFamily: {
        'bad': ['Bad Script'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
