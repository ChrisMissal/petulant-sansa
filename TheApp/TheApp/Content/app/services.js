
angular.module('TheApp').service('Presenter', function() {
    this.update = function($scope, data) {
        $scope.state = data.state.value;
        $scope.title = data.state.displayName;

        $scope.disableNext = !data.state.next;
        $scope.disableBack = !data.state.previous;
        $scope.disableDone = data.state.next;

        $scope.progressStyle = { 'width': data.state.progress + '%' };

        $scope.cart = data;
    }
});
