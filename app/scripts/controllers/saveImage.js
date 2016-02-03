'use strict';

angular
    .module('chatApp')
    .controller('fileUpload', function ($scope, AjaxFactory) {
        $scope.uploadFileToUrl = function () {
            var fd = new FormData(document.getElementById('imageForm'));
            var request = AjaxFactory.saveImage(fd);
            request.then(function (response) {
                // tee vastauksella jotain
                console.log(response.data);
            }, function (error) {
                // tee virheellä jotain
                console.log(error.data);
            });
        };
});