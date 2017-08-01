/*
Write an HTTP server that serves the same text file for each request
it receives.
You will be provided with the location of the file to serve as the
first command-line argument. You must use the `fs.createReadStream()`
method to stream the file contents to the response.
Your server should listen on port 8000.
*/
var fs = require('fs')
var http = require('http')

var file = process.argv[2]

http.createServer(function (req, res) {
  fs.createReadStream(file).pipe(res)
}).listen(8000)
