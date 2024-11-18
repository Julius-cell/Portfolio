/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/app/**/**/*.component.html"],
  theme: {
    fontFamily: {
      custom: ['"IBM Plex Mono"', "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url('assets/images/web-developer.png')",
      },
    },
  },
  plugins: [],
};
