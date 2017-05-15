//console.log(process.argv);

var args = process.argv;
var sum=0;

for (var i=2; i < process.argv.length; i++) {
	//console.log(args[i]);
	//console.log(typeof(Number(args[i])));
	sum = sum + Number(args[i]);
	//console.log(sum);
}

console.log(sum);