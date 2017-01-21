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
        ctr.found = [];
        ctr.allMenuItems = [];

        ctr.getMatchedMenuItems = function(searchTerm) {
            var promise = MenuSearchService.getMenuItems();
            promise.then(function (result) {
                ctr.allMenuItems = result.data;
            });
        }

        ctr.onRemove = function(index) {
            console.log("Removing at " + index);
            ctr.allMenuItems.menu_items.splice(index,1);
        }

    }

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

    }

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                found: '=found',
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