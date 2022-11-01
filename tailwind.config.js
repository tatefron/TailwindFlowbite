/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mainColor:'#8F00FF'
      },
      padding: {
        base: '15px'
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1440px'
      }
    },
  },
  plugins: [],
}
