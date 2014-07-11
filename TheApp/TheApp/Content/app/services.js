
angular.module('TheApp').service('Presenter', ['$location', function($location) {
    this.update = function ($scope, data) {

        data.redirect && $location.path(data.redirect);

        $scope.state = data.state.value;
        $scope.title = data.state.displayName;

        $scope.disableNext = !data.state.next;
        $scope.disableBack = !data.state.previous;
        $scope.disableDone = data.state.next;

        $scope.progressStyle = { 'width': data.state.progress + '%' };

        $scope.cart = data;
    }
}]);
