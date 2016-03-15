var http = require('http'),
    fs = require('fs'),
    filename = 'index.html';

var requestListener = function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.stat(filename, function (errStat, stats) {
        if (errStat) {
            return console.log(errStat);   
        }
	console.log(stats.size);
        var buffer = new buffer(stats.size);
        var offset = 0,
            length = buffer.length,
            position = 0;
           	
	fs.open(filename, 'r', function (err, fd) {
            if (err) {
                return console.log(err);
            }
            fs.read(fd, buffer, offset, length, position, function (errRead, bytesRead) { 
                if (errRead) {
                    return console.log(errRead);
                }
                response.write(buffer.toString());
                console.log(buffer.toString());
                response.end();
                });
            });
    });
}

var server = http.createServer(requestListener);
server.listen(process.env.PORT || 8080);
