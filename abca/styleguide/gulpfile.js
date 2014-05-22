var gulp = require('gulp'),
    gutil = require('gulp-util'),

    sass = require('gulp-ruby-sass'),
    compass = require('gulp-compass'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat');

gulp.task('sass', function() {
    gulp.src('./static/scss/**/*.scss')
        //.pipe(sass({ compass: true }))
        .pipe(compass({
            css: './static/css',
            sass: './static/scss'
        }))
        .on('error', function(err) {
            // Would like to catch the error here
            console.log(err);
        })
        .pipe(gulp.dest('./static/css'));
});

gulp.task('js', function() {
    gulp.src('./static/js/scripts/**/*.js')
        .pipe(uglify())
        .pipe(concat('script.min.js'))
        .pipe(gulp.dest('./static/js'));
});

gulp.task('default', ['sass', 'js']);