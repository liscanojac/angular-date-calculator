/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{html,ts}",
    "!**/node_modules/**",
    "!**/.git/**",
    "!./src/app/shared/services/**"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

