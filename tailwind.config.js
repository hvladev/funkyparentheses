module.exports = {
  purge: [
    './**/*.html',
    './**/*.md',
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': '"Barlow Condensed", sans-serif',
        'body': '"Open Sans", sans-serif',
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
