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
        sans: ['Instrument Sans', 'sans-serif']
      },
      colors: {
        orange: '#ee4d2d',
        whiteGray: {
          100: '#FFFFFF1A',
          200: '#FFFFFF80',
          500: '#FFFFFFB2',
          600: '#FFFFFF99'
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
          900: '#36AAFA'
        },
        mainBackground: '#191C22',
        blue: '#36AAFA'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/images/')",
        'footer-texture': "url('/img/footer-texture.png')",
        'gradient-blue': 'linear-gradient(218.73deg, #000008 56.27%, #003699 100%)',
        'gradient-purple': 'linear-gradient(218.91deg, #000008 64.72%, #5C24B6 100%)',
        'gradient-pink': 'linear-gradient(226.72deg, #000008 34.26%, #B4299A 100%)',
        'gradient-green': 'linear-gradient(198.74deg, #131313 63.52%, #119459 100%)'
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
