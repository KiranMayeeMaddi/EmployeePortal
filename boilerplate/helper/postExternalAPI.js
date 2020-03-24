'use strict';
var request = require('request');



/*function callExternalAPIs(obj, empId) {
 for (var key in externalApis) {
     var isJoke = key.includes('joke');
     var keyName = isJoke ? 'joke': 'quote';
     const tempString =  getJokeOrQuote(externalApis[key], isJoke);
     obj[empId][keyName] = tempString;*
 }
}

function getJokeOrQuote(api, isJoke){
  var jsonBody;

  request(api, function (error, response, body) {
          if (error) {
              return console.log('Error:', error);
          }
          if (response.statusCode !== 200) {
              return console.log('Invalid Status Code Returned:', response.statusCode);
          }
          jsonBody = JSON.parse(body);
      })
   return isJoke ? parseJoke(jsonBody) : parseQuote(jsonBody);
}

function parseJoke(jsonBody){
    return jsonBody.value.joke;
}*/
function getJoke(api){
let joke;
return new Promise( function (resolve, reject){
        request(api, function (error, response, body) {
            if (error) {
                return console.log('Error:', error);
            }
            if (!error && response.statusCode !== 200) {
                return console.log('Invalid Status Code Returned:', response.statusCode);
            }
            joke = JSON.parse(body).value.joke;
            console.log("*** GET JOKE ***")
            console.log(joke)
            console.log("*** END JOKE ***")
            resolve(joke);
      }).end();
}
)}

function getQuote(api){
  let quote;
  return new Promise( function(resolve, reject){
        request(api, function (error, response, body) {
          if (error) {
              return console.log('Error:', error);
          }
          if (response.statusCode !== 200) {
              return console.log('Invalid Status Code Returned:', response.statusCode);
          }
          quote = JSON.parse(body)[0];
          console.log("*** GET QUOTE ***")
          console.log(quote)
          console.log("*** END QUOTE ***")
          resolve(quote);
      }).end();
}
)}

/*function parseQuote(jsonBody) {
   return jsonBody[0];
}*/

module.exports = {
  getJoke,
  getQuote
}
