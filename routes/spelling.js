/*
 * The Spelling Router
 */

var express = require('express')
	, async = require('async')
  , router = new express.Router()
  , spell = new (require('spellcheck'))(__dirname + '/../en_US.aff', __dirname + '/../en_US.dic');

/*
 * Bind the routes to the router
 */

/*
 * GET /check
 *
 * we will route HTTP requets to our model "spell" which was defined above
 *
 * @param (string) word: the word to spell check
 * @param (string) words: [optional] an alias for word implying we have more than one word 
 */

router.get('/check', check);

function check (req, res, next) {
	var words = (req.param('word') || req.param('words') || '').replace(/[^\w,]/,'').split(','), check = [], hit = {};
	if (!words.length) return res.status(400).json(new Error('please specify a word or words to have their spelling checked'));
	words.forEach(function (word) {
		if (word.length && !hit[word])
			check.push(function (cb) {
				spell.check(word, function (err, correct, suggestions) {
					if (err) return cb(err);
					cb(null, {word:word, correct: correct, suggestions:suggestions});
				});
			});
		hit[word] = hit[word] || 0;
		hit[word]++;
	});
	async.parallel(check, function (err, checks) {
		var results;
		if (err) return res.status(400).json(err);
		results = {};
		checks.forEach(function (check) {
			results[check.word] =	{correct:check.correct, suggestions:check.suggestions};
		});
		res.status(200).json(results);
	});
}

module.exports = router;
