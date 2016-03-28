var express = require('express');
var api = require('./api');
var jwt = require('express-jwt');

var app = express();

app.use('/api', api);

app.listen(3000, function () {
	console.log('Server listening on port 3000');
});