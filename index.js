var http = require('http'),
    fs = require('fs');

var requestListener = function (req, res) {
    res.writeHead(200);
    res.write(html);
    res.end(fs.readFileSync('/index.html', function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
    }));
}

var server = http.createServer(requestListener);
server.listen(8080);
