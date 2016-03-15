var http = require('http'),
    fs = require('fs');

var requestListener = function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(fs.readFileSync('index.html'));
}

var server = http.createServer(requestListener);
server.listen(process.env.PORT || 8080);
