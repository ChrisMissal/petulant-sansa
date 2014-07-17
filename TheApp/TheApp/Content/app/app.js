
angular.module('TheApp', ['ngRoute', 'ngResource', 'ngCookies', 'ui.bootstrap']).
    config(['$routeProvider', function($routeProvider) {
            $routeProvider.
                when('/', { templateUrl: '/content/partials/wizard.html', controller: 'WizardCtrl' }).
                when('/receipt/:id', { templateUrl: '/content/partials/receipt.html', controller: 'ReceiptCtrl' }).
                otherwise({ redirectTo: '/' });
    }]);
