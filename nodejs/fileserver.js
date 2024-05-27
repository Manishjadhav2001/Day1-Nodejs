var fs = require("fs");
var http = require("http");
http.createServer(function(req,resp){
    fs.readFile("demo.html","utf-8",function(err,data){
      if(!err){
        resp.end(data);
      }
    });
}).listen(9000);                         