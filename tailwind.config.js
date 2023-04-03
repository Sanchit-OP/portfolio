/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
  ],
  theme: {
    extend: {
      dropShadow: {
        
        '8xl': [
          '0 0px 10px #df2935' ,
          '0 0px 40px #df2935' ,
          '0 0px 80px #df2935' ,
          '0 0px 100px #df2935' 
        ]
      }
    },
  },
  plugins: [],
}
