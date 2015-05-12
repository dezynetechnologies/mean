'use strict';

angular.module('users').controller('EditUsersController', ['$scope', '$stateParams', '$location', 'Authentication', 'Users', 'UsersProfiles', 'TableSettings', 'UsersForm',
    function ($scope, $stateParams, $location, Authentication, Users, UsersProfiles, TableSettings, UsersForm) {
        $scope.authentication = Authentication;
        $scope.tableParams = TableSettings.getParams(UsersProfiles);
        //$scope.user = {};
        $scope.setFormFields = function (disabled) {
            $scope.formFields = UsersForm.getFormFields(disabled);
        };
        $scope.toEditUser = function () {
            $scope.user = UsersProfiles.get({
                userId: $stateParams.userId
            });
            $scope.setFormFields(false);
        };

        $scope.update = function () {
            // Create new Employee object
            var userProfile = new UsersProfiles($scope.user);
            console.log(userProfile);
            userProfile.$update(function () {
                $location.path('users/profiles' + userProfile._id);
            }, function (errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };
        // Find existing Employee
        $scope.findOne = function () {
            $scope.user = UsersProfiles.get({
                userId: $stateParams.userId
            });
        };

    }
]);