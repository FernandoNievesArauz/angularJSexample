(function(){
    'use strict';

    angular.module('core.item')
    .factory('itemResource', ['$resource',itemFactory]);

    function itemFactory($resource) {
        return $resource('http://localhost:2048/api/items/byTitle', {}, {
        query: {
            method: 'GET',
            isArray: true
        },
        getItem: {
            params: {itemId: '@itemId'},
            url:'http://localhost:2048/api/item/:itemId',
            isArray: false
        },
        post: {
            method: 'POST',
            url: 'http://localhost:2048/api/item/',
            params: {
                Title: '@Title',
                Description: '@Description',
                DueDate: '@DueDate',
                PriorityId: '@PriorityId'
            },
            data : {
                Title: ':Title',
                Description: ':iDescription',
                DueDate: ':DueDate',
                PriorityId: ':PriorityId'
            },
            headers: {
                'Content-Type': 'application/json'
            }
        },
        put: {
            method: 'PUT',
            params: {
                itemId: '@itemId',
                Title: '@Title',
                Description: '@Description',
                DueDate: '@DueDate',
                PriorityId: '@PriorityId'
            },
            url: 'http://localhost:2048/api/item/:itemId',
            data : {
                Title: ':Title',
                Description: ':iDescription',
                DueDate: ':DueDate',
                PriorityId: ':PriorityId'
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }
        });
    }
})();