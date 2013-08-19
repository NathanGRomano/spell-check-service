var http = require('http')
  , app = require('./app');

module.exports = http.createServer(app).listen(app.get('port'), function () {
	console.log('spell check service listening on port ' + app.get('port') + ' in ' + app.get('env') + ' mode '); 
});
