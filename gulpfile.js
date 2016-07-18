var gulp=require('gulp');
var jade=require('gulp-jade');

gulp.task('jade',function(){
  return gulp.src('./views/*.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('./'))
})

gulp.task('default',['jade']);

gulp.watch('./views/*.jade',['jade']);
gulp.watch('./views/*/*.jade',['jade']);