/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}","./node_modules/flowbite-react/**/*.js,jsx,txs"],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
