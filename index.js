/*
    Part 1a http server using readFileSync
    under commit with message "make it better"
*/
/*
var http = require('http'),
    fs = require('fs');

var requestListener = function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(fs.readFileSync('index.html'));
}

var server = http.createServer(requestListener);
server.listen(process.env.PORT || 8080);
*/
/*
    Part 1b http server using readFile
    under commit with "part 1b fs.readFile"
*/
/*
var http = require('http'),
    fs = require('fs');

var requestListener = function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', function (err, data) {
        if (err) {
            return console.log(err);
        }
        response.write(data);
        response.end();
    });
}

var server = http.createServer(requestListener);
server.listen(process.env.PORT || 8080);
*/
/*
    Part 2 
*/

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
        var buffer = new Buffer(stats.size);
        var offset = 0,
            length = buffer.length;

        fs.open(filename, 'r', function (err, fd) {
            if (err) {
                return console.log(err);
            }
            fs.read(fd, buffer, offset, length, null, function (errRead, bytesRead, buff) {
                if (errRead) {
                    return console.log(errRead);
                }
                response.write(buff.toString("utf8", 0, bytesRead));
                console.log(buff.toString("utf8", 0, bytesRead));
                response.end();
                });
            });
    });
}

var server = http.createServer(requestListener);
server.listen(process.env.PORT || 8080);
