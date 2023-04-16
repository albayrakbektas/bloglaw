const gulp = require('gulp');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');

gulp.task('icons', function () {
    return gulp.src('./node_modules/bootstrap-icons/icons/**/*.svg')
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: { xmlMode: true }
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(replace('&lt;', '<'))
        .pipe(replace(/<svg /g, `<svg class="bi" `))
        .pipe(replace(/<svg(.*?)>/gi, '<symbol $1>'))
        .pipe(replace(/<\/svg>/gi, '</symbol>'))
        .pipe(gulp.dest('./src/assets/icons'));
});

gulp.task('default', gulp.series('icons'));
