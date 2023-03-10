(function () {
    'use strict';
    angular.module('LunchCheck', [])
           .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.placeholder="list comma separated dishes you usually have for lunch";
        $scope.checkLunch = function () {
            let lunchList = $scope.placeholder.split(",");
            let size = lunchList.length;
            let ignore = 0;
            for(let i = 0; i < size; i++) {
                if (lunchList[i] == '' || lunchList[i] == ' ')
                    ignore++;
            }
            size -= ignore;
            if (size == 0 || size == 1 && hasSpace($scope.placeholder)) {
                $scope.myColor='red';
                $scope.message="Please enter data first";
            } else {
                $scope.myColor='green';
                if (size <= 3) {
                    $scope.message="Enjoy!";
                } else {
                    $scope.message="Too much!";
                }
            }
        }
    }
    function hasSpace(str) {
        return str.indexOf(' ') >= 0;
    }
})();