module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
    './public/**/*.html',
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './layouts/**/*.{ts,tsx,js,jsx}',
  ],
  darkMode: 'media',
  theme: {
    container: {
      padding: '2rem',
      center: true,
    },
    extend: {
      colors: {
        azure: {
          50: '#f5f9ff',
          100: '#ebf3ff',
          200: '#cce1ff',
          300: '#aeceff',
          400: '#71aaff',
          500: '#3485FF',
          600: '#2f78e6',
          700: '#2764bf',
          800: '#1f5099',
          900: '#19417d',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
