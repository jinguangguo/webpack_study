/**
 * @file
 * @author jinguangguo
 * @date 2016/3/14
 */

var gulp = require('gulp');
var gulpWebpack = require('gulp-webpack');

var webpackConfig = require('../../webpack.config');

gulp.task('js:debug', function() {
    return gulp.src('./src/*.js')
        .pipe(gulpWebpack(webpackConfig))
        .pipe(gulp.dest('./output/static/'));
});

gulp.task('js:prod', function() {
    return gulp.src('./src/*.js')
        .pipe(gulpWebpack(webpackConfig))
        .pipe(gulp.dest('./output/static/'));
});