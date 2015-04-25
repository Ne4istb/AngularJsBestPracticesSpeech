'use strict';

angular.module('BestPractices', ['ngRoute', 'todo'])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/todo-list', {
		templateUrl: 'todo/todo-list.html',
		controller: 'TodoListCtrl',
		controllerAs: 'vm',
		resolve: {
			todos: function(todoService) {
				return todoService.list();
			}
		}
	});
	$routeProvider.otherwise({redirectTo: '/todo-list'});
}]);
