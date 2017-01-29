(function () {
    'use strict';

    angular.module('CategoryModule')
        .controller('CategoryComponentController', CategoryComponentController);

    //CategoryComponentController.$inject[ 'Data' ]
    function CategoryComponentController() {
        var ccctrl = this;
        ccctrl.categoryData = [{'short_name':'soup'}];//Data.getAllCategories();
    }

})();