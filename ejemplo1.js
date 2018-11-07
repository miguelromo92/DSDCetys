// Parse body in API call
var bodyParser = require("body-parser");
var express = require('express');

var app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/helloworld', function(req, res) {
 res.json( { message: 'Hello World!' } );
});

var PORT = process.env.port || 3000; //todos los servicios tienen un puerto. la idea es que
//va a buscar una variable port y le va a asignar el valor 3000.

app.listen(PORT, function() {
 console.log(`App running in port ${PORT}`);
});
