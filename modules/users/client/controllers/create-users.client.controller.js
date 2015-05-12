'use strict';


angular.module('users').controller('CreateUsersController', ['$scope', '$stateParams', '$location', 'Authentication', 'Users', 'UsersProfiles', 'TableSettings', 'UsersForm',
    function ($scope, $stateParams, $location, Authentication, Users, UsersProfiles, TableSettings, UsersForm) {
        $scope.authentication = Authentication;
        $scope.tableParams = TableSettings.getParams(UsersProfiles);
        $scope.user = {};
        $scope.setFormFields = function (disabled) {
            $scope.formFields = UsersForm.getFormFields(disabled);
        };

        // Create new User
        $scope.create = function () {
            // Create new Employee object
            var userProfile = new UsersProfiles($scope.user);
            userProfile.provider = 'local';
            // Redirect after save
            userProfile.$save(function (response) {
                console.log(response);
                $location.path('users/profiles/' + response._id);
                // Clear form fields
                $scope.username = '';
                $scope.firstName = '';
                $scope.lastName = '';
                $scope.email = '';
                $scope.password = '';
            }, function (errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

    }
]);