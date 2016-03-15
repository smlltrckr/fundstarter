var http = require('http'),
    fs = require('fs');

var requestListener = function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.stat(path, function (errStat, stats) {
        if (stats.isFile()) {
            fs.open('./index.html', 'r', function (errOpen, fd) {
            if (errOpen) {
                console.log(errOpen);
            }
            fs.read(fd, function(err, bytesRead, buff) {
                if (err) {
		    return console.log(err);
		}
		response.write(buff.toString('utf8', 0, bytesRead));
                console.log(buff.toString('utf8', 0, bytesRead));
                response.end();
                });
            });
        } else {
            return console.log(errStat);
        }
    });
}

var server = http.createServer(requestListener);
server.listen(process.env.PORT || 8080);
