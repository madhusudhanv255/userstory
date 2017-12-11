//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'https://code.jquery.com/jquery-1.11.2.min.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/lodash/lodash.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.js',
      'services/**/*.js',
      'filters/**/*.js',
      'controllers/**/*.js',
    ],

    exclude: [
    ],

    autoWatch: true,

    frameworks: ['mocha', 'chai-as-promised', 'chai', 'sinon-chai'],

    browsers: ['Chrome'],

    captureTimeout: 60000,

    reporters: ['mocha', 'coverage'],

    thresholdReporter: {
      statements: 30,
      branches: 30,
      functions: 20,
      lines: 20
    },

    port: 9876,

    colors: true,

  });
};
