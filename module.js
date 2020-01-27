//@format
var fs = require('fs');
var path = require('path');


module.exports = function(dir, ext, cb){
	fs.readdir(dir, 'utf8', function(err, list){
		if(err) return cb(err, null);
		else {
			var files =  list.filter(file => path.extname(file)==`.${ext}`);
			return cb(null, files);
		}
	})
}
