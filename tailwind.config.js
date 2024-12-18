/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E91E63',
          dark: '#C2185B',
          light: '#F48FB1',
        },
        secondary: {
          DEFAULT: '#F5E6E8',
          dark: '#D4B5B9',
          light: '#FFF0F3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

