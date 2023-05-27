/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.css",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
  container:{
    center:true
  },
    extend: {
      zIndex:{
        '100':'1000'
      }
    },
  },
  plugins: [],
}
