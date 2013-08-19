/*
 * Dependencies 
 */
var express = require('express')
  , routes = require('./routes');


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
	app.use(app.router);
	app.use('/spelling', routes.spelling.middleware);
});

app.configure('development', function () {
	app.use(express.errorHandler());
});

/*
 * export this module as the app instance
 */
module.exports = app;
