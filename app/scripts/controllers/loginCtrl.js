'use strict';

angular.module('chatApp')
    .controller('LoginCtrl', function ($scope, AjaxFactory) {
        $scope.logToChat = function () {
            // data lomakkeesta
            var data = {
                name: $scope.user
            };
            // kutsu login-funktiota AjaxFactorystä
            var request = AjaxFactory.login(data);
            request.then(function (response) {
                // tee vastauksella jotain
                $('.profiiliNimi').html(response.data.name);
                $('.profiiliKuva').attr('src', response.data.profileImage);
                $('.logSign').hide();
                $('.profiili').show();
                $('input[name="uID"]').attr('value', response.data.uID);
                console.log(response.data);
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };
    });