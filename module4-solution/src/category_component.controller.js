(function () {
    'use strict';

    angular.module('Categories')
        .controller('CategoryComponentController', CategoryComponentController);

    CategoryComponentController.$inject[ 'Data' ]
    function CategoryComponentController(Data) {
        var ccctrl = this;
        ccctrl.categoryData = Data.getAllCategories();
    }

})();