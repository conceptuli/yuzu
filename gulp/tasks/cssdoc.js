var gulp         = require('gulp');
var styledocco   = require('gulp-styledocco');
var handleErrors = require('../util/handleErrors');
var config       = require('../config');

gulp.task('cssdoc', function () {
    gulp.src(config.source + '/scss/*.scss')
        .pipe(styledocco({
            out:  config.cssDocDest,
            name: 'styleguide'
        }))
        .on('error', handleErrors);
});