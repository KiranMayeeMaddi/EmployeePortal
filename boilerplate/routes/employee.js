'use strict';
/* Importing files and libraries */
const helper = require('../helper/helper.js');
const validation = require('../helper/validation.js');
const externalPostAPI = require('../helper/postExternalAPI.js');
const express = require('express');

/* Declaration */
const router = express.Router();
const DATABASE = '{"1": {"firstName": "KiranMayee", "lastName" : "Maddi", "role": "CEO", "hireDate": "2020-03-20", "joke": "Corona virus is fictional"}, "quote": "Believe and think, everything will be yours."}';
var obj = JSON.parse(DATABASE);

/* GET all employees.*/
router.get('/', function(req, res){
    return res.send(obj);
});

/* GET employee by ID. */
router.get('/:id', function(req, res){
    var requiredId = req.params.id;
    if(requiredId in obj) {
        res.json(obj[requiredId]);
    } else {
      res.send('Employee id ' + requiredId+  ' is not in the list!');
    }
    res.end();
});

/* POST employee data. */
router.post('/', function(req, res){
    var empId = helper.generateRandomId(obj);
    validation.validateData(req.body);
    obj[empId] = req.body;
    externalPostAPI.callExternalAPIs(obj, empId);
    res.send('Employee details are added successfully! Employee id is ' + empId+'.');
    res.end();
});

/* UPDATE employee data. */
router.put('/:id', function(req, res){
    var changeEmployeeDetails = req.params.id;
    if(changeEmployeeDetails in obj) {
      validation.validateData(req.body);
      obj[changeEmployeeDetails] = req.body;
      res.send('Employee id ' +changeEmployeeDetails+  ' is updated successfully!');
    } else {
      res.send('Employee id ' + changeEmployeeDetails+  ' is not in the list to update!');
    }
    res.end();
});

/* DELETE employee data. */
router.delete('/:id', function(req, res){
    var deleteEmpId = req.params.id;
    if(deleteEmpId in obj) {
       delete obj[deleteEmpId];
       res.send('Employee id ' +deleteEmpId+ ' is deleted successfully!');
    } else {
       res.send('Employee id ' + deleteEmpId+  ' is not in the list!');
    }
  res.end();
});

module.exports = router;
