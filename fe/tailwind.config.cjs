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
          500: '#FFFFFFB2',
          600: '#FFFFFF99'
        },
        darkGray: {
          900: '#191C22',
          600: '#262626'
        },
        textBlueCustom: {
          900: '#36AAFA'
        },
        mainBackground: '#191C22',
        blue: '#36AAFA'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/images/')",
        'footer-texture': "url('/img/footer-texture.png')"
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