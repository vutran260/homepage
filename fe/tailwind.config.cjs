/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      colors: {
        orange: '#ee4d2d',
        darkGray: {
          900: "#191C22"
        },
        textBlueCustom: {
          900: "#36AAFA"
        },
        mainBackground: '#191C22',
        blue: '#36AAFA'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/images/')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  },
  plugins: [
    plugin(function ({addComponents, theme}) {
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
