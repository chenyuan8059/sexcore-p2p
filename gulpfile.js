'use strict';

var gulp = require('gulp');
var sexcoreTasks = require('sexcore-build');

sexcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
