angular.module('angularPresentationApp.directives', []).directive('formatedtext', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$render = function(value) {
                elm.text(scope.content2.toLowerCase());
            };
        }
    };
});