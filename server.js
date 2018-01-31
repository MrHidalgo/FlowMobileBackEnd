const http = require('http');

http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello Ionic! To beat shit out someone');

}).listen(process.env.PORT || 8080);