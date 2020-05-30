var gulp = require('gulp');
var babel = require('gulp-babel');

// Transpile to es5
gulp.task('babel', (done) => {
    gulp.src('src/**/*.js')
       .pipe(babel())
       .pipe(gulp.dest('dist'));
    done();
});

// Copy all other files
gulp.task('copy', (done) => {
    gulp.src('src/**/!(*.js)*')
        .pipe(gulp.dest('dist'));
    done();
});

gulp.task('build', gulp.series('babel', 'copy'));
