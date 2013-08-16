/*
 * The Spelling Router
 */

var express = require('express')
  , router = new express.Router();

/*
 * Bind the routes
 */

router.get('/check', function (req, res, next) {
	// TODO implement me!
	next();
});

module.exports = router;
