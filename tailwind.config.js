/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      customGridRow: {
        rowHeight: "minmax(20px, auto)"
      },
      colors: {
        primary: "rgb(20,21,24)",
        secondary: "rgb(17,20,27)",
        tertiary: "rgb(12,15,23)",
        dimWhite: "rgb(226,220,220)",
        darkWhite: "#A4A7B1",
        accent: "rgb(66,194,233)",
        lightGrey: "rgb(35,40,46)",
        gradstart: "rgb(245,79,90)",
        gradmid:  "rgb(207,70,170)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};