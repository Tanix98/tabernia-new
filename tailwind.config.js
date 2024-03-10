/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Exo: ['Exo', 'sans-serif'],
        Nunito: ['Nunito Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
