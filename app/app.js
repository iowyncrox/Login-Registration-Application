(function () {
    'use strict';

    angular
        .module('myApp', [
            'ngRoute',
            'firebase'
        ]).config(moduleConfig)
        .constant('FIREBASE_URL', 'https://login-registration.firebaseio.com/');

    moduleConfig.$inject = ['$routeProvider'];

    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: '../app/Home/Template/login.html',
                controller: 'HomeLoginController',
                controllerAs: 'homeLoginVM'
            })
            .when('/register', {
                templateUrl: '../app/Home/Template/register.html',
                controller: 'HomeRegisterController',
                controllerAs: 'homeRegisterVM'
            })
            .when('/success', {
                templateUrl: '../app/Home/Template/success.html',
                controller: 'HomeSuccessController',
                controllerAs: 'successLoginVM',
                resolve: {
                    currentAuthentication: function (authenticationService) {
                        return authenticationService.requireAuth();
                    }
                }
            })
            .when('/user', {
                templateUrl: '../app/User/Template/view2.html',
                controller: 'UserController',
                controllerAs: 'userListVM'
            })
            .when('/', {
                templateUrl: '../app/Main/Template/main.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();