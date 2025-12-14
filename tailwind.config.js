/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#94634f", // Terracotta
        "background-light": "#f6f3ed", // Beige
        "background-dark": "#282623", // Dark Brown
        "card-light": "#e9e4d9",
        "card-dark": "#3d3a36",
        "section-light": "#f0ece4",
        "section-dark": "#33312e"
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        body: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};