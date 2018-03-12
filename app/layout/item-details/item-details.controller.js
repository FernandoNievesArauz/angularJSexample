(function(){
    angular.module('itemDetails')
        .controller('ItemDetailsController',['itemResource','$routeParams',ItemDetailsFunction])
            .directive('viewItem',ViewDirective)
            .directive('editItem', EditDirective);

    function ItemDetailsFunction(itemResource,$routeParams){
        this.item = itemResource.getItem({itemId:$routeParams.id});

        this.option = "view";
        this.optionName = "Edit Item";

        this.ChangeDirective = function(){
            if (this.option === "view") {
                this.option = "edit";
                this.optionName = "Cancel";

            }else if (this.option === "edit") {
                this.option = "view";
                this.optionName = "Edit Item";
            }
        };

        this.EditItem = function(item){
            itemResource.put({
                itemId: item.Id,
                Title: item.Title,
                Description: item.Description,
                DueDate: item.DueDate,
                PriorityId: item.PriorityId
            });
            this.option = "view";
            this.optionName = "Edit Item";
        };
    }

    function EditDirective() {
        return {
            transclude: true,
            templateUrl: './layout/directives/edit-item/edit-item.template.html',
        };
    }

    function ViewDirective() {
        return {
            transclude: true,
            templateUrl: './layout/directives/view-item/view-item.template.html',
        };
    }
})();