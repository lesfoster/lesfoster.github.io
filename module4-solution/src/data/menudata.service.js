(function () {

 angular.module('Data')
    .service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService ($http) {
    var service = this;
    service.getAllCategories = function() {
        console.log("Getting categories via http.");
        return $http( {
            url: 'https://davids-restaurant.herokuapp.com/categories.json',
            method: 'GET'
        }).then(
            function(result) {
                // Sharing this result.
                console.log("Returning from URL.");
                //$parent.result = result;
                return result;
            }
        );
    }

    service.getItemsForCategory = function(categoryShortName) {
        return $http( {
            params: {"categoryShortName": categoryShortName},
            url:    "https://davids-restaurant.herokuapp.com/menu_items.json?category=:categoryShortName",
            method: 'GET'
        })
    }
}

})();