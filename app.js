(function(){
     'use strict';
     angular.module('LunchChecker', [])
        .controller('LunchCheckerController', function ($scope) {
            $scope.checkLunch = function () {
                if (!$scope.lunchItems || $scope.lunchItems.trim() === '') {
                    $scope.message = "Please enter data first";
                    return;
                }

                var items = $scope.lunchItems.split(',').filter(function (item) {
                    return item.trim() !== '';
                });

                if (items.length <= 3) {
                    $scope.message = "Enjoy!";
                } else {
                    $scope.message = "Too much!";
                }
            };
        });
})();