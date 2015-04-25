'use strict';

angular.module('BestPractices', ['ngRoute', 'main'])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/main-view', {
		templateUrl: 'main/main-view.html',
		controller: 'MainCtrl',
		controllerAs: 'vm',
		resolve: {
			todos: function(todoService) {
				return todoService.list();
			}
		}
	});
	$routeProvider.otherwise({redirectTo: '/main-view'});
}]);
