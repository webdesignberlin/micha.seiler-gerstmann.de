/**
 * + Gruntfile
 * =====================================================================
 */
'use strict'; // ECMAScript 5 strict mode

module.exports = function(grunt) {
  grunt.util.linefeed = '\n'; // Force use of Unix newlines


  /**
   * + Global Project Vars
   * Usage: <%= globalConfig.var %>
   * =====================================================================
   */
  var globalConfig       = {};
  globalConfig.root      = '.';
  globalConfig.bower     = globalConfig.root   + '/bower_components';
  globalConfig.app       = globalConfig.root + '/app';
  globalConfig.dist      = globalConfig.root + '/dist';
  globalConfig.node      = globalConfig.root + '/node_modules';
  /* = Global Project Vars */



  /**
   * + Global ssh variables for release
   * Usage: <%= sshconfig.var %>
   * =====================================================================
   */
  /*var sshconfig = {
    // local json file with login data for dev
    'dev-login': grunt.file.readJSON('./release_data/dev_host.json'),
    // folder name of the webapp for dev
    'devappfolder': 'htdocs',
    // root path of the project for dev
    'devhomepath': '/var/www/dev.loox.com/',
    // path to the release directory for dev
    'devapppath': '<%=sshconfig.devhomepath %><%=sshconfig.devappfolder %>',

    // local json file with login data for live
    'live-login': grunt.file.readJSON('./release_data/live_host.json'),
    // folder name of the webapp for live
    'liveappfolder': 'htdocs',
    // root path of the project for live
    'livehomepath': '/var/www/loox.com/',
    // path to the release directory for live
    'liveapppath': '<%=sshconfig.livehomepath %><%=sshconfig.liveappfolder %>'
  };

  var devoptions = {
    config: 'dev-login',
    // local stored ssh key for login on server
    privateKey: grunt.file.read('./release_data/id_rsa')
  };

  var liveoptions = {
    config: 'live-login',
    // local stored ssh key for login on server
    privateKey: grunt.file.read('./release_data/id_rsa')
  };
  */
  /* = Global ssh variables for release */


  /**
   * + measure grunt task runtimes
   * https://github.com/sindresorhus/time-grunt
   * =====================================================================
   */
  require('time-grunt')(grunt);
  /* = measure grunt task runtimes  */


  /**
   * + task and config autoloading
   * https://github.com/firstandthird/load-grunt-config
   * https://github.com/shootaroo/jit-grunt
   * =====================================================================
   */
  require('load-grunt-config')(grunt, {

    jitGrunt: {
      // here you can pass options to jit-grunt (or just jitGrunt: true)
      jitGrunt: true

      /*,staticMappings: {
        sshexec: 'grunt-ssh',
        sftp: 'grunt-ssh'
      }*/
    },

    data: {
      pkg          : grunt.file.readJSON('package.json'),
      globalConfig : globalConfig
      /*,
      sshconfig    : sshconfig,
      devoptions   : devoptions,
      liveoptions  : liveoptions,
      global       : grunt.file.readJSON('./app/global.json')*/
    }

  });
  /* = auto-load grunt task configs */

};
/* = Gruntfile */
