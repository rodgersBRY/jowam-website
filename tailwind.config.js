/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#008000",
        secondary: "#1ea61e",
      },
      keyframes: {
        scrollLeft: {
          to: {
            left: "-200px",
          },
        },
      },
      animation: {
        scrollLeft: "scrollLeft 10s linear infinite",
      },
    },
  },
  plugins: [],
};
