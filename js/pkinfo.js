  angular.module('pkApp',['ui.bootstrap'])
    .controller('pkctl', ['$scope', '$http', function($scope, $http) {
          $http.get('http://opendata.hccg.gov.tw/dataset/8c25cb86-5ac9-4eb4-9337-7a4712aaefc8/resource/7e147049-11a5-4adc-ae15-d2f2536fe567/download/20150311113638455.json'}).success(function(data) {
            $scope.parks = data;
          });  
        }
    ]);

