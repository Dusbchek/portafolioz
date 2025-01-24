/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",       // Archivo HTML
    "./app/**/*.{js,ts}", // Archivos JS en la carpeta "app"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
