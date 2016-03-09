var gulp = require('gulp'),
    typescript = require('gulp-tsc'),
    uglify = require('gulp-uglify'),
    sequence = require('run-sequence'),
    del = require('del'),
    concat = require('gulp-concat'),
    path = require("path"),
    Builder = require('systemjs-builder'),
    builder = new Builder('.');

gulp.task('lib', function() {
    return gulp.src('./src/**/*.ts')
        .pipe(typescript({
            out: 'dijon.js',
            outDir: './build',
            target: "ES5",
            module: "system",
            emitError: false,
            declaration: true,
            removeComments: true,
            sourceMap: true,
            rootDir:'./src'

        }))
        .pipe(gulp.dest('./build'))
})

gulp.task('uglify', function() {
    return gulp.src('build/dijon.js')
        .pipe(concat('dijon.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('clean', function() {
    return del([
        './build'
    ], {
            force: true
        });
});

gulp.task('combine', function() {
    return gulp.src('./src/**/*.ts')
        .pipe(concat('dijon.ts'))
        .pipe(gulp.dest('./src/dijon'));
});

gulp.task('compile', function(done) {
    return sequence('clean', 'lib', 'uglify', done);
});

gulp.task('default', ['compile'], function() {
    return gulp.watch(['src/**/*.ts'], ['compile']);
});