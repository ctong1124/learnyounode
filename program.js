var http = require('http');
var map = require('through2-map')

//process.argv[3] is the response
var server = http.createServer(function (request, response) { 
	var method = request.method;

	if (method == "POST") {
		response.writeHead(200, { 'content-type': 'text/plain' })
		request.pipe(map(function (chunk) {  
      	 return chunk.toString().toUpperCase()  
    	 })).pipe(response); 
	}
	else {
		 return response.end('send me a POST\n')
	}

});  
server.listen(process.argv[2])  






