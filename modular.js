//@format
var mod = require('./module.js');

var dirname = process.argv[2];
var extension = process.argv[3];

mod(dirname, extension, function cb(err, list) {
  if (err) console.log(err);
  else {
    list.forEach(file => console.log(file));
  }
});
