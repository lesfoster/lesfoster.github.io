(function () {

angular.module('MenuApp',['ui.router', 'Categories']); //,'Data']);

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
      component: 'categories'
    })

    .state('home.items', {
      url: '/items',
      templateUrl: 'src/templates/menu_items.template.html'
    });
}

})();
