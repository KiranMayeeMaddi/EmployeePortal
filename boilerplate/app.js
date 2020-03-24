'use strict';

const express = require('express');
const employeeRoutes = require('./routes/employee');
const app = express();
const port = parseInt(process.env.PORT || '3000');
const cors = require('cors');
const http = require('http');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/employees', employeeRoutes);

// listen for requests
/*app.listen(port, function() {
    console.log(`Server is listening on port ${port}`);
});*/
app.listen(3000, '127.0.0.1', function() {
    console.log('Listening to port:  ' + 3000);
});

module.exports = app;
