(function () {
angular.module('items', [])
  .component('items',
    {
      templateUrl: 'menu_items.html',
      bindings: {
        items: '<',
        myTitle: '@title'
      }
    }
  )
) ();