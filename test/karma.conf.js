module.exports = function (config)
{
    'use strict';
    config.set({
        autoWatch: true,
        basePath: '../',
        frameworks: ['jasmine'],
        files: ['app/*.js', 'test/unit/**/*.spec.js'],
        exclude: [],
        reporters: ['spec', 'coverage', 'junit'],
        preprocessors: {
            'app/*.js': 'coverage'
        },
        coverageReporter: {
            dir: 'target/',
            type: 'cobertura',
            file: 'coverage.xml'
        },
        junitReporter: {
            outputFile: 'target/test-results.xml'
        },
        port: 8080,
        browsers: ['PhantomJS'],
        plugins: ['karma-phantomjs-launcher', 'karma-jasmine', 'karma-spec-reporter', 'karma-junit-reporter', 'karma-coverage'],
        singleRun: true,
        colors: true,
        logLevel: config.LOG_INFO,
        usePolling: true
    });
};
