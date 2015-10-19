var connect = require('connect');
var	serveStatic = require('serve-static');

var port = 3000;
connect().use(
	serveStatic(__dirname)
).listen(port);

console.log('connected via port ' + port);