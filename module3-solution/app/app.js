(function() {
    'use strict';
    angular.module('NarrowItDownApp', [])
           .controller('NarrowItDownController', NarrowItDownController )
           .service('MenuSearchService', MenuSearchService)
           .directive('foundItems', FoundItemsDirective);

    // narrow it down
    NarrowItDownController.$inject['MenuSearchService'];
    function NarrowItDownController (MenuSearchService) {
        var ctr = this;
        var found;
        var allMenuItems = [
            {"name":"-"}
        ];

        ctr.getMatchedMenuItems = function(searchTerm) {
            var promise = MenuSearchService.getMenuItems();
            promise.then(function (result) {
                allMenuItems = result.data;
                console.log(allMenuItems.menu_items[0]);
            });
        }

    }

//    function MenuSearchFactory() {
//        var factory = function (maxItems) {
//            return new MenuSearchService();
//        };
//
//        return factory;
//    }

    // Service: accessible by controller, and talks to the true model.
    MenuSearchService.$inject['$http'];
    function MenuSearchService($http) {
        var service = this;
        service.getMenuItems = function() {
            var config = {
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
                method: 'GET'
            };
            return $http(config);
        }

    }

    function FoundItemsDirectiveController() {
        var list = this;

        list.found = function(searchTerm) {
            var rtnVal = [];
            for (var i = 0; i < list.items.length; i++) {
                var name = list.items[i].name;
                // Constrain based on what is found in outer-scope search term. ...
                rtnVal[0] = name;
            }

            return false;
        };

        list.onRemove = function(index) {
            console.log("Removing " + index);
        }

    }

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                found: '@',
                foundTitle: '@title',
                onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };
        return ddo;
    }

}) ();