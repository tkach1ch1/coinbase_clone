/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    screens: {
      xxl: {min: '1700px'},
      xl: { max: '1140px' },
      lg: { max: '1040px' },
      lgm: { min: '1040px' },
      ls: { max: '945px' },
      lsm: { min: '945px' },
      md: { max: '815px' },
      mdm: { min: '815px' },
      ms: { max: '767px' },
      msm: { min: '600px' },
      sm: { max: '560px' },
      smm: { min: '560px' },
      xxs: { max: '360px' },
    },
    container: {
      center: true,
    },

    extend: {
      colors: {
        blue_primary: 'rgb(0, 82, 255)',
        main_black: '#0A0B0D',
        green_positive: 'rgb(9,133,81)',
        red_negative: 'rgb(207,32,47)',
        main_gray: 'rgb( 91,97,110)',
        gray60: 'rgba(91, 97, 110, 0.6)',
        gray90: 'rgba(91, 97, 110, 0.9)',
        gray_button: 'rgb(238,240,243)',
        light_gray: 'rgb(245,248,255)',
        white60: 'rgba(255, 255, 255, 0.7)'
      },
      maxWidth: {
        mainWidth: '1198px',
      },
    },
  },
  plugins: [],
};
