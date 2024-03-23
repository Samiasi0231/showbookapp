/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  mode :"jilt",
  theme: {
  
    extend: {
      colors:{
    
      },
      fontFamily:{
      poppins:["poppins","sans-serif"],
      },
    },
    screen:{
xs:"480px",
ss:"620px",
sm:"768px",
md:"1060px",
lg:"1200px"
    }
  },
  plugins: [],
}

