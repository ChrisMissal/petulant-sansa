
angular.module('TheApp').service('Presenter', function() {
    this.update = function(data, $scope) {
        console.log('state: ' + data.state);
        $scope.state = data.state;
    }
});
