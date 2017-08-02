/*
Write a program that performs an HTTP GET request to a URL provided to
you as the first command-line argument. Write the String contents of
each "data" event from the response to a new line on the console (stdout).
*/
var http = require('http')

var url = process.argv[2]

http.get(url, function (readableResponse) {
  readableResponse
   .setEncoding('utf8')
   .on('data', function (chunk) {
     console.log(chunk)
   })
   .on('error', console.error())
})
