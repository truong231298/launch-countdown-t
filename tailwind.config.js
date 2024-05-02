/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Grayishblue': 'hsl(237, 18%, 59%)',
        'Softred': 'hsl(345, 95%, 68%)',
        'White': 'hsl(0, 0%, 100%)',
        'Darkdesaturatedblue': 'hsl(236, 21%, 26%)',
        'Verydarkblue': 'hsl(235, 16%, 14%)',
      },
      backgroundImage: {
        bgStars: "url('/images/bg-stars.svg')",
        bgHills: "url('/images/pattern-hills.svg')"
      }
    },
  },
  plugins: [],
}