(function(){
    'use strict';

    angular.
    module('testApp').
    component('createItem', {
        templateUrl: './layout/create-item/create-item.template.html',
        controller: 'CreateItemController',
        controllerAs: "createItemController"
    });
})();