/**
 * + Task Config: Copy
 * https://github.com/gruntjs/grunt-contrib-copy
 * =====================================================================
 *
 * @Description config global copy tasks
 */
module.exports = {

  standards: {
    expand: true,
    src:    ['<%= globalConfig.app %>/.htaccess','<%= globalConfig.app %>/humans.txt','<%= globalConfig.app %>/robots.txt'],
    dest:   '<%= globalConfig.dist %>/',
    flatten: true
  },
  offline: {
    expand: true,
    src:    '<%= globalConfig.app %>/cache.manifest',
    dest:   '<%= globalConfig.dist %>/',
    flatten: true
  }

};
/* = Task Config: Copy dependency files */
