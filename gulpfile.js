var gulp = require('gulp');
var Server = require('karma').Server;
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var version = require('gulp-version-number');

/**
 * Run test once and exit
 */
 gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
 gulp.task('tdd', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

 var jsFilesMy = 'src/**/*.js',
 jsDestMy = 'dist/my';

 gulp.task('compressmy', function() {
  return gulp.src(jsFilesMy)
  .pipe(version({
    'value' : '%DT%',
    'replaces' : ['#{VERSION_REPLACE}#'],
  }))
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest(jsDestMy))
  .pipe(rename('scripts.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest(jsDestMy));
});

 gulp.task('default', ['tdd']);
 gulp.task('compress', ['compressmy']);
