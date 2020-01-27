var fs = require('fs');
var location = process.argv[2];
var content = fs.readFileSync(location, 'utf8');
console.log(content.split('\n').length-1);
