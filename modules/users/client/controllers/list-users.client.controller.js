'use strict';

angular.module('users').controller('ListUsersController', ['$scope', '$stateParams', '$location', 'Authentication', 'Users', 'UsersProfiles', 'UserTableSettings',
    function ($scope, $stateParams, $location, Authentication, Users, UsersProfiles, UserTableSettings) {
        //$scope.authentication = Authentication;
        // Find a list of Users

        $scope.find = function () {
            $scope.users = UsersProfiles.query();
            $scope.tableParams = UserTableSettings.getParams(UsersProfiles, $scope.users);
        };
        $scope.remove = function (user) {
            var deleteduser = UsersProfiles.remove({
                userId: user._id
            });
        };
}]);