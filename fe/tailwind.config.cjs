const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
        sansBold: ['Noto Sans JP Bold', 'sans-serif'],
        sansBlack: ['Noto Sans JP Black', 'sans-serif'],
        second: ['Poppins', 'serif'],
        secondBold: ['Poppins Bold', 'serif'],
        third: ['Instrument Sans', 'serif'],
        thirdBold: ['Instrument Sans Bold', 'serif']
      },
      letterSpacing: {
        widest: '0.14em'
      },
      lineHeight: {
        176: '1.76' // This sets line height to 176%
      },
      colors: {
        orange: '#ee4d2d',
        whiteGray: {
          100: '#FFFFFF1A',
          200: '#FFFFFF80',
          500: '#FFFFFFB2',
          600: '#FFFFFF99',
          700: '#FFFFFFCC'
        },
        darkGray: {
          900: '#191C22',
          600: '#262626',
          700: '#262526'
        },
        black: {
          DEFAULT: '#000000',
          800: '#131313CC'
        },
        blueCustom: {
          100: '#1E69FF',
          200: '#007AFF',
          900: '#36AAFA'
        },
        mainBackground: '#191C22',
        blue: '#36AAFA'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/images/')",
        'footer-texture': "url('/img/footer-texture.png')",
        'gradient-blue': 'linear-gradient(218.73deg, #000008 56.27%, #003699 100%)',
        'gradient-blue-top': 'linear-gradient(304.53deg, #000008 51.61%, #003699 98.95%)',
        'gradient-purple': 'linear-gradient(218.91deg, #000008 64.72%, #5C24B6 100%)',
        'gradient-pink': 'linear-gradient(226.72deg, #000008 34.26%, #B4299A 100%)',
        'gradient-green': 'linear-gradient(198.74deg, #131313 63.52%, #119459 100%)',
        'gradient-lightblue': 'linear-gradient(197.76deg, #131313 63.71%, #6ADAF3 100%)',
        'gradient-lightpurple': 'linear-gradient(198.74deg, #131313 63.52%, #5C24B6 100%)',
        'gradient-darkblue': 'linear-gradient(197.76deg, #131313 63.71%, #003699 100%)'
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('columns.7xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4')
        },
        '.ButtonGoDown': {
          position: 'absolute',
          zIndex: 30,
          right: '30px',
          bottom: '30px'
        }
      })
    }),
    require('@tailwindcss/line-clamp')
  ]
}
