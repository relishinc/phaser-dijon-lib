var gulp = require('gulp'),
    typescript = require('gulp-tsc'), 
    uglify = require('gulp-uglify'),
    sequwnce = require('run-sequence'), 
    concat = require('gulp-concat');
 
gulp.task('lib', function(){
  return gulp.src(['src/**/*.ts'])
    .pipe(typescript({
      out:'dijon.js',
      outDir:'build/', 
      target:"ES5", 
      module:"commonjs", 
      emitError:false,
      declaration:true,
      removeComments:true,
      sourceMap:true
      }))
    .pipe(gulp.dest('build/'))
})

gulp.task('uglify', function(){
    return gulp.src('build/dijon.js')
      .pipe(concat('dijon.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('build'));
});

gulp.task('compile', function(done){
  return sequwnce('lib', 'uglify', done); 
});