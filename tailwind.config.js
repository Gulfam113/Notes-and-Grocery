/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        slate: {
          500: 'rgb(153, 166, 184)', // Your custom color definition
        },
      },
    },
  },
  plugins: [],
}
