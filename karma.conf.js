// Karma configuration
// Generated on Tue Dec 18 2018 09:45:49 GMT+0900 (대한민국 표준시)

module.exports = function(config) {
  console.log(process.env.TEST);
  console.log(process.env.NODE_ENV);
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      // 'src/**/*.js',
      'test/**/*.test.js'
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // 'src/**/*.js': ['webpack'],
      'test/**/*.test.js': ['webpack']
    },

    webpack: {
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules|\.test\.js/,
            use: [
              {loader: 'babel-loader'},
              {loader: 'istanbul-instrumenter-loader', options: {esModules: true}}
            ]
          }
        ]
      }
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: process.env.COVERAGE ? ['mocha', 'coverage'] : ['mocha'],


    coverageReporter: {
      // specify a common output directory
      dir: 'coverage/browser',
      reporters: [
        { type: 'html' },
        { type: 'text' },
        // { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
      ]
    },


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
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: process.env.COVERAGE ? false : true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}