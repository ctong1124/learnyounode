var net = require('net') 


var server = net.createServer(function (socket) {  
	var date = new Date();

	socket.write(date.getFullYear()+ "-" + 
		zeroFill(date.getMonth() + 1)+ "-" + 
		zeroFill(date.getDate()) + " " + 
		zeroFill(date.getHours()) + ":" + 
		zeroFill(date.getMinutes()) + "\n");

	socket.end();
})  
server.listen(process.argv[2])


function zeroFill(num) {
	var str = num.toString();
	if (str.length <2) {
		str = "0" + str;
}
	return str;
}





