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
            // Calling the service.
            MenuSearchService.getMatchedMenuItems(searchTerm).then(
                function(result) {
                    // Storing into "found".
                    ctr.found = result;
                },
                function(error) {
                    console.log(error);
                }
            );
        }

        ctr.onRemove = function(index) {
            ctr.found.splice(index,1);
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

        service.getMatchedMenuItems = function(searchTerm) {
            var lcSearchTerm = searchTerm.toLowerCase();
            var promise = service.getMenuItems();
            return promise.then(function (result) {
                var menuItems = result.data.menu_items;
                var foundItems = []
                for (var i = 0; i < menuItems.length; i++) {
                    var item = menuItems[i];
                    if (item.name.toLowerCase().indexOf(lcSearchTerm) !== -1) {
                        foundItems.push(item);
                    }
                }

                return foundItems;
            });
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