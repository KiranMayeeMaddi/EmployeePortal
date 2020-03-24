'use strict';

const express = require('express');
const employeeRoutes = require('./routes/employee');
const app = express();
const port = parseInt(process.env.PORT || '3000');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/employees', employeeRoutes);


/**
 * app - Static files routing
 */

app.get('/', function(req,res) {
  res.sendFile(__dirname + '/userInterface/homepage/index.html');
});

app.get('/style.css', function(req,res) {
  res.sendFile(__dirname + '/userInterface/homepage/style.css');
});

app.get('/homePageBg.jpg', function(req, res) {
  res.sendFile(__dirname + '/userInterface/images/homePageBg.jpg');
});

app.get('/newEmployee', function(req,res) {
  res.sendFile(__dirname + '/userInterface/newEmployee/newEmployee.html');
});
app.get('/newEmployee.css', function(req,res) {
  res.sendFile(__dirname + '/userInterface/newEmployee/newEmployee.css');
});
app.get('/internalPageBg.png', function(req, res) {
  res.sendFile(__dirname + '/userInterface/images/internalPageBg.png');
});
app.get('/controller.js', function(req, res) {
  res.sendFile(__dirname + '/controller/controller.js');
});

app.get('/employeeList', function(req,res) {
  res.sendFile(__dirname + '/userInterface/employeeList/employeeList.html');
});

app.get('/employeeList.css', function(req,res) {
  res.sendFile(__dirname + '/userInterface/employeeList/employeeList.css');
});

/**
* listen for requests
*/
app.listen(3000, '127.0.0.1', function() {
    console.log('Listening to port:  ' + 3000);
});

module.exports = app;
