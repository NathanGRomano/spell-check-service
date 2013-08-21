Spell Check Service
===================
This is a simple RESTful service that wraps up a third-party module for spell checks and suggestions.

## Getting Started
> npm install

## Running the app
> npm start

## API
*   GET /spelling/check?word=mispelled

    Words can be comma seperated too
*   GET /spelling/check?word=mispelled,nife
   
    You can also use words instead of word for clarity
*   GET /spelling/check?words=mispelled,nife

## Example

> curl http://localhost:3000/spelling/check?words=mispelled,tiger,fud

Yields 


		{
			"mispelled": {
				"correct": false,
				"suggestions": [
					"misspelled",
					"dispelled",
					"mi spelled",
					"mi-spelled",
					"misspell",
					"spelled",
					"impelled"
				]
			},
			"tiger": {
				"correct": true
			},
			"fud": {
				"correct": false,
				"suggestions": [
					"FUD",
					"food",
					"dud",
					"feud",
					"fund",
					"fed",
					"fad",
					"fun",
					"fur",
					"fut",
					"cud",
					"fug",
					"fum",
					"mud",
					"pud"
				]
			}
		}
