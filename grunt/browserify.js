/**
 * + Task Config: browserify
 * https://github.com/jmreidy/grunt-browserify
 * =====================================================================
 *
 * Most simply, Browserify is a tool for taking your CommonJS-style Javascript code and packaging it for use in the browser.
 * Grunt-Browserify provides the glue to better integrate Browserify into your Grunt-based development workflow.
 *
 */

module.exports = {

  dev: {
    options: {
      browserifyOptions: {
        debug: true
      }
    },
    src: '<%= globalConfig.app %>/js/main.js',
    dest: '<%= globalConfig.dist %>/js/main.js'
  },

  build: {
    options: {
      browserifyOptions: {
        debug: false
      }
    },
    src: '<%= globalConfig.app %>/js/main.js',
    dest: '<%= globalConfig.dist %>/js/main.js'
  }

};
/* = Task Config: browserify */
