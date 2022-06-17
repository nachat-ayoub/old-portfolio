module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", visibility: "hidden" },
          "99%": { opacity: "1" },
          "100%": { opacity: "1", visibility: "visible" },
        },
        fadeOut: {
          "0%": { opacity: "1", visibility: "visible" },
          "99%": { opacity: "0" },
          "100%": { opacity: "0", visibility: "hidden" },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },

      fontFamily: {
        quick: "Quicksand",
        roboto: "Roboto",
      },
      colors: {
        darkPurple: "#160B20",
        Purple: "#3E2CA3",
        lightPurple: "#8C84BA",
        secondary: "#353A47",
      },
      animation: {
        fadeIn: "fadeIn 0.3s linear forwards",
        fadeOut: "fadeOut 0.3s linear forwards",
        wave: "wave 2s linear infinite",
      },
    },
  },
  plugins: [],
};
