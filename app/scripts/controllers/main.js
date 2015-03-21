'use strict';

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
            $scope.inProgress = false;
        };

        $scope.useWebWorkers = function () {
            if (!!window.Worker) { //Support present
                WebWorker.start('getNumbers', []).then(function (numbers) {
                    $scope.numbers = numbers;
                    $scope.inProgress = false;
                }, function (error) {
                    throw error;
                });
            } else {
                alert('Browser does not support web workers');
                $scope.useNormal();
            }
        };

        $scope.toggleProgress = function () {
            $scope.inProgress = !$scope.inProgress;
        }
    });
