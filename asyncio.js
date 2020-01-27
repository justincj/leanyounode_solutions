
var fs = require('fs');
var location = process.argv[2];

fs.readFile(location, 'utf8', function(err, data){
	if(err) return console.error(err);
	console.log(data.split('\n').length-1);
	
})


