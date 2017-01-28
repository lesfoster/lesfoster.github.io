(function () {
    'use strict';

    angular.module('Categories')
        .controller('CategoryController', CategoryController);

    CategoryController.$inject = ['CategoryData'];
    function CategoryController(CategoryData) {
        var catctrl = this;
        catctrl.categories = CategoryData;
        console.log("Got categories");
    }

})();

