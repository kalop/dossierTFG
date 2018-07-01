var Sia = require("sia-api");

var sia = new Sia({
    host : "http://localhost:9980",
})

sia.daemon.version(function(err, resp) {
    if(err)
        console.log(err);
    else
        console.log("Sia daemon version:", resp.version);
})

sia.wallet(function(err, resp) {
    if(err)
        console.log(err);
    else
        console.log("Sia wallet: \n", resp);
})

sia.gateway(function(err, resp) {
    if(err)
        console.log(err);
    else
        console.log("Sia gateway: \n", resp);
})

sia.host(function(err, resp) {
    if(err)
        console.log(err);
    else
        console.log("Sia host: \n", resp);
})

sia.consensus(function(err, resp) {
    if(err)
        console.log(err);
    else
        console.log("Sia explorer: \n", resp);
})
