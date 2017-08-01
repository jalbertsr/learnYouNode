/*
Write a program that accepts one or more numbers as command-line
arguments and prints the sum of those numbers to the console (stdout).
*/

var result = process.argv.slice(2).reduce(function (item, acc) {
  return acc + item
}, 0)

console.log(result)
