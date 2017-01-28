(function () {
'use strict';

angular.module('Categories')
.controller('CategoryController', CategoryController);

CategoryController.$inject = ['CategoryData'];
function CategoryController(CategoryData) {
  var controller = this;
  controller.categories = CategoryData;
  console.log("Got categories");
}

})();

