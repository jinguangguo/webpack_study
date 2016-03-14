/**
 * @file
 * @author jinguangguo
 * @date 2016/3/14
 */

var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var replace = require('gulp-replace');
var moment = require('moment');

gulp.task('html:debug', function() {
    return gulp.src('./*.html')
        .pipe(gulp.dest('./output/'));
});

gulp.task('html:prod', function() {
    var now = moment().format('YYYYMMDDHHmm');
    return gulp.src('./*.html')
        .pipe(replace('.js"', '.js?v=' + now + '"'))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./output/'));

});
