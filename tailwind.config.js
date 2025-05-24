/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "brown":{
          100:"#ece0d1",
          300:"#dbc1ac",
          600:"#967259",
          900:"#634832"
        }
      },
      boxShadow:{
        "normal": "0px 1px 10px rgba(0,0,0,0.05)",
      },
      borderRadius:{
        "4xl":"2rem"
      },
      fontFamily:{
        "DanaMedium":"Dana Medium",
        "DanaBold":"Dana Bold",
        "DanaLight":"Dana Light",

        "MorabaLight":"Moraba Light",
        "MorabaMedium":"Moraba Medium",
        "MorabaBold":"Moraba Bold",
      },
      letterSpacing:{
        "tightest" : "-.065em"
      },
      container:{
        center: true,
        padding: {
          DEFAULT:"1rem",
          lg:"0.625rem",


        }
      },
      backgroundImage:{
        "home-mobile" : "url(../public/assets/images/headerBgMobile.webp)",
        "home-desktop" : "url(../public/assets/images/headerBgDesktop.webp)",
      }
    },
    screens: {
      "xs": "480px",
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [
      function ({addVariant}){
    addVariant('child','&>*');
    addVariant('child-hover','&>*:hover');
      }
  ],
}
