angular.module('todo', [])
.controller('TodoListCtrl', ['$q', 'todoService',
	'$filter', 'todos', 'currentUser', '$scope',
	todoListController]);

function todoListController($q, todoService,$filter,
	todos, todoService, currentUser, $scope) {}
