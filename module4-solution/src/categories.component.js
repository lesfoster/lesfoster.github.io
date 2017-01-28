(function () {
angular.module('Categories', [])
  .component('categories',
    {
      templateUrl: 'src/templates/menu_category.template.html',
      controller: 'CategoryController as catctrl',
      resolve: {
        // 'CategoryData' is injected into catctrl.
        CategoryData: ['Data', function(Data) {
          console.log("Got data.");
          return Data.getCategories();
        }]
      },
      bindings: {
        categories: '<',
        myTitle: '@title'
      }
    }
  )

}) ();