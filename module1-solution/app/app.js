(function() {
    'use strict';
    angular.module('LunchCheck', [])
           .controller('LunchCheckController', LunchCheckController);

        LunchCheckController.$inject = [$scope];

        function LunchCheckController($scope) {
            reset();

            $scope.reset = reset;
            $scope.checkCount = checkCount;

            $scope.message = '';
            $scope.lunch = '';

            function reset() {
                $scope.model = {
                            message: '',
                            lunch: ''
                };
            }

            function checkCount(lunch) {
                //alert(lunch);
                if (lunch == '') {
                    $scope.model.message = 'Please enter data first';
                    return;
                }
                var courses = lunch.split(',');
                if (courses.length > 3) {
                    $scope.model.message = 'Too much!';
                }
                else {
                    $scope.model.message = "Enjoy!";
                }
            }
        }

}) ();