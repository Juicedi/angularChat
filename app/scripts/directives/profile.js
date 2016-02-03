'use strict';

angular.module('chatApp')
    .directive('profile', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/profile.html'
        };
    });