/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        main: '#ffa500',
        rgba_1: 'rgba(0, 0, 0, 0.8)',
        rgba_2: 'rgba(0, 0, 0, 0.652)',
      },
      objectPosition: {
        'top-center': 'top center'
      },
      boxShadow: {
        'bt': ' rgba(33, 35, 38, 0.1) 0px 10px 10px -10px'
      },
      height: {
        '100vh': '100vh'
      }
    },
  },
  plugins: [],
}
