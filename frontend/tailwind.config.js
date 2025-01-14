/** @type {import('tailwindcss').Config} */
export default {
  purge:['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'dark-white': '#cccccc',
        'dark-gray': '#121212',

        //teal/light blue palette
        'sea-green': '#20B2AA',
        'light-teal': '#66CDAA',
        'medium-aqua': '#48D1CC',
        'dark-teal':'#2c544b',
        'med-teal':'#418071',
        'aqua': '#7FFFD4',
        'light-blue': '#B0E0E6',
        'powder-blue': '#AFEEEE',
        'sky-blue': '#87CEEB',
        'random-gray': '#454444',
        'sidebar-gray': '#18181a',
        'persimmon': '#fe5757',
        'text-box': '#0a0b0b',
        
      },
    },
  },
  plugins: [],
}

