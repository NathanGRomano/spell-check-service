var request = require('supertest')
  , assert = require('assert')
  , app = require('../.');

describe('given a misspelled word', function () {

	describe('when checking to see if it spelled correctly', function () {

		it('then should give us response stating it is inncorrect and any spelling suggestions', function (done) {

			request(app)
				.get('/spelling/check?word=mispeled')
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function (err, res) {
					if (err) return done(err);
					assert.equal(res.body.correct, false);
					assert.eqaul(typeof res.body.suggestions, 'object');
					assert.equal(res.body.suggestions.length >= 1, true);
					done();
				});

		});

	});

});

describe('given a correctly spelled word', function () {

	describe('when checking to see if it spelled correctly', function () {

		it('then should give us a response stating it is correct', function (done) {

			request(app)
				.get('/spelling/check?word=correct')
				.expect('Content-Type', /json/)
				.expect(200)
				.end(function (err, res) {
					if (err) return done(err);
					assert.equal(res.body.correct, true);
					done();
				});

		});

	});

});
