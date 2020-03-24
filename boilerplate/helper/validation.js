'use strict';
/* Validate the fields during updation or addition of a employee. */
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

function validateName(name){
    return typeof name === 'string';
}

function validateHireDate(date){
    var currentDate = new Date().toISOString().slice(0,10);
    var regEx = /^\d{4}-\d{1,2}-\d{1,2}$/;
    return Date.parse(date) < Date.parse(currentDate) && !(!(date.match(regEx)));
}

function validateRole(role){
      var roles = new Set(["ceo", "vp", "manager", "lackey"]);
      return roles.has(role.toLowerCase());
}

module.exports = {
  validateData
}
