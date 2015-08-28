var gulp = require('gulp'),
    typescript = require('gulp-tsc'), 
    uglify = require('gulp-uglify'), 
    rename = require('gulp-rename');
 
gulp.task('lib', function(){
  return gulp.src(['src/**/*.ts'])
    .pipe(typescript({
      out:'dijon.js',
      outDir:'build/', 
      target:"ES5", 
      module:"commonjs", 
      emitError:false,
      declaration:true,
      sourceMap:true
      }))
    .pipe(gulp.dest('build/'))
})

gulp.task('uglify', function(){
    return gulp.src('build/dijon.js')
      .pipe(uglify())
      .pipe(rename({
        extname: '.min.js'
      }))
      .pipe(gulp.dest('build/'));
});

gulp.task('compile', ['lib', 'uglify']);