// postcss.config.js
module.exports = {
    plugins: [
      require('postcss-import'),
      require('@fullhuman/postcss-purgecss')({
        content: ['./**/*.html']
      }),
      require('tailwindcss'),
      require('postcss-preset-env')({
        stage:1,
        features: {
          'focus-within-pseudo-class': false
        }
      }),
      require('cssnano')({
        preset: 'default',
      }),
    ],
  };