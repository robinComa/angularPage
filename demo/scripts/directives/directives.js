'use strict';

angular.module('angularDemoApp.directives', []).directive('butterbar', ['$rootScope',
    function($rootScope) {
        return {
            link: function(scope, element, attrs) {
                $rootScope.$on('$routeChangeStart', function() {
                    element.removeClass('icon-twitter').addClass('icon-spinner icon-spin');
                });
                $rootScope.$on('$routeChangeSuccess', function() {
                    setTimeout(function(){
                        element.removeClass('icon-spinner icon-spin').addClass('icon-twitter');
                    },200);
                });
            }
        };
    }
]);