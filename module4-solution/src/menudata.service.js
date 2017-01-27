(function () {

angular.module('Data')
.service('MenuDataService')
.config(MenuDataConfig);

MenuDataConfig.$inject = ['$http'];
function MenuDataConfig ($http) {

    getAllCategories = function() {
        return $http( {
            url: 'https://davids-restaurant.herokuapp.com/categories.json',
            method: 'GET'
        });
    }

    getItemsForCategory = function(categoryShortName) {
        return $http( {
            params: {"categoryShortName": categoryShortName},
            url:    "https://davids-restaurant.herokuapp.com/menu_items.json?category=:categoryShortName",
            method: 'GET'
        })
    }
}

})();