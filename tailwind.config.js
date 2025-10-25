/** @type {import('tailwindcss').Config} */

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
            primary:'#f5f5f5',
            secondary:'#525453',
            accent: '#AC3C3C',
        },
        fontFamily: {
            sans: ['Kanit', 'sans-serif'],
            heading: ['Cookie', 'cursive'],
          },
          spacing: {
            '128': '32rem',
            '144': '36rem',
          }

      },
    },
    plugins: [],
  }