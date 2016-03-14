/**
 * @file
 * @author jinguangguo
 * @date 2016/3/14
 */

var gulp = require('gulp');
var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');
var md5 = require('gulp-md5-plus');

var webpackConfig = require('../../webpack.config');

gulp.task('js:debug', function() {
    return gulp.src('./src/*.js')
        .pipe(gulpWebpack(webpackConfig))
        .pipe(gulp.dest('./output/static/'));
});

gulp.task('js:prod', function() {

    // 压缩
    webpackConfig.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );

    return gulp.src('./src/*.js')
        .pipe(gulpWebpack(webpackConfig))
        .pipe(gulp.dest('./output/static/'));

});