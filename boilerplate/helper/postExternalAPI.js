'use strict';
/* Importing librarires */
var request = require('request');

/* Declaration */
var externalApis = {
  'quotesApi':  'https://ron-swanson-quotes.herokuapp.com/v2/quotes',
  'jokesApi': 'http://api.icndb.com/jokes/random/'
};

 /**
  * callExternalAPIs - 1. Calls joke and quote API.
  *                    2. Updates the employee object with a random joke and quote.
  *
  * @param  {JSON} obj   Employees object
  * @param  {string} empId Employee id
  * @return {}
  */
 function callExternalAPIs(obj, empId) {
   getJokeOrQuote(externalApis['quotesApi'], false, function(res) {
     obj[empId]['quote'] = res;
   });
   getJokeOrQuote(externalApis['jokesApi'], true, function(res) {
     obj[empId]['joke'] = res;
   });
}

/**
 * getJokeOrQuote - Call request to the endpoints
 *
 * @param  {string} api    Urls of the respective joke and quote apis
 * @param  {bool} isJoke   True if it is joke api else false
 * @param  {} callback     Takes of returning value after completing the request
 * @return {string}        Joke or Quote
 */
function getJokeOrQuote(api, isJoke, callback){
  request(api, function (error, response, body) {
          if (error) {
              return console.log('Error:', error);
          }
          if (response.statusCode !== 200) {
              return console.log('Invalid Status Code Returned:', response.statusCode);
          }
          var jsonBody = JSON.parse(body);
          return callback(isJoke ? parseJoke(jsonBody) : parseQuote(jsonBody));
      })
}

/**
 * parseJoke - Parses the joke from the obtained json
 *
 * @param  {JSON} jsonBody
 * @return {string}  Parsed joke from jsonBody
 */
function parseJoke(jsonBody){
    return jsonBody.value.joke;
}


/**
 * parseQuote - Parses the quote from the obtained json
 *
 * @param  {JSON} jsonBody
 * @return {string}  Parsed quote from jsonBody
 */
function parseQuote(jsonBody) {
   return jsonBody[0];
}

module.exports = {
  callExternalAPIs
}
