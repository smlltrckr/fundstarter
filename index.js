var http = require('http'),
    fs = require('fs');

var requestListener = function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(fs.readFileSync('/index.html', 'uf8'));
    res.end();
}

var server = http.createServer(requestListener);
server.listen(8080);
