var gulp = require('gulp'),
    typescript = require('gulp-tsc'), 
    dts = require('dts-generator');
 
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

gulp.task('bundle', function(){
    dts.generate({
      name:'dijon',
      baseDir:'./src',
      out:'typings/dijon.d.ts',
      files: [ 
        './src/lib.d.ts',
        './src/mvc/Application.ts',
        './src/mvc/Mediator.ts',
        './src/mvc/Model.ts',
        './src/mvc/Notification.ts',
        './src/mvc/Notifier.ts',
        './src/core/Game.ts',
        './src/core/AssetManager.ts',
        './src/core/AudioManager.ts',
        './src/core/StorageManager.ts',
        './src/core/SequenceManager.ts',
        './src/core/StorageManager.ts',
        './src/core/TransitionManager.ts',
        './src/display/Group.ts',
        './src/display/Sprite.ts',
        './src/display/Text.ts',
        './src/state/State.ts'
        ]
    })
});

gulp.task('compile', ['lib', 'bundle']);