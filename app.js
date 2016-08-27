// Modules //
var express = require('express');
var app = express();
var piREST = require('pi-arest')(app);

// Set unique ID - old p5dgwt
piREST.set_id('razpi3relay1');
piREST.set_name('pi_cloud');

// Connect to cloud.aREST.io
piREST.connect();

// Start server
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
