/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#d7b56d',
          500: '#c8a75f',
          600: '#b8924f',
        },
      },
      boxShadow: {
        glow: '0 0 30px rgba(200, 167, 95, 0.25)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
