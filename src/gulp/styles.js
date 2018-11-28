import paths from './paths';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import onError from './errors';
import stylus from 'gulp-stylus';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';

const isDebug = process.env.NODE_ENV !== 'production';

function styles() {
  return gulp.src(paths.styles.src)
  .pipe(plumber({ errorHandle: onError }))
  .pipe(gulpif(isDebug, sourcemaps.init()))
  .pipe(stylus({
    paths:  ['node_modules'],
    'include css': true
  }))
  .on('error', onError)
  .pipe(autoprefixer({
    browsers: ['last 3 versions','> 2% in RU']
  }))
  .on('error', onError)
  .pipe(csso({comments: false}))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulpif(isDebug, sourcemaps.write()))
  .pipe(gulp.dest(paths.styles.dest))
  .pipe(notify({
    title   : 'Gulp Task Complete',
    message : 'Styles have been compiled'
  }));
}

export default styles;