var http = require('http');
var url = require('url');


var server = http.createServer(function(req, res){



	if(req.url=='/api/parsetime'){

		var date_query=url.parse(req.url, true).query.iso;
		var date = new Date(date_query);

		var DateObj = {
			hour: date.getHours(),
			minute: date.getMinutes(),
			seconds: date.getSeconds()
		}

		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(DateObj));

	}
	else if(req.url=='/api/unixtime'){

		var  date_query = url.parse(req.url, true).query.iso;
		var date = new Date(date_query);
		var DateObj = {

			unixtime: date.getTime()
		}

		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(DateObj));
	}
})


server.listen(process.argv[2]);
