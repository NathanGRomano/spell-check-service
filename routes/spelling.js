/*
 * The Spelling Router
 */

var express = require('express')
	, async = require('async')
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
	var words = (req.param('word') || req.param('words') || '').split(','), check = [];
	if (!words.length) return res.status('400').json(new Error('please specify a word or words to have their spelling checked'));
	words.forEach(function (word) {
		check.push(function (cb) {
			spell.check(word, function (err, correct, suggestions) {
				if (err) return cb(err);
				cb(null, {correct: correct, suggestions:suggestions});
			});
		});
	});
	async.parallel(check, function (err, results) {
		console.log('err', err, 'results', results);
		if (err) res.status(400).json(err);
		res.status(200).json(results);
	});
});

module.exports = router;
