/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'colorHover': '#0C8CE9',
        'green': '#10B817',
        'fundo': '#E0E0E0',
      },

      spacing: {
        '85px': '85px',
      },
    },

  },
  plugins: [],
}

