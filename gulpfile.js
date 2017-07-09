// Gulp.js configuration
var
  // modules
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),

  // development mode?
  devBuild = (process.env.NODE_ENV !== 'production'),

  // folders
  folder = {
    src: 'src/',
    build: 'build/'
  }
;

gulp.task('css', function(){

	var postCssOpts = [
		autoprefixer({ 
			browsers: ['last 2 versions', '>2%']
		})
	];

	return gulp.src('scss/main.scss')
		.pipe(sass({
			outputStyle: 'nested',
			precision: 3,
			errLogToConsole: true
		}))
		.pipe(postcss(postCssOpts))
		.pipe(gulp.dest('css/'));

});

gulp.task('run', ['css']);

gulp.task('watch', function(){

	gulp.watch('scss/**/*', ['css']);

});

gulp.task('default', ['run', 'watch']);



