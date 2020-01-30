var http = require('http');
var url = require('url');
var http = require('http');

var server = http.createServer(function(req, res) {
  function isotime(query) {
    var date = new Date(query);
    console.log(date);
    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };
  }

  function unixtime(query) {
    var date = new Date(query);

    return {
      unixtime: date.getTime(),
    };
  }

  var {pathname, query} = url.parse(req.url, true);

  if (pathname == '/api/parsetime') {
    var resp = isotime(query.iso);
  }

	else if (pathname = '/api/unixtime') {
    var resp = unixtime(query.iso);
  }

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(resp));
});

server.listen(process.argv[2]);
