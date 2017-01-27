(function () {
angular.module('categories', [])
  .component('categories',
    {
      templateUrl: 'menu_category.html',
      bindings: {
        categories: '<',
        myTitle: '@title'
      }
    }
  )
}) ();