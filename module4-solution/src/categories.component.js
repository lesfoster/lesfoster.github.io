(function () {
    angular.module('Categories', [])
        .component('categories',
            {
                templateUrl: 'src/templates/menu_category.template.html',
                controller: 'CategoryController as catctrl',
                // The resolve property is to pass data into the controller as part of its initialization.
                resolve: {
                    // 'categoryData' is injected into catctrl.
                    categoryData: ['MenuDataService',
                        function(MenuDataService) {
                            console.log("Got data.");
                            return MenuDataService.getAllCategories();
                        }
                    ]
                    // categoryData: ['Data', function(Data) {
                    //     console.log("Got data.");
                    //     return Data.getCategories();
                    // }]
                }
                // ,
                // bindings: {
                //   categoryData: '<',
                //   myTitle: '@title'
                // }
            }
        )

}) ();