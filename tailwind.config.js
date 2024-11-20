/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],  
  corePlugins:
  {
    container:false
  },
  theme: {
    extend: {
      maxWidth: 
      {
        1480: '1480px'
      },
      fontFamily:
      {
        Jakarta:["Plus Jakarta Sans", "serif"]
      },
      width:
      {
        130:'130px'
      },
      backgroundColor:
      {
        ebebe9:'#EBEBE9'
      },
      keyframes:
      {
        slideInleft:
        {
          '0%':
          {
            opacity :"0",
            transform :"translateX(-150px)"
          },
          '100%':
          {
             transform: "translateX(0)"
          }
        }
      },
      animation:
      {
        slideInleft: "slideInleft .5s ease-out backwards"
      }
    },
  },
  plugins: [],
}