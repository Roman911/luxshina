/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      'display': ['Gilroy'],
      'body': ['Gilroy'],
      'gilroy': ["Gilroy", "sans-serif"],
    },
    extend: {
      colors: {
        black: '#050000',
        'slate': {
          100: '#F5F7FA',
        },
        'gray': {
          300: '#C4C8CC',
          500: '#707680',
        },
        'natural': {
          400: '#B0B0B0',
        },
        'amber': {
          400: '#FFBA14',
        },
        'blue': {
          300: '#78B7EF',
          500: '#0F76D1',
          600: '#0D6BBD',
          700: '#0966B8',
        }
      }
    },
  },
  plugins: [],
}

