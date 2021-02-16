var http = require('http');

http.createServer(function (req, res) {
    // http://localhost:8080/
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080);
