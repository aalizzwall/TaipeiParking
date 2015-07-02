  angular.module('pkApp',['ui.bootstrap'])
    .controller('pkctl', ['$scope', '$http',
        function($scope, $http) {
          $scope.parks = [];
          $http.get('http://data.taipei.gov.tw/opendata/apply/query/QzhBMEJFOTctMEEzRC00M0Q2LThDNDktNDVCNDc3NDNDRDBC?$format=json', {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
              'User-Agent': 'APPLICATION NAME',
              'Authorization': 'Basic INSERT BASE 64 ENCODED LOGIN CREDENTIALS HERE'
            }  
          }).success(function(data) {
            $scope.parks = data;
          }).error(function(data, status, headers, config) {
            console.log(config);
          });  
    ])

