// import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#EEEEEE',
        dark: '#111111',
        brand: '#f05c5c',
      },
    },
  },
  plugins: [],
};
