(function () {
    'use strict';

    angular
        .module('myApp')
        .service('dataService', dataService);

    dataService.$inject = ['$http', '$q'];
    function dataService($http, $q) {
        var self = this;

        self.getUser = function () {
            var defer = $q.defer();

            $http
                .get('http://jsonplaceholder.typicode.com/users')
                .then(function (response) {
                    defer.resolve(response.data);
                }, function (error) {
                    defer.reject(error.status);
                });

            return defer.promise;
        };
    }
})();