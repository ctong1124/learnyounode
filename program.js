var fs = require('fs');
var http = require('http');
var bl = require('bl');

var arr = [];
var count = 0;


for (var i=0; i<3; i++) {
	get(i);
}

function get(index) {
	http.get(process.argv[2+index], function(response) {
		response.pipe(bl(function(err, data) {
			if(err){
				console.log("Error");
			}
			arr[index] = data.toString()
			

			count++;

			if(count==3) {
				print();
			}

		}
		));	
	})
}

function print() {
	for (var i=0; i<arr.length; i++) {
		console.log(arr[i]);
	}
}