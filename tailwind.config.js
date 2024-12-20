/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'lilac':'#F1D9E4',
        // 'lilac': '#FCD7AD',
        'aquamarine': '#3E90E3',
        'button': '#50A2A7',
        'deepBlue': '#164E87',
        'textDark': '#4A4A4A',
        'test': '#89cff0',
      },
      fontFamily: {
        cursive: ['"Dancing Script"', 'cursive'],
      }
    },
  },
  plugins: [],
}

