/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    screens: {
      xl: { max: '1279px' },
      lg: { max: '1040px' },
      lgm: {min: '1040px'},
      ls: { max: '945px' },
      md: { max: '800px' },
      ms: { max: '767px' },
      msm: {min: '600px'},
      sm: { max: '560px' },
      xxs: { max: '360px' },

    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        blue_primary: 'rgb(0, 82, 255)',
        black: 'rgb(5, 15, 25)',
        gray100: 'rgb(10,11,13)',
      },
    },
  },
  plugins: [],
};
