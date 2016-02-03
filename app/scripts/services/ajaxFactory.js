'use strict';

angular
    .module('chatApp')
    .factory('AjaxFactory', function ($http) {
        var urlBase = 'http://users.metropolia.fi/~ilkkamtk/chatApi';
        var ajaxFunctions = {};
        ajaxFunctions.login = function (args) {
            return $http.post(urlBase + '/login', args);
        };
        ajaxFunctions.deleteMessage = function (args) {
            return $http.delete(urlBase + '/messages/' + args);
        };
        ajaxFunctions.getMessages = function () {
            return $http.get(urlBase + '/messages');
        };
        ajaxFunctions.getMessage = function (args) {
            return $http.get(urlBase + '/messages/' + args);
        };
        ajaxFunctions.modifyMessage = function (args) {
            return $http.put(urlBase + '/messages', args);
        };
        ajaxFunctions.postMessage = function (args) {
            return $http.post(urlBase + '/messages', args);
        };
        ajaxFunctions.getThreads = function () {
            return $http.get(urlBase + '/threads');
        };
        ajaxFunctions.getParentMessage = function () {
            return $http.get(urlBase + '/parents');
        };
        ajaxFunctions.getThread = function (args) {
            return $http.get(urlBase + '/threads/' + args);
        };
        ajaxFunctions.reply = function (args) {
            return $http.post(urlBase + '/threads', args);
        };
        ajaxFunctions.signup = function (args) {
            return $http.post(urlBase + '/users', args);
        };
        ajaxFunctions.deleteUser = function (args) {
            return $http.delete(urlBase + '/users/' + args);
        };
        ajaxFunctions.getUsers = function () {
            return $http.get(urlBase + '/users');
        };
        ajaxFunctions.getUser = function (args) {
            return $http.get(urlBase + '/users/' + args);
        };
        ajaxFunctions.saveImage = function (args) {
            return $http.post(urlBase + '/images', args, {
                transformRequest: angular.identity,
                headers: {
                    'Content-Type': undefined
                }
            });
        };
        return ajaxFunctions;
    });