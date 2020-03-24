'use strict';

/**
 * validateData - Validate the fields during updation or addition of a employee.
 *
 * @param  {JSON} body employee object
 * @return {bool} Throws an error if any of the fields is not validated properly
 */
function validateData(body){
    if(!validateName(body.firstName)) {
      throw "Firstname type is not valid.";
    };
    if(!validateName(body.lastName)) {
      throw "Lastname type is not valid.";
    };
    if(!validateHireDate(body.hireDate)) {
      throw "Hiredate is not in valid format or is a future date.";
    };
    if(!validateRole(body.role)) {
      throw "Role is not valid.";
    };
}


/**
 * validateName - Validates first and last name
 *
 * @param  {string} name  employee first or last name
 * @return {bool}  returns true if the type is string else returns false
 */
function validateName(name){
    return typeof name === 'string';
}

/**
 * validateHireDate - Validates hire date
 *
 * @param  {string} date
 * @return {bool}   returns true if the date is in YYYY-MM-DD format
 *                  and is a previous date else returns false
 */
function validateHireDate(date){
    var currentDate = new Date().toISOString().slice(0,10);
    var regEx = /^\d{4}-\d{1,2}-\d{1,2}$/;
    return Date.parse(date) < Date.parse(currentDate) && !(!(date.match(regEx)));
}


/**
 * validateRole - Validates role
 *
 * @param  {string} role
 * @return {true} returns true if the role is either ceo, vp, manager, lackey
 *                irrespective of case else returns false. 
 */
function validateRole(role){
      var roles = new Set(["ceo", "vp", "manager", "lackey"]);
      return roles.has(role.toLowerCase());
}

module.exports = {
  validateData
}
