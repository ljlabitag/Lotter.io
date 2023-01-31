/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        c_blue: '#5463FF',
        c_red: '#FF1818',
        c_gray: '#ECECEC',
        c_yellow: '#FFC300'
      }
    },
  },
  plugins: [],
}
