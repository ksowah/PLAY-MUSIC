/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.25)',
        'dark-rgba': 'rgba(0, 0, 0, 0)',
        'very-dark-rgba': 'rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}