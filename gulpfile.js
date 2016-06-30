var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    mocha = require('gulp-mocha');
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

  gulp.task('test', ['compile-typescript'], function (done) {
    return gulp.src(['./release/libs/validate/validate.test.js'], {read: false})
                    //  './app/components/app/app.test.js'
                    //  './app/components/hello/hello.test.js'
                    //  './app/components/form/form.test.js'
        .pipe(mocha({ui: 'bdd', reporter: 'nyan'}));
  });

 gulp.task('compile-typescript', function () {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = tsProject.src().pipe(ts(tsProject));
    return tsResult.js.pipe(gulp.dest('release'));
});

  gulp.task('watch', function() {
      return gulp.watch('src/**/*.ts', ['build']);
  });

  gulp.task('default', ['test'], function () {});
