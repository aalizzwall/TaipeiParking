  angular.module('pkApp',['ui.bootstrap'])
    .controller('pkctl', ['$scope', '$http', function($scope, $http) {
          $http.get('http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=fe6767ec-9732-4bc9-b051-0990087c708d',
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
              'User-Agent': 'APPLICATION NAME',
              'Authorization': 'Basic INSERT BASE 64 ENCODED LOGIN CREDENTIALS HERE',
              'Access-Control-Allow-Origin': 'http://run.plnkr.co'
            }  
          }).success(function(data) {
            $scope.parks = data[result][results];
          });  
        }
    ]);

