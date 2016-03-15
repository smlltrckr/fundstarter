var http = require('http'),
    fs = require('fs'),
    filename = 'index.html';

var requestListener = function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.stat(filename, function (errStat, stats) {
        if (errStat) {
            return console.log(errStat);   
        }
	           	
	fs.open(filename, 'r', function (err, fd) {
            if (err) {
                return console.log(err);
            }
	    console.log(stats.size);
            var buffer = new buffer(stats.size);
            var offset = 0,
            length = buffer.length,
            position = 0;
            
	    fs.read(fd, buffer, offset, length, position, function (errRead, bytesRead, buff) { 
                if (errRead) {
                    return console.log(errRead);
                }
                response.write(buff.toString("utf8", 0, bytesRead));
                console.log(buff.toString("utf8", 0, bytesRead));
                response.end();
		fs.close(fd);
                });
            });
    });
}

var server = http.createServer(requestListener);
server.listen(process.env.PORT || 8080);
