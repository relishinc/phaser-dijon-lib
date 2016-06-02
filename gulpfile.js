var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    merge = require('merge2'),
    uglify = require('gulp-uglify'),
    sequence = require('run-sequence'),
    del = require('del'),
    concat = require('gulp-concat'),
    path = require("path"),
    typedoc = require("gulp-typedoc");

gulp.task('lib', function() {
    var tsResult = gulp.src('./src/lib.ts')
        .pipe(sourcemaps.init())
        .pipe(ts({
            out: 'dijon.js',
            target: "ES5",
            module: "system",
            declaration: true,
            sortOutput:true,
            removeComments: true
        }))
        
    return merge([
        tsResult.dts.pipe(gulp.dest('./build')),
        tsResult.js
            .pipe(concat('dijon.js'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('build'))
	]);
})

gulp.task('uglify', function() {
    return gulp.src('build/dijon.js')
        .pipe(concat('dijon.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('addons', function() {
    return gulp.src('src/dijon.addons.js')
        .pipe(gulp.dest('build'));
})

gulp.task('spine', function() {
    return gulp.src('src/dijon/spine/spine.js')
        .pipe(concat('dijon.spine.js'))
        .pipe(gulp.dest('build'));
})

gulp.task('clean', function() {
    return del([
        './build'
    ], {
            force: true
        });
});

gulp.task('typescript', function(done){
    return gulp.src('./typescript/*.ts')
        .pipe(gulp.dest('./build/typescript'));    
});

gulp.task('compile', function(done) {
    return sequence('clean', 'lib', 'uglify', 'addons', 'spine', 'typescript', done);
});

gulp.task('default', function(done) {
    return sequence('compile', 'watch', done);
});

gulp.task('watch', function(){
    gulp.watch(['src/**/*.{ts,js}'], ['compile']);
    gulp.watch(['src/dijon.addons.js'], ['compile']);
})

var typedoc = require("gulp-typedoc");

gulp.task("docs", function() {
    return gulp
        .src(["src/**/*.ts"])
        .pipe(typedoc({
            // TypeScript options (see typescript docs) 
            mode: "file",
            module: "commonjs",
            target: "es5",
            includeDeclarations: false,
            // Output options (see typedoc docs) 
            out: "./docs",
            // TypeDoc options (see typedoc docs) 
            name: "Relish Dijon Library",
            ignoreCompilerErrors: false,
            version: true
        }));
});