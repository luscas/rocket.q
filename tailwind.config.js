module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
    './public/**/*.html',
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './layouts/**/*.{js,jsx}',
  ],
  darkMode: 'media',
  theme: {
    container: {
      padding: '2rem',
      center: true
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
