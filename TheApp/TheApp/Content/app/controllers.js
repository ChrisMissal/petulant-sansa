
angular.module('TheApp').controller('WizardCtrl', ['$scope', 'Presenter', 'Cart', function ($scope, Presenter, Cart) {

    var cartId = ($scope.cart && $scope.cart.id) || 'none';

    Cart.get({ id: cartId }, function (cart) {
        Presenter.update($scope, cart);
    });

    $scope.next = function() {
        Cart.update($scope.cart, function(cart) {
            Presenter.update($scope, cart);
        });
    }
    $scope.back = function() {
        console.log('back');
    }
    $scope.done = function() {
        console.log('done');
    }
}]);
