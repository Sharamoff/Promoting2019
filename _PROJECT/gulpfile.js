'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	prefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	rigger = require('gulp-rigger'),
	uglify = require('gulp-uglify'),
	cssmin = require('gulp-clean-css'),
	imagemin = require('gulp-imagemin'),
	cache = require('gulp-cache'),
	pngquant = require('imagemin-pngquant'),
	rimraf = require('rimraf'),
	browserSync = require("browser-sync"),
	reload = browserSync.reload;

var path = {
	build: {
		html:         'BUILD/',
		js:           'BUILD/js/',
		css:          'BUILD/css/',
		img:          'BUILD/img/',
        portfolio:    'BUILD/portfolio/',
		fonts:        'BUILD/fonts/'
	},
	src: {
		html:         'SRC/*.html',
		js:           'SRC/js/*.js',
		style:        'SRC/style/*.scss',
		img:          'SRC/img/**/*.*',
        portfolio:    'SRC/portfolio/**/*.*',
		fonts:        'SRC/fonts/**/*.*'
	},
	watch: {
		html:         'SRC/**/*.html',
		js:           'SRC/js/**/*.js',
		style:        'SRC/style/**/*.scss',
		img:          'SRC/img/**/*.*',
        portfolio:    'SRC/portfolio/**/*.*',
        fonts:        'SRC/fonts/**/*.*'
	},
	clean: './build'
};

var config = {
	server: {
		baseDir: "./build"
	},
	tunnel: false,
	host: 'localhost',
	port: 3000,
	logPrefix: "Promoting"
};

gulp.task('html:build', function(done) {
	return gulp.src(path.src.html)
		.pipe(rigger())
		.pipe(gulp.dest(path.build.html))
		.pipe(reload({stream: true}));
	done();
});

gulp.task('js:build', function(done) {
	return gulp.src(path.src.js)
		.pipe(rigger())
		//.pipe(sourcemaps.init())
		//.pipe(uglify()) !не минимизируем
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.build.js))
		.pipe(reload({stream: true}));
	done();
});

gulp.task('style:build', function(done) {
	return gulp.src(path.src.style)
		.pipe(plumber())
		//.pipe(sourcemaps.init())
		.pipe(sass({
			sourceMap: false,
			errLogToConsole: true
		}))
		.pipe(prefixer())
		//.pipe(cssmin()) !не минимизируем
		//.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.build.css))
		.pipe(reload({stream: true}));
	done();
});

gulp.task('image:build', function(done) {
	return gulp.src(path.src.img)
		.pipe(cache(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()],
			interlaced: true
		})))
		.pipe(gulp.dest(path.build.img))
		.pipe(reload({stream: true}));
	done();
});

gulp.task('portfolio:build', function(done) {
	return gulp.src(path.src.portfolio)
		.pipe(cache(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()],
			interlaced: true
		})))
		.pipe(gulp.dest(path.build.portfolio))
		.pipe(reload({stream: true}));
	done();
});

gulp.task('fonts:build', function(done) {
	return gulp.src(path.src.fonts)
		.pipe(gulp.dest(path.build.fonts));
	done();
});

gulp.task('build', gulp.parallel(
	'html:build',
	'js:build',
	'style:build',
	'fonts:build',
	'image:build',
    'portfolio:build'
	)
);


gulp.task('watch', function(done) {
	gulp.watch(path.watch.html,  gulp.series('html:build'));
	gulp.watch(path.watch.js,    gulp.series('js:build'));
	gulp.watch(path.watch.style, gulp.series('style:build'));
	gulp.watch(path.watch.fonts, gulp.series('fonts:build'));
	gulp.watch(path.watch.img, gulp.series('image:build'));
    gulp.watch(path.watch.portfolio, gulp.series('portfolio:build'));
	done();
});


gulp.task('webserver', function(done) {
	browserSync.init(config);
	done();
});


gulp.task('clean', function(cb) {
	rimraf(path.clean, cb);
});


gulp.task('default', gulp.series('build', 'webserver', 'watch'));