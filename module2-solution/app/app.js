(function() {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
           .controller('AlreadyBoughtController', AlreadyBoughtController)
           .controller('ToBuyController', ToBuyController)
           .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    // Controller to handle what happens before the purchase.
    ToBuyController.$inject[ShoppingListCheckOffService];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyCtl = this;
        toBuyCtl.getRemainingItems = function() {
            return ShoppingListCheckOffService.getRemainingItems();
        }

        toBuyCtl.buy = function(item) {
            ShoppingListCheckOffService.buy(item);
        }
    }

    // Controller to handle what happens after the purchase.
    AlreadyBoughtController.$inject[ShoppingListCheckOffService];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtCtl = this;
        boughtCtl.getBoughtItems = function() {
            return ShoppingListCheckOffService.getBoughtItems();
        }

    }

    // Service: accessible by both controllers, and a singleton.
    function ShoppingListCheckOffService() {
        var service = this;
        service.items = [
            {
                name: "Brocolli",
                amount: "2 lbs"
            },
            {
                name: "Onions",
                amount: "1 lb"
            },
            {
                name: "Chicken",
                amount: "1 lb"
            },
            {
                name: "Beets",
                amount: "5"
            },
            {
                name: "Cranberries",
                amount: "3 lbs"
            }
        ];
        service.bought = [];

        service.getRemainingItems = function() {
            return service.items;
        }

        service.getBoughtItems = function() {
            return service.bought;
        }

        service.buy = function(item) {
            // Need to move item from to-buy to already-bought
            for(var i = service.items.length-1; i >= 0; i--){  // STEP 1
                if(service.items[i].name == item.name){        // STEP 2
                    service.items.splice(i,1);                 // STEP 3
                }
            }
            service.bought[service.bought.length] = item;
        }
    }

}) ();