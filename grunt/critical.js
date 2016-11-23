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
      width: 1920,
      height: 1080
    },
    files: [
      {
        expand: true,
        cwd: '<%= globalConfig.dist %>',
        src: ['*.html'],
        dest: '<%= globalConfig.dist %>'
      }
    ]
  }

};
