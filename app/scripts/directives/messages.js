'use strict';

angular
    .module('chatApp')
    .directive('messages', function (AjaxFactory) {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'views/messages.html',
            controller: function ($scope) {
                // kutsu login-funktiota AjaxFactorystä
                var request = AjaxFactory.getMessages();
                request.then(function (response) {
                    // tee vastauksella jotain
                    console.log(response.data);
                    $scope.messages = response.data.reverse();
                }, function (error) {
                    // tee virheellä jotain
                    console.log(error.data);
                });
            }
        };
    });