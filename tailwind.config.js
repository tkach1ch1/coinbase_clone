/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    screens: {
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
        gray0: 'rgb(255,255,255)',
        gray60: 'rgb( 91,97,110)',
        gray100: 'rgb(245,248,255)',
      },
      maxWidth: {
        mainWidth: '1198px',
      },
    },
  },
  plugins: [],
};
