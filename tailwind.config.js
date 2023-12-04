/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      vsm: '400px',
      sm: '570px',
      vmd: '769px',
      md: '993px',
      lg: '1162px'
    },
    extend: {
      colors:{
        pinkred:{
         '0': '#EA80AD',
         '50': '#D5015B'
         }, 
        whitish:{
          '0': '#E8E8E8',
          '50': '#667D99'
        },
        blackish:{
          '0': '#222222',
          '50': '#111111'
        }
      }
    },
  },
  plugins: [],
}