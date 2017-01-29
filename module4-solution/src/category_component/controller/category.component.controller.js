(function () {
    'use strict';

    angular.module('CategoryModule')
        .controller('CategoryComponentController', CategoryComponentController);

    CategoryComponentController.$inject[ 'categoryData' ];
    function CategoryComponentController(categoryData) {
        var ccctrl = this;
        ccctrl.categoryData = categoryData;
    }

})();