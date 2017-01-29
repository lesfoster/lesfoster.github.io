(function () {
        angular.module('ItemModule', [])
            .component('ItemComponent',
                {
                    templateUrl: 'menu_items.html',
                    bindings: {
                        items: '<',
                        myTitle: '@title'
                    }
                }
            )
    }
) ();