var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function(socket){


	var time = new Date();


	var write = strftime('%F %H:%M', time);

	socket.write(write);
	socket.end('\n');




})

server.listen(process.argv[2]);
