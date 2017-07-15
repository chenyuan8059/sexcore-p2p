'use strict';

var gulp = require('gulp');
var litecoreTasks = require('sexcore-build');

sexcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
