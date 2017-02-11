/**
 * Created by Leslie L Foster on 2/10/2017.
 */
(function () {
    "use strict";

angular.module('public')
     .controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['myInfo', 'ApiPath'];
function MyInfoController(myInfo, ApiPath) {
    var myInfoCtrl = this;
    if (myInfo) {
        console.log("Got info to my-info controller: " + myInfo.favoriteTitle);
        myInfoCtrl.firstname = myInfo.firstname;
        myInfoCtrl.lastname = myInfo.lastname;
        myInfoCtrl.email = myInfo.email;
        myInfoCtrl.phone = myInfo.phone;
        myInfoCtrl.favoriteDescription = myInfo.favoriteDescription;
        myInfoCtrl.favoriteTitle = myInfo.favoriteTitle;
        myInfoCtrl.favorite = myInfo.favorite;
        myInfoCtrl.imageLink = ApiPath + "/images/" + myInfoCtrl.favorite + ".jpg";
    }

}

})();

