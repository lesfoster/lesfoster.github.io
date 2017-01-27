(function () {

angular.module('routes', []);

angular.module('routes')
.config(RoutesConfig);


RoutesConfig.$inject = [];
function RoutesConfig() {

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
      templateUrl: 'src/templates/menu_category.template.html'
    })

    .state('items', {
      url: '/items',
      templateUrl: 'src/templates/menu_items.template.html'
    });


}

})();
