(function () {

    angular.module('MenuApp',['ui.router', 'Categories','Data']);

    angular.module('MenuApp')
        .config(MenuConfig);

    MenuConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function MenuConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home if no other URL matches
        $urlRouterProvider.otherwise('/');

        // Set up UI states
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/templates/home.template.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'src/templates/home.category.template.html',
                component: 'categories',
                controller: 'CategoryController as catctrl',
                // The resolve property is to pass data into the controller as part of its initialization.
                resolve: {
                    // 'categoryData' is injected into catctrl.
                    categoryData: ['MenuDataService',
                        function(MenuDataService) {
                            console.log("Got data.");
                            // Returns a promise, which needs to get resolved before continuing to the state.
                            // Here, then will return whichever resolution happens, below.
                            return MenuDataService.getAllCategories().then(
                                function(result) {
                                    return result;
                                },
                                function(error) {
                                    // Figure out that something is wrong.
                                    console.log("Fail: " + error);
                                    return [{"short_name":"Nada"}];
                                }
                            );
                        }
                    ]
                }
                // ,
                // categoryData: ['Data', function(Data) {
                //     console.log("Got data.");
                //     return Data.getCategories();
                // }];
            })

            .state('home.items', {
                url: '/items',
                templateUrl: 'src/templates/menu_items.template.html'
            });
    }

})();
