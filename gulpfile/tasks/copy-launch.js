/**
 * Copy Launch Files
 * @description Copy the Default Build Files to distribution
 */

import meow from '../../config.json';
import gulp from 'gulp';
import gutil from 'gulp-util';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

const copyLaunchTask = () => {
  meow.files.launch.forEach((item) => {
    gulp
      .src(meow.src.system + item.src)
      .pipe(
        global.checkChanged === true
          ? $.changed(meow.dist.base + item.dest)
          : gutil.noop()
      )
      .pipe(gulp.dest(meow.dist.base + item.dest));
  });
};

gulp.task('copy:launch', copyLaunchTask);
module.exports = copyLaunchTask;
