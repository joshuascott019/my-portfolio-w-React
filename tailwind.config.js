/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scans these files for Tailwind classes
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'rotate(0)' },
          '25%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
          '75%': { transform: 'rotate(-5deg)' },
        },
      },
      animation: {
        shake: 'shake 0.2s ease-in-out',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'], // Add your custom font here
      },
    },
  },
  plugins: [],
};
