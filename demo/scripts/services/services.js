'use strict';

angular.module('angularDemoApp.services', ['ngResource'])

    .factory('User', ['$resource',
        function ($resource) {
            return $resource('https://api.twitter.com/1/users/show.json', {callback: 'JSON_CALLBACK'}, {
                get: {method: 'JSONP', params: {include_entities: 'false', screen_name: ''}}
            });
        }
    ])

    .factory('Tweet', ['$resource',
        function ($resource) {
            return $resource('http://search.twitter.com/search.json', {callback: 'JSON_CALLBACK'}, {
                query: {method: 'JSONP', params: {q: '', show_user: true, rpp: 100}}
            });
        }
    ])

;