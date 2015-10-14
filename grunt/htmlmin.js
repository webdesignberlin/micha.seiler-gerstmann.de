/**
 * + Task Config: grunt-contrib-htmlmin
 * https://github.com/gruntjs/grunt-contrib-htmlmin
 * =====================================================================
 *
 * @Description minify html
 */
module.exports = {

  build: {
    options: {
      removeComments: true,
      collapseWhitespace: true
    },
    files: [{
      expand: true,
      cwd: '<%= globalConfig.app %>/',
      src: '**/*.html',
      dest: '<%= globalConfig.dist %>/'
    }]
  }

};
