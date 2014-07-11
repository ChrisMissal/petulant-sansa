
angular.module('TheApp').factory('Cart', ['$resource', function ($resource) {
    return $resource('/api/cart/:cartId/:action', { cartId: '@id' }, {
        'get': { method: 'GET' },
        'next': { method: 'PUT', params: { action: 'next' } },
        'back': { method: 'PUT', params: { action: 'back' } },
        'done': { method: 'POST', params: { action: 'done' } }
    });
}]);
