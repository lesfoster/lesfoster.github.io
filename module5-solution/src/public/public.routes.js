(function() {
    'use strict';

    angular.module('public')
        .config(routeConfig);

    /**
     * Configures the routes and views
     */
    routeConfig.$inject = ['$stateProvider'];
    function routeConfig ($stateProvider) {
        // Routes
        $stateProvider
            .state('public', {
                absract: true,
                templateUrl: 'src/public/public.html'
            })
            .state('public.home', {
                url: '/',
                templateUrl: 'src/public/home/home.html'
            })
            .state('public.menu', {
                url: '/menu',
                templateUrl: 'src/public/menu/menu.html',
                controller: 'MenuController',
                controllerAs: 'menuCtrl',
                resolve: {
                    menuCategories: ['MenuService', function (MenuService) {
                        return MenuService.getCategories();
                    }]
                }
            })
            .state('public.menuitems', {
                url: '/menu/{category}',
                templateUrl: 'src/public/menu-items/menu-items.html',
                controller: 'MenuItemsController',
                controllerAs: 'menuItemsCtrl',
                resolve: {
                    menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
                        return MenuService.getMenuItems($stateParams.category);
                    }]
                }
            })
            .state('public.signup', {
                url: '/signup',
                templateUrl: 'src/public/signup/signup.html',
                controller: 'NewsLetterController',
                controllerAs: 'newsLetter',
                // The resolve property is to pass data into the controller as part of its initialization.
                resolve: {
                    // 'newsletterStateData' is injected into newsletter.
                    newsletterStateData: ['MenuService',
                        function(MenuService) {
                            return MenuService.getAllMenuItems();
                        }
                    ]
                }
            })
            .state('public.myinfo', {
                url: '/myinfo',
                templateUrl: 'src/public/my-info/my-info.html',
                controller: 'MyInfoController',
                controllerAs: 'myInfoCtrl',
                resolve: {
                    myInfo: ['RegistrationService',
                        function(RegistrationService) {
                            return RegistrationService.getRegistration();
                        }
                    ]
                }
            })
        ;
    }
})();
