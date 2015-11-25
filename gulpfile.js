var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var concatcss = require('gulp-concat-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
var rename = require('gulp-rename');

gulp.task('sass', function () {
	sass('sass/*.scss')
	.on('error', sass.logError)
	.pipe(gulp.dest('css'));
});

gulp.task('css', function(){
	gulp.src('css/*.css')
	.pipe(autoprefixer())
	.pipe(concatcss('customstyle.min.css'))
	.pipe(minifycss())
	.pipe(gulp.dest('css'))
	.pipe(gulp.dest('deployment/css'));
});

gulp.task('javascript', function() {
	gulp.src(['js/form-buy-product.js', 'js/getdata-faq.js'])
    .pipe(uglify())
    .pipe(gulp.dest('minjs'))
	.pipe(gulp.dest('deployment/minjs'));
});

gulp.task('htmlmin', function() {
	gulp.src('*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('deployment'))
});

gulp.task('imagemin', function(){
	gulp.src('images/*')
	.pipe(imagemin())
	.pipe(gulp.dest('deployment/images'));
});

gulp.task('php', function(){
	gulp.src('php/*.php')
	.pipe(gulp.dest('deployment/php'));
});

gulp.task('settings', function(){
	gulp.src('settings.php')
	.pipe(gulp.dest('deployment'));
});

gulp.task('watch', function(){
	gulp.watch('sass/*.scss', ['sass', 'css']);
	gulp.watch('css/*.css', ['css']);
	gulp.watch('js/*.js', ['javascript']);
	gulp.watch('images', ['imagemin']);
	gulp.watch('php', ['php']);
	gulp.watch('settings.php', ['settings']);
	gulp.watch('*.html', ['htmlmin']);
});

gulp.task('default', ['sass', 'css', 'javascript', 'htmlmin', 'imagemin', 'php', 'settings', 'watch']);