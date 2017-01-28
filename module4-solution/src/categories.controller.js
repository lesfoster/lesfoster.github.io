(function () {
    'use strict';

    angular.module('Categories')
        .controller('CategoryController', CategoryController);

    // ERROR: as of now, the injecter is not able to resolve category data's 'provider'.
    //   unknown fix.
    // CategoryController.$inject = ['categoryData'];
//    function CategoryController(categoryData) {
    CategoryController.$inject = [];
    function CategoryController() {
        var catctrl = this;
        catctrl.categories = {}; // categoryData;
        catctrl.myTitle = 'This Stuff';
        console.log("Got categories");
    }

})();

