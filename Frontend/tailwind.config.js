// setUp flowBite for tailwind

const flowBite = require('flowbite-react/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', flowBite.content()],

  theme: {
    extend: {},
  },
  plugins: [flowBite.plugin()],
}
