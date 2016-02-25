(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('UserController', UserController);

    UserController.$inject = ['dataService'];
    function UserController(dataService) {
        var userListVM = this;

        userListVM.users = [];

        dataService
            .getUser()
            .then(function (data) {
                console.log(data);
                userListVM.users = data;
            }, function (error) {
            });

        console.log('user list controller');
    }
})();