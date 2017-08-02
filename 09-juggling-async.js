var http = require('http') // rquiriendo http...

var links = [process.argv[2], process.argv[3], process.argv[4]]

function getLinks (links) {
  if (links.length) {
    http.get(links.shift(), function (response) { // llamamos al link..
      response.setEncoding('utf-8') // pasamos de "buffer a algo visible !.."
      var responseData = []
      response.on('data', function (data) { // si da respuesta.. imprime en data la info..
        responseData.push(data) // añadimos la info a la var vacia..

        getLinks(links)
      })
      response.on('end', function (data) {
        console.log(responseData.join('')) // impr la arr completa.
      })
      response.on('err', function (err) { // si no llama.. dara error..
        console.log(err)
      })
    })
  }
}

getLinks(links)
