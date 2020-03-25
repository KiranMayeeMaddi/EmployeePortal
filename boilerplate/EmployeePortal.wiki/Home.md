Welcome to the **EmployeePortal** wiki!

**Project Setup** 

1. Open terminal 
2. Setting up node development environment
   * Download the required installer - https://nodejs.org/en/
   * Select "_Recommended for most users_"
   * Install node by double-clicking on the download file and following the steps in the prompt
3. Install necessary packages <br/>
   Use command - _npm install <package_name>_ <br/>
   Required packages for this project - _express, cors_ <br/>
4. Navigate to the project location (../boilerplate)
5. Run the server using command - _node app.js_

**Employee Portal** <br/>

_**User Interface**_ <br/>
Open browser and type url _http://localhost:3000/_ <br/>

**Home Page** <br/>

**Add Employee Page** <br/>
You can add an employee by clicking the add employee button <br/>

Check for required fields <br/>

Successful Submission

Incorrect format of fields (according to the requirements in README.md)

**Employee List** <br/>
You can view all the employees <br/>


_**Endpoints**_ <br/>
REST API endpoints which provides CRUD functionality for an employee. <br/>

POST - _http://localhost:3000/api/employees_ <br/>
PUT - _http://localhost:3000/api/employees/:id_ <br/>
GET (Employee List) - _http://localhost:3000/api/employees_ <br/>
GET (One Employee) - _http://localhost:3000/api/employees/:id_ <br/>
DELETE - _http://localhost:3000/api/employees/:id_ <br/>




