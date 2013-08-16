/*
 * Third Party Modules
 */
var express = require('express');


/*
 * Our express app
 */
var app = express();


/*
 * Configure our app
 */
app.configure(function () {
	app.set('port', process.env.PORT || 3000);
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

app.configure('development', function () {
	app.use(express.errorHandler());
});

/*
 * export this module as the app instance
 */
module.exports = app;
