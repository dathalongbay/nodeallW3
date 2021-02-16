var http = require('http');
var dt = require('../ex');
var cm = require('./dt');
var ab = require('./next/ab');

console.log(dt.myDateTime());
console.log(cm.myDateTime());
console.log(ab.myDateTime());
/*
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time is currently: " + dt.myDateTime());
    res.end();
}).listen(8080);*/
