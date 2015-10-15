/**
 * + Task Config: Imagemin
 * https://github.com/gruntjs/grunt-contrib-imagemin
 * =====================================================================
 *
 * Compress Images
 */
module.exports = {

  // overall options
  options: {
    optimizationLevel: 3
  },

  // global styling assets
  assets: {
    files: [{
      expand: true,                                           // Enable dynamic expansion
      cwd: '<%= globalConfig.app %>/img/',                    // Src matches are relative to this path
      src: ['**/*.{png,jpg,gif,svg}'],                        // Actual patterns to match
      dest: '<%= globalConfig.dist %>/img/'                   // Destination path prefix
    }]
  }

};
/* = Task Config: Imagemin */
