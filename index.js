var http = require('http'),
    fs = require('fs');

var requestListener = function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(fs.readFile('index.html', function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    }););
}

var server = http.createServer(requestListener);
server.listen(process.env.PORT || 8080);
