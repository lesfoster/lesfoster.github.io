(function () {
    angular.module('CategoryModule')
        .component('categoryComponent',
            {
                templateUrl: 'src/category_component/template/category.component.template.html',
                bindings: {
                    categories: '<'
                }
            }
        )

}) ();