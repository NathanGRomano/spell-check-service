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
