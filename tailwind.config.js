/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#E15A1D',
        'grey': '#F7F7F7',
        'dark': '#5B5254',
      },
      boxShadow: {
        'default': ' 0 2px 3px 0 rgb(0 0 0 / 0.3)',
      }
    },
  },
  plugins: [],
}

