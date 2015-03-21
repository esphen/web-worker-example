'use strict';

/**
 * @ngdoc function
 * @name webWorkersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webWorkersApp
 */
angular.module('webWorkersApp')
    .controller('MainCtrl', function ($scope, WebWorker) {
        $scope.numbers = [];

        function getNumbers() {
            var result = [];
            for (var i = 100000000 - 1; i >= 0; i--) {
                result.push(i);
            };

            return result;
        };

        $scope.useNormal = function () {
            var result = getNumbers();
            // Filter
            var filteredResult = [];
            for (var i = result.length - 1; i >= 0; i--) {
                if(result[i] <= 10) {
                    filteredResult.push(result[i]);
                }
            };
            $scope.numbers = filteredResult;
        };

        $scope.useWebWorkers = function () {
            WebWorker.start('getNumbers', []).then(function (numbers) {
                WebWorker.start('filterResults', [numbers]).then(function (result) {
                    $scope.numbers = result;
                }, function (error) {
                    throw error;
                });
            }, function (error) {
                throw error;
            });
        };
    });
