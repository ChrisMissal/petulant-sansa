
angular.module('TheApp').controller('WizardCtrl', ['$scope', '$cookieStore', 'Presenter', 'Cart', function ($scope, $cookieStore, Presenter, Cart) {

    var current = $cookieStore.get('cart');

    Cart.get(current || { id: 'none' }, function (cart) {
        Presenter.update($scope, cart);
    });

    $scope.next = function (cartId) {
        Cart.next({ id: cartId }, function (cart) {
            Presenter.update($scope, cart);
        });
    }
    $scope.back = function (cartId) {
        Cart.back({ id: cartId }, function (cart) {
            Presenter.update($scope, cart);
        });
    }
    $scope.done = function (cartId) {
        Cart.done({ id: cartId }, function (cart) {
            Presenter.update($scope, cart);
        });
    }
}]).controller('ReceiptCtrl', ['$scope', '$cookieStore', '$routeParams', function ($scope, $cookieStore, $routeParams) {
    $scope.cartId = $routeParams.id;
    $cookieStore.remove('cart');
}]);
