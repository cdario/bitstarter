var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var buff = new Buffer(5);

var buff = fs.readFile("index.html");

var mymessage = buff.toString('utf-8');


app.get('/', function(request, response) {
  response.send(mymessage);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
