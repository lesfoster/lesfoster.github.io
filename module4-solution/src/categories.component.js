(function () {
    angular.module('Categories', [])
        .component('categories',
            {
                templateUrl: 'src/templates/menu_category.template.html',
                //controller: 'CategoryController as catctrl',
                bindings: {
                    categoryData: '<',
                    myTitle: '@title'
                }
            }
        )

}) ();