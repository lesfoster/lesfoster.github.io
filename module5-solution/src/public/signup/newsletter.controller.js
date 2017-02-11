(function () {
"use strict";

angular.module('public')
.controller('NewsLetterController', NewsLetterController);

NewsLetterController.$inject = ['newsletterStateData', 'RegistrationService'];
function NewsLetterController(newsletterStateData, RegistrationService) {

    var newsLetter = this;
    newsLetter.menuItems = newsletterStateData;

    newsLetter.submit = function() {
        console.log("Submitted form.  Email is " + email);
        checkFavorite();
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
        console.log("Checking the favorite " + favorite);
        var found = false;
        for (var menuItem in newsLetter.menuItems) {
            if (menuItem.shortName === newsLetter.favorite) {
                found = true;
                break;
            }
        }
        if (! found) {
            category.favorite = null;
        }
    }
}


})();
