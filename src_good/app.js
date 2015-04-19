'use strict';

angular.module('BestPractices', ['ngRoute', 'main'])

.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/main-view', {
        templateUrl: 'main/main-view.html',
        controller: 'MainCtrl'
    });
    $routeProvider.otherwise({redirectTo:'/main-view'});
}]);
