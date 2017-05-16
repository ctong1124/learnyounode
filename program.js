var fs = require('fs');

fs.readFile(process.argv[2], "utf8", callback);

function callback(err, data) {
	if (err) {
		console.log("Error");
	}
	else {
		console.log(data.split("\n").length-1);
	}
};
