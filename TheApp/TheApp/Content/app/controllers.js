
angular.module('TheApp').controller('WizardCtrl', ['$scope', 'Presenter', 'Cart', function ($scope, Presenter, Cart) {

    var cartId = ($scope.cart && $scope.cart.id) || 'none';

    Cart.get({ id: cartId }, function (cart) {
        Presenter.update($scope, cart);
    });

    $scope.next = function() {
        Cart.next($scope.cart, function (cart) {
            Presenter.update($scope, cart);
        });
    }
    $scope.back = function() {
        Cart.back($scope.cart, function (cart) {
            Presenter.update($scope, cart);
        });
    }
    $scope.done = function() {
        console.log('done');
    }
}]);
