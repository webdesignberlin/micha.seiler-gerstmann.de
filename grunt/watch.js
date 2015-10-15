/**
 * + Task Config: Watch
 * https://github.com/gruntjs/grunt-contrib-watch
 * =====================================================================
 *
 * @Description config watch tasks
 */
module.exports = {

    // overall options
    options: {
        livereload: true,
        event: [
            'added',
            'deleted',
            'changed'
        ]
    },

    // gruntfile and task configs
    grunt: {
        options: {
            reload: true
        },
        files: [
            'Gruntfile.js',
            'grunt/*.js',
            'grunt/*.yml'
        ],
        tasks: [
            'jshint'
        ]
    },

    // main styles
    main_styles: {
        files: [
            '<%= globalConfig.app %>/styles/**/*.css'
        ],
        tasks: [
            'build-css-dev'
        ]
    },

    // main scripts
    main_scripts: {
        files: [
            '<%= globalConfig.app %>/js/*.js',
            '<%= globalConfig.app %>/js/**/*.js'
        ],
        tasks: [
            'build-js-dev'
        ]
    },

    // main markup files
    main_markup: {
        files: [
            '<%= globalConfig.app %>/*.html',
            '<%= globalConfig.app %>/templates/**/*.html'
        ],
        tasks: [
            'build-html-dev'
        ]
    },

    // main markup files
    main_images: {
        files: [
            '<%= globalConfig.app %>/img/**/*'
        ],
        tasks: [
            'imagemin'
        ]
    }

};
/* = Task Config: Watch */
