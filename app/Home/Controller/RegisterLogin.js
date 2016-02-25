(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('HomeRegisterController', HomeRegisterController);

    HomeRegisterController.$inject = ['authenticationService'];

    function HomeRegisterController(authenticationService) {

        var homeRegisterVM = this;

        homeRegisterVM.register = function () {
            //  console.log(homeRegisterVM.user);
            authenticationService.register(homeRegisterVM.user);
        };

        // console.log(authenticationService);


    }
})();