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
      require('autoprefixer-core')({browsers: ['last 2 version', 'ie 10', 'ie 11']})
    ]
  },

  // main styles
  dev: {
    options: {
      map: true
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
