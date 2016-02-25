(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('HomeSuccessController', HomeSuccessController);

    HomeSuccessController.$inject = ['authenticationService', '$location'];

    function HomeSuccessController(authenticationService, $location) {
        var successLoginVM = this;

        successLoginVM.obj = authenticationService.userObject;
        console.log('user success');
        console.log(successLoginVM.obj);

        successLoginVM.logout = function () {
            authenticationService.logout();
            $location.path('/');
        }
    }
})();