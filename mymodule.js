 var fs = require('fs');
 var http = require('http');

 module.exports = function (url, callback) { 

 	http.get(url, function(response) {
 		response.on("error", function(err) {
 			console.log('Error');
 		});
 		response.on("data", function(data) {
 			console.log(data.toString());
 		});
 	}) 


//correct solution with no modules????
/* 
var http = require('http')
    
    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    }).on('error', console.error)


*/ 


 } 