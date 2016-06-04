var elfApp = angular.module('elfApp');


elfApp.controller('FirstController', function($scope, $http) {
    'use strict';

    $scope.description = 'First Controller Data';

    $scope.loadData = function() {
        $http.get('Presidents.json')
            .then(function(presidents) {
                $scope.presidents = JSON.stringify(presidents, null, 4);
            })
    };

    $scope.loadData();
});





elfApp.directive('elfFirstData', function() {
    'use strict';
    return {
        controller: 'FirstController',
        templateUrl: 'first-data'
    };
});