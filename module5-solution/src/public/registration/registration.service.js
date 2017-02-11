(function () {
    'use strict';

    angular.module('public')
        .service('RegistrationService', RegistrationService);

    RegistrationService.$inject = [];
    function RegistrationService() {
        var service = this;

        service.register = function(registrationInfo) {
            service.registrationInfo = registrationInfo;
        }

        service.getRegistration = function(user) {
            return service.registrationInfo;
        }

    }

})();