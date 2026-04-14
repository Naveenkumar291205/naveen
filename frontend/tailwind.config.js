/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        neon: '#5eead4',
        cyber: '#8b5cf6'
      },
      boxShadow: {
        glow: '0 0 30px rgba(94, 234, 212, 0.35)'
      }
    }
  },
  plugins: []
}
