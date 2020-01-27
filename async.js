//@format
var http = require('http');

var concat = require('concat-stream');

function cb(url) {
  return new Promise(function(resolve, reject) {
    http.get(url, function(response) {
      response.pipe(
        concat({encoding: 'string'}, function(data) {
          resolve(data);
        }),
      );
    });
  });
}

Promise.all([
  cb(process.argv[2]),
  cb(process.argv[3]),
  cb(process.argv[4]),
]).then(data => data.forEach(d => console.log(d)));
