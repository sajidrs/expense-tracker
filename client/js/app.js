var myApp = angular.module('myApp', [
    'ngRoute',
    'ui.bootstrap',
    'ngResource',
    'ngAnimate'
    ]).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeController'});
        $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'aboutController'});
        $routeProvider.when('/login', {templateUrl: 'partials/customer.html', controller: 'loginController'});
        $routeProvider.otherwise({redirectTo: '/home'});
        
        $locationProvider.html5Mode({enabled: true, requireBase: false});
    }])