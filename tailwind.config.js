/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      colors: {
        'bright-orange': 'hsl(var(--bright-orange))',
        'dark-cyan': 'hsl(var(--dark-cyan))',
        'very-dark-cyan': 'hsl(var(--very-dark-cyan))',
      },
      fontFamily: {
        'lexend-deca': ['Lexend Deca'],
        'big-shoulders-display': ['Big Shoulders Display'],
      },
    },
  },
  plugins: [],
}
