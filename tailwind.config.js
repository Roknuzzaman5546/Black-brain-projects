/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Blackops: "'Black Ops One', cursive",
        Dancing: "'Dancing Script', cursive"
      }
    },
  },
  plugins: [require("daisyui")],

}

