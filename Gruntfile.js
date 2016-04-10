(function () {
    'use strict';

    module.exports = function (grunt) {

        grunt.loadNpmTasks('grunt-karma');
        grunt.loadNpmTasks('grunt-contrib-jshint');

        grunt.initConfig({
            karma: {
                options: {configFile: 'test/karma.conf.js'},
                unit: {singleRun: true},
                dev: {singleRun: false}
            },
            jshint: {
                options: {jshintrc: true},
                files: {
                    src: ['app/**/*.js', 'test/**/*.js']
                }
            }
        });

        grunt.registerTask('verify', ['jshint', 'karma:unit']);
    };
})();
