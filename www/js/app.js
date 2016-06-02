// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'pascalprecht.translate'])

.config(function($stateProvider, $urlRouterProvider, $translateProvider) {
        $translateProvider.translations('en', {
            Sign_in: "Sign in",
            User_name: "Username",
            Pwd: "Password"
        });
        $translateProvider.translations('ms', {
            Sign_in: "Log Masuk",
            User_name: "Nama pengguna",
            Pwd: "kata laluan"
        });
        $translateProvider.preferredLanguage("en");
        $translateProvider.fallbackLanguage("en");
    });

app.controller('langcontroller', function($scope, $translate) {

  $scope.switchLanguage = function(languageKey) {
    console.log('clicked');
    console.log(languageKey);
    $translate.use(languageKey);
  };
});