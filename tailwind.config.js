/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 3px 16px 0 rgb(0 0 0 / 11%)",
      },
    },
  },
  plugins: [],
};
