/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'segoe': ['Segoe UI'],
        'segoe-bold': ['Segoe UI Bold'],
        'segoe-semibold': ['Segoe UI SemiBold'],
      },
      colors: {
        red: "#F15045",
        darkRed: "#EF3124",
      },
    },
  },
  plugins: [],
}
