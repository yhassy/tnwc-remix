var gulp     = require('gulp');
var sass     = require('gulp-ruby-sass');
var plumber  = require('gulp-plumber');
var pleeease = require('gulp-pleeease');

gulp.task('sass', function() {
    return sass('sass/', { style: 'compressed'})
        .on('error', function (err) {
        console.error('Error!', err.message);
        })
        .pipe(plumber())
        .pipe(pleeease({
        autoprefixer: {
        browsers: ['last 2 versions']
        },
        minifier: false // minify無効
        }))
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);