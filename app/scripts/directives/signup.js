'use strict';

angular
    .module('chatApp')
    .directive('signup', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/signup.html'
        };
    });