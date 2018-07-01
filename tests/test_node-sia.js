var SiaClient = require('node-sia');
var client = new SiaClient();

//'GET', '/consensus/blocks/149224'
client.sendRequest('GET', '/consensus/blocks/149224')
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.error(err);
    });
