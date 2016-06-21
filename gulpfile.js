var gulp = require('gulp'),
    // ts = require('gulp-typescript'),
    jasmine = require('gulp-jasmine'),
    Server = require('karma').Server;
    // clean = require('gulp-clean'),
    // watch = require('gulp-watch'),
    // sourcemaps = require('gulp-sourcemaps'),
    // uglify = require('gulp-uglify');

  gulp.task('build', ['compile-typescript'], function() {
    return gulp.src('./dist/bundle.js')
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist'));
  });

  gulp.task('clean', function() {
    return gulp.src('./.temp', {read: false})
      .pipe(clean());
  });

  gulp.task('test', function (done) {
    new Server({
      configFile: __dirname + '/karma.conf.js',
      singleRun: true
    }, done).start();

    // gulp.src(['./app/components/hello/hello.test.js',
    //           './app/components/app/app.test.js'])
    //   .pipe(jasmine());
  });

  gulp.task('compile-typescript', function () {
      return gulp.src('./src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            out: 'bundle.js'
        }))
        .pipe(gulp.dest('./.temp'));
  });

  gulp.task('watch', function() {
      return gulp.watch('src/**/*.ts', ['build']);
  });

  gulp.task('default', ['watch'], function () {});
