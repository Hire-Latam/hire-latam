const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    colors: {
      gray: colors.coolGray,
      primary: "#003049",
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ['Poppins', 'serif'],
    },
  },
}
