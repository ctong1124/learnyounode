var fs = require('fs');
var ext = process.argv[3];

fs.readdir(process.argv[2], callback);

function callback(err, list) {
	if (err) {
		console.log("Error");
	}
	else {
		filterFile(list);
	}
};

function filterFile(list) {
	for(i=0; i<list.length; i++) {
		var name_split = list[i].split(".");
		if(name_split[1] == ext) {
			console.log(list[i]);
		}
	}
}