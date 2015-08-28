var gulp = require('gulp'),
    typescript = require('gulp-tsc');
 
gulp.task('lib', function(){
  gulp.src(['src/**/*.ts'])
    .pipe(typescript({
      out:'dijon.js',
      outDir:'build/', 
      target:"ES5", 
      module:"commonjs", 
      emitError:false,
      declaration:true
      }))
    .pipe(gulp.dest('build/'))
})

gulp.task('compile', ['lib']);