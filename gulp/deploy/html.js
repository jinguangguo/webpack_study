/**
 * @file
 * @author jinguangguo
 * @date 2016/3/14
 */

var gulp = require('gulp');

gulp.task('html:debug', function() {
    return gulp.src('./*.html')
        .pipe(gulp.dest('./output/'));
});

gulp.task('html:prod', function() {
    return gulp.src('./*.html')
        .pipe(gulp.dest('./output/'));
});
