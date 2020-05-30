# Babel with Gulp

### Pre-requisites

NPM

### Steps

**1. Install Gulp**
```
npm install gulp -g

npm install gulp --save-dev
```

**2. Install Gulp-Babel**
```
npm install gulp-babel @babel/core @babel/preset-env --save-dev
```

**3. Set Babel**

Create `/.babelrc` file.

```
{
    "presets": ["@babel/env"]
}
```

**4. Create Gulp Task**

Create `/gulpfile.js` file.

```javascript
var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('babel', (done) => {
    gulp.src('src/**/*.js')
       .pipe(babel())
       .pipe(gulp.dest('dist'));
    done();
});
```

**5. Run Gulp Task**
```
gulp babel
```
