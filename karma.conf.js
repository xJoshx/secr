module.exports = function(config) {
  config.set({
    basePath: './app/components',
    frameworks: ['mocha'],
    plugins: [require('karma-requirejs'), 'karma-chrome-launcher', 'karma-mocha'],
    browsers: ['Chrome'],
    files: [
      '../../node_modules/requirejs/require.js',
      '../../node_modules/karma-requirejs/lib/adapter.js',
      {pattern: '../../node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: true},
      {pattern: '../../node_modules/systemjs/dist/system.src.js', included: true, watched: true},
      {pattern: '../../node_modules/rxjs/bundles/Rx.js', included: true, watched: true},
      {pattern: '../../node_modules/angular2/bundles/angular2.dev.js', included: true, watched: true},
      {pattern: '../../node_modules/angular2/bundles/testing.dev.js', included: true, watched: true},
      '**/*.test.js'
    ]
  });
};
