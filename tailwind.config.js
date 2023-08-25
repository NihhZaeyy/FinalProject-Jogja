/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},

    screens: {
      // small device
      mobile: '320px'
    },
    
    width: {
      // small device
      sd: '320px'
    },

    colors: {
      background1 :'#F1F8FF',
      white: '#FFFFFF',
      button: '#1d764a',
      button2: '#DBEEFE',
      font1: '#FFF',
      font2: '#222222',

    },

    fontFamily: {
      'Lora': ['Lora'],
      'Poppins': ['Poppins'],
    },

    
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

