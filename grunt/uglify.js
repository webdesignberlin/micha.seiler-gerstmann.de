/**
 * + Task Config: Uglify
 * https://github.com/gruntjs/grunt-contrib-uglify
 * =====================================================================
 *
 * @Description minify Task for js files
 */
module.exports = {

    build: {
        options: {
            mangle: true, // mangle: false to prevent changes to your variable and function names
            sourceMap: false
        },
        files: {
            '<%= globalConfig.dist %>/js/main.js': ['<%= globalConfig.app %>/js/main.js']
        }
    }

};
/* = Task Config: Uglify */
