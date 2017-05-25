var http = require('http');
var map = require('through2-map')

//process.argv[3] is the response
var server = http.createServer(function (request, response) { 
	//var headers = request.headers;
	var method = request.method;
	// var url = request.url;
	// var body = []; 



	if (method == "POST") {
		response.writeHead(200, { 'content-type': 'text/plain' })
		request.pipe(map(function (chunk) {  
      	 return chunk.toString().toUpperCase()  
    	 })).pipe(response); 
	}
	else {
		 return response.end('send me a POST\n')
	}

	 


	//response
	// response.statusCode = 200;
 //    response.setHeader('Content-Type', 'application/json');
 //    var responseBody = {
 //      headers: headers,
 //      method: method,
 //      url: url,
 //      body: body
 //    };


    // response.write(JSON.stringify(responseBody));
    // response.end();

});  
server.listen(process.argv[2])  






