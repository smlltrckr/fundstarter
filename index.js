var http = require('http'),
    fs = require('fs');

var requestListener = function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(fs.readFileSync('index.html'));
    res.end();
}

var server = http.createServer(requestListener);
server.listen(process.envPORT || 8080);
