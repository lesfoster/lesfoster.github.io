(function () {
"use strict";

angular.module('public')
.controller('NewsLetterController', NewsLetterController);

NewsLetterController.$inject = ['newsletterStateData', 'RegistrationService'];
function NewsLetterController(newsletterStateData, RegistrationService) {

    var newsLetter = this;
    newsLetter.menuItems = newsletterStateData;

    newsLetter.submit = function() {
        console.log("Submitted form.  Email is " + newsLetter.email);
        newsLetter.checkFavorite();
        RegistrationService.register(
            {
                firstname: newsLetter.firstname,
                lastname: newsLetter.lastname,
                email: newsLetter.email,
                phone: newsLetter.phone,
                favorite: newsLetter.favorite
            }
        );
    }

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
}


})();
