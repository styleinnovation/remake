// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'ionic.service.core', 'ionic.service.analytics'])

.run(function($ionicPlatform, $ionicAnalytics, $ionicUser) {
  $ionicPlatform.ready(function() {

    $ionicAnalytics.register();

    // $scope.identifyUser = function() {
    //     console.log("Ionic User: Identifying with Ionic User service");
    //
    //     var user = $ionicUser.get();
    //
    //     if(!user.user_id) {
    //         user.user_id = $ionicUser.generateGUID();
    //     };
    //
    //     $ionicUser.identify(user).then(function(){
    //         $scope.identified - true;
    //         alert("Identified user" + user.name + "\n ID" + user.user_id);
    //     });
    // }

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    // mixpanel.track_links("#start-male", "MALE - App Started");
    // mixpanel.track_links("#start-female", "FEMALE - App Started");
    
    // mixpanel.track_links("#womens-custom-size", "WOMENS - Custom Size Selected");
    // mixpanel.track_links("#womens-standard-size", "WOMENS - Standard Size Selected");

    // mixpanel.track_links("#mens-custom-size", "MENS - Custom Size Selected");
    // mixpanel.track_links("#mens-standard-size", "MENS - Standard Size Selected");

    // mixpanel.track_links("#basics-men", "MENS - Basics Selected");
    // mixpanel.track_links("#fashion-men", "MENS - Fashion Selected");
    // mixpanel.track_links("#leisure-men", "MENS - Leisure Selected");

    // mixpanel.track_links("#basics-women", "WOMENS - Basics Selected");
    // mixpanel.track_links("#fashion-women", "WOMENS - Fashion Selected");
    // mixpanel.track_links("#leisure-women", "WOMENS - Leisure Selected");
    

    $("a").on("click", function(){
        if ($(this).attr("id") != undefined) {
            mixpanel.track("BUTTON #" + $(this).attr("id") + " Selected");
        }

        mixpanel.track("LINK " + $(this).attr("href") + " link was clicked");
    });

    $("input").attr("ngChecked", function(){
        mixpanel.track($(this));
    });


  });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
        })
        .state('app.welcome', {
            url: '/welcome',
            views: {
                'menuContent': {
                    templateUrl: 'templates/darth/welcome.html',
                    controller: 'AppCtrl'
                }
            }
        })
        .state('app.stylebar-1', {
            url: '/stylebar-1',
            views: {
                'menuContent': {
                    templateUrl: 'templates/body-scan/stylebar-1.html',
                    controller: 'AppCtrl'
                }
            }
        })
        .state('app.stylebar-1-mens', {
            url: '/stylebar-1-mens',
            views: {
                'menuContent': {
                    templateUrl: 'templates/body-scan/stylebar-1-mens.html',
                    controller: 'AppCtrl'
                }
            }
        })
        .state('app.stylebar-2', {
            url: '/stylebar-2',
            views: {
                'menuContent': {
                    templateUrl: 'templates/body-scan/stylebar-2.html',
                    controller: 'AppCtrl'
                }
            }
        })
        .state('app.stylebar-2-mens', {
            url: '/stylebar-2-mens',
            views: {
                'menuContent': {
                    templateUrl: 'templates/body-scan/stylebar-2-mens.html',
                    controller: 'AppCtrl'
                }
            }
        })
         .state('app.stylebar-3', {
            url: '/stylebar-3',
            views: {
                'menuContent': {
                    templateUrl: 'templates/body-scan/stylebar-3.html',
                    controller: 'AppCtrl'
                }
            }
        })
          .state('app.stylebar-3-bottoms', {
            url: '/stylebar-3-bottoms',
            views: {
                'menuContent': {
                    templateUrl: 'templates/body-scan/stylebar-3-bottoms.html',
                    controller: 'AppCtrl'
                }
            }
        })
          .state('app.stylebar-3-mens', {
            url: '/stylebar-3-mens',
            views: {
                'menuContent': {
                    templateUrl: 'templates/body-scan/stylebar-3-mens.html',
                    controller: 'AppCtrl'
                }
            }
        })
           .state('app.stylebar-3-mens-bottoms', {
            url: '/stylebar-3-mens-bottoms',
            views: {
                'menuContent': {
                    templateUrl: 'templates/body-scan/stylebar-3-mens-bottoms.html',
                    controller: 'AppCtrl'
                }
            }
        })
        .state('app.stylebar-5', {
            url: '/stylebar-5',
            views: {
                'menuContent': {
                    templateUrl: 'templates/body-scan/stylebar-5.html',
                    controller: 'AppCtrl'
                }
            }
        })
         .state('app.stylebar-5-mens', {
            url: '/stylebar-5-mens',
            views: {
                'menuContent': {
                    templateUrl: 'templates/body-scan/stylebar-5-mens.html',
                    controller: 'AppCtrl'
                }
            }
        })
            .state('app.stylebar-6', {
            url: '/stylebar-6',
            views: {
                'menuContent': {
                    templateUrl: 'templates/body-scan/stylebar-6.html',
                    controller: 'AppCtrl'
                }
            }
        })
        .state('app.womens-basics', {
            url: '/womens-basics',
            views: {
                'menuContent': {
                    templateUrl: 'templates/body-scan/womens-basics.html',
                    controller: 'AppCtrl'
                }
            }
        })
        .state('app.womens-fashion', {
            url: '/womens-fashion',
            views: {
                'menuContent': {
                    templateUrl: 'templates/body-scan/womens-fashion.html',
                    controller: 'AppCtrl'
                }
            }
        })
        .state('app.womens-leisure', {
            url: '/womens-leisure',
            views: {
                'menuContent': {
                    templateUrl: 'templates/body-scan/womens-leisure.html',
                    controller: 'AppCtrl'
                }
            }
        })
        .state('app.mens-basics', {
            url: '/mens-basics',
            views: {
                'menuContent': {
                    templateUrl: 'templates/body-scan/mens-basics.html',
                    controller: 'AppCtrl'
                }
            }
        })
        .state('app.mens-fashion', {
            url: '/mens-fashion',
            views: {
                'menuContent': {
                    templateUrl: 'templates/body-scan/mens-fashion.html',
                    controller: 'AppCtrl'
                }
            }
        })
        .state('app.mens-leisure', {
            url: '/mens-leisure',
            views: {
                'menuContent': {
                    templateUrl: 'templates/body-scan/mens-leisure.html',
                    controller: 'AppCtrl'
                }
            }
        })
        .state('app.item', {
            url: '/:itemId',
            views: {
                'menuContent': {
                    templateUrl: 'templates/body-scan/item.html',
                    controller: 'ItemCtrl'
                }
            }
        })
        .state('app.cart', {
            url: '/:itemId/cart',
            views: {
                'menuContent': {
                    templateUrl: 'templates/body-scan/cart.html',
                    controller: 'ItemCtrl'
                }
            }
        })
        .state('app.thankyou', {
            url: '/:itemId/thankyou',
            views: {
                'menuContent': {
                    templateUrl: 'templates/body-scan/thank-you.html',
                    controller: 'ItemCtrl'
                }
            }
        })
        .state('app.subsribe', {
            url: '/:itemId/subscribe',
            views: {
                'menuContent': {
                    templateUrl: 'templates/body-scan/subscribe.html',
                    controller: 'ItemCtrl'
                }
            }
        });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('app/welcome');
})

.config(['$ionicAutoTrackProvider', function($ionicAutoTrackProvider) {
  // Don't track which elements the user clicks on.
  // $ionicAutoTrackProvider.disableTracking('Tap');
}]);
