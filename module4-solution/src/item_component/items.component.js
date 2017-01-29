(function () {
        angular.module('ItemModule', [])
            .component('itemComponent',
                {
                    templateUrl: 'src/item_component/template/menu_items.template.html',
                    bindings: {
                        //items: '<',
                        myTitle: '@title'
                    }
                }
            )
    }
) ();