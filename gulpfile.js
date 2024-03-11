var gulp = require('gulp');
const babel = require('gulp-babel');
var uglifyJS=require('gulp-uglify');
var concat = require('gulp-concat');
var csso = require('gulp-csso');
const plumber = require('gulp-plumber');

          
gulp.task('welcome-message',async function(){
    return console.log('helo.');

});


gulp.task('copy_file',async function(){
    return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));

});

gulp.task('babelTest', async function () {
    return gulp.src('src/*.js')
      .pipe(plumber()) // Add plumber here to handle errors
      .pipe(babel({ presets: ['@babel/preset-env'] }))
      .pipe(concat('clock.js'))
      .pipe(uglifyJS())
      .pipe(gulp.dest('dist'));
  });
  
// gulp.task('babelTest', wrapPipe(async function(success, error) {
//     return gulp.src('src/*.js')
//     .pipe(babelTest().on('error',error))
//     .pipe(babel({presets: ['@babel/preset-env'] }))
//     .pipe(concat('clock.js'))
//     .pipe(uglifyJS())
//     .pipe(gulp.dest('dist'));
// }));

 gulp.task('styles', function () {
    return gulp.src('./src/*.css')
    //   .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
      .pipe(concat('clock.css'))
      .pipe(csso())
      .pipe(gulp.dest('./dist'))
  });   
  gulp.task('default', gulp.series('welcome-message', 'copy_file', 'babelTest', 'styles'));
