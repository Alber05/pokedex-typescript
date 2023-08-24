/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'pokemon-hollow': ['Pokemon-Hollow', 'sans'],
        'pokemon-solid': ['Pokemon-Solid', 'sans']
      }
    }
  },
  plugins: []
}
