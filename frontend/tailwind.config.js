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
        darkGray: "#1F1F1F",
        gray: "#CBC5CC",
        mobileBG: "#FAFAFA",
        pc: "#8C888A",
        blackLight: "#342F36"
      },
      fontSize: {
        h1: ['26px', '48px'],
        h2: ['20px', '36px'],
        h3: ['18px', 'auto'],
        a1: ['20px', 'auto'],
        a2: ['16px', 'auto'],
        a3: ['14px', 'auto'],
        b1: ['20px', '22.4px'],
        b2: ['18px', '24px'],
        b3: ['16px', '18.2px'],
        b4: ['14px', '18.2px'],
      }

    },
  },
  plugins: [],
}
