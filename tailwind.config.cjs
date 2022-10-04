/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*"],
  theme: {
    extend: {
      colors: {
        'text-light': "#7e7e7e",
        'text-dark': '#333333',
        'text-semidark':'#565656',
        'bg-light': '#e9e9e9',
        'bg-dark': '#d9d9d9',
      }
    },
  },
  plugins: [],
}
