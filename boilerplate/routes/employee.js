'use strict';
const helper = require('../helper/helper.js');
const validation = require('../helper/validation.js');
const externalPostAPI = require('../helper/postExternalAPI.js');
const express = require('express');
const router = express.Router();

/*const DATABASE = {};*/
const emp = '{"1": {"firstName": "Kiran", "lastName" : "Maddi", "role": "CEO", "hireDate": "2020-03-20"}, "2": {"firstName": "Maddi", "lastName": "Maddi", "role": "vp", "hireDate": "2020-03-19"}}';
var obj = JSON.parse(emp);
var externalApis = {
  'quotesApi':  'https://ron-swanson-quotes.herokuapp.com/v2/quotes',
  'jokesApi': 'http://api.icndb.com/jokes/random/'
};


/* GET employees listing. */
router.get('/', function(req, res){
    /*res.json(obj);
    res.end();*/
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
