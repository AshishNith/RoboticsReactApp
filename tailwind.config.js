/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#8462E8',
        'black2': 'rgb(255,255,255,0.05)',
      },
      fontSize: {
        'largeF': '150px'
      },
      leading: {
        'extraTight' : '130px'
      },
      fontFamily: {
        'roboto' : ['Roboto', 'sans-serif']
      }

    },
  },
  plugins: [],
}