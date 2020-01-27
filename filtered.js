var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];


fs.readdir(dir, function(err, list){

	var list = list.filter(file=>path.extname(file)== `.${ext}`);
	list.forEach(file=>console.log(file));
} )
