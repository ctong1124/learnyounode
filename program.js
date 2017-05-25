var http = require('http');
var map = require('through2-map')
var url = require('url');

//process.argv[3] is the response
var server = http.createServer(function (request, response) { 
	var headers = request.headers;
	var method = request.method;
	var parse = url.parse(request.url, true)
	var pathname = parse.pathname;

	if (method == "GET") {
		var date = new Date(parse.query.iso);
		var json = {};
		if (pathname.includes("parsetime")) {
			json["hour"] = date.getHours();
			json["minute"] = date.getMinutes();
			json["second"] = date.getSeconds();
		}
		if (pathname.includes("unixtime")) {
			json["unixtime"] = date.getTime();
		}
		response.writeHead(200, { 'Content-Type': 'application/json' });
	    response.write(JSON.stringify(json));
	    response.end();
	}
	else {
		 return response.end('send me a GET\n')
	}
});  
server.listen(process.argv[2])  






