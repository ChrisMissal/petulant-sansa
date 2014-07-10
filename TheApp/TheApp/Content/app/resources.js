
angular.module('TheApp').factory('Cart', ['$resource', function ($resource) {
    return $resource('/api/cart/:cartId', { cartId: '@id' }, {
        'get': { method: 'GET' },
        'update': { method: 'PUT' }
    });
}]);
