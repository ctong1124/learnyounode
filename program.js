var fs = require('fs');

//returns buffer object
var file = fs.readFileSync(process.argv[2]);

var str = file.toString();

var arr = str.split("\n");

console.log(arr.length -1);