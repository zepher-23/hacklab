/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          green: {
            400: "#D2FF72",
            500: "#B4E05F",   // for hover states
          }
        }
      }
    },
    plugins: []
  }
  