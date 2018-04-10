module.exports = function(config) {
  config.set({

    client: {
        useIframe: false
    },
    
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'lib/big.js',
        'lib/moment.js',
        'lib/lodash.js',
        'lib/lodash_extension.js',
        'lib/jquery.js',
        'lib/jasmine-jquery.js',
        'test/spec_helpers.js',
        'test/*Spec.js',
        'src/*.js',
        'src/**/*.js',
        {
            pattern: 'spec/javascripts/fixtures/**/*.html',
            watched: true,
            included: false,
            served: true
        }
    ],


    plugins : [ // !IMPORTANT
        'karma-coverage',
        'karma-chrome-launcher',
        'karma-firefox-launcher',
        'karma-phantomjs-launcher',
        'karma-jasmine'
    ],

    // list of files to exclude
    exclude: [

    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'src/**/*.js': ['coverage']
    },

    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
        // 'Chrome', 
        // 'Firefox', 
        'PhantomJS'
        ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
