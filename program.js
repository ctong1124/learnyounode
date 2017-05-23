var fs = require('fs');
var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(response) {
	
	response.pipe(bl(function(err, data) {
		if(err){
			console.log("Error");
		}
		var string = data.toString();
		
		console.log(string.length);
		console.log(string);
	}
		));
	

}) 






