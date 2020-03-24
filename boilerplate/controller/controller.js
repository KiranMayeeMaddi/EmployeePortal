var myapp = angular.module('employeeApp',[]);

myapp.run(function ($http) {
    $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    $http.defaults.headers.post['dataType'] = 'json'
});

myapp.controller('getController', function($scope, $http)
{
    $scope.records = [];
    var result = $http.get('http://127.0.0.1:3000/api/employees').then(function (d){
        $scope.records = d.data;
    },function (err){
                console.log(err);
    });
});

myapp.controller('postController',function($scope, $http, $timeout){

    $scope.successMsg = true;
    $scope.errorMsg = true;
    $scope.insertData = function(){
        $http.post('http://127.0.0.1:3000/api/employees', JSON.stringify($scope.employee)).then(function (response){
        if (response.data)
            $scope.msg = "Post Data Submitted Successfully!";
            $scope.successMsg = false;
            $timeout(function() {
              $scope.successMsg = true;
            }, 4000);
        }, function (response) {
            $scope.msg = "Service not Exists";
            $scope.statusval = response.status;
            $scope.statustext = response.statusText;
            $scope.headers = response.headers();
            console.log("One of the fields is in incorrect format");
            $scope.errorMsg = false;
            $timeout(function() {
              $scope.errorMsg = true;
            }, 4000);
        })
        $scope.employee.firstName = '';
        $scope.employee.lastName = '';
        $scope.employee.hireDate = '';
        $scope.employee.role = '';
    };
});
