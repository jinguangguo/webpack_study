/**
 * @file
 * @author jinguangguo
 * @date 2016/2/18
 */

var gulp = require('gulp');
var sequence = require('gulp-sequence');

require('./deploy/clean');
require('./deploy/html');
require('./deploy/js');

gulp.task('deploy:debug', sequence('clean', ['html:debug', 'js:debug']));

gulp.task('deploy:prod', sequence('clean', 'html:prod', 'js:prod'));
