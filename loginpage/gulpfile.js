var gulp        = require('gulp');
var sass        = require('gulp-sass');
var pug         = require('gulp-pug');
var browserSync     = require('browser-sync')
var watch= require('gulp-watch');
/**
 * Compile pug files into HTML
 */

gulp.task('pug', function() {
    return gulp.src('./pug/*.pug')
        .pipe(pug({
            doctype: 'html',
            pretty: true
        }))
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream());
});

/**
 * Compile scss files into css
 */
gulp.task('sass', function () {
    return gulp.src('./scss/*.scss')
        .pipe(sass()).on('error', sass.logError)
        .pipe(gulp.dest('./dist/css'))
	.pipe(browserSync.stream());
});


gulp.task('images', function () {
    return gulp.src('./images/*')
        .pipe(gulp.dest('./dist/images'))
	.pipe(browserSync.stream());
});

gulp.task('js', function () {
    return gulp.src('./js/*')
        .pipe(gulp.dest('./dist/js'))
	.pipe(browserSync.stream());
});

// /**
//  * Serve and watch the scss/pug files for changes
//  */
gulp.task('default',  functio browserSync.init({
        server: "./dist"
    });n () {
 browserSync.init({
        server: "./dist"
    });
    watch('./scss/**/*.scss',gulp.series('sass'));
    watch('./pug/**/.pug',  gulp.series('pug'));
    watch('./images/**/*.*',  gulp.series('images'));
    watch('./js/**/*.js',  gulp.series('js'));
    watch('./dist/*html').on('change',browserSync.reload)
});

