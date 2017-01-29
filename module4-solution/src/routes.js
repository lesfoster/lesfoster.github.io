(function () {

    angular.module('routes', []);

    angular.module('routes')
        .config(RoutesConfig);


    RoutesConfig.$inject = [];
    function RoutesConfig() {

        // Redirect to home if no other URL matches
        $urlRouterProvider.otherwise('/');

        // Set up UI state
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/home/template/home.template.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'src/category_state/template/category.state.template.html'
            })

            .state('items', {
                url: '/items',
                templateUrl: 'src/item_state/template/menu_items.template.html'
            });


    }

})();
