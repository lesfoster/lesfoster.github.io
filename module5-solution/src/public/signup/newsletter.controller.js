(function () {
"use strict";

angular.module('public')
.controller('NewsLetterController', NewsLetterController);

NewsLetterController.$inject = ['newsletterStateData', 'RegistrationService', 'MenuService'];
function NewsLetterController(newsletterStateData, RegistrationService, MenuService) {

    var newsLetter = this;
    newsLetter.menuItems = newsletterStateData;

    newsLetter.submit = function() {
        newsLetter.validateFavorite();
        if (! newsLetter.noSuchFavorite) {
            console.log("Submitting data.  Email is " + newsLetter.email);
            var regInfo = {
                firstname: newsLetter.firstname,
                lastname: newsLetter.lastname,
                email: newsLetter.email,
                phone: newsLetter.phone,
                favorite: newsLetter.favorite
            };
            console.log("Reg-info: " + regInfo.firstname);

            RegistrationService.register(regInfo);
            newsLetter.isSubmitted = true;
        }
    }

    newsLetter.validateFavorite = function() {
        var foundItem = MenuService.getMenuItemAsync(newsLetter.favorite);
        foundItem.then(
            function(response) {
                newsLetter.noSuchFavorite = false;
            },
            function(error) {
                newsLetter.noSuchFavorite = true;
            }
        );
    }

    // This check uses injected data to the controller.  This will be called frequently.
    newsLetter.checkFavorite = function() {
        // Wipe the favorite from this model, if it is not a valid item.
        console.log("Checking the favorite " + newsLetter.favorite);
        var found = false;
        for (var i = 0; i < newsLetter.menuItems.menu_items.length; i++) {
            var menuItem = newsLetter.menuItems.menu_items[i];
            //console.log("Next: "+menuItem.short_name);
            if (menuItem.short_name === newsLetter.favorite) {
                found = true;
                newsLetter.noSuchFavorite = false;
                break;
            }
        }
        if (! found) {
            newsLetter.noSuchFavorite = true;
        }
    }

    newsLetter.clearFavoriteError = function() {
        newsLetter.noSuchFavorite = false;
    }

    // The "dirty flag".  Turn this on to imply the registration has not been carried out.
    newsLetter.dirty = function() {
        newsLetter.isSubmitted = false;
    }
}


})();
