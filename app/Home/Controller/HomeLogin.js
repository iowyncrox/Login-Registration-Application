(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('HomeLoginController', HomeLoginController);

    HomeLoginController.$inject = ['authenticationService'];

    function HomeLoginController(authenticationService) {
        var homeLoginVM = this;

        homeLoginVM.login = function () {
            authenticationService.login(homeLoginVM.user);
            //  console.log(homeLoginVM.user);
        }

        // console.log(homeLoginVM.user);
    }
})();