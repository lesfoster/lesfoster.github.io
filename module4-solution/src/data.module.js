(function () {

angular.module('Data', []);

angular.module('Data')
.config(DataConfig);

DataConfig.$inject = ['$url','MenuDataService'];
function DataConfig($url, MenuDataService) {

}

})();