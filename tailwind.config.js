/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      bgBlack: "#0e0e0e",
      lightModeHeading: "#242424",
      lightModeText: "#333333",
      darkModeHeading: "#e9eaeb",
      darkModeText: "#9ba3b4",
      linkBlue: "#4daafc",
      buttonBlue: "#0078d4",
      hoverBlue: "#0069b9",
      darkBlue: "#005fb8",
    },
    extend: {
      opacity: {
        1: "0.01",
        4: "0.04",
        6: "0.06",
        7: "0.07",
        8: "0.08",
        12: "0.12",
      },

      spacing: {
        7.5: "1.875rem",
        15: "3.75rem",
      },
    },
  },
  plugins: [],
};
