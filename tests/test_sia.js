var client = require('sia.js');


// connect to an already running Sia daemon on localhost:9980 and print its version
client.connect('localhost:9980')
  .then((siad) => {
    siad.call('/consensus/headers/149224').then((response) => console.log(response))

  })
  .catch((err) => {
    console.error(err)
  })
