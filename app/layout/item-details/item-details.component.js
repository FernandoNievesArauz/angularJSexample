(function(){
    'use strict';

    angular.
    module('testApp').
    component('itemDetails', {
        templateUrl: './layout/item-details/item-details.template.html',
        controller: 'ItemDetailsController',
        controllerAs: "itemDetailsController"
    });
})();