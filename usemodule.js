var http = require ('https');
var dt = require('./myfirstmodule');

http.createServer(function(req,res){
	res.write("The date and time are" + dt.myDateTime);
	res.end();
}).listen(8080);