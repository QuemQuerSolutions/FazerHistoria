var gulp = require('gulp'),
 	gutil = require('gulp-util'),
    del = require('del'),
 	browserify = require('browserify'),
 	watch = require('gulp-watch'),
 	babelify = require("babelify"),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify'),
    streamify = require('gulp-streamify'),
 	source = require('vinyl-source-stream');

gulp.task('clean', function(done) {
    del(['./src/main/resources/static/build/js'], done);
	console.log('--> Clean do fazer historia executado.');
});

gulp.task('clean-fazerhistoria', function(done) {
    del(['./src/main/resources/static/build/js'], done);
	console.log('--> Clean do fazer historia executado.');
});


gulp.task('fazerhistoria', function() {
	browserify({
		insertGlobals: true,
		entries: ['./src/main/resources/views/main.jsx'],
        debug:false,
        cache: {},
        packageCache: {},
		extensions: ['.jsx', '.js'],
        fullPaths: false
	})
	.external(['lodash', 'react', 'react-router'])
    .transform(babelify)
	.bundle()
	.on('error', gutil.log)
	.pipe(source('main.js'))
    .pipe(streamify(uglify()))
	.pipe(gulp.dest('./src/main/resources/static/build/js'))
    .pipe(notify(function () {
        console.log('--> Quem quer fazer historia compilou.');
    }));
});

gulp.task('fazerhistoria-dev', ['clean-fazerhistoria'], function() {
    var appBundler = browserify({
        entries: ['./src/main/resources/views/main.jsx'],
        debug: false,
        cache: {},
        packageCache: {},
        extensions: ['.jsx', '.js'],
        fullPaths: false
    });
    appBundler.external(['lodash', 'react', 'react-route']);
    appBundler
        .transform(babelify)
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./src/main/resources/static/build/js'))
        .pipe(notify(function () {
            console.log('--> Quem quer fazer historia compilou em DEV.');
    }));
});

gulp.task('watch-fazerhistoria', ['fazerhistoria-dev'], function() {
	gulp.watch('./src/main/resources/views/**/*.+(jsx|js)', ['fazerhistoria-dev']);
});

gulp.task('build', ['clean', 'fazerhistoria']);
