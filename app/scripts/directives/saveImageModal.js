'use strict';

angular.module('chatApp')
    .directive('saveImageModal', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/saveImageModal.html'
        };
    });