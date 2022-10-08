/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'woodworking': "url('../styles/woodworking.jpg')" ,
        'woodSign': "url('../styles/woodSign.png')",
        'woodBox': "url('../styles/j.jpg')"
      },
      
    },
  },
  plugins: [
    
  ],
}
