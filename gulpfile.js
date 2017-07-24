var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    jshint      = require('gulp-jshint'),
    sass        = require('gulp-sass'),
    jade        = require('gulp-jade'),
    browserSync = require('browser-sync').create(),
    del         = require('del'),
    runSequence = require('run-sequence'),
    sourcemaps  = require('gulp-sourcemaps'),
    cache       = require('gulp-cache');


gulp.task('default', ['server']);

gulp.task('jshint', function() {
    gutil.log('JS Ok!');
    return gulp.src('app/**/*.js', {base: './app/scripts/'})
        .pipe(sourcemaps.init())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/scripts'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('images', function(){
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
});

gulp.task('build-css', function() {
    gutil.log('SCSS => CSS');
    return gulp.src('app/scss/**/*.scss', {base: './app/scss/'})
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('templates', function() {
    return gulp.src('app/**/**/*.jade', {base: './app/scripts/'})
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('dist/tmpl'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('home', function() {
    return gulp.src('app/*.jade', {base: './app/'})
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });
});

gulp.task('clean:dist', function() {
    gutil.log('Cleaning \'dist\'', {read: false});
    return del.sync('dist');
});

gulp.task('watch', function() {
    gulp.watch('app/*.html', ['home']);
    gulp.watch('app/scripts/**/*.js', ['jshint']);
    gulp.watch('app/scss/**/*.scss', ['build-css']);
    gulp.watch('app/**/**/**/view/*.jade', ['templates']);
    gutil.log('Gulp is watching!');
});

gulp.task('server',function(callback){
    runSequence('home',['jshint','build-css','templates'],'browserSync','watch',callback);
});

gulp.task('build',function(callback){
    runSequence('clean:dist','home',['jshint','build-css','templates'],callback);
});