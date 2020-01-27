var http = require('http');
var through = require('through2');
var body = require('body/any');



var server = http.createServer(function(req, res){
	if(req.method=='POST'){

		body(req, res, function(err, data){
		



			res.setHeader("Content-Type", 'text/plain');
			res.write(data);
		})
	}
})


server.listen(process.argv[2]);
