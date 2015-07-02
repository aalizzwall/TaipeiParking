(function() {
  angular.module('pkApp',['ui.bootstrap'])

    .controller('pkctl', ['$scope', '$http',
        function($scope, $http) {
          $scope.parks = [];

          $http.get('http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=fe6767ec-9732-4bc9-b051-0990087c708d')
            .success(function(result) {
              $scope.parks = result[result][results];
            });

        }
    ])

})();
