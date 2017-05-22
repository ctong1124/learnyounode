var fs = require('fs');

var mymodule = require('./mymodule.js')  

var filteredList = mymodule(process.argv[2], process.argv[3], callback);


function callback(err, list) {
	if (err) {
		console.log("Error");
	}
	
	list.forEach(function (file) {
		console.log(file)
	})
	
};

