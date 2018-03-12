(function(){
    angular.module('testHome').
    controller('CreateItemController',['itemResource','$location',CreateItemFunction]);

    function CreateItemFunction(itemResource){
        this.item = {};
        this.CreateItem = function(item,$location){
            // console.log("Chinga tu madre desde el post");
            itemResource.post({
                Title:item.Title,
                Description: item.Description,
                DueDate: item.DueDate,
                PriorityId: item.PriorityId});
        };

        this.Redirect = function(){
            console.log("Tesst!");
            $location.path('#!/home');
        };
    }
})();