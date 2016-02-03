'use strict';

angular.module('chatApp')
    .controller('MessagesCtrl', function ($scope, AjaxFactory) {
        $scope.getMessages = function () {
            // data lomakkeesta
            var data = {
                name: $scope.messages
            };
            // kutsu login-funktiota AjaxFactorystä
            var request = AjaxFactory.getMessages(data);
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };
    });