(function(){

    angular.module('testHome').
    controller('HomeController',['itemResource',HomeControllerFunction]);

    function HomeControllerFunction(itemResource){
        this.items = itemResource.query();
    }
})();