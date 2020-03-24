'use strict';
var request = require('request');


var externalApis = {
  'quotesApi':  'https://ron-swanson-quotes.herokuapp.com/v2/quotes',
  'jokesApi': 'http://api.icndb.com/jokes/random/'
};

 function callExternalAPIs(obj, empId) {
   getJokeOrQuote(externalApis['quotesApi'], false, function(res) {
     obj[empId]['quote'] = res;
   });
   getJokeOrQuote(externalApis['jokesApi'], true, function(res) {
     obj[empId]['joke'] = res;
   });
}

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

function parseJoke(jsonBody){
    return jsonBody.value.joke;
}
function parseQuote(jsonBody) {
   return jsonBody[0];
}

module.exports = {
  callExternalAPIs
}
