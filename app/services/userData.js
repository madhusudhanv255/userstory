'use strict';

angular.module('demo.services', [])

.factory('userService', function($http, $q) {
    var userData = {};
    /** get User Data  function Starts **/
    userData.getUserData = function() {
        var deferred = $q.defer();
        $http.get('http://jsonplaceholder.typicode.com/posts')
            .then(function(data) {
                deferred.resolve(data);
            }).catch(function(msg, code) {
                deferred.reject(msg);

            });
        return deferred.promise;
    };


    return userData;
});