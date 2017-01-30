//  This is the category state controller.
(function () {
    'use strict';

    angular.module('CategoryModule')
        .controller('CategoryStateController', CategoryStateController);

    CategoryStateController.$inject = ['categoryStateData'];
    function CategoryStateController(categoryStateData) {
        var catctrl = this;
        catctrl.categories = categoryStateData.data;
        console.log("Got categories");
    }

})();

