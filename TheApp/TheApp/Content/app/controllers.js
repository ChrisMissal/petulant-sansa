
angular.module('TheApp').controller('WizardCtrl', ['$scope', 'Presenter', function ($scope, Presenter) {

    Presenter.update({ state: 'intro' }, $scope);

    $scope.next = function() {
        console.log('next');
    }
    $scope.back = function() {
        console.log('back');
    }
    $scope.done = function() {
        console.log('done');
    }
}]);
