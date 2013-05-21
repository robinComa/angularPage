'use strict';

angular.module('angularDemoApp', ['ngCookies', 'angularDemoApp.services', 'angularDemoApp.directives', 'dateDeltaFilter']).config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'views/tweets.html',
            controller  : 'TweetsCtrl'
        })
        .when('/tweets', {
            templateUrl : 'views/tweets.html',
            controller  : 'TweetsCtrl'
        })
        .when('/profile/:screen_name', {
            templateUrl : 'views/profile.html',
            controller  : 'ProfileCtrl'
        })
        .when('/search/:q', {
            templateUrl : 'views/tweets.html',
            controller  : 'SearchCtrl'
        })
        .otherwise({
            redirectTo  : '/'
        });
});
