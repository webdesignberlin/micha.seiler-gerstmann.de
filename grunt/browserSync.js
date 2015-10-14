/**
 * + Task Config: Browser Sync
 * https://github.com/shakyshane/grunt-browser-sync
 * =====================================================================
 *
 * @Description config Browser Sync
 */
module.exports = {
    // overall options
    options: {
        watchTask:      true,
        ghostMode: {
            clicks:     true,
            location:   true,
            forms:      true,
            scroll:     true
        }
    },

    // main assets
    main: {
        bsFiles: {
            src : [
                '<%= globalConfig.dist %>/styles/main.css',
                '<%= globalConfig.dist %>/js/**/*.js',
                '<%= globalConfig.dist %>/**/*.html'
            ]
        },
        options: {
            server: {
                baseDir: "./dist"
            },
            watchTask: true,
            startPath: "index.html"
        }
    }
};
/* = Task Config: Browser Sync */
