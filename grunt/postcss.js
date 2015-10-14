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
      require('pixrem')(), // add fallbacks for rem units
      require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
      require('cssnano')() // minify the result
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
