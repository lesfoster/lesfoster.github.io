/**
 * Created by Leslie L Foster on 2/10/2017.
 */
(function () {
    "use strict";

angular.module('public')
     .controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['myInfo'];
function MyInfoController(myInfo) {
    var myInfoCtrl = this;

    myInfoCtrl.populateRegistrationInfo = function() {
        if (myInfo) {
            myInfoCtrl.firstname = myInfo.firstname;
            myInfoCtrl.lastname = myInfo.lastname;
            myInfoCtrl.email = myInfo.email;
            myInfoCtrl.phone = myInfo.phone;
            myInfoCtrl.favorite = myInfo.favorite;
        }
    }
}

})();

