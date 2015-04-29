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
			},
			currentUser:function(userService) {
				return userService.getCurrentUser();
			}
		}
	});
	$routeProvider.otherwise({redirectTo: '/todo-list'});
}]);
