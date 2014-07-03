
angular.module('TheApp', ['ngRoute', 'ui.bootstrap']).
    config(['$routeProvider', function($routeProvider) {
            $routeProvider.
                when('/', { templateUrl: '/content/partials/wizard.html', controller: 'WizardCtrl' }).
                otherwise({ redirectTo: '/' });
    }]);
