/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      padding: {
        '9/16': '56.25%', // This is for the 16:9 aspect ratio
      },
    },
  },
  plugins: [],
}

