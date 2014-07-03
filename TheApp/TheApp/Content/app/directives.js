
angular.module('TheApp').
    directive('wizardControls', function () {
        return {
            restrict: 'E',
            templateUrl: '/content/partials/wizard-controls.html'
        };
    }).
    directive('wizardIntro', function () {
        return {
            restrict: 'E',
            templateUrl: '/content/partials/wizard-intro.html'
        };
    }).
    directive('wizardEnterName', function () {
        return {
            restrict: 'E',
            templateUrl: '/content/partials/wizard-enter-name.html'
        };
    }).
    directive('wizardEnterAddress', function() {
        return {
            restrict: 'E',
            templateUrl: '/content/partials/wizard-enter-address.html'
        };
    }).
    directive('wizardComplete', function() {
        return {
            restrict: 'E',
            templateUrl: '/content/partials/wizard-complete.html'
        };
    });
