/**
 * + Task Config: Copy
 * https://github.com/gruntjs/grunt-contrib-copy
 * =====================================================================
 *
 * @Description config global copy tasks
 */
module.exports = {

  htaccess: {
    expand: true,
    src:    '<%= globalConfig.app %>/.htaccess',
    dest:   '<%= globalConfig.dist %>/',
    flatten: true
  }

};
/* = Task Config: Copy dependency files */
