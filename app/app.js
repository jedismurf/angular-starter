'use strict';

angular.module('myApp', [
    'ngRoute',
    'myApp.application'
])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
    
    // LOCATION SERVICE CONFIGURATION
    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true,
        rewriteLinks: true
    });

    // ROUTER SERVICE CONFIGURATION
    $routeProvider
        .when('/', { template: '<application data="" config""></application>' })
        .otherwise({redirectTo: '/'});
}]);