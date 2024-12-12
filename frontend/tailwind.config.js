/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1240px",
          // "2xl": "1496px",
        },
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        alef: ["Alef", "sans-serif"],
      },
      colors: {
        buttonColor: "#FF6B00",
        buttonHover: "#FF8B00",
        bgColor: "#FFF5EF",
        textColor: "#606060",
        borderColor: "#FFE2D1",
      },
    },
  },
  plugins: [],
};
