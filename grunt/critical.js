/**
 * + Task Config: grunt-critical
 * https://github.com/bezoerb/grunt-critical
 * =====================================================================
 *
 * @Description Generate critical path css and inline it with critical.
 */
module.exports = {

  build: {
    options: {
      base: './',
      css: [
        '<%= globalConfig.dist %>/styles/main.css'
      ],
      width: 320,
      height: 70
    },
    src: '<%= globalConfig.dist %>/index.html',
    dest: '<%= globalConfig.dist %>/index.html'
  }

};
