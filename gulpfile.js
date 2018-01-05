const gulp = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const minifyCss = require('gulp-minify-css');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

gulp.task('minify-js', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(rename(function (path) {
  		path.extname = '.min.js'
  	}))
    .pipe(gulp.dest('js'))
    .pipe(browserSync.stream());
});

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
     }))
    .pipe(gulp.dest('./css'))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(browserSync.stream());
});


gulp.task('deploy', ['sass', 'minify-js']);

gulp.task('server', ['sass', 'minify-js'], function() {
    browserSync.init({
        server: './',
        index: 'index.htm'
    });
    gulp.watch('js/**/*.js', ['minify-js']);
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('index.htm').on('change', browserSync.reload);
});

gulp.task('default', ['server']);
