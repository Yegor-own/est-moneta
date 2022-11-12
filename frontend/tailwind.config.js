/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Segoe UI'],
        'head': ['Segoe UI Bold'],
        'action': ['Segoe UI SemiBold'],
      },
      colors: {
        red: "#F15045",
        darkRed: "#EF3124",
        darkGray: "#1F1F1F"
      },

    },
  },
  plugins: [],
}
