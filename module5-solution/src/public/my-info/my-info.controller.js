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
    if (myInfo) {
        console.log("Got info to my-info controller: " + myInfo.firstname);
        myInfoCtrl.firstname = myInfo.firstname;
        myInfoCtrl.lastname = myInfo.lastname;
        myInfoCtrl.email = myInfo.email;
        myInfoCtrl.phone = myInfo.phone;
        myInfoCtrl.favorite = myInfo.favorite;
    }

}

})();

