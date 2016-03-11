var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var mainBowerFiles = require('gulp-main-bower-files');
var fs = require('fs');
var exec = require('child_process').exec;

var getLastSlashEntry = function (str) {
	var last = str.split('/').splice(-1)[0];
	var extension = last.split('.').splice(-1);
	return '\\'+extension+'\\'+last;
}
var readWrite = function (inFile, outFile) {
	try {
		fs.createReadStream(inFile).pipe(fs.createWriteStream(outFile));
	} catch (error) {
		console.log('failed: ' + origPath);
	}
}

gulp.task('default', function () {
	gulp.src('public/css/less/*.less')
	.pipe(less())
	.pipe(gulp.dest('public/css'));
});

gulp.task('bower-pull', function () {
	exec("mkdir public\\libk public\\libk\\js public\\libk\\css public\\libk\\font", function (error, stdout, stderr) {
	});	
	exec("bower list -p -j", function (error, stdout, stderr) { 
		var json = JSON.parse(stdout);
		for (var prop in json) {
			var path = json[prop];
			if(path instanceof Array) {
				for(var i=0, len = path.length; i<len; i++) {
					var origPath = path[i];
					if (path[i].search(/less|scss/) > 0) {
						path[i] = path[i].replace(/less|sass|scss/g, 'css');
					}
					readWrite(path[i], 'public/libk/'+getLastSlashEntry(path[i]));
				}
			} else if (typeof path === 'string') {
				readWrite(path, 'public/libk/'+getLastSlashEntry(path));
			}
		}
	});
});

gulp.task('bower-installer', function () {
	gulp.src('./bower.json').pipe(mainBowerFiles()).pipe(gulp.dest('public/lib'));
});

gulp.task('watch', function () {
	gulp.watch('public/css/less/*.less', ['default']);
});
