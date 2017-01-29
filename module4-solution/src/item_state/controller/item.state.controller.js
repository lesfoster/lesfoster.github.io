//  This is the category state controller.
(function () {
    'use strict';

    angular.module('ItemModule')
        .controller('ItemStateController', ItemStateController);

    ItemStateController.$inject = ['itemStateData'];
    function ItemStateController(itemStateData) {
        var itemctrl = this;
        itemctrl.items = itemStateData.data;
        console.log("Got menu items");
    }

})();

