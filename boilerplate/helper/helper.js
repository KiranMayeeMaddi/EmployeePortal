'use strict';
/* Declaration */
var uniqueId = 1;

/**
 * generateRandomId - Generates a unique id for the employee.
 *
 * @param  {JSON} obj Employees object
 * @return {string}   Obtains unique identifier
 */
function generateRandomId(obj){
   while(uniqueId in obj) {
     uniqueId++;
   }
   return uniqueId.toString();
}

module.exports = {
  generateRandomId
}
