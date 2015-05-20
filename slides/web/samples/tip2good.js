angular.module('todo', [])
.controller('TodoListCtrl', todoListController);

todoListController.$inject = [
	'$q',
	'$filter',
	'$scope',
	'todos',
	'todoService',
	'currentUser'];

function todoListController($q, $filter, $scope, todos,
                            todoService, currentUser) {}
