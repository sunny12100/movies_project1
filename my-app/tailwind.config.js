/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".scrollable-hidden": {
          "overflow-x": "auto",
          "-webkit-overflow-scrolling": "touch",
          "scrollbar-width": "none",
        },
        ".scrollable-hidden::-webkit-scrollbar": {
          display: "none",
        },
      });
    },
  ],
};
