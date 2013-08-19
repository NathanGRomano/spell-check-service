var cluster = require('cluster')
  , cpus = require('os').cpus().length || 1;

if (cluster.isMaster) {
	for (var i=0; i<cpus; ++i)
		cluster.fork();
	
	cluster.on('exit', function (worker) {
		console.log('worker ' + worker.process.pid + ' died ('+worker.process.exitCode+'). restarting...');
		cluster.fork();
	});
}
else {
	module.exports = require('./service');
}
