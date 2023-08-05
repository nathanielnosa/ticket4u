/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        leftColor: '#F3F6FD',
        rightColor:'#E9F0F8',
        btnColor: '#6682E3',
        bgGreen: '#74C684',
        offBlack:'#9FA5C5',
        textBlue:'#5061A9',
        splitBorder:'#d7dff2'

      },
      fontFamily:{
        main:['Rubik']}
    },
  },
  plugins: [],
}

