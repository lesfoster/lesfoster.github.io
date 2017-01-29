(function () {
    angular.module('CategoryModule')
        .component('categoryComponent',
            {
                templateUrl: 'src/category_component/template/category.component.template.html',
                controller: 'CategoryComponentController as ccctrl',
                bindings: {
                    categoryData: '<',
                    myTitle: '@title'
                }
            }
        )

}) ();