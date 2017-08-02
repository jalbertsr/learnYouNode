/*
Write a program that performs an HTTP GET request to a URL provided to
you as the first command-line argument. Collect all data from the
server (not just the first "data" event) and then write two lines to
the console (stdout).
The first line you write should just be an integer representing the
number of characters received from the server and the second line
should contain the complete String of characters sent by the server.
*/

// way 1
// var http = require('http')
// var concat = require('concat-stream')
// var url = process.argv[2]

// http.get(url, function(req) {
//     req.setEncoding('utf-8')
//     var chucnkCncat = concat(function(data) {
//         console.log(data.length)
//         console.log(data)
//     })
//     req.pipe(chunkConcat)
// })

// way 2
var http = require('http')
var url = process.argv[2]
var totalData = ''

http.get(url, function (req) {
  req.setEncoding('utf-8')
  req.on('data', function (data) {
    totalData += data + '\n'
  })
  req.on('end', function () {
    console.log(totalData)
  })
})
