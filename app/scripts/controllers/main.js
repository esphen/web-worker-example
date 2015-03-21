'use strict';

/**
 * @ngdoc function
 * @name webWorkersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webWorkersApp
 */
angular.module('webWorkersApp')
    .controller('MainCtrl', function ($scope, WebWorkers) {
        $scope.numbers = [];

        function getNumbers () {
            var result = [];
            for (var i = 100000000 - 1; i >= 0; i--) {
                result.push(i);
            };

            // Filter
            var filteredResult = [];
            for (var i = result.length - 1; i >= 0; i--) {
                if(result[i] <= 10) {
                    filteredResult.push(result[i]);
                }
            };
            $scope.numbers = filteredResult;
        };

        $scope.useNormal = getNumbers;

        $scope.useWebWorkers = function () {
            WebWorkers.f('getNumbers', [$scope]).then(function (result) {
                $scope.numbers = result.result;
            }, function (error) {
                throw error;
            });
        };
    });
