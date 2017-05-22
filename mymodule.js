 var fs = require('fs');

 module.exports = function (dirName, ext, callback) { 
	fs.readdir(dirName, function(err, list) {
		if(err) {
			return callback(err);
		}
		
		var filArray=[];
		
		for(i=0; i<list.length; i++) {
			var name_split = list[i].split(".");
			if(name_split[1] == ext) {
				filArray.push(list[i]);
			}
		}	
		callback(null, filArray)
		})


 } 