/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // screens: {
    //   xs: '320px',
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1280px',
    //   xxl: '1440px',
    // },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        ultraLightGray: '#B7B7B7',
        lightGray: '#F1F1F1',
        gray: '#707070',
        darkGreen: '#003349',
        beige: '#D7D2CB',
        brown: '#60584D',
      },
      container: {
        center: true,
       
      },
      keyframes: {
        slide: {
          '0%': {
            transform: 'translateX(-200px)',
          },

          // '50%': {
          //   transform: 'translateX(calc(px - 100%))',
          // },

          // '100%': {
          //   transform: 'translateX(0px)',
          // },
        },
      },
      animation: {
        slide: 'slide 0.3s forwards',
      },
    },
  },
  plugins: [],
}
