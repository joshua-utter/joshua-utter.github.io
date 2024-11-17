/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        custom: {
          sage: '#BED6C7',
          gray: '#ADC0B4',
          // taupe: '#8A7E66',
          taupe: '#8D7966',
          khaki: '#A79B83',
          sand: '#BBB2A1',
          // new custom colors
          eggshell: '#F8F1E9',
          matteblue: '#54787D',
          lightblue: '#C6D4E1',
          sosleepy: '#EBE7E0',
          darkgreengray: '#697060',
        }
      }
    },
  },
  plugins: [],
};