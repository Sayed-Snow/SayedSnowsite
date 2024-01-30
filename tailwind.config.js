/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        jost:['Jost'],
        caveat:['Caveat']
      },
      dropShadow:{
        header: '2px 2px #000,-2px 2px #000,2px -2px #000,-2px -2px #000,5px 5px 0px rgba(0,0,0,.2);'
      },
      colors:{
        cream:'#f2ede6'
      },
      listStyleImage:{
        check: 'url("./src/assets/check.png")'
      }
    },
  },
  plugins: [],
}