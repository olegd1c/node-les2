var http = require('http');

http.createServer(function(request,respone){
    respone.writeHead(200,{"Content-Type":"text/plan"});
    respone.write("Hello world");
    respone.end();
}).listen("8080");

console.log("Server started");
