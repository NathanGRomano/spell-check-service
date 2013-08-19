/*
 * The Spelling Router
 */

var express = require('express')
  , router = new express.Router()
  , spell = new (require('spellcheck'))(__dirname + '../en_US.aff', __dirname + '../en_US.dic');

/*
 * Bind the routes to the router
 */

/*
 * GET /check
 *
 * we will route HTTP requets to our model "spell" which was defined above
 *
 * @param word 
 * @param words (optional)
 */

router.get('/check', function (req, res, next) {
	// TODO implement me!
	next();
});

module.exports = router;
