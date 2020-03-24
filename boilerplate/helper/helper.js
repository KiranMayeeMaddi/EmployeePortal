'use strict';
var uniqueId = 1;

function generateRandomId(obj){
   while(uniqueId in obj) {
     uniqueId++;
   }
   return uniqueId.toString();
}

module.exports = {
  generateRandomId
}
