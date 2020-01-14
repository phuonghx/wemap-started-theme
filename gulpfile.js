// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var minifyCss = require('gulp-clean-css');

// Compile Our Sass
gulp.task('sass', function () {
    return gulp.src('sass/style.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sass())
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./'))
        .pipe(livereload());
});

// Watch Files For Changes
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['sass/**/*'], ['sass']);
});

gulp.task('default', function () {
    return gulp.watch('sass/**/*.scss', gulp.series('sass'));
});