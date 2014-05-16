var gulp = require('gulp'),
    gutil = require('gulp-util'),

    sass = require('gulp-ruby-sass'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat');

gulp.task('sass', function() {
    gulp.src('./static/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./static/css'));
});

gulp.task('js', function() {
    gulp.src('./static/js/scripts/**/*.js')
        .pipe(uglify())
        .pipe(concat('script.min.js'))
        .pipe(gulp.dest('./static/js'));
});

gulp.task('default', ['sass', 'js']);