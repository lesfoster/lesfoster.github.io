(function () {
"use strict";

angular.module('public')
.controller('NewsletterController', NewsletterController);

NewsletterController.$inject = [];
function NewsletterController() {
    var firstname;
    var lastname;
    var email;
    var phone;
    function submit() {
        console.log("Submitted form.  Email is " + email);
    }
}

})();
