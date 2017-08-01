/*
Write a program that uses a single {bold}synchronous{/bold} filesystem operation to
read a file and print the number of newlines it contains to the
console (stdout), similar to running `cat file | wc -l`.
The full path to the file to read will be provided as the first
command-line argument.
*/

var fs = require('fs')

var filename = process.argv[2]
var buf = fs.readFileSync(filename)
var len = (buf.toString().split('\n').length) - 1
console.log(len)
