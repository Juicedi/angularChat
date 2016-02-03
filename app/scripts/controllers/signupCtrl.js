'use strict';

angular.module('chatApp')
    .controller('SignupCtrl', function ($scope, AjaxFactory) {
        $scope.signupToChat = function () {
            // data lomakkeesta
            var data = {
                name: $scope.user
            };
            // kutsu login-funktiota AjaxFactorystä
            var request = AjaxFactory.signup(data);
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };
    });