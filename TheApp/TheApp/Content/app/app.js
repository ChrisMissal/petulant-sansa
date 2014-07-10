
angular.module('TheApp', ['ngRoute', 'ngResource', 'ui.bootstrap']).
    config(['$routeProvider', function($routeProvider) {
            $routeProvider.
                when('/', { templateUrl: '/content/partials/wizard.html', controller: 'WizardCtrl' }).
                otherwise({ redirectTo: '/' });
    }]);
