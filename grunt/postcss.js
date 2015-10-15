/**
 * + Task Config: Autoprefixer
 * https://github.com/nDmitry/grunt-postcss
 * =====================================================================
 *
 * @Description config the Autoprefixer
 */
module.exports = {

  // overall options
  options: {
    processors: [
      require('postcss-partial-import')(), // Inline standard and Sass-like imports in CSS
      require('cssnext')(), // future CSS code right now
      require('pixrem')(), // add fallbacks for rem units
      require('cssnano')({discardUnused: ({fontFace: false})}), // minify the result
      require('autoprefixer')({browsers: 'last 2 versions'}) // add vendor prefixes
    ]
  },

  // main styles
  dev: {
    options: {
      map: {
        inline: true
      }
    },
    src:  '<%= globalConfig.app %>/styles/main.css',
    dest: '<%= globalConfig.dist %>/styles/main.css'
  },
  build: {
    options: {
      map: false
    },
    src:  '<%= globalConfig.app %>/styles/main.css',
    dest: '<%= globalConfig.dist %>/styles/main.css'
  }
};
/* = Task Config: Autoprefixer */
