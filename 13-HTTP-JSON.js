var http = require('http')
var parse = require('url-parse')
var port = process.argv[2]

var dateStringToObject = // function

var dateStringToUnixtime = // function

var routes = {
    '/api/parsetime': function(query) {
        return dateStringToObject(query)
    },
    '/api/unixtime': function(query) {
        return dateStringToUnixtime(query)
    }
}

http.createServer(function(req, res) {
    var myURL = parse(req.url, true)

    var routeHandler = routes[myURL.pathname]
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(response))
    res.end()

}).listen(port)