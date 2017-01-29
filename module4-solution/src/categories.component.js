(function () {
    angular.module('Categories', [])
        .component('categories',
            {
                templateUrl: 'src/templates/menu_category.template.html',
                //controller: 'CategoryComponentController as ccctrl',
                bindings: {
                    categoryData: '<',
                    myTitle: '@title'
                }
            }
        )

}) ();