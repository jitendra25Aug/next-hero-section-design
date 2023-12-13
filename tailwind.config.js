/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.jsx',
    './components/**/*.jsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        aventa: ['var(--font-aventa)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

