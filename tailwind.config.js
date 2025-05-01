/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'shine': 'shine 3s infinite',
      },
      keyframes: {
        shine: {
          '100%': { left: '100%' },
        },
      },
    },
  },
  plugins: [],
}