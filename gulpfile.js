var gulp    = require('gulp');
var sync    = require('run-sequence');
var browser = require('browser-sync');
var webpack = require('webpack-stream');

/*
map of paths for using with the tasks below
 */
var paths = {
  entry: 'public/app/app.js',
  app: ['public/app/**/*.{js,styl,html}'],
  js: 'public/app/**/*!(.spec.js).js',
  styl: ['public/app/**/*.styl', 'public/style/**/*.styl'],
  toCopy: ['public/index.html'],
  html: ['public/index.html', 'public/app/**/*.html'],
  dest: 'dist'
};

gulp.task('build', function() {
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('serve', function() {
  browser({
    port: process.env.PORT || 3000,
    open: false,
    ghostMode: false,
    server: {
      baseDir: 'dist'
    }
  });
});

/*
simple task to copy over needed files to dist
 */
gulp.task('copy', function() {
  return gulp.src(paths.toCopy, { base: 'client' })
    .pipe(gulp.dest(paths.dest));
});

/*
task to watch files for changes and call build and copy tasks
 */
gulp.task('watch', function() {
  gulp.watch(paths.app, ['build', browser.reload]);
  gulp.watch(paths.toCopy, ['copy', browser.reload]);
});

gulp.task('default', function(done) {
  sync('build', 'copy', 'serve', 'watch', done)
});



// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var connect = require('gulp-connect');

// gulp.task('connect', function(){
//   connect.server({
//     root: 'public',
//     livereload: true
//   });
// });

// // keeps gulp from crashing for scss errors
// gulp.task('sass', function () {
//   return gulp.src('./public/css/sass/*.scss')
//       .pipe(sass({ errLogToConsole: true }))
//       .pipe(gulp.dest('./public/css'));
// });

// gulp.task('livereload', function (){
//   gulp.src('./public/**/*')
//   .pipe(connect.reload());
// });

// gulp.task('watch', function () {
//   gulp.watch('./public/css/sass/**/*.scss', ['sass']);
//   gulp.watch('./public/**/*', ['livereload']);
// });

// gulp.task('default', ['connect', 'watch', 'sass']);