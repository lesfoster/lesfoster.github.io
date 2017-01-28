(function () {
    'use strict';

    angular.module('Categories')
        .controller('CategoryController', CategoryController);

    CategoryController.$inject = ['categoryData'];
    function CategoryController(categoryData) {
        var catctrl = this;
        catctrl.categories = categoryData;
        console.log("Got categories");
    }

})();

