/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {


    fontFamily: {

'poppins': ["Poppins", 'sans-serif'],
'workSense': [ "Work Sans", 'sans-serif'],
'playFair' : ["Playfair Display", 'serif']




    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

