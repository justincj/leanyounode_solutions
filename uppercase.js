var http = require('http');

var through = require('through2');
var body = require('body/any');

var server = http.createServer(function(req, res) {
  function uppercase(buf, enc, next) {
    next(null, buf.toString().toUpperCase());
  }

  if (req.method == 'POST') {
    req.pipe(through(uppercase)).pipe(res);
  }
});

server.listen(process.argv[2]);
