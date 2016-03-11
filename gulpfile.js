var Path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var mainBowerFiles = require('gulp-main-bower-files');
var fs = require('fs');
var exec = require('child_process').exec;

var getLastSlashEntry = (str) => {
	var last = str.split('/').splice(-1)[0];
	// var extension = last.split('.').splice(-1);
	return last;//'\\'+extension+'\\'+
}
var readWrite = (inFile, outFile) => {
	// console.log(inFile);
	fs.access(inFile, fs.F_OK | fs.R_OK, (err) => {
		// console.log("access error:"+err);
		if (!err) {
			fs.createReadStream(inFile).pipe(fs.createWriteStream(outFile));
		} else {
			console.log('Failed: ' + inFile);
		}
	});
}

var mkdir = (dir) => {
	exec("mkdir " + dir, (err, stdout, stderr) => {
		if (err) return false;
	});
	return false;
}

var locations = {
	css: {
		bootstrap: 'bower_components/bootstrap/dist/css/bootstrap.css',
		fontAwesome: 'bower_components/font-awesome/css/font-awesome.css'
	},
	font: {
		fontAwesome: 'bower_components/font-awesome/fonts/',
		bootstrap: 'bower_components/bootstrap/dist/fonts/'
	},
	js: {
		handlebars.runtime: 'bower_components/handlebars/handlebars.runtime.js',
		backbone: 'bower_components/backbone/backbone.js',
		bootstrap: 'bower_components/bootstrap/dist/js/bootstrap.js',
		jasmine: 'bower_components/jasmine-core/lib/jasmine-core/jasmine.js',
		jquery: 'bower_components/jquery/dist/jquery.js',
		handlebars: 'bower_components/handlebars/handlebars.js',
		require: 'bower_components/requirejs/require.js',
		underscore: 'bower_components/underscore/underscore.js'
	}
};

gulp.task('default', function () {
	gulp.src('public/css/less/*.less')
	.pipe(less())
	.pipe(gulp.dest('public/css'));
});

gulp.task('bower-pull', function () {
	exec("mkdir public\\lib public\\lib\\js public\\lib\\css public\\lib\\font", function (error, stdout, stderr) {
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
					readWrite(path[i], 'public/lib/'+getLastSlashEntry(path[i]));
				}
			} else if (typeof path === 'string') {
				readWrite(path, 'public/lib/'+getLastSlashEntry(path));
			}
		}
	});
}); 

gulp.task('bower-pull-locations', function () {
	// fs.access('public/lib', fs.R_OK, (err) => {
	// 	if (err) {
	// 		mkdir(Path.join('public', 'lib'));
	// 	}
	// });
	// fs.access('public/lib/js', fs.R_OK, (err) => {
	// 	if (err) {
	// 		mkdir(Path.join('public', 'lib', 'js'));
	// 	}
	// });
	// fs.access('public/lib/css', fs.R_OK, (err) => {
	// 	if (err) {
	// 		mkdir(Path.join('public', 'lib', 'css'));
	// 	}
	// });
	// fs.access('public/lib/font', fs.R_OK, (err) => {
	// 	if (err) {
	// 		mkdir(Path.join('public', 'lib', 'font'));
	// 	}
	// });
	exec("rm -rf public\\lib public\\lib\\js public\\lib\\css public\\lib\\fonts", (error, stdout, stderr) => {
		exec("mkdir public\\lib public\\lib\\js public\\lib\\css public\\lib\\fonts", (error, stdout, stderr) => {
		if (!error) {
			for (var prop in locations) {
				var outPath = 'public/lib/';
				for (var str in locations[prop]) {
					var path = locations[prop][str];
					switch (prop) {
						case 'css':
							readWrite(path, outPath+'css/'+getLastSlashEntry(path));
							break;
						case 'js':
							readWrite(path, outPath+'js/'+getLastSlashEntry(path));
							break;
						case 'font':
							var ff = Path.join(path, '/','*');
							console.log(`ff ${ff}`);
							gulp.src(ff).pipe(gulp.dest(outPath+ 'fonts/'));
							// fs.readdir(ff, (err, files) => {
							// 	if (!err) {
							// 		console.log(`ff1 ${ff}`);
							// 		for (var ll=0, len=files.length; ll<len; ll++) {
							// 			readWrite(ff+files[ll], outPath+'fonts/'+getLastSlashEntry(files[ll]));
							// 		}
							// 	}
							// });
							break;
					}
				}
			}
		}
	});	
	});
	
});

gulp.task('bower-installer', () => {
	gulp.src('./bower.json').pipe(mainBowerFiles()).pipe(gulp.dest('public/lib'));
});

gulp.task('watch', () => {
	gulp.watch('public/css/less/*.less', ['default']);
});
