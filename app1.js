var http = require('http');
var chalk = require("chalk");
var server = http.createServer();
server.on("request", function(req, res){
    console.log("HTTP Server gestartet, Methode:" + req.method + "Pfad" + req.url);
    var body ="";

    req.on("data", function(data){
        body = body + data.toString();
    });
    req.on("end", function(){
        console.log(chalk.red("beendet"));
        var message = JSON.parse(body);
        res.writeHead(200,"OK",{"content-Type": "text/plain"});
        res.write("Hallo" + message.user + "deine Nachricht:" + message.content);
        res.end();
    })

});
server.listen(8888);
