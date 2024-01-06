/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "monst":['Montserrat','sans-serif']
      },
      animation:{
        'anim' : 'anmi 1.5s cubic-bezier(0.19, 1, 0.22, 1) 1.5s both',
        'anim2' : 'anmi 1.5s cubic-bezier(0.19, 1, 0.22, 1) 3s both',
        'anim3' : 'anmi 1.5s cubic-bezier(0.19, 1, 0.22, 1) 5s both',
        'anim4' : 'anmi2 2s cubic-bezier(0.19, 1, 0.22, 1) 5.5s both',
      },
      keyframes:{
        'anmi' : {
          'to':{
            'margin-top':'-100px'
          }
      },
        'anmi2' : {
          'to':{
            'transform':'translateY(-100%)'
          }
        },
      }
    },
  },
  plugins: [ ],
} 