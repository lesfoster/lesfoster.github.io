(function () {

    angular.module('Data', []);

    angular.module('Data')
        .config(DataConfig);

    DataConfig.$inject = ['MenuDataService'];
    function DataConfig(MenuDataService) {
        var data = this;
        data.getCategories = getCategories;
        data.getItemsForCategory = getItemsForCategory;

        function getCategories() {
            console.log("data returning categories.");
            return MenuDataService.getCategories();
        }
        function getItemsForCategory(category) {
            return MenuDataService.getItemsForCategory(category);
        }
    }

})();