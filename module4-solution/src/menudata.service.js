(function () {

angular.module('Data')
.service('MenuDataService')
.config(MenuDataConfig);

MenuDataConfig.$inject = ['$http'];
function MenuDataConfig ($http) {
    var getAllCategories = function() {
        return $http( {
            url: 'https://davids-restaurant.herokuapp.com/categories.json',
            method: 'GET'
        });
    }

    var getItemsForCategory = function(categoryShortName) {
        return $http( {
            params: {"categoryShortName": categoryShortName},
            url:    "https://davids-restaurant.herokuapp.com/menu_items.json?category=:categoryShortName",
            method: 'GET'
        })
    }
}

})();