(function() {
  angular.module('pkApp',['ui.bootstrap'])

    .controller('pkctl', ['$scope', '$http',
        function($scope, $http) {
          $scope.parks = [];

          $http.get('http://data.taipei.gov.tw/opendata/apply/query/QzhBMEJFOTctMEEzRC00M0Q2LThDNDktNDVCNDc3NDNDRDBC?$format=json')
            .success(function(result) {
              $scope.parks = result.data;
            });

        }
    ])

})();
