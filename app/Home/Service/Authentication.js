(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('authenticationService', authenticationService);

    authenticationService.$inject = ['$location', '$firebaseAuth', '$firebaseObject', 'FIREBASE_URL'];

    function authenticationService($location, $firebaseAuth, $firebaseObject, FIREBASE_URL) {

        var self = {};
        var ref = new Firebase(FIREBASE_URL);
        var auth = $firebaseAuth(ref);

        auth.$onAuth(function (authUser) {
            if (authUser) {
                var userRef = new Firebase(FIREBASE_URL + 'users/' + authUser.uid);
                var userObj = $firebaseObject(userRef);
                self.userObject = userObj;
                console.log(userObj);
            } else {
                console.log('no user');
            }
        });


        self.register = function (user) {

            auth.$createUser({
                    email: user.email,
                    password: user.password
                })
                .then(function success(registeredUser) {
                    console.log(registeredUser);
                    console.log(user);

                    var regRef = new Firebase(FIREBASE_URL + 'users')
                        .child(registeredUser.uid).set({
                            date: Firebase.ServerValue.TIMESTAMP,
                            registeredUser: registeredUser.uid,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email
                        });
                    console.log(user);
                    console.log('registered');
                })
                .catch(function error(error) {
                    console.log(error);
                });
        };

        self.login = function (user) {
            console.log(user);
            auth.$authWithPassword({
                    email: user.email,
                    password: user.password
                })
                .then(function (success) {
                    $location.path('/success');
                })
                .catch(function (error) {
                    console.log(error);
                });
        };

        self.logout = function() {
            console.log('user logged out');
            return auth.$unauth();
        };

        self.requireAuth = function() {
            console.log('user can access success');
            return auth.$requireAuth();
        }

        return self;
    }
})
();