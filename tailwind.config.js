/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#101010',
          blue: {
            DEFAULT: '#3865DB',
            light: '#DBF0FF'
          },
          gray: '#F7FAFB',
          yelow: '#E5B52C',
          green: '#89C265'
        }
      },
      fontFamily: {
        onest: ['Onest', 'sans-serif']
      },
      backgroundImage: {
        'bg-50': "url('/bg-50.png')",
        'bg-100': "url('/bg-100.png')",
      },
      fontSize: {
        xxs: ['10px', '13px']
      }
    },
  },
  plugins: [],
}

