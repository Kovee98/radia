'use strict';

const gulp  = require('gulp');
const minify = require('gulp-minify');
const rename = require('gulp-rename');

// Minify JS
gulp.task('js', () => {
    return gulp.src('./src/radia.js')
        .pipe(minify({ext: {min: '.min.js'}}))
        .pipe(gulp.dest('./dist'));
});

// Minify CSS
gulp.task('styles', () => {
    return gulp.src('./src/radia.css*')
        .pipe(minify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', gulp.parallel('js', 'styles'), () => {});

// by default do this...
gulp.task('default', gulp.series('build'), () => {});
