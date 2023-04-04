/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'blue-violet': {
          DEFAULT: '#5557BD',
          50: '#D9DAF0',
          100: '#CBCBEB',
          200: '#ADAEDF',
          300: '#9091D4',
          400: '#7274C8',
          500: '#5557BD',
          600: '#3D3F9D',
          700: '#2D2F75',
          800: '#1E1E4C',
          900: '#0E0E24',
          950: '#060610'
        },
        'boston-blue': {
          DEFAULT: '#448FC6',
          50: '#D1E3F1',
          100: '#C1DAEC',
          200: '#A2C7E3',
          300: '#83B4D9',
          400: '#63A2D0',
          500: '#448FC6',
          600: '#3172A1',
          700: '#245376',
          800: '#17354B',
          900: '#0A1720',
          950: '#03070A'
        },
      },
      fontFamily: {
        'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}

