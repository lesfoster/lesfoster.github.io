(function () {

    angular.module('MenuApp',['ui.router','Data','CategoryModule', 'ItemModule']);

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
                templateUrl: 'src/home/template/home.template.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'src/category_state/template/category.state.template.html',
                controller: 'CategoryStateController as catctrl',
                // The resolve property is to pass data into the controller as part of its initialization.
                resolve: {
                    // 'categoryStateData' is injected into catctrl.
                    categoryStateData: ['MenuDataService',
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
            })

            .state('items', {
                url: '/items',
                templateUrl: 'src/item_state/template/item.state.template.html',
                controller: 'ItemStateController as itemctrl',
                // The resolve property is to pass data into the controller as part of its initialization.
                resolve: {
                    // 'itemStateData' is injected into itemctrl.
                    itemStateData: ['MenuDataService',
                        function(MenuDataService) {
                            console.log("Got category items data.");
                            // Returns the promise, but I want to see that things work.
                            return MenuDataService.getItemsForCategory('F').then(
                                function(result) {
                                    return result;
                                },
                                function(error) {
                                    // Figure out that something is wrong.
                                    console.log("Fail: " + error);
                                    return [{"name":"Nada"}];
                                }
                            );
                        }
                    ]
                }
            });
    }

})();
