(function() {
  angular.module('pkApp',['ui.bootstrap'])

    .controller('pkctl', ['$scope', '$http',
        function($scope, $http) {
          $scope.parks = [];

          
          $http.get('data.json').success (function(data){
				    $scope.parks = data;
		      });

        }
    ])

})();
