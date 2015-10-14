/**
 * + Task Config: grunt-contrib-jshint
 * https://github.com/gruntjs/grunt-contrib-jshint
 * =====================================================================
 */
module.exports = {

  // overall options
  options: {
    jshintrc: '.jshintrc',
    force: true,
    reporter: require('jshint-stylish')
    //reporterOutput: '<%= globalConfig.report %>/jshint_checkstyle.xml'
  },

  src: [
    'Gruntfile.js',
    '<%= globalConfig.app %>/js/**/*.js'
  ]

};
/* = Task Config: grunt-contrib-jshint */
