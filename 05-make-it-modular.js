/*--------- modul 1 ---------*/

var path = process.argv[2]
var ext = process.argv[3]

var readFirAndFilter = require('./modular2.js')

readFirAndFilter(path, ext, function(err, data) {
  if (err) throw err
  console.log(data.join('\n'))
})

/*-------- modul 2 -----------*/

var fs = require('fs')
var path = require('path')

function readFirAndFilter (dirName, extFile, fnCallback) {
  var extFile = '.' + extFile
  fs.readdir(dirName, 'utf-8', function(err, data) {
    if (err) return fnCallback(err)

    var arr = data.filter(function(item) {
      return item.includes(extFile)
    })
    return fnCallback(null, arr)
  })
}

module.exports = readFirAndFilter
