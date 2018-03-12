(function(){
    'use strict';

    angular.
    module('testApp').
    config(['$locationProvider' ,'$routeProvider',routeConfig]);

    function routeConfig($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
            when('/home', {
            template: '<test-home></test-home>'
            }).
            when('/items', {
            template: '<item-details></item-details>'
            }).
            when('/insultos', {
            template: 'Vete a la verga'
            }).
            when('/items/create', {
            template: '<create-item></create-item>'
            }).
            otherwise('/home');
    }
})();