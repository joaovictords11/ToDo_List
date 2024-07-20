/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
      'sans': ['Roboto', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        "background-img": "url('/Assets/background.png')",
      },
      width: {
        '500px': '500px',
      }
    },
  },
  plugins: [],
}

